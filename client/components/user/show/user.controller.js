userController.$inject = ['$auth', '$state'];

function userController($auth, $state) {
  const vm = this;
  vm.user = $auth.user;
  activate();

  function activate() {
    console.log('running');
    $auth.validateUser()
      .then(res => {
        console.log(res);
        vm.user = res;
      });
  }
}

export default userController;