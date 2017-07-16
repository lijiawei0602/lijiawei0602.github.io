import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from "../actions/index.js";
import CellView from "../components/CellView.js";

class Archive extends Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchIssuesIfNeeded());
	}
	
	spliceJSON(items){
		let list = items,
			len = list.length,
			year = 0,
			articles = {};

		for(let i=0; i<len; i++){
			let time = parseInt(list[i]["created_at"].substr(0,4));
			if(time !== year){
				articles[time + "年"] = [];
				year = time;
			}
			articles[time + "年"].push(list[i]);
		}

		return articles;
	}

	render(){
		if(this.props.isFetching){
			return null;
		}
		
		let articles = this.spliceJSON(this.props.items);
		let view = [];

		for(let year in articles){
			let yearShow = year.substr(0,year.length-1);
			view.push(<CellView key={yearShow} title={yearShow} items={articles[year]} />);
		}

		return (
			<div className="list">
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

export default connect(mapStateToProps)(Archive);