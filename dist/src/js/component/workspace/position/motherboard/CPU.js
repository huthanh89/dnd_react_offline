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
var Hotspot = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: rgba(255, 0, 0, 0.699);\n  width:      20%;\n  height:     90px;\n  position:   absolute;\n  left: \t\t  46%;\n  top:  \t\t  110px;\n  border: \t  dashed rgb(237, 238, 168) 3px;\n"], ["\n  background: rgba(255, 0, 0, 0.699);\n  width:      20%;\n  height:     90px;\n  position:   absolute;\n  left: \t\t  46%;\n  top:  \t\t  110px;\n  border: \t  dashed rgb(237, 238, 168) 3px;\n"])));
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
        this.props.actionDragComponent('cpu');
    };
    Component.prototype.dragEnd = function (event) {
        this.props.actionDragComponent(null);
    };
    Component.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    Component.prototype.dragDrop = function (event) {
        event.preventDefault();
        if (this.props.dragItem === 'cpu') {
            this.props.actionConnectComponent('cpu');
        }
    };
    Component.prototype.getView = function () {
        if (this.props.connected) {
            return (React.createElement("img", { src: 'asset/cpu_connected.png', draggable: "true", onDragStart: this.dragStart, onDragEnd: this.dragEnd, style: {
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    left: '45%',
                    top: '80px'
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
//# sourceMappingURL=CPU.js.map