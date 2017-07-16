import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';

class All extends Component{
	constructor(props) {
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
		return (
			<div className="list">
				<CellView title="全部" items={this.props.items} />
			</div>
		)
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

export default connect(mapStateToProps)(All);