/**
 * Demo入口
 *
 * @author Alex
 */

//import { Router } from 'react-router'
//import { createHistory, useBasename } from 'history'

var Router        = require('react-router').Router;
var createHistory = require('history').createHistory;
//var createBrowserHistory = require('history').createBrowserHistory;
var useBasename   = require('history').useBasename;
var render        = require('react-dom').render;

const history = useBasename(createHistory)({
    basename: ''
});

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./common/components/layout.react'),
        childRoutes: [
            require('./auth/router'),
            require('./article/router'),
            require('./about/router')
        ]
    } ]
};

var React = require('react');
render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('ibbd')
)


