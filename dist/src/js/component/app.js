//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Header from './Header/Layout.js';
import Instruction from './instruction/Layout.js';
import Inventory from '../container/inventory.js';
import Workspace from '../container/workspace.js';
import { Route } from "react-router-dom";
import { hot } from 'react-hot-loader';
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header, __assign({}, this.props)),
            React.createElement(Route, { exact: true, path: "/", component: Instruction }),
            React.createElement(Route, { exact: true, path: "/instruction", component: Instruction }),
            React.createElement(Route, { exact: true, path: "/inventory", component: Inventory }),
            React.createElement(Route, { exact: true, path: "/workspace", component: Workspace }),
            React.createElement(Route, { exact: true, path: "/technologies", component: Workspace })));
    };
    return App;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default hot(module)(App);
//-----------------------------------------------------------------------------//
//# sourceMappingURL=app.js.map