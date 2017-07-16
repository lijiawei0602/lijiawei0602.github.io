import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router , borwserHistory , useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import routes from './routes/index.js';
import configStore from './stores/configStore.js';

let store = configStore();
let newHistory = useRouterHistory(createHashHistory)();

render(
	<Provider store={store}>
		<Router history={newHistory} routes={routes} />
	</Provider>,
	document.getElementById("container")
);