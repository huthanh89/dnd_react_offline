//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//

const Hotspot = styled.div`
  background: rgba(255, 0, 0, 0.685);
  width:        3%;
  height:   	  260px;
  position: 	  absolute;
  left:     	  74%;
  top:      	  60px;
  border:   	  dashed rgb(237, 238, 168) 3px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  
  constructor(){
    super();
    this.dragDrop  = this.dragDrop.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd   = this.dragEnd.bind(this);
  }

  dragStart(event){
    this.props.actionDragComponent('ram');
  }
  
  dragEnd(event){
    this.props.actionDragComponent(null);
  }

  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    if(this.props.dragItem==='ram'){
      this.props.actionConnectComponent('ram');
    }
  }

  getView(){
    if(this.props.connected){
      return(
        <img src='asset/ram_connected.png' 
        draggable="true" onDragStart={this.dragStart}
        style={{
          position: 'absolute',
          width:    '3%',
          height:   '260px',
          left:     '74%',
          top:      '60px'
        }}
        />
      );
    }
    else{
      return(
        <Hotspot onDrop={this.dragDrop} onDragOver={this.dragOver} onDragLeave={this.dragLeave}/>
      );
    }
  }

  render() {
    return this.getView();
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
