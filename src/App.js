import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from './helpers';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import store from './Store';
import { PrivateRoute } from './components/PrivateRoute';
import SideMenu from './components/layout/SideMenu';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={SideMenu}/>
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
