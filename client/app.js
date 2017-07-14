const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module('TravelApp', ["ui.router", 'ng-token-auth'])
    .config(router)
    .config(auth)
    .filter('duration', duration);

auth.$inject = ["$authProvider"]

function auth($authProvider) {
    $authProvider.configure({
        apiUrl: '',
        validateOnPageLoad: false
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
        .state("sign-up", {
            url: "/auth/sign_up",
            template: "<sign-up></sign-up>"
        })
        .state("login", {
            url: "/auth/sign_in",
            template: "<login></login>"
        })
        .state("profile", {
            url:"/users/profile",
            template:"<user></user>"
        })
        .state("edit-profile", {
            url: "/users/edit",
            template: "<edit></edit>"
        })
        .state('admin', {
            url: '/admin',
            abstract: true,
            template: '<ui-view/>',
            resolve: {
                auth: function ($auth) {
                    return $auth.validateUser();
                }
            }
        });
    $urlRouterProvider.otherwise("/");
}

function duration() {
    return function changeToHours(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return hours + " hours, and " + minutes + " minutes"
    }
}
