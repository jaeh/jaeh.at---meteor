"use strict";
Meteor.methods({
  changeSetting: changeSetting,
});

function changeSetting(args) {
  if(user = checkAuth(args.auth)) {
    _.each(args.settings, function(setting) {
      Settings.update({key: setting[0]}, {$set: {value: setting[1]}});
    });
    return true;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}


function setSetting(key, value, description) {
  if(!Settings.findOne({key: key})) {
    Settings.insert({
      key: key,
      value: value,
      description: description
    });
  }/*else{
    console.log( "setting with key:"+key+" is already set. maybe you should be using changeSetting(key, value, description) instead?");
  }*/
}
