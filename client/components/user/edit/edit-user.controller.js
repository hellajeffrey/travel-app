editUserController.$inject = ['$auth', '$state'];

function editUserController($auth, $state) {
  const vm = this;
  vm.user = $auth.user;
  vm.editUser = editUser;
  // vm.updateForm = {};
  activate();

  function activate() {
    $auth.validateUser()
      .then(res => {
        vm.user = res;
        vm.updateForm = {};
        vm.updateForm.name = vm.user.name;
        vm.updateForm.username = vm.user.username;
        vm.updateForm.email = vm.user.email;
        vm.updateForm.image = vm.user.image;
      });
  }

  function editUser () {
  $auth.updateAccount(vm.updateForm)
    .then(function (res) {
      $state.go('profile');
      console.log('then hit');
      console.log(res);
    })
    .catch(function (res) {
      console.log('catch hit');
      console.log(res);
    })
  }
}

export default editUserController;