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
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
//-----------------------------------------------------------------------------//
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position:    relative;\n  top:         10px;\n  font-size:   14px;\n"], ["\n  position:    relative;\n  top:         10px;\n  font-size:   14px;\n"])));
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(props) {
        var _this = _super.call(this, props) || this;
        _this.second = 1000;
        _this.clock = _this.clock.bind(_this);
        _this.state = {
            count: _this.count
        };
        return _this;
    }
    Component.prototype.componentDidMount = function () {
        this.timer = window.setInterval(this.clock, 1000);
    };
    Component.prototype.clock = function () {
        var second = this.second--;
        if (second < 1) {
            window.clearInterval(this.timer);
        }
        this.setState({
            second: second
        });
    };
    Component.prototype.render = function () {
        var duration = moment.duration(this.second, 'seconds');
        return (React.createElement("div", null,
            React.createElement(Wrapper, null,
                React.createElement("span", { className: "float-left" },
                    "Timer ",
                    duration.minutes() + ":" + duration.seconds()))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
var templateObject_1;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Timer.js.map