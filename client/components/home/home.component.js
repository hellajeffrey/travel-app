import homeController from "./home.controller";
import homeTemplate from "./home.html";

const homeComponent = {
    controller: homeController,
    template: homeTemplate
};

angular
    .module("TravelApp")
    .component("home", homeComponent);