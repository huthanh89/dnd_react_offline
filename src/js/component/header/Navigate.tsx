//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as React from 'react';

//-----------------------------------------------------------------------------//

type Props = {
  history: Array<string>
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.instruction = this.instruction.bind(this);
    this.inventory   = this.inventory.bind(this);
    this.workspace   = this.workspace.bind(this);
  }

  instruction(){
    this.props.history.push('/instruction');
  }

  inventory(){
    this.props.history.push('/inventory');
  }

  workspace(){
    this.props.history.push('/workspace');
  }

  render() {
    return (
      <div className="dropdown  float-right">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Navigate
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={this.instruction}>Instruction</a>
          <a className="dropdown-item" onClick={this.inventory}>Inventory</a>
          <a className="dropdown-item" onClick={this.workspace}>Workspace</a>
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
