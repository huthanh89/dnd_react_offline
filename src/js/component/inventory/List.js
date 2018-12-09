//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import Components from 'lib/components';
import Item       from './Item';
import * as React from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Component extends React.Component {
    render() {
        return (
            <div>
                {Components.map((item, index)=><Item 
                    {...item} 
                    key={item.id}
                    selectItem={this.props.selectItem}
                    />)}
            </div>
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
