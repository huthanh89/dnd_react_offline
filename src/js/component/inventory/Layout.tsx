//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import      Filter from './Filter';
import      List   from './List';
import * as React  from 'react';

//-----------------------------------------------------------------------------//

type Props = {
    history: Array<string>,
    actionSelectComponent: Function
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component<Props> {

    constructor(props: Props){
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(id: string){
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
