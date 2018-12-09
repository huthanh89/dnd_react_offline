//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Inventory from './Inventory';
import React     from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div className="text-center">
        <button className="btn btn-secondary mr-2">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
