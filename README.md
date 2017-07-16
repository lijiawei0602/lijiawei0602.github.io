## lijiawei's blog

> 基于`github page` 与`github api` 搭建的单页静态博客，博客内容来自`github issues`，供浏览使用，点击[这里](https://lijiawei0602.github.io)预览。

## 简介

​	运用`React`框架为基础，配合`Redux` ，利用`react-router`改变路由并根据路由展示相应组件内容，其中使用动态路由，配合`webpack`进行`thunk`，实现了按需异步加载资源模块，减少向服务器请求资源。最后对博客内容进行了`md语法`转换和`代码高亮`等操作。

​	在自动化构建方面，采取了 `webpack` 实现对react es6 和 jsx 的编译，并配合`gulp` 实现了代码的压缩，监听文件的修改。

## 环境搭建

### 运行环境

```javascript
$ node
$ npm
```

### 依赖

```javascript
$ npm install
```

### 运行

```javascript
//打包
$ npm run build
```



## 技术栈

- react
- redux
- react-router
- gulp + webpack
- es6语法

## 问题

​	在项目初期，由于对es6语法不是太熟，因而使用es5语法，但是在编写代码阶段，对reat相关模块的导入过程中，由于版本的不同，导致有些模块引入时候需要加`default`，即`require("").default`，在发现这个问题后，为了避免由于这个问题导致的错误且抱着练习es6的态度，因而采取了`es6` 语法。