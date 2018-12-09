//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  render() {
    return (
      <div className="dropdown mb-2">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item">Show All</a>
          <a className="dropdown-item">Cables</a>
          <a className="dropdown-item">Monitors</a>
          <a className="dropdown-item">Input Devices</a>
          <a className="dropdown-item">Outlets</a>
          <a className="dropdown-item">Printers</a>
          <a className="dropdown-item">Speakers</a>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
