//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $             from 'jquery';
import   React         from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import   App           from './container/App.js';
import   reducer       from './reducer/index.js';
import   logger        from 'redux-logger';
import { HashRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore   } from 'redux';

import '../css/style.less';

//-----------------------------------------------------------------------------//

import TypeScript from './technologies/hello.tsx';
import Babel      from './technologies/hello.jsx';

//-----------------------------------------------------------------------------//
// Development configuration
//-----------------------------------------------------------------------------//

const ReactLogger = true;

//-----------------------------------------------------------------------------//

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

$( document ).ready(function() {
  render(
    <div>

      <TypeScript/>
      <Babel/>

      <Provider store={initStore()}>
        <Router>
          <Route 
            path="/" 
            component={App} 
          />
        </Router>
      </Provider>

    </div>
    , $('#root')[0]
  );
});

//-----------------------------------------------------------------------------//