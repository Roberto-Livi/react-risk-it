import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import manageGameData from './reducers/manageGameData'
import './index.css';
import Login from './components/Login'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(manageGameData, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Login/></Provider>, document.getElementById('root'));

