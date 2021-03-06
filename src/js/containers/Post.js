import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import Article from '../components/Article.js';

class Post extends Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchIssuesIfNeeded());
	}

	render(){
		if(this.props.isFetching){
			return null;
		}

		let view = [];
		this.props.items.map((item , index) => {
			if(parseInt(item.number) === parseInt(this.props.params.id)){
				view.push(
					<Article {...item} key={index} />
				);
			}
		});
		return (
			<div>
				{view}
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

export default connect(mapStateToProps)(Post);