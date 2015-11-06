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

nginx配置修改成这样

```
location / {
    try_files   $uri /index.html /var/www/caiyingyao/react-flux-demo/index.html;
    access_log  /var/log/nginx/react-flux.demo.com.access.log;
    error_log   /var/log/nginx/react-flux.demo.com.error.log;
}
```

对应的render输出改成了这样：

```js
        if (this.props.children) {
            return this.props.children;
        } else {
            return (
                <div>
                    <div>这是文章列表页面。。。。</div>
                    <div>
                    {articles.map(function(art) {
                        return (<Link to={`/article/${art.id}`}>{art.title}</Link>)
                    })}
                    </div>
                </div>
            );
        }
```

## 页面在浏览器层面刷新时导致404

报错信息：`webpack Uncaught SyntaxError: Unexpected token <`, 这个信息比较迷惑人，其实原因是js引用路径问题，原来引用：

```html 
    <script src="build/bundle.js"></script>
```

当去到子页面的时候，同样是加载这个html文件，但是当前目录就不对了，应该改为绝对路径：

```html 
    <script src="/build/bundle.js"></script>
```

------------------ 

React-router Demo V2完成，主要是增加子路由及刷新的路径问题

------------------ 

## 规范目录遇到的问题

规范目录是要实现：

- 增加public目录作为网站的根目录 
- index.html转移到public 
- 编译后的js文件放到public目录下的build目录

浏览器会报和上一个问题一样的错误，原因就是引用路径不对，可以查看nginx的错误日志。修改webpack.config.js文件：

```
    output: {
        path: 'public/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
```

注意：配置里面的publicPath是相对于网站跟目录的。





