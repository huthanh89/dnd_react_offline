//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import  * as _     from 'lodash';
import   Component from '../component/app';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state: any) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch: Function) {
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