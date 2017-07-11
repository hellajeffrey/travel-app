flightsService.$inject = ['$http'];

function flightsService($http) {
  const service = this;

  service.getFlight = getFlight;

  function getFlight(origin, destination, date, maxStops, passengers, preferredCabin) {
    var json = {
      "request": {
        "slice": [
          {
            "origin": origin,
            "destination": destination,
            "date": date,
            "maxStops": maxStops,
            "preferredCabin": preferredCabin
          }
        ],
        "passengers": {
          "adultCount": passengers
        }
      }
    }

    return $http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?fields=trips&key=AIzaSyBzB" +
      "iHJ_EnQY6gQoy-95X--KGjLWMlLz8A", json)
      .then(function(res) {
        return res.data;
      })
  }
}

angular
  .module("TravelApp")
  .service("flightsService", flightsService);
