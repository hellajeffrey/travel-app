FlightsController.$inject = ["flightsService"];
function FlightsController(flightsService) {
  var vm = this;
  vm.getFlight = getFlight;
  vm.origin = 'ATL';
  vm.destination = 'AMS';
  vm.date = '2017-10-10';
  vm.maxStops = 0;
  vm.passengers = 1;
  vm.roundTrip = {};
  vm.toggleFlightStatus = toggleFlightStatus;
  vm.results = [];
  vm.selectIncomingFlight = selectIncomingFlight
  vm.selectOutgoingFlight = selectOutgoingFlight


  activate();

  function activate() {
  }

  function getFlight() {
    console.log('flights found');
    return flightsService.getFlight(vm.origin, vm.destination,
                                    vm.date, vm.maxStops,
                                    vm.passengers, vm.roundTrip)
           .then(function(res) {
             console.log(res);
             vm.results = res.trips.tripOption;
           });
  }

  function toggleFlightStatus(kind) {
    console.log('hit');
    if (kind === 'oneWay') {
      vm.roundTrip = {};
    } else {
      vm.roundTrip.show = true;
    }
  }

  function selectIncomingFlight() {
    console.log('hit');
    if (vm.roundTrip.show) {
      vm.roundTrip.showFlights = true;
    }
  }


  function selectOutgoingFlight() {
    console.log('hit');
    if (vm.roundTrip.show) {
      vm.roundTrip.showFlights = false;
    }
  }
}

angular
  .module("TravelApp")
  .controller("flightsController", FlightsController);

export default FlightsController;
