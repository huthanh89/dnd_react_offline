//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   Component from '../component/inventory/Layout.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch) {
    return {
        actionSelectComponent: function (componentID){
            return dispatch({
                type:       'SELECT_COMPONENT',
                componentID: componentID
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