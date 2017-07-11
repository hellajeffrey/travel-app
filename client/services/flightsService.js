flightsService.$inject = ['$http'];

function flightsService($http) {
  const service = this;

  service.getFlight = getFlight;

  function getFlight(origin, destination, date, maxStops, passengers) {
    var json = {
        "request": {
          "slice": [
              {
                "origin": "ATL",
                "destination": "AMS",
                "date": "2017-10-10",
                "maxStops": 0
              },
              {
                "origin": "AMS",
                "destination": "ATL",
                "date": "2017-11-11",
                "maxStops": 0
              }
            ],
            "passengers":
            {
              "adultCount": 1
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
