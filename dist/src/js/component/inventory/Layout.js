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
import Filter from './Filter.js';
import List from './List.js';
import React from 'react';
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this.selectItem = _this.selectItem.bind(_this);
        return _this;
    }
    Component.prototype.selectItem = function (id) {
        this.props.actionSelectComponent(id);
        this.props.history.push('/workspace');
    };
    Component.prototype.render = function () {
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, "Inventory"),
                React.createElement(Filter, null),
                React.createElement(List, { selectItem: this.selectItem }))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Layout.js.map