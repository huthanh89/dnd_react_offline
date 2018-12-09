//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      styled from 'styled-components';
import * as React  from 'react';
import 'drag-drop-touch';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  border:     1px solid black;
  font-size:  16px;
  padding:    5px;
  background: #e6e6e6;
  width:      100%;
`;

const BtnWrapper = styled.div`
  position: relative;
  top:      25px;
`;

type Props = {
  id:                     string,
  connector:              string,
  connected:              boolean,
  img:                    string,
  type:                   string
  actionDragComponent:    Function,
  actionConnectComponent: Function
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd   = this.dragEnd.bind(this);
  }

  dragStart(){
    this.props.actionDragComponent(this.props.type);
  }
  
  dragEnd(){
    this.props.actionDragComponent(null);
  }

  render() {
    return (
      <Wrapper id={'item-' + this.props.id} className="row"  
        draggable={true} onDragStart={this.dragStart} onDragEnd={this.dragEnd}>
        <div className="col-3">
          <img src={`asset/${this.props.img}.png`} width="75" height="75"/>
        </div>
        <div className="col-9">
          <span className="d-block">{this.props.type}</span>
          <span className="d-block">Connector: {this.props.connector}</span>
          <span className="d-block">connected: {this.props.connected.toString()}</span>
        </div>
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
