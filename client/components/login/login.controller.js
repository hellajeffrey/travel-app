loginController.$inject = ['$auth', '$state'];

  function loginController($auth, $state) {
    const vm = this;
    vm.loginForm = {};
    vm.login = login;

    function login() {
      $auth.submitLogin(vm.loginForm)
        .then(function (resp) {
          $state.go('/flights')
        })
        .catch(function (resp) {
          alert(resp)
        });
    };
};

console.log("login controller working")
export default loginController;