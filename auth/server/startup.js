"use strict";

Meteor.startup(function() {
  //deny new user accounts
  Meteor.accounts.validateNewUser(function() {return false});
});
