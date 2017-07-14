usersService.$inject = ['$http'];

function usersService($http) {
  const service = this;

  service.User = getUser;

  function getUser(id) {
    return $http
    .get('/users/' + id)
    .then(res => {
      return res.data
    });
  }
  return service;
}


angular
  .module("TravelApp")
  .service("usersService", usersService);

