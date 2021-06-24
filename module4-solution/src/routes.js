(function(){
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');


        $stateProvider
        .state('home',{
            url: '/',
            templateUrl:'src/templates/home.template.html'
        })
        .state('category',{
            url: '/category',
            templateUrl : 'src/templates/category.template.html'
        });
    }
})();