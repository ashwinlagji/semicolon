/* eslint-disable */
var angular = require('angular');


var adminHomeModule = 'adminHome';

module.exports = adminHomeModule;

angular
    .module(adminHomeModule, [])
    .component('home', {
        template: require('./home.html'),
        bindings: {
            data: '<'
        },
        controller: homeController
    })
    .component('projectDetails', {
        template: require('./projectDetails.html'),
        bindings: {
            data: '<'
        },
        controller: projectDetailsController
    });


// Home page Controller
homeController.$inject = [];

function homeController(){
    
    
}


// Home page Controller

projectDetailsController.$inject = [];

function projectDetailsController(){
    
    
}