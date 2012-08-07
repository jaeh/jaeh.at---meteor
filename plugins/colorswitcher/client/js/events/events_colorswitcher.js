"use strict";

Template.colorswitcher.events = {
  'mouseover #txt-colorswitcher a' : change_txt_color,
  'mouseover #fonts-colorswitcher a' : change_font,
  'mouseover #fontsize-colorswitcher a' : change_fontsize,
  'mouseover #bg-colorswitcher a' : change_bg_color,
  'click #colorswitcher-visibility-btn': toggle_visibility,
};

function toggle_visibility(e) {
  var target = $(e.target);
  var visibility =  $.cookie('csw-visibility');
  var animated =  $('#colorswitcher-container').hasClass('animated');
  if(!animated) {
    
    var dir = '+';
    if(visibility === 'visible') {
      dir = '-';
      visibility = 'hidden';
    }else{
      visibility = 'visible';
    }
    
    $('#colorswitcher-container').addClass('animated').animate({
      right: dir+'=297'
    }, 500, function() {
       $.cookie('csw-visibility', visibility);
      // Animation complete.
      
      var btn_txt = 'show';
      if(visibility == 'visible') {
        btn_txt = 'hide';
      }
      $('#colorswitcher-visibility-btn').html(btn_txt);
       $('#colorswitcher-container').removeClass().addClass(visibility);
    });
    }
}

function is_visible() {
  return ($.cookie('csw-visibility'));
}

function change_fontsize(e) {
  if(is_visible()) {
  
    var target = $(e.target);
    Jaeh.current_fontsize = target.attr('data-fontsize');
    
    var font_class = $('body').attr('data-fontsize');
    $('body').removeClass('fontsize-'+font_class).addClass('fontsize-'+Jaeh.current_fontsize).attr('data-fontsize', Jaeh.current_fontsize);
    
    $.cookie('csw-fontsize', Jaeh.current_fontsize);
  }
}

function change_font(e) {
  if(is_visible()) {
    var target = $(e.target);
    Jaeh.current_font = target.attr('data-font');

    var font_class = $('body').attr('data-font');
    $('body').removeClass('font-'+font_class).addClass('font-'+Jaeh.current_font).attr('data-font', Jaeh.current_font);

    $.cookie('csw-font', Jaeh.current_font);
    
    if(Jaeh.reset_logo)  {
      console.log("resetlogoinstantly");
      Jaeh.reset_logo(200);
    }
    
  }
}

function change_txt_color(e) {
  if(is_visible()) {
    var target = $(e.target);
    Jaeh.current_txt_color = target.attr('data-txt-color');
    
    if(Jaeh.current_txt_color === Jaeh.current_bg_color) {
      if(Jaeh.current_bg_color === 'black') {
        Jaeh.current_txt_color === 'white';
      }else{
        Jaeh.current_txt_color === 'grey';
      }
    }
      
    var txt_col_val = Jaeh.get_color(Jaeh.current_txt_color);
    
    $('.point').css('background-color', txt_col_val);
    
    var txt_class = $('body').attr('data-txt-color');
    
    $('body').removeClass('txt-'+txt_class)
             .addClass('txt-'+Jaeh.current_txt_color)
             .attr('data-txt-color', Jaeh.current_txt_color);
             
    $.cookie('csw-txt', Jaeh.current_txt_color);
  }
}

function change_bg_color(e) {
  if(is_visible()) {
    var target = $(e.target);
        
    Jaeh.current_bg_color = target.attr('data-bg-color');
    
    if(Jaeh.current_bg_color == 'grey' && Jaeh.current_txt_color == 'grey') {
      Jaeh.current_txt_color = 'white';
    }else if(Jaeh.current_bg_color == 'white' && Jaeh.current_txt_color == 'white') {
      Jaeh.current_txt_color = 'grey';
    }else if (Jaeh.current_bg_color == 'black' && Jaeh.current_txt_color == 'black') {
      Jaeh.current_txt_color = 'white';
    }
    
    var bg_col_val = Jaeh.get_color(Jaeh.current_txt_color);
    
    $('.point').css('background-color', bg_col_val);
    
    if(Jaeh.current_bg_color == 'grey') {
      $('#txt-colorswitcher .grey').css('display', 'none');
    } else {
      $('#txt-colorswitcher .grey').css('display', 'inline-block');
    }
    
    var bg_class = $('body').attr('data-bg-color');
    var txt_class = $('body').attr('data-txt-color');
    
    $('body').removeClass('bg-'+bg_class)
             .removeClass('txt-'+txt_class)
             .addClass('bg-'+Jaeh.current_bg_color)
             .addClass('txt-'+Jaeh.current_txt_color)
             .attr('data-bg-color', Jaeh.current_bg_color)
             .attr('data-txt-color', Jaeh.current_txt_color);
             
    $.cookie('csw-bg', Jaeh.current_bg_color);
    $.cookie('csw-txt', Jaeh.current_txt_color);
  }
}
