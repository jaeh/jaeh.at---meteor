"use strict";

var Jaeh = {};

Jaeh.alert = function(type, message, target) {
  if(!target) {
    target = '#container';
  }
  //Stellar.log(message);
  var className = 'alert';
  if(type == 'warning' || type == 'info' || type == 'error') {
    className += ' alert-'+type
  }
  if(type == 'warning') {
    sarcasm = 'You better check yourself, before you wreck yourself';
    message = sarcasm+': '+message;
  }
  var alert = $('<div class="'+className+'">'+message+'<button class="close-alert">×</button></div>');
  $(target).prepend(alert);
}

Jaeh.current_txt_color = 'grey';
Jaeh.current_bg_color = 'black';
