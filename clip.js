var fs = require('fs');
var mkdirp = require('mkdirp');
var request = require('request');
var _ = require('lodash');

var url;
var abs_file_path = ('file:///'+__dirname).replace(new RegExp(/\\/g),'/')

if (process.argv.length > 2) {
    url = process.argv[2];
} else {
  console.error('please provide url');
  process.exit(1);
}

request.get({
  url: url
}, function(err, response, body) {
  if (response.statusCode != 200) {
    console.log(err);
    console.log(body);
  } else {
    var imgUrlPattern = /(http[s]?:\/\/mmbiz\.qpic\.cn\/mmbiz_.*?\/(.*?\?wx_fmt=(.*?))?)"/g;
    var result;
    var urls = [];
    while((result = imgUrlPattern.exec(body)) != null) {
      urls.push(result[1]);
    }

    biz = hash(url);
    //--------------------debug------------------
    _.forEach(urls, function(url, index) {
      console.log(index+":"+url);
      ext = url.substr(url.indexOf('wx_fmt=')+7,11)
      if(ext.indexOf('jpeg')!=-1)ext = 'jpg';
      var img_path = abs_file_path +'/images/'+biz+'/'+index + '.' +ext;
      console.log(img_path);
      body = body.replace('data-src="'+url,'src="'+img_path);
    });

      //wx stop load
      // body = body.replace('moon_map','_moon_map_');
    //trim body
    body = body.substr(body.indexOf('js_article')-9,body.indexOf('first_sceen__time')-12-body.indexOf('js_article')+9)+'</script></div></div></div></div>';
    body = '<meta charset="utf-8">\n<link rel="stylesheet" type="text/css" href="'+abs_file_path+'/wx.css">\n' + body;

    fs.writeFile('./'+biz+'.html',body,{encoding:'utf-8'});

    fs.writeFile('./hash.txt',biz,{encoding:'utf-8'});
    //download file

    mkdirp('images/' + biz, function(err) {
      if (err) {
        console.log(err);
      } else {
        _.forEach(urls, function(url, index) {
          request.head({
            url: url
          }, function(err, response, body) {
            if (err) {
              console.log(err);
            } else {
              ext = url.substr(url.indexOf('wx_fmt=')+7,11)
              if(ext.indexOf('jpeg')!=-1)ext = 'jpg';

              var stream = fs.createWriteStream('images/' + biz + '/' + index + '.' + ext);
              request.get(url).pipe(stream);

            }
          });
        });
      }
    });
  }
});
//hash string
var I64BIT_TABLE =
 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
  
function hash(input){
 var hash = 5381;
 var i = input.length - 1;
  
 if(typeof input == 'string'){
  for (; i > -1; i--)
   hash += (hash << 5) + input.charCodeAt(i);
 }
 else{
  for (; i > -1; i--)
   hash += (hash << 5) + input[i];
 }
 var value = hash & 0x7FFFFFFF;
  
 var retValue = '';
 do{
  retValue += I64BIT_TABLE[value & 0x3F];
 }
 while(value >>= 6);
  
 return retValue;
}
