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
        return (React.createElement("div", { className: "text-center" },
            React.createElement("button", { className: "btn btn-secondary mr-2" },
                React.createElement("i", { className: "fas fa-arrow-left" })),
            React.createElement("button", { className: "btn btn-secondary" },
                React.createElement("i", { className: "fas fa-arrow-right" }))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Navigate.js.map