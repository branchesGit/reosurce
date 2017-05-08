/// <reference path="../typings/index.d.ts" />
import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createInitStore } from '../common/ReduxUtil'

function getEnterIndexRouter( nextState, replace ) {
    if( nextState.location.pathname === '/' ) {
        replace('/resource/overview')
    }
}

const routes = {
    path: '/',
    component: require('../pages/App'),
    onEnter: getEnterIndexRouter,
    childRoutes: [
        {
            path: 'resource/overview',
            getComponent: ( locaction, cb ) => {
                require.ensure( [], (require) => {
                    cb( null, require('../pages/ResourceOverview/Overview') )
                })
            }
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

