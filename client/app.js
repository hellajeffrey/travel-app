const angular = require('angular');
require("angular-ui-router");
require("ng-token-auth");
require("angular-cookie");

angular.module('TravelApp', ["ui.router", 'ng-token-auth'])
    .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: '/'
        });
    });