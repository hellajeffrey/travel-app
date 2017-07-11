import signupController from "./signup.controller";
import signupTemplate from "./signup.html";

const signupComponent = {
    controller: signupController,
    template: signupTemplate
};

angular.module("TravelApp").component("signup", signupComponent);