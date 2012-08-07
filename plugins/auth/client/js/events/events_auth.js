"use strict";

/** logout event **/
Template.nav.events = {
  'click li.logout a': logout
}

/** login and notification events **/
Template.page_auth.events = {
  'click input[type="submit"], submit #auth-form' : loginuser,
  'click #logout': logout,
  'click .close-alert': close_alert
};



function logout(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  Meteor.logout();
  Stellar.redirect('/');
  return false;
}


function loginuser(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  
  var user = $('#auth-username').val();
  if(!user || user == '') {
    throw new Meteor.Error(666, 'input your username');
    return false;
  }
  var password = $('#auth-password').val();
  if(!password || password == '') {
    throw new Meteor.Error(666, 'input your password');
    return false;
  }
  Meteor.loginWithPassword(user, password, loggedin);
}

function loggedin(error) {
  if(error) {
    console.log(error);
    Jaeh.alert(666, 'login failure', '#auth-form');
  }
}

function close_alert(e) {
  $(e.target).parent().remove();
}
