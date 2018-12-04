//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Front       from './front/Layout';
import Back        from './back/Layout';
import Drivebay    from './drivebay/Layout';
import Motherboard from './motherboard/Layout';
import React       from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

  getView(){
    switch(this.props.position){
      case 'front': {
        return(<Front {...this.props}/>);
      }
      case 'back': {
        return(<Back {...this.props}/>);
      }
      case 'drivebay': {
        return(<Drivebay {...this.props}/>);
      }
      default: {
        return(<Motherboard {...this.props}/>);
      }
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
