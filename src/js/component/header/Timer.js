//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import moment from 'moment';
import React  from 'react';
import styled from 'styled-components';

//-----------------------------------------------------------------------------//

const Wrapper = styled.div`
  position:    relative;
  top:         10px;
  font-size:   14px;
`;

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  constructor(props){
    super(props);
    this.second = 1000;
    this.clock  = this.clock.bind(this);
    this.state  = {
        count: this.count
    };
  }

  componentDidMount(){
    this.timer = window.setInterval(this.clock, 1000);
  }

  clock() {
    let second = this.second--;
    if(second < 1){
      window.clearInterval(this.timer);
    }
    this.setState({
      second: second
    });
  }

  render() {
    let duration = moment.duration(this.second, 'seconds');
    return (
      <div>
        <Wrapper>
          <span className="float-left">
            Timer { duration.minutes() + ":" + duration.seconds()}
          </span>
        </Wrapper>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
