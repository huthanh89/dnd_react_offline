//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   Component from '../component/workspace/Layout';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionChangePosition: function (position){
            return dispatch({
                type:    'CHANGE_POSITION',
                position: position
            });
        },
        actionConnectComponent: function (componentType){
            return dispatch({
                type:         'CONNECT_COMPONENT',
                componentType: componentType
            });
        },
        actionDisconnectComponent: function (componentType){
            return dispatch({
                type:         'DiSCONNECT_COMPONENT',
                componentType: componentType
            });
        },
        actionDragComponent: function (component){
            return dispatch({
                type:     'DRAG_COMPONENT',
                component: component
            });
        }
    };
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

//-----------------------------------------------------------------------------//