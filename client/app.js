const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module('TravelApp', ["ui.router", 'ng-token-auth'])
    .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: '/'
        });
    })
    .config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            template: "<home></home>"
        })
        .state("flights", {
            url: "/flights",
            template: "<flights></flights>"
        });
    $urlRouterProvider.otherwise("/");
}