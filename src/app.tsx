/// <reference path="../typings/index.d.ts" />
import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createInitStore } from '../common/ReduxUtil'

function getEnterIndexRouter( nextState, replace ) {
    if( nextState.location.pathname === '/' ) {
        replace('/resourceLogin/Login')
    }
}

const routes = {
    path: '/',
    component:'div',
    onEnter: getEnterIndexRouter,
    childRoutes: [
        {
            path: 'resourceLogin',
            component: 'div',
            childRoutes: [
                {
                    path: 'login',
                    getComponent: ( location, cb ) => {
                        require.ensure( [], require => {
                            cb( null, require('../pages/Login/Login'))
                        })
                    }
                }
            ]
            
        },
        {
            path: 'resource',
            component: require('../pages/App'),
            childRoutes: [
                {
                    path: 'overview',
                    getComponent: ( locaction, cb ) => {
                        require.ensure( [], (require) => {
                            cb( null, require('../pages/ResourceOverview/Overview') )
                        })
                    }
                }
            ]
        }
    ]
}

var store = createInitStore({});

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

