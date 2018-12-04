//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Inventory from './Inventory.js';
import Navigate  from './Navigate.js';
import Position  from './Position.js';
import React     from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-4">
          <Inventory {...this.props}/>
        </div>
        <div className="col-4">
        </div>
        <div className="col-4">
          <Position {...this.props}/>
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
