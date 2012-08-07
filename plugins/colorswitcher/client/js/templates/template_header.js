"use strict";

Template.header.add_body_class = function() {
  var fontsize_cookie = $.cookie('csw-fontsize');
  if(fontsize_cookie) {
    Jaeh.current_fontsize = fontsize_cookie;
  }else{
    var fontsize = '100';
    if(Jaeh.current_fontsize) {
      fontsize = Jaeh.current_fontsize;
    }
    
    $.cookie('csw-fontsize', fontsize);
    Jaeh.current_fontsize = fontsize;
  }
  
  var font_cookie = $.cookie('csw-font');
  if(font_cookie) {
    Jaeh.current_font = font_cookie;
  }else{
    var font = 'pixelade';
    if(Jaeh.current_font) {
      font = Jaeh.current_font;
    }
    
    $.cookie('csw-font', font);
    Jaeh.current_font = font;
  }
  
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
    Jaeh.current_txt_color = 'white';
  }else if(Jaeh.current_bg_color == 'white' && Jaeh.current_txt_color == 'white') {
    Jaeh.current_txt_color = 'black';
  }
  
  $('body').removeClass().addClass('txt-'+Jaeh.current_txt_color+' bg-'+Jaeh.current_bg_color+" font-"+Jaeh.current_font+" fontsize-"+Jaeh.current_fontsize).attr('data-txt-color', Jaeh.current_txt_color).attr('data-bg-color', Jaeh.current_bg_color).attr('data-font', Jaeh.current_font).attr('data-fontsize', Jaeh.current_fontsize);
}
