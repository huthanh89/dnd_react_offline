//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App.js';
import reducer from './reducer/index.js';
import logger from 'redux-logger';
import { HashRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import '../css/style.less';
//-----------------------------------------------------------------------------//
import Hello from './technologies/hello.tsx';
//-----------------------------------------------------------------------------//
// Development configuration
//-----------------------------------------------------------------------------//
var ReactLogger = true;
//-----------------------------------------------------------------------------//
function initStore() {
    if (ReactLogger) {
        return createStore(reducer, applyMiddleware(logger));
    }
    else {
        return createStore(reducer);
    }
}
//-----------------------------------------------------------------------------//
$(document).ready(function () {
    render(React.createElement("div", null,
        React.createElement(Hello, null),
        React.createElement(Provider, { store: initStore() },
            React.createElement(Router, null,
                React.createElement(Route, { path: "/", component: App })))), $('#root')[0]);
});
//-----------------------------------------------------------------------------//
//# sourceMappingURL=index.js.map