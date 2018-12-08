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
import 'drag-drop-touch';
//-----------------------------------------------------------------------------//
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border:     1px solid black;\n  font-size:  16px;\n  padding:    5px;\n  background: #e6e6e6;\n  width:      100%;\n"], ["\n  border:     1px solid black;\n  font-size:  16px;\n  padding:    5px;\n  background: #e6e6e6;\n  width:      100%;\n"])));
var BtnWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  top:      25px;\n"], ["\n  position: relative;\n  top:      25px;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.dragStart = _this.dragStart.bind(_this);
        _this.dragEnd = _this.dragEnd.bind(_this);
        return _this;
    }
    Component.prototype.dragStart = function (event) {
        this.props.actionDragComponent(this.props.type);
    };
    Component.prototype.dragEnd = function (event) {
        this.props.actionDragComponent(null);
    };
    Component.prototype.render = function () {
        return (React.createElement(Wrapper, { id: 'item-' + this.props.id, className: "row", draggable: "true", onDragStart: this.dragStart, onDragEnd: this.dragEnd },
            React.createElement("div", { className: "col-3" },
                React.createElement("img", { src: "asset/" + this.props.img + ".png", width: "75", height: "75" })),
            React.createElement("div", { className: "col-9" },
                React.createElement("span", { className: "d-block" }, this.props.name),
                React.createElement("span", { className: "d-block" }, this.props.type),
                React.createElement("span", { className: "d-block" },
                    "connected: ",
                    this.props.connected.toString()))));
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