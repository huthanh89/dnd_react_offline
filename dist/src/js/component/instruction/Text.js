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
        return (React.createElement("div", null,
            React.createElement("ol", null,
                React.createElement("li", null, "Switch to the motherboard view of the computer."),
                React.createElement("li", null,
                    "Read the motherboard documentation and locate the following components:",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Memory slot"),
                        React.createElement("li", null, "PCI slot"),
                        React.createElement("li", null, "Main motherboard power connector (20+4 pins)"))),
                React.createElement("li", null, "From the Shelf, install the memory module in an open memory slot."),
                React.createElement("li", null, "From the Shelf, install the Firewire expansion card in an open PCI slot."),
                React.createElement("li", null, "On the power supply, plug the 20+4 pin motherboard power connector into the motherboard."),
                React.createElement("li", null, "Switch to the drive bays view."),
                React.createElement("li", null, "From the Shelf, connect the SATA cable to the data connection on the CD drive (the top object in the drive bay)."),
                React.createElement("li", null, "On the power supply, plug a 15-pin SATA power connector into the power connection on the CD drive (on the left of the drive)."),
                React.createElement("li", null, "Switch to the motherboard view of the computer."),
                React.createElement("li", null, "Connect the other end of the SATA cable to a SATA connection on the motherboard."),
                React.createElement("li", null, "Switch to the front view of the computer."),
                React.createElement("li", null, "Turn on the computer and verify that the system starts."))));
    };
    return Component;
}(React.Component));
//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//
export default Component;
//-----------------------------------------------------------------------------//
//# sourceMappingURL=Text.js.map