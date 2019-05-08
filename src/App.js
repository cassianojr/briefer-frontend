import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from './helpers';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import Index from './pages/Index/Index';

import store from './Store';
import { PrivateRoute } from './components/PrivateRoute';
import SideMenu from './components/layout/SideMenu';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/briefs" component={SideMenu}/>
            <PrivateRoute exact path="/profile" component={SideMenu}/>
            <PrivateRoute exact path="/new_briefing" component={SideMenu}/>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
