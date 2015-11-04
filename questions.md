# 遇到的问题记录

## You may need an appropriate loader to handle this file type.

需要安装对应的loader，如：`npm install jsx-loader coffee-loader`

## Cannot resolve module 'react'

npm install react 

----------

hello world主要是遇到上面两个问题

----------

## Module not found: Error: Cannot resolve 'file' or 'directory' ./home/components/main.react

对应代码`require('header.react')`, 开始以为需要加上js后缀，后来发现是路径错了

## Parse Error: Line 12: Adjacent JSX elements must be wrapped in an enclosing tag 

大概意思是说，JSX 的元素必须是1个封闭的标签。

```js 
    render: function() {
        return (
            <Header />
            <Home />
            <Footer />
        );
    }
```

这里的return是3个标签，直接在最外层嵌套一个div即可解决. 

## 安装React-router 

```sh 
npm install history react-router@latest
```

## 执行webpack时，生成了多个目标文件目录

在webpack.config.js中的output属性，加上path从而指定目录

## 页面访问时加载生成后的js文件目录不对

地址如`http://react-flux.demo.com/1.bundle.js`， 实际地址应该是：

`http://react-flux.demo.com/build/1.bundle.js`

需要在output的属性内再加上`publicPath`属性

## URL美化

如果单纯的使用react-router的话，url的样式会变成这样：`http://www.abc.com/#/article?_k=safwf`

看起来比较丑陋，需要加上history，才能变成这样：`http://www.abc.com/article`

```js 
var createHistory = require('history').createHistory;
var useBasename   = require('history').useBasename;

const history = useBasename(createHistory)({
    basename: ''
});

// somethings else ...

React.render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('demoapp')
)
```

## 刷新会导致页面404的问题

需要加上nginx的配置：

```
    location / {
        location /article {
            root        /var/www/caiyingyao/react-flux-demo;
            try_files   /index.html /index.htm;
        }
        location /about {
            root        /var/www/caiyingyao/react-flux-demo;
            try_files   /index.html /index.htm;
        }
    }
```

注：配置待优化

## 有时页面刷新会莫名其妙的404

暂时估计是页面打开比较久引发的。

------------------

下面开始优化React-router的demo，主要优化目录，增加子路由

------------------

## 路由编译错误 

ERROR in ./js/article/router.js
Module build failed: Error: Parse Error: Line 4: Unexpected identifier

对应的文件写少了一个逗号 

## 子模块的路由路径不对


