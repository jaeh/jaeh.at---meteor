"use strict";

Template.header.add_body_class = function() {
  
  var bg_cookie = $.cookie('csw-bg');
  if(bg_cookie) {
    Jaeh.current_bg_color = bg_cookie;
  }else{
    $.cookie('csw-bg', Jaeh.current_bg_color);
  }
  
  var txt_cookie = $.cookie('csw-txt');
  if(txt_cookie) {
    Jaeh.current_txt_color = txt_cookie;
  }else{
    $.cookie('csw-txt', Jaeh.current_txt_color);
  }
  
  if(Jaeh.current_bg_color == 'grey' && Jaeh.current_txt_color == 'grey') {
    txt_color = 'white';
  }else if(Jaeh.current_bg_color == 'white' && Jaeh.current_txt_color == 'white') {
    txt_color = 'black';
  }
  
  $('body').removeClass().addClass('txt-'+Jaeh.current_txt_color+' bg-'+Jaeh.current_bg_color).attr('data-txt-color', Jaeh.current_txt_color).attr('data-bg-color', Jaeh.current_bg_color);
}
