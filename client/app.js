const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module('TravelApp', ["ui.router", 'ng-token-auth'])
    .config(auth, router);

auth.$inject = ["$authProvider"]

function auth($authProvider) {
    $authProvider.configure({
        apiUrl: '/'
    });
}
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
        })
        .state("signup", {
            url: "/auth/sign_up",
            template: "<signup></signup>"
        });
    $urlRouterProvider.otherwise("/");
}