# The Demos of React, Flux, React-router

## demo列表

不同的demo在不同的tag里面

- 使用react和webpack构建的简单的hello world
- 在hello world的基础上，增加React-router, 实现模块化及相应的目录结构
- 使用flux

[下载页面](http://git.ibbd.net/caiyingyao/react-flux-demo/tags)

## 基于React-router下的目录结构 

主要是js目录下的子目录规划，公共组件和各个功能模块都独立成目录, 每个功能模块下有自己的路由文件. 

```
- build 编译后的目录路径
- css 样式源文件
- js js代码源文件
  - app.js  总控制文件
  - components  公共组件目录 
      - header.react.js  页面头部组件
      - footer.react.js  页面底部组件
      - layout.react.js  页面布局组件
  - article  功能模块（其他的功能模块类似）
      - router.js   该功能模块的路由文件
      - components  该功能模块的组件的目录
- node-modules
- package.json 
- webpack.config.js 
```

## 基于React，React-router及Reflux的demo 

切换到分支：`react-router-reflux`

目录结构：

```
/js js主目录
    /common   公共模块目录
        /components    公共组件
            layout.react.js     
            header.react.js     
            footer.react.js     
        /core          基础模块，项目实现的公共模块
    /article  功能模块目录，其他功能模块类似
        /components    组件目录
            index.react.js     
        /stores        存储目录(Reflux store)
        router.js      功能模块的路由文件
        actions.js     事件动作文件，对应Reflux Actions
    app.js    主入口js
/public    网站根目录
    /build        编译后的文件目录
    index.html    网站入口文件
/nginx     nginx配置文件
/node-modules 
package.json 
webpack.config.js 
```

ui组件的文件命名如`index.react.js`

## Flux Demo 

在前一个demo的基础上，增加Flux规范数据流，及进一步完善目录结构。

目录规范：

```
/js js主目录
    /common   公共模块目录
        /components    公共组件
            layout.react.js     
            header.react.js     
            footer.react.js     
        /config        公共配置文件目录
            constants.js    常量配置
        /stores 
            user-stores.js  用户stores
        dispatcher.js    全站公用的dispatcher 
    /article  功能模块目录，其他功能模块类似
        /components    组件目录
            index.react.js     
        /actions       actions文件目录
        /stores        存储目录(Reflux store)
        /config        功能模块的配置文件
            constants.js    常量配置
        router.js      功能模块的路由文件
        actions.js     事件动作文件，对应Reflux Actions
    app.js    主入口js
/public    网站根目录
    /build        编译后的文件目录
    index.html    网站入口文件
/nginx     nginx配置文件
/node-modules 
package.json 
webpack.config.js 
```

## React-bootstrap

在前一个demo的基础上，加入UI





