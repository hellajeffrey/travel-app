FlightsController.$inject = ["flightsService"];
function FlightsController(flightsService) {
  var vm = this;
  vm.getFlight = getFlight;
  vm.origin = 'ATL';
  vm.destination = 'AMS';
  vm.date = '2017-10-10';
  vm.maxStops = 0;
  vm.passengers = 1;

  vm.results = [];

  activate();

  function activate() {
  }

  function getFlight() {
    console.log('flight hit');
    return flightsService.getFlight(vm.origin, vm.destination,
                                    vm.date, vm.maxStops, vm.passengers)
           .then(function(res) {
             console.log(res);
             vm.results = res.trips.tripOption;
           });
  }
}

angular
  .module("TravelApp")
  .controller("flightsController", FlightsController);

export default FlightsController;
