import React , { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="menu">
				<div className="pic">
					<a href="http://github.com/lijiawei0602"></a>
				</div>
				<h1>李佳伟</h1>
				<div className="link">
					<Link to="all">全部</Link>
					<Link to="archive">归类</Link>
					<Link to="tags">标签</Link>
				</div>
			</div>	
		);
	}
}

export default Menu;