/**
 * Demo入口
 *
 * @author Alex
 */

//import { Router } from 'react-router'
//import { createHistory, useBasename } from 'history'

var Router = require('react-router').Router;
//var History = require('history');

//const history = useBasename(createHistory)({
    //basename: ''
//})

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./components/layout.react'),
        childRoutes: [
            require('./home/router'),
            require('./article/router'),
            require('./about/router')
        ]
    } ]
}

var React = require('react');
React.render(
    <Router routes={rootRoute} />,
    document.getElementById('demoapp')
)


