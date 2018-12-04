//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React  from 'react';
import styled from 'styled-components';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//

const Hotspot = styled.div`
  background: rgba(255, 0, 0, 0.699);
  width:      20%;
  height:     90px;
  position:   absolute;
  left: 		  46%;
  top:  		  110px;
  border: 	  dashed rgb(237, 238, 168) 3px;
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
    this.props.actionDragComponent('cpu');
  }
  
  dragEnd(event){
    this.props.actionDragComponent(null);
  }

  dragOver(event){
    event.preventDefault();
  }
  
  dragDrop(event){
    event.preventDefault();
    if(this.props.dragItem==='cpu'){
      this.props.actionConnectComponent('cpu');
    }
  }

  getView(){
    if(this.props.connected){
      return(
        <img src='asset/cpu_connected.png' 
          draggable="true" onDragStart={this.dragStart} onDragEnd={this.dragEnd}
          style={{
            position: 'relative',
            width:    '100px',
            height:   '100px',
            left:     '45%',
            top:      '80px'
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
