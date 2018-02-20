var angular = require('angular');

require('angular-ui-router');
require('angular-drag-and-drop-lists');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var footer = require('./app/footer');
var issueList = require('./app/issueList');

require('./index.scss');

angular
    .module('app', ['ui.router', issueList, 'dndLists'])
    .config(routesConfig)
    .component('app', main)
    .component('appHeader', header)
    .component('appFooter', footer);
