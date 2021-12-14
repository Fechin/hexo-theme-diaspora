# Hexo-theme-diaspora


**[在线预览 | PREVIEW ](http://fech.in)**

一款基于WP移植的Hexo主题，适合喜欢摄影，影评，乐评和玩弄文字的你，干净，清新； 响应式，Ajax，更多好玩的等你来发现。 

> 再次感谢原作者创作出这么精美的主题 [@Loeify](https://github.com/LoeiFy/Diaspora) 。如果你喜欢，请捐助原作者。

![cover](https://fech.in/static/images/Diaspora.jpg)


### 安装主题

``` bash
$ git clone https://github.com/Fechin/hexo-theme-diaspora.git themes/diaspora
```


### 启用主题

修改Hexo配置文件 `_config.yml` 主题项设置为diaspora


``` yaml

...
theme: diaspora
...
```
### 更新主题

注意：请在更时主题时备份`_config.yml`配置文件

``` bash
cd themes/diaspora
git pull
```


### 新建文章模板

``` markdown
---
title: My awesome title
date: 2016-10-12 18:38:45
categories: 
    - 分类1
    - 分类2
tags: 
    - 标签1
    - 标签2
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg
---
```

### 创建分类页
1 新建一个页面，命名为 categories 。命令如下：
```
hexo new page categories
```
2 编辑刚新建的页面，将页面的类型设置为 categories
``` 
title: categories
date: 2014-12-22 12:39:04
type: "categories"
---
```
主题将自动为这个页面显示所有分类。

### 创建标签页
1 新建一个页面，命名为 tags 。命令如下：
```
hexo new page tags
```
2 编辑刚新建的页面，将页面的类型设置为 tags
```
title: tags
date: 2014-12-22 12:39:04
type: "tags"
---
```
主题将自动为这个页面显示所有标签。

### 创建搜索页

1 需要安装hexo的搜索插件
```
npm install hexo-generator-searchdb --save
```

2 配置hexo全局配置文件（请将生成的索引文件放在网站根目录或修改主题js文件的path值）
```yml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

3 新建一个页面，命名为 search 。命令如下：
```
hexo new page search
```
4 编辑刚新建的页面，将页面的类型设置为 search
```
title: search
date: 2014-12-22 12:39:04
type: "search"
---
```

5 在主题配置文件启用本地搜索
```yml
#本地搜索,请将索引文件放在网站根目录
local_search:
    #是否启用
    enable: true

```

主题将自动为这个页面显示搜索功能。



### 主题配置
```yml
# 头部菜单，title: link
menu:
  首页: /
  分类: /categories
  标签: /tags
  归档: /archives  
  关于: /about

# 是否显示目录
TOC: false

# 是否自动播放音乐
autoplay: false

# 默认音乐（随机播放）
mp3: 
    - http://link.hhtjim.com/163/425570952.mp3
    - http://link.hhtjim.com/163/425570952.mp3

# 首页封面图, 为空时取文章的cover作为封面(注意跨域问题,建议使用同源图片)
welcome_cover: /img/welcome-cover.jpg


# 默认文章封面图（随机调用,支持外链）
cover: 
  - /img/cover.jpg
  - /img/welcome-cover.jpg

# 是否显示Twitter分享卡片图像(图像尺寸要求：1200*600，creatorid不需要带@符号。注意：链接必须是完整url，否则Twitter将无法读取图片信息）
twitterpic:
  enable: false
  src: https://bangdream.moe/img/ident.png
  creatorid: yourtwitteridhere

# 是否关闭默认滚动条
scrollbar: true

# 本地搜索,请将索引文件放在网站根目录,或修改主题js文件的path值
local_search:
    # 是否启用
    enable: false

# 是否显示 一言(hitokoto)
hitokoto: true

# 链接(可选:facebook,twitter,github,wechat,email)
links:
    facebook: /
    twitter: /
    github: /
    wechat: /img/logo.png
    email: mailto:xxxx@gmail.com
  
# 备案
beian: 
    # 是否显示备案信息
    enable: true
    # 是否在主页面最底下显示备案信息(虽然丑，但是完全满足规定要求)
    enableFooter: false
    # 备案号
    beianInfo: 冀ICP备xxxxxxx号
    # 链接地址
    link: http://www.beian.miit.gov.cn

# 是否使用mathjax
mathjax: false

# Gitalk 评论插件（https://github.com/gitalk/gitalk）
gitalk:
    # 是否启用评论功能
    enable: false
    # 是否自动展开评论框
    autoExpand: false
    # 应用编号
    clientID: ''
    # 应用秘钥
    clientSecret: ''
    # issue仓库名
    repo: ''
    # Github名
    owner: ''
    # Github名
    admin: ['']
    # Ensure uniqueness and length less than 50
    id: location.pathname
    # Facebook-like distraction free mode
    distractionFreeMode: false

# 网站关键字
keywords: Fechin

# 要使用google_analytics进行统计的话，这里需要配置ID
google_analytics: 

# 网站ico
favicon: /img/favicon.png

# rss文件
rss: atom.xml

```

