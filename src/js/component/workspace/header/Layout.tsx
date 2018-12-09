//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      Inventory from './Inventory';
import      Position  from './Position';
import * as React     from 'react';

//-----------------------------------------------------------------------------//

type Props = {
  history:                   Array<string>,
  dragItem:                  string,
  actionDisconnectComponent: Function,
  actionChangePosition:      Function
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {
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
