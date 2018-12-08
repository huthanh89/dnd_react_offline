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
import _ from 'lodash';
import styled from 'styled-components';
import Connector from './Connector.js';
import Item from './Item.js';
import Components from 'lib/components.js';
import React from 'react';
//-----------------------------------------------------------------------------//
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 300px;\n  max-height: 500px;\n  overflow-y: auto;\n"], ["\n  min-height: 300px;\n  max-height: 500px;\n  overflow-y: auto;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(props) {
        var _this = _super.call(this) || this;
        _this.component = _.find(Components, function (component) {
            return component.id === props.componentID;
        });
        return _this;
    }
    Component.prototype.getViews = function () {
        var _this = this;
        var result = [];
        result.push(React.createElement(Item, __assign({}, this.component, { key: this.component.id }, this.props)));
        if (this.component.connectors) {
            _.forEach(this.component.connectors, function (component) {
                result.push(React.createElement(Connector, __assign({}, component, { key: component.id }, _this.props)));
            });
        }
        return result;
    };
    Component.prototype.render = function () {
        return (React.createElement(Wrapper, null, this.getViews()));
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