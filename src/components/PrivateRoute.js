import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SideMenu from './layout/SideMenu';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} sidebar={<SideMenu/>}/>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)