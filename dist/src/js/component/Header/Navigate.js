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
        _this.instruction = _this.instruction.bind(_this);
        _this.inventory = _this.inventory.bind(_this);
        _this.workspace = _this.workspace.bind(_this);
        return _this;
    }
    Component.prototype.instruction = function () {
        this.props.history.push('/instruction');
    };
    Component.prototype.inventory = function () {
        this.props.history.push('/inventory');
    };
    Component.prototype.workspace = function () {
        this.props.history.push('/workspace');
    };
    Component.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown  float-right" },
            React.createElement("button", { className: "btn btn-primary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Navigate"),
            React.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenuButton" },
                React.createElement("a", { className: "dropdown-item", onClick: this.instruction }, "Instruction"),
                React.createElement("a", { className: "dropdown-item", onClick: this.inventory }, "Inventory"),
                React.createElement("a", { className: "dropdown-item", onClick: this.workspace }, "Workspace"))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Navigate.js.map