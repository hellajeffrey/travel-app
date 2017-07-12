import signUpController from "./signup.controller";
import signUpTemplate from "./signup.html";

const signUpComponent = {
    controller: signUpController,
    template: signUpTemplate
};

angular.module("TravelApp").component("signUp", signUpComponent);