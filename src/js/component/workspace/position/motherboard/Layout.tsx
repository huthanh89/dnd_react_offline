//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      CPU    from './CPU';
import      Ram    from './Ram';
import      styled from 'styled-components';
import * as React  from 'react';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  width:      100%;
  min-height: 500px;
`;

type Props = {
  dragItem:               string,
  cpu:                    boolean,
  ram:                    boolean,
  position:               string,
  actionDragComponent:    Function,
  actionConnectComponent: Function
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props>  {
  render() {
    return (
      <Wrapper>
        <img src='asset/motherboard.png' 
          style={{
            position: 'absolute',
            width:    '100%',
            maxWidth: '600px',
            height:   '500px',
            left:     '0',
            top:      '50px'
          }}
        />
        {<CPU connected={this.props.cpu} {...this.props}/>}
        {<Ram connected={this.props.ram} {...this.props}/>}
      </Wrapper>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
