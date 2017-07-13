navbarController.$inject = ['$auth', '$state'];

function navbarController($auth, $state) {
  const vm = this;
  vm.signOut = signOut;
  vm.user = $auth.user;
  activate();

  function activate() {
    console.log('running');
    $auth.validateUser()
      .then(res => {
        console.log(res);
      })
  }
  function signOut() {
    $auth.signOut()
      .then(function (resp) {
        alert("Successfully signed out")
      })
      .catch(function (resp) {
        alert(resp)
      });
  };
};

console.log("navbar controller working")
export default navbarController;