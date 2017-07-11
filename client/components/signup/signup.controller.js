// signUpController.$inject = ['$auth'];

// function signUpController($auth) {
//     const vm = this;
//     vm.registrationForm = {};
//     vm.signUp = signUp;

//     function signUp() {
//         $auth.submitRegistration(vm.registrationForm)
//             .then(function(resp) {
//                 // handle success response

//             })
//             .catch(function(resp) {
//                 // handle error response
//             });
//     }
// }

angular.module('ngTokenAuthTestApp')
    .controller('IndexCtrl', function($scope, $auth) {
        $scope.handleRegBtnClick = function() {
            $auth.submitRegistration($scope.registrationForm)
                .then(function(resp) {
                    // handle success response
                })
                .catch(function(resp) {
                    // handle error response
                });
        };
    });