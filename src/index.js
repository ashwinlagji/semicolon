/* eslint-disable */
var angular = require('angular');

require('angular-ui-router');
// require('bootstrap');
require('angular-drag-and-drop-lists');

var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var footer = require('./app/footer');

// Admin Page: Home
var adminModule = require('./app/admin-page');

var issueList = require('./app/issueList');

require('./index.scss');

angular
    .module('app', ['ui.router', issueList, 'dndLists', adminModule])
    .config(routesConfig)
    .component('app', main)
    .component('appHeader', header)
    .component('appFooter', footer);
