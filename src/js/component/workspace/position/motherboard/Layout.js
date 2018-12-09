//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import CPU    from './CPU';
import Ram    from './Ram';
import React  from 'react';
import styled from 'styled-components';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  width:      100%;
  min-height: 500px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
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
