//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      Header   from './header/Layout';
import      Position from './position/Layout';
import      Stage    from './stage/Layout';
import * as React    from 'react';

//-----------------------------------------------------------------------------//

type Props = {
  id:                        string,
  componentID:               string,
  connector:                 string,
  connected:                 boolean,
  img:                       string,
  type:                      string,
  cpu:                       boolean,
  ram:                       boolean,
  position:                  string,
  history:                   Array<string>,
  dragItem:                  string,
  actionDisconnectComponent: Function,
  actionDragComponent:       Function,
  actionConnectComponent:    Function,
  actionChangePosition:      Function
  
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {
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
