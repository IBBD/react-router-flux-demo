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



