//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Filter   from './Filter.js';
import List     from './List.js';
import Item     from './Item.js';
import React    from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {

    constructor(){
        super();
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(id){
        this.props.actionSelectComponent(id);
        this.props.history.push('/workspace');
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Inventory</h5>
                    <Filter/>
                    <List selectItem={this.selectItem}/>
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
