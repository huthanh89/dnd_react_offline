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
import Front from './front/Layout';
import Back from './back/Layout';
import Drivebay from './drivebay/Layout';
import Motherboard from './motherboard/Layout';
import React from 'react';
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.getView = function () {
        switch (this.props.position) {
            case 'front': {
                return (React.createElement(Front, __assign({}, this.props)));
            }
            case 'back': {
                return (React.createElement(Back, __assign({}, this.props)));
            }
            case 'drivebay': {
                return (React.createElement(Drivebay, __assign({}, this.props)));
            }
            default: {
                return (React.createElement(Motherboard, __assign({}, this.props)));
            }
        }
    };
    Component.prototype.render = function () {
        return this.getView();
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Layout.js.map