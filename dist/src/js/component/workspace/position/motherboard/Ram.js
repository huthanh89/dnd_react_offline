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
var Hotspot = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: rgba(255, 0, 0, 0.685);\n  width:        3%;\n  height:   \t  260px;\n  position: \t  absolute;\n  left:     \t  74%;\n  top:      \t  60px;\n  border:   \t  dashed rgb(237, 238, 168) 3px;\n"], ["\n  background: rgba(255, 0, 0, 0.685);\n  width:        3%;\n  height:   \t  260px;\n  position: \t  absolute;\n  left:     \t  74%;\n  top:      \t  60px;\n  border:   \t  dashed rgb(237, 238, 168) 3px;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.dragDrop = _this.dragDrop.bind(_this);
        _this.dragStart = _this.dragStart.bind(_this);
        _this.dragEnd = _this.dragEnd.bind(_this);
        return _this;
    }
    Component.prototype.dragStart = function (event) {
        this.props.actionDragComponent('ram');
    };
    Component.prototype.dragEnd = function (event) {
        this.props.actionDragComponent(null);
    };
    Component.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    Component.prototype.dragDrop = function (event) {
        event.preventDefault();
        if (this.props.dragItem === 'ram') {
            this.props.actionConnectComponent('ram');
        }
    };
    Component.prototype.getView = function () {
        if (this.props.connected) {
            return (React.createElement("img", { src: 'asset/ram_connected.png', draggable: "true", onDragStart: this.dragStart, style: {
                    position: 'absolute',
                    width: '3%',
                    height: '260px',
                    left: '74%',
                    top: '60px'
                } }));
        }
        else {
            return (React.createElement(Hotspot, { onDrop: this.dragDrop, onDragOver: this.dragOver, onDragLeave: this.dragLeave }));
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
var templateObject_1;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Ram.js.map