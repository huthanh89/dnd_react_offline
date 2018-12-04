//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _         from 'lodash';
import   Component from '../component/app.js';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch) {
    return {
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