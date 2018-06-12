# Hexo-theme-diaspora


**[在线预览 | PREVIEW ](http://fech.in)**

一款基于WP移植的Hexo主题，适合喜欢摄影，影评，乐评和玩弄文字的你，干净，清新； 响应式，Ajax，更多好玩的等你来发现。 

> 再次感谢原作者创作出这么精美的主题 [@Loeify](https://github.com/LoeiFy/Diaspora) 。如果你喜欢，请捐助原作者。

![cover](http://odwjyz4z6.bkt.clouddn.com/Diaspora.jpg)


### 安装主题

``` bash
$ git clone https://github.com/Fechin/hexo-theme-diaspora.git diaspora
```


### 启用主题

修改Hexo配置文件 `_config.yml` 主题项设置为diaspora


``` yaml

...
theme: diaspora
...
```
### 更新主题

``` bash
cd themes/diaspora
git pull
```


### 新建文章模板

``` markdown
---
title: My awesome title
date: 2016-10-12 18:38:45
tags: 
- 标签
- 标签
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg
---
```

### 主题配置
```yml

# Header Menu. title: link
menu:
  Whoami: /whoami
  Github: https://github.com/Fechin
  Twitter: https://twitter.com/FechinLi


# 查看文章时是否自动播放音乐
autoplay: false
# 博客文章默认音乐, 优先级: 1.文章头mp3参数> 2.在这里配置
mp3: http://link.hhtjim.com/163/425570952.mp3
# 首页封面图, 优先级: 1.在这里配置> 2.文章头cover参数;
welcome_cover: # /img/welcome-cover.jpg
# 文章封面图, 优先级: 1.文章头cover参数 > 2.在这里配置
cover: /img/cover.jpg


keywords: Fechin
# 要使用google_analytics进行统计的话，这里需要配置ID
google_analytics: 
# 网站ico
favicon: /img/favicon.png
rss: atom.xml
```

### 更新日志
- 23 Sep 2016 项目启动
- 13 Oct 2016 V1.0发布
- 6 Mar 2018 版权信息，封面图优化
- Apr 6, 2018 集成PhotoSwipe图片插件
