//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as React from 'react';
//-----------------------------------------------------------------------------//

type Props = {
  actionChangePosition: Function
}
//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.clickedFront       = this.clickedFront.bind(this);
    this.clickedBack        = this.clickedBack.bind(this);
    this.clickedMotherboard = this.clickedMotherboard.bind(this);
    this.clickedDrivebay    = this.clickedDrivebay.bind(this);
  }

  clickedFront(){
    this.props.actionChangePosition('front');
  }

  clickedBack(){
    this.props.actionChangePosition('back');
  }

  clickedMotherboard(){
    this.props.actionChangePosition('motherboard');
  }

  clickedDrivebay(){
    this.props.actionChangePosition('drivebay');
  }

  render() {
    return (
      <div className="dropdown float-right">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-search-plus mr-2"></i>
          <span>View</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={this.clickedFront}>Front</a>
          <a className="dropdown-item" onClick={this.clickedBack}>Back</a>
          <a className="dropdown-item" onClick={this.clickedMotherboard}>Motherboard</a>
          <a className="dropdown-item" onClick={this.clickedDrivebay}>Drive Bays</a>
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
