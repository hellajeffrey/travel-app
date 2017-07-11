flightsService.$inject = ['$http'];

function flightsService($http) {
    const service = this;

    service.getFlight = getFlight;

    function getFlight(origin, destination, date, maxStops, passengers, roundTrip) {
        var trip = {
            "request": {
                "slice": [
                {
                    "origin": origin,
                    "destination": destination,
                    "date": date,
                    "maxStops": maxStops,
                }
                ],
                "passengers": {
                    "adultCount": passengers
                }
            }
        }

        if (Object.keys(roundTrip).length) {
          trip.request.slice.push({
            "origin": destination,
            "destination": origin,
            "date": roundTrip.date,
            "maxStops": roundTrip.maxStops
          })
        }

        return $http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?fields=trips&key=AIzaSyBzB" +
                "iHJ_EnQY6gQoy-95X--KGjLWMlLz8A", trip)
            .then(function(res) {
                return res.data;
            })
    }
}

angular
    .module("TravelApp")
    .service("flightsService", flightsService);
