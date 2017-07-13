import navbarController from "./navbar.controller";
import navbarTemplate from "./navbar.html";

const navbarComponent = {
  controller: navbarController,
  template: navbarTemplate
}

angular.module("TravelApp").component("navbar", navbarComponent);