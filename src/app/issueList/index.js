/* eslint-disable */
var angular = require('angular');


var issueListModule = 'issueList';

module.exports = issueListModule;

angular
    .module(issueListModule, [])
    .component('issueList', {
        template: require('./issueList.html'),
        bindings: {
            issues: '<'
        },
        controller: issueListController
    });

issueListController.$inject = [];

function issueListController(){
    
    
}