//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

    render() {
        return (
            <div>
                <ol>
                    <li>Switch to the motherboard view of the computer.</li>

                    <li>Read the motherboard documentation and locate the following components:

                    <ul>
                        <li>Memory slot</li>

                        <li>PCI slot</li>

                        <li>Main motherboard power connector (20+4 pins)</li>
                    </ul>
                    </li>

                    <li>From the Shelf, install the memory module in an open memory slot.</li>

                    <li>From the Shelf, install the Firewire expansion card in an open PCI slot.</li>

                    <li>On the power supply, plug the 20+4 pin motherboard power connector into the motherboard.</li>

                    <li>Switch to the drive bays view.</li>

                    <li>From the Shelf, connect the SATA cable to the data connection on the CD 
                    drive (the top object in the drive bay).</li>

                    <li>On the power supply, plug a 15-pin SATA power connector into the power connection on the CD drive (on the left of the
                    drive).</li>

                    <li>Switch to the motherboard view of the computer.</li>

                    <li>Connect the other end of the SATA cable to a SATA connection on the motherboard.</li>

                    <li>Switch to the front view of the computer.</li>

                    <li>Turn on the computer and verify that the system starts.</li>
                </ol>
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
