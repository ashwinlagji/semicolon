/* eslint-disable */
module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app', {
      url: '/app',
      component: 'app'
    }).state('app.home', {
      url: '/home',
      component: 'home'
    }).state('app.projectdetails', {
      url: '/details',
      component: 'projectDetails'
    });
}
