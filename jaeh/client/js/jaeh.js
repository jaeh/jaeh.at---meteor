"use strict";
var Jaeh = {};

Meteor.call('pageslugs', function(error,result) {
  Jaeh.pages = result;
});

Jaeh.current_txt_color = 'grey';
Jaeh.current_bg_color = 'black';

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


Jaeh.get_color = function(color) {
  /* colors */
  var colors = {
    darkblue: '#101b70',
    lightred: '#ff0505',
    grey: '#666',
    lightblue: '#40BBEE',
    lightgreen: '#179f0d',
    lightpurple: '#f4dfeb',
    orange: '#ff4b00',
    purple: '#8f2182',
    red: '#910000',
    turquoise: '#08a9c2',
    yellow: '#f2f200',
    white: '#fff',
    black: '#111'
  }
  if(color) {
    if(colors[color]) {
      return colors[color];
    }else{
      console.log("events_colorswitcher.js -> this color doesnt exist yet... color = "+color);
      return false;
    }
  } else {
    return colors;
  }
}


