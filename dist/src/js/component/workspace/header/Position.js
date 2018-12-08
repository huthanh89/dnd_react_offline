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
        _this.clickedFront = _this.clickedFront.bind(_this);
        _this.clickedBack = _this.clickedBack.bind(_this);
        _this.clickedMotherboard = _this.clickedMotherboard.bind(_this);
        _this.clickedDrivebay = _this.clickedDrivebay.bind(_this);
        return _this;
    }
    Component.prototype.clickedFront = function () {
        this.props.actionChangePosition('front');
    };
    Component.prototype.clickedBack = function () {
        this.props.actionChangePosition('back');
    };
    Component.prototype.clickedMotherboard = function () {
        this.props.actionChangePosition('motherboard');
    };
    Component.prototype.clickedDrivebay = function () {
        this.props.actionChangePosition('drivebay');
    };
    Component.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown float-right" },
            React.createElement("button", { className: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                React.createElement("i", { className: "fas fa-search-plus mr-2" }),
                React.createElement("span", null, "View")),
            React.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenuButton" },
                React.createElement("a", { className: "dropdown-item", onClick: this.clickedFront }, "Front"),
                React.createElement("a", { className: "dropdown-item", onClick: this.clickedBack }, "Back"),
                React.createElement("a", { className: "dropdown-item", onClick: this.clickedMotherboard }, "Motherboard"),
                React.createElement("a", { className: "dropdown-item", onClick: this.clickedDrivebay }, "Drive Bays"))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Position.js.map