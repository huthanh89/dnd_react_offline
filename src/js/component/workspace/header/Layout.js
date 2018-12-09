//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Inventory from './Inventory';
import Navigate  from './Navigate';
import Position  from './Position';
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
