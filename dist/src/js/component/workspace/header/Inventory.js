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
import React from 'react';
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.clicked = _this.clicked.bind(_this);
        _this.dragDrop = _this.dragDrop.bind(_this);
        return _this;
    }
    Component.prototype.dragOver = function (event) {
        event.preventDefault();
    };
    Component.prototype.dragDrop = function (event) {
        event.preventDefault();
        this.props.actionDisconnectComponent(this.props.dragItem);
    };
    Component.prototype.clicked = function () {
        this.props.history.push('/inventory');
    };
    Component.prototype.render = function () {
        return (React.createElement("button", { className: "btn btn-warning", onClick: this.clicked, onDrop: this.dragDrop, onDragOver: this.dragOver },
            React.createElement("i", { className: "fas fa-box-open" })));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Inventory.js.map