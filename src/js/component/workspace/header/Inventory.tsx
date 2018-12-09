//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as React from 'react';

//-----------------------------------------------------------------------------//

type Props = {
  history: Array<string>,
  dragItem: string,
  actionDisconnectComponent: Function
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.clicked  = this.clicked.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }
  
  dragOver(event: any){
    event.preventDefault();
  }
  
  dragDrop(event: any){
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
