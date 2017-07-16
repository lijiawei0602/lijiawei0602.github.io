import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // 将routerReducer一起合并管理
import { REQUEST_ISSUES , RECEIVE_ISSUES } from '../constants/ActionTypes.js';
import { requestIssues , receiveIssues } from '../actions/index.js';

const initialIssuesState = {
	isFetching:false,
	items:[]
};

function issuesOpt(state = initialIssuesState , action){
	switch(action.type){
		case REQUEST_ISSUES:
			return Object.assign({} , state , {isFetching:true});
		case RECEIVE_ISSUES:
			return Object.assign({} , state , {isFetching:false,items:action.posts});
		default:
			return state;
	}
}


export default combineReducers({
	issuesOpt,
	routing:routerReducer
});