//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Header   from './header/Layout.js';
import Position from './position/Layout.js';
import Stage    from './stage/Layout.js';
import React    from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Workspace</h5>
          <div className="row">
            <div className="col-lg-6">
              <Header {...this.props}/>
              <Position {...this.props}/>
            </div>
            <div className="col-lg-6 bg-dark">
              <Stage {...this.props}/>
            </div>
          </div>
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
