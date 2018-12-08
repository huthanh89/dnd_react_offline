//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//
import _ from 'lodash';
//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//
var initialState = function () {
    return {
        cpu: false,
        ram: false,
        powersupply: false,
        componentID: '0',
        dragItem: null,
        position: 'motherboard'
    };
};
//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//
function reducer(prevState, action) {
    if (prevState === void 0) { prevState = initialState(); }
    switch (action.type) {
        case 'CHANGE_POSITION': {
            var state = prevState;
            state.position = action.position;
            return _.clone(state);
        }
        case 'SELECT_COMPONENT': {
            var state = prevState;
            state.componentID = action.componentID;
            return _.clone(state);
        }
        case 'CONNECT_COMPONENT': {
            var state = prevState;
            state[action.componentType] = true;
            return _.clone(state);
        }
        case 'DiSCONNECT_COMPONENT': {
            var state = prevState;
            state[action.componentType] = false;
            return _.clone(state);
        }
        case 'DRAG_COMPONENT': {
            var state = prevState;
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
//# sourceMappingURL=index.js.map