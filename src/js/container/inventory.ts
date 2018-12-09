//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import  * as _     from 'lodash';
import   Component from '../component/workspace/Layout';
import { connect } from 'react-redux';


//-----------------------------------------------------------------------------//

// Return which state properties to be assigned as props.

function mapStateToProps(state: any) {
    return _.clone(state);
}

// Map dispatch actions to be available to the component.

function mapDispatchToProps(dispatch: Function) {
    return {
        actionSelectComponent: function (componentID: string){
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