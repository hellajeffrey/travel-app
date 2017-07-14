import editUserController from './edit-user.controller';
import editUserTemplate from './edit-user.html'

const editUserComponent = {
  controller: editUserController,
  template: editUserTemplate
};

angular.module("TravelApp").component("editUser", editUserComponent);