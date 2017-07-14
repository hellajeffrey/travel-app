userController.$inject = ['$auth', '$state'];

function userController($auth, $state) {
  const vm = this;
  vm.user = $auth.user;
  vm.editUser = editUser;
  activate();

  function activate() {
    console.log('running');
    $auth.validateUser()
      .then(res => {
        console.log(res);
        vm.user = res;
      })
  }

  function editUser() {
    $auth.updateAccount(vm.user)
    .then(function(res) {
      console.log('then hit');
      console.log(res);
    })
    .catch(function(res) {
      console.log('catch hit');
      console.log(res);
    })
  }


}

export default userController;