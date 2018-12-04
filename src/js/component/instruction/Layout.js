//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Text     from './Text.js';
import React    from 'react';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instruction</h5>
                    <Text/>
                    <Link to='/workspace'>
                        <button className="btn btn-success float-right">
                            <span> Go to Workspace </span>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
