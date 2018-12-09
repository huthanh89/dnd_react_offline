//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      styled     from 'styled-components';
import      Connector  from './Connector';
import      Item       from './Item';
import      Components from 'lib/components';
import * as React from 'react';
import * as _     from 'lodash';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
`;

type Props = {
  componentID: string,
  connector:   string,
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

  component: any

  constructor(props: Props){
    super(props);
    this.component = _.find(Components, (component) =>{
      return component.id === props.componentID;
    });
  }

  getViews(){
    let result: Array<any> = [];
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
