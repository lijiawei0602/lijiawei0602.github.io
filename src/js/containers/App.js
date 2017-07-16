import React , { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component{
	constructor(props) {
    	super(props);
 	}
	render(){
		return (
			<div>
				<div id="title">
					<a href="https://github.com/lijiawei0602/lijiawei0602.github.io">lijiawei0602.github.io</a>
				</div>
				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state){
	if(!state.issuesOpt){
		return {
			isFetching:true,
			items:[]
		};
	}
	return {
		isFetching:state.issuesOpt.isFetching,
		items:state.issuesOpt.items
	};
}

export default connect(mapStateToProps)(App);