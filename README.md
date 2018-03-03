# 微信公众号文章剪报

根据公众号文章的地址，剪出文章内容并保存为本地静态页面（含图片和样式）。

使用步骤

> 1. 下载安装[NodeJS](https://nodejs.org/en/)
> 2. 下载[代码zip](https://github.com/Mignet/wechat_doc_clip/archive/master.zip)并解压
> 3. 命令行切换到解压目录
> 4. 执行npm install，自动下载依赖
> 5. 执行node clip.js 'http://mp.weixin.qq.com/s/HolMqSOS1C3GBFRFZz3oyQ' (想抓取的文章地址)
> 6. 成功生成本地文件OorP5B.html和图片文件夹images/OorP5B/xxx。

如果想把html转换成pdf，可以使用工具html-pdf

html-pdf的使用
> 7. 安装: npm install -g html-pdf
> 8. 执行: html-pdf OorP5B.html(输入文件) OorP5B.pdf(输出文件)

## Usage
``
node clip.js [wechat document url]
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
