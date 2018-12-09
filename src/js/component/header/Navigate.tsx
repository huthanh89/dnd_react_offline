//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as React from 'react';

//-----------------------------------------------------------------------------//

type Props = {
  history: Array<string>,
  match:   any
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path: string){
    if(this.props.match.location.pathname !== path)
    this.props.history.push(`/${path}`);
  }

  instruction(){
    this.redirect('instruction');
  }

  inventory(){
    this.redirect('inventory');
  }

  workspace(){
    this.redirect('workspace');
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
