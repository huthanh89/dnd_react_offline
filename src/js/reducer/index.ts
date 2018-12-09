//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import * as _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

let initialState: any = {
    cpu:          false,
    ram:          false,
    powersupply:  false,
    componentID: '0',
    dragItem:     '',
    position:    'motherboard'
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState, action:any){

  switch (action.type){
    case 'CHANGE_POSITION': {
      let state = prevState;
      state.position = action.position;
      return _.clone(state);
    }
    case 'SELECT_COMPONENT': {
      let state = prevState;
      state.componentID = action.componentID;
      return _.clone(state);
    }
    case 'CONNECT_COMPONENT': {
      let state = prevState;
      state[action.componentType] = true;
      return _.clone(state);
    }
    case 'DiSCONNECT_COMPONENT': {
      let state = prevState;
      state[action.componentType] = false;
      return _.clone(state);
    }
    case 'DRAG_COMPONENT': {
      let state = prevState;
      state.dragItem = action.component;
      return _.clone(state);
    }
    default: {
      return prevState;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer;

//-----------------------------------------------------------------------------//