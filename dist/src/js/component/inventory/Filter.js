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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown mb-2" },
            React.createElement("button", { className: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Filter"),
            React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                React.createElement("a", { className: "dropdown-item" }, "Show All"),
                React.createElement("a", { className: "dropdown-item" }, "Cables"),
                React.createElement("a", { className: "dropdown-item" }, "Monitors"),
                React.createElement("a", { className: "dropdown-item" }, "Input Devices"),
                React.createElement("a", { className: "dropdown-item" }, "Outlets"),
                React.createElement("a", { className: "dropdown-item" }, "Printers"),
                React.createElement("a", { className: "dropdown-item" }, "Speakers"))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Filter.js.map