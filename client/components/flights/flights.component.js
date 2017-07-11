import flightsController from "./flights.controller";
import flightsTemplate from "./flights.html";

const flightsComponent = {
    controller: flightsController,
    template: flightsTemplate
};

angular.module("TravelApp").component("flights", flightsComponent);