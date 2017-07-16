import React from 'react';
import { Route , IndexRoute } from 'react-router';
import NProgress from 'nprogress';
import { CONFIG } from '../constants/Config.js';
import '../../css/nprogress.css';
import '../../css/index.css';
import '../../css/all.css';
import '../../css/article.css';

//引入容器组件
import App from '../containers/App.js';

//引入展示组件
import Menu from '../components/Menu.js';

// 创建动态路由，按需加载组件
let All = function(location , callback){
	NProgress.start();
	require.ensure([] , function(require){	//webpack设置分块点
		callback(null , require("../containers/All.js").default);
		NProgress.done();
	} , "all");
};

let Archive = function(location , callback){
	document.title = CONFIG.titleLoad;
	NProgress.start();
	require.ensure([] , function(require){
		callback(null , require("../containers/Archive.js").default);
		NProgress.done();
		document.title = CONFIG.title;
	}, "archive");
};

let Tags = function(location , callback){
	document.title = CONFIG.titleLoad;
	NProgress.start();
	require.ensure([] , function(require){
		callback(null , require("../containers/Tags.js").default);
		NProgress.done();
		document.title = CONFIG.title;
	},"tags");
};

let Post = function(location , callback){
	document.title = CONFIG.titleLoad;
	NProgress.start();
	// document.title = CONFIG.titleLoad;
	// NProgress.start();
	require.ensure([],function(require){
		callback(null , require("../containers/Post.js").default);
		NProgress.done();
		document.title = CONFIG.title;
	},"post");
};

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Menu} />
		<Route path="all" getComponent={All} />
		<Route path="archive" getComponent={Archive} />
		<Route path="tags" getComponent={Tags} />
		<Route path="post/:id" getComponent={Post} />
	</Route>
);