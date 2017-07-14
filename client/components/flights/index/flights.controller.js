var IataCodes = require('./IATA.js');
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
  vm.showSelectedFlights = {};
  vm.selectedFlights = [];
  vm.isLoading = false;
  vm.codes = IataCodes;


  activate();

  function activate() {
  }

  function getFlight() {
    console.log('flights found');
    vm.isLoading = true;
    return flightsService.getFlight(vm.origin, vm.destination,
                                    vm.date, vm.maxStops,
                                    vm.passengers, vm.roundTrip)
           .then(function(res) {
             console.log(res);
             vm.results = res.trips.tripOption;
             vm.isLoading = false;
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

  function selectIncomingFlight(flight) {
    console.log('hit');
    vm.incomingFlight = flight;
    if (vm.roundTrip.show) {
      vm.roundTrip.showFlights = false;
    }
    vm.selectedFlights[1] = flight;
  }


  function selectOutgoingFlight(flight) {
    console.log('hit');
    if (vm.roundTrip.show) {
      vm.roundTrip.showFlights = true;
    }
    vm.outGoingFlight = flight;
    vm.selectedFlights[0] = flight;
  }

  function showSelectedFlights() {
    console.log('showing selected flights');
     if (vm.selectIncomingFlight.selectOutgoingFlight.show) {
      console.log(results)
     }
  }
}

angular
  .module("TravelApp")
  .controller("flightsController", FlightsController);

export default FlightsController;
