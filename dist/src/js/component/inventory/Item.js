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
import React from 'react';
import styled from 'styled-components';
//-----------------------------------------------------------------------------//
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border:     1px solid black;\n  font-size:  18px;\n  padding:    5px;\n  background: #e6e6e6;\n"], ["\n  border:     1px solid black;\n  font-size:  18px;\n  padding:    5px;\n  background: #e6e6e6;\n"])));
var BtnWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  top:      25px;\n"], ["\n  position: relative;\n  top:      25px;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.select = _this.select.bind(_this);
        return _this;
    }
    Component.prototype.select = function () {
        this.props.selectItem(this.props.id);
    };
    Component.prototype.render = function () {
        return (React.createElement(Wrapper, { className: "row" },
            React.createElement("div", { className: "col-3" },
                React.createElement("img", { src: "asset/" + this.props.img + ".png", width: "75", height: "75" })),
            React.createElement("div", { className: "col-7" },
                React.createElement("span", { className: "d-block" }, this.props.name),
                React.createElement("span", { className: "d-block" }, this.props.type),
                React.createElement("a", { className: "d-block", href: "#" }, "details")),
            React.createElement("div", { className: "col-2" },
                React.createElement(BtnWrapper, { className: "float-right" },
                    React.createElement("button", { className: "btn btn-info", onClick: this.select }, "Select")))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
var templateObject_1, templateObject_2;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Item.js.map