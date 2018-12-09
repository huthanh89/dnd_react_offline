//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//


import   $          from 'jquery';
import   React      from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import   App        from './container/App';
import   reducer    from './reducer/index';
import   logger     from 'redux-logger';
import { hot }      from 'react-hot-loader';
import { HashRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore   } from 'redux';

import '../css/style.less';

//-----------------------------------------------------------------------------//
// Development configuration
//-----------------------------------------------------------------------------//

const ReactLogger = true;

//-----------------------------------------------------------------------------//

// Enable webpack's hot module reload on application components.

const Application = hot(module)(App);

// Initialize Redux Store and enable redux logger if needed.

function initStore (){
  if(ReactLogger){
    return createStore(
      reducer,
      applyMiddleware(logger)
    );
  }
  else{
    return createStore(reducer);
  }
}

//-----------------------------------------------------------------------------//
// Render Application
//-----------------------------------------------------------------------------//

$( document ).ready(function() {
  render(
    <Provider store={initStore()}>
      <Router>
        <Route 
          path="/" 
          component={hot(module)(Application)} 
        />
      </Router>
    </Provider>
    , $('#root')[0]
  );
});

//-----------------------------------------------------------------------------//