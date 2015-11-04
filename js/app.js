/**
 * Demo入口
 *
 * @author Alex
 */

//import { Router } from 'react-router'
//import { createHistory, useBasename } from 'history'

var Router = require('react-router').Router;
var createHistory = require('history').createHistory;
var useBasename   = require('history').useBasename;
var render        = require('react-dom').render;

const history = useBasename(createHistory)({
    basename: ''
});

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./components/layout.react'),
        childRoutes: [
            //require('./home/router'),
            require('./article/router'),
            require('./about/router')
        ]
    } ]
};

var React = require('react');
render(
    <Router history={history} routes={rootRoute} />,
    document.body
)


