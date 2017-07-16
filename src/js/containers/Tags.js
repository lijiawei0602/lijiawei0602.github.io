import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';

class Tags extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchIssuesIfNeeded());
	}
	
	spliceJSON(items){
		let list = items,
			articles={};

		for(let i=0; i<list.length; i++){
			if(!list[i]["labels"].length){
				if(!articles.hasOwnProperty("其它")){
						articles["其它"] = [];
				}
				articles["其它"].push(list[i]);
			}else{
				let labels = list[i]["labels"];
				for(let j=0 , labelsLen=labels.length; j<labelsLen; j++){
					let name = labels[j]["name"];
					if(!articles.hasOwnProperty(name)){
						articles[name] = [];
					}
					articles[name].push(list[i]);
				}
			}
		}
		return articles;
	}

	render(){
		if(this.props.isFetching){
			return null;
		}
		let articles = this.spliceJSON(this.props.items),
			view = [];

		for(let label in articles){
			view.push(
				<CellView key={label} title={label} items={articles[label]} />
			);
		}

		return(
			<div className="list">
				{view}
			</div>
		);
	}
};

function mapStateToProps(state){
	if(!state.issuesOpt){
		return {
			isFetching:true,
			items:[]
		}
	}
	return {
		isFetching:state.issuesOpt.isFetching,
		items:state.issuesOpt.items
	};
}

export default connect(mapStateToProps)(Tags);