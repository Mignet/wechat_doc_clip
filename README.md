# 微信公众号文章剪报

clip wechat document to html

## Usage
``
node clip.js [your wechat document url]
``

## Example
``
node clip.js 'http://mp.weixin.qq.com/s/HolMqSOS1C3GBFRFZz3oyQ'
``

you will get a static html file:
OorP5B.html and images/OorP5B/xxx

![like](https://v5ent.com/images/ec1057cc754a65ec0f5384182a945f08)


## Next

convert html to pdf

``
npm install -g html-pdf
``

then

``
html-pdf OorP5B.html OorP5B.pdf
``
