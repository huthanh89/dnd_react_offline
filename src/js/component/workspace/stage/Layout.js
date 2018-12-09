//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _          from 'lodash';
import styled     from 'styled-components';
import Connector  from './Connector';
import Item       from './Item';
import Components from 'lib/components';
import React      from 'react';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  constructor(props){
    super();
    this.component = _.find(Components, (component) =>{
      return component.id === props.componentID;
    });
  }

  getViews(){
    let result = [];
    result.push(<Item {...this.component} key={this.component.id} {...this.props}/>);
    if(this.component.connectors){
      _.forEach(this.component.connectors, (component)=>{
        result.push(<Connector {...component} key={component.id} {...this.props}/>);
      });
    }
    return result;
  }

  render() {
    return (
      <Wrapper>
        {this.getViews()}
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
