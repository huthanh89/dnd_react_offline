//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import CPU from './CPU.js';
import Ram from './Ram.js';
import React from 'react';
import styled from 'styled-components';
//-----------------------------------------------------------------------------//
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width:      100%;\n  min-height: 500px;\n"], ["\n  width:      100%;\n  min-height: 500px;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement("img", { src: 'asset/motherboard.png', style: {
                    position: 'absolute',
                    width: '100%',
                    maxWidth: '600px',
                    height: '500px',
                    left: '0',
                    top: '50px'
                } }),
            React.createElement(CPU, __assign({ connected: this.props.cpu }, this.props)),
            React.createElement(Ram, __assign({ connected: this.props.ram }, this.props))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
var templateObject_1;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Layout.js.map