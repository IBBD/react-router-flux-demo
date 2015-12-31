/**
 * Demo入口
 *
 * @author Alex
 */

//import { Router } from 'react-router'
//import { createHistory, useBasename } from 'history'

var Router        = require('react-router').Router;
var createHistory = require('history').createHistory;
var browserHistory = require('react-router').browserHistory;
var useBasename   = require('history').useBasename;
var render        = require('react-dom').render;

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
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('ibbd')
)


