import loginController from "./login.controller";
import loginTemplate from "./login.html";

const loginComponent = {
  controller: loginController,
  template: loginTemplate
};

angular.module("TravelApp").component("login", loginComponent);