"use strict";

Template.colorswitcher.events = {
  'mouseover #txt-colorswitcher li a' : change_txt_color,
  'mouseover #bg-colorswitcher li a' : change_bg_color
};

function change_txt_color(e) {
  var target = $(e.target);
  Jaeh.current_txt_color = target.attr('data-txt-color');
    
  var txt_col_val = get_color(Jaeh.current_txt_color);
  
  $('.point').css('background-color', txt_col_val);
  var txt_class = $('body').attr('data-txt-color');
  $('body').removeClass('txt-'+txt_class).addClass('txt-'+Jaeh.current_txt_color).attr('data-txt-color', Jaeh.current_txt_color);
  $.cookie('csw-txt', Jaeh.current_txt_color);
}

function change_bg_color(e) {
  var target = $(e.target);
  Jaeh.current_bg_color = target.attr('data-bg-color');
  
  if(Jaeh.current_bg_color == 'grey' && Jaeh.current_txt_color == 'grey') {
    Jaeh.current_txt_color = 'white';
  }else if(Jaeh.current_bg_color == 'white' && Jaeh.current_txt_color == 'white') {
    Jaeh.current_txt_color = 'grey';
  }else if (Jaeh.current_bg_color == 'black' && Jaeh.current_txt_color == 'black') {
    Jaeh.current_txt_color = 'white';
  }
  
  if(Jaeh.current_bg_color == 'grey') {
    $('#txt-colorswitcher .grey').css('display', 'none');
  } else {
    $('#txt-colorswitcher .grey').css('display', 'inline-block');
  }
  
  var bg_col_val = get_color(Jaeh.current_txt_color);
  
  $('.point').css('background-color', bg_col_val);
  
  var bg_class = Jaeh.current_bg_color;
  var txt_class = Jaeh.current_txt_color;
  
  $('body').removeClass().addClass('bg-'+Jaeh.current_bg_color).addClass('txt-'+Jaeh.current_txt_color).attr('data-bg-color', Jaeh.current_bg_color).attr('data-txt-color', Jaeh.current_txt_color);
  $.cookie('csw-bg', Jaeh.current_bg_color);
  $.cookie('csw-txt', Jaeh.current_txt_color);
}

function get_color(color) {
  /* colors */
  var colors = {
    darkblue: '#101b70',
    flatgreen: '#ff0505',
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
