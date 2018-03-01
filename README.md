# 微信公众号文章剪报

根据公众号文章的地址，剪出文章内容并保存为本地静态页面（含图片和样式）。

使用步骤

> 1. 下载安装NodeJs
> 2. 下载代码zip并解压
> 3. cmd到解压目录
> 4. 执行npm install，自动下载依赖
> 5. 执行node clip.js 'http://mp.weixin.qq.com/s/HolMqSOS1C3GBFRFZz3oyQ' (换成你想抓取的文章地址)
> 6. 如果想把html转换成pdf，可以使用html-pdf

html-pdf使用
> 7. 安装npm install -g html-pdf
> 8. html-pdf OorP5B.html(输入文件) OorP5B.pdf(输出文件)

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

you can convert html to pdf as follows:

``
npm install -g html-pdf
``

then

``
html-pdf OorP5B.html OorP5B.pdf
``
