//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(){
    super();
    this.clicked  = this.clicked.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }
  
  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    this.props.actionDisconnectComponent(this.props.dragItem);
  }

  clicked(){
    this.props.history.push('/inventory');
  }

  render() {
    return (
      <button className="btn btn-warning" onClick={this.clicked}
        onDrop={this.dragDrop} onDragOver={this.dragOver}
      >
        <i className="fas fa-box-open"></i>
      </button>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
