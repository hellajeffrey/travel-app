signUpController.$inject = ['$auth', '$state'];

function signUpController($auth, $state) {
  const vm = this;
  vm.registrationForm = {};
  vm.signUp = signUp;

  function signUp() {
    $auth.submitRegistration(vm.registrationForm)
      .then(function (resp) {
        $state.go('/flights')

      })
      .catch(function (resp) {
        alert(resp)
      });
  }
}

console.log("signup controller working")
export default signUpController;

// https://github.com/lynndylanhurley/ng-token-auth