"use strict";

Meteor.startup(function(){
  if(Meteor.is_client) {
    Jaeh.reset_logo = reset_logo;
  }
});


Template.header.events = {
  'mouseover #logo': animate_logo,
  'mouseout #logo': reset_logo,
  'click #logo': reset_logo_instantly
}


//animate the logo on mouseover
function animate_logo() {
  $('.point').each(function() {
    animate_point($(this));
  });
}

function reset_logo_instantly() {
  reset_logo(20);
}
function reset_logo_soon() {
  resetlogo((Math.random() * 800) + 200);
}
//reset the logo on mouseout
function reset_logo(duration) {
  if(duration || duration === 1) {
    var j_positions = Jaeh.get_positions('j');
    var a_positions = Jaeh.get_positions('a');
    var e_positions = Jaeh.get_positions('e');
    var h_positions = Jaeh.get_positions('h');

    var i = 0;
    $('.j .point').each(function() {
      do_animation($(this), 'j',i, duration);
      i++;
    });
    
    i = 0;
    $('.a .point').each(function() {
      do_animation($(this), 'a', i, duration);
      i++;
    });
    
    i = 0;
    $('.e .point').each(function() {
      do_animation($(this), 'e',i, duration);
      i++;
    });
    
    i = 0;
    $('.h .point').each(function() {
      do_animation($(this), 'h', i, duration);
      i++;
    });
  }
}

function do_animation(point, letter, i, duration) {
    var pos = {bottom: (Math.random() * 400), left: 0};
    var positions = Jaeh.get_positions(letter);  
    //get original positions
    if(i < positions.length) {
      pos = positions[i];
    }else{
      pos = {bottom: 300, left: 0};
    }
    
    var bg_color = $('body').attr('data-bg-color');
    var txt_color = $('body').attr('data-txt-color');
    
    if(bg_color == 'grey' && txt_color == 'grey') {
      Jaeh.current_txt_color = 'white';
    }else if(bg_color == 'white' && txt_color == 'white') {
      Jaeh.current_txt_color = 'grey';
    }else{
      Jaeh.current_txt_color = txt_color;
    }
    
    var color = Jaeh.get_color(Jaeh.current_txt_color);
  
    point.stop().animate({
        bottom: pos.bottom,
        left: pos.left,
        height: '4px',
        width: '4px',
        borderRadius: '4px'
    },
    { 
      duration: duration,
      complete: function() { $(this).css('background-color', Jaeh.get_color(Jaeh.current_txt_color));}
    });
    i++;
}

function animate_point(point) {
    
  var b_ran = Math.random();
  var bottom_random = Math.random() * -50;
  if(b_ran > 0.2){
    bottom_random *= -1;
  }
  
  var l_ran = Math.random();
  var left_random = Math.random() * -50;
  if(l_ran > 0.2){
    left_random *= -1;
  }
  
  var color_random = $.Color(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  
  var size_random = Math.random() * 7 + 1;

  point.stop().animate({
        backgroundColor: color_random,
        bottom: '-='+bottom_random,
        left: '+='+left_random,
        height: size_random,
        width: size_random,
        borderRadius: size_random
    },{
      duration: (Math.random() * 1000) + 500,
      complete: function() {
        animate_point(point);
      }
    }
  );
}
