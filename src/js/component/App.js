//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React       from 'react';
import Header      from './Header/Layout.js';
import Instruction from './instruction/Layout.js';
import Inventory   from '../container/inventory.js';
import Workspace   from '../container/workspace.js';
import { Route }   from "react-router-dom";

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class App extends React.Component {
  render(){
    return (
      <div>
        <Header {...this.props}/>
        <Route exact path="/"            component={Instruction} />
        <Route exact path="/instruction" component={Instruction} />
        <Route exact path="/inventory"   component={Inventory} />
        <Route exact path="/workspace"   component={Workspace} />
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default App

//-----------------------------------------------------------------------------//
