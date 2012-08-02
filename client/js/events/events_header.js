"use strict";

Template.header.events = {
  'mouseover #logo': animate_logo,
  'mouseout #logo': reset_logo,
  'click #logo': reset_logo_instantly
}

//generate logo html
Template.header.logo = function() {
  
  var j_positions = get_j_positions();
  var a_positions = get_a_positions();
  var e_positions = get_e_positions();
  var h_positions = get_h_positions();
  
  var html = '';
  
  for(var i = 0; i < j_positions.length; i++) {
    var p = j_positions[i];
    html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
  }
  
  for(var i = 0; i < a_positions.length; i++) {
    var p = a_positions[i];
    p.left += 20;
    html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
  }
  
  for(var i = 0; i < e_positions.length; i++) {
    var p = e_positions[i];
    p.left += 45;
    html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
  }
  
  for(var i = 0; i < h_positions.length; i++) {
    var p = h_positions[i];
    p.left += 65;
    html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
  }
  
  return html;
}

//animate the logo on mouseover
function animate_logo() {
  $('.point').each(function() {
    animate_point($(this));
  });
}

function reset_logo_instantly() {
  reset_logo(0);
}
function reset_logo_soon() {
  resetlogo((Math.random() * 800) + 200);
}
//reset the logo on mouseout
function reset_logo(duration) {
  if(duration) {
    var j_positions = get_j_positions();
    var a_positions = get_a_positions();
    var e_positions = get_e_positions();
    var h_positions = get_h_positions();

    var i = 0;
    $('.point').each(function() {
      var point = $(this);
      var pos = {};
      
      //get original positions
      if(i < j_positions.length) {
        pos = j_positions[i];
      }else if(i < (j_positions.length + a_positions.length)) {
        var idx = i - j_positions.length;
        pos = a_positions[idx];
        pos.left += 20;
      }else if(i < (j_positions.length + a_positions.length + e_positions.length)) {
        var idx = i - j_positions.length - a_positions.length;
        pos = e_positions[idx];
        pos.left += 45;
      }else if(i < (j_positions.length + a_positions.length + e_positions.length + h_positions.length)) {
        var idx = i - j_positions.length - a_positions.length - e_positions.length;
        pos = h_positions[idx];
        pos.left += 65;
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
      
      var color = get_color(Jaeh.current_txt_color);
    
      point.stop().animate({
          bottom: pos.bottom,
          left: pos.left,
          height: '4px',
          width: '4px',
          borderRadius: '4px'
      },
      { 
        duration: duration,
        complete: function() { $(this).css('background-color', get_color(Jaeh.current_txt_color));}
      });
      i++;
    });
  }
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


function get_j_positions(getI) {
  
  var j_positions = [
    {bottom: 7, left: 0},
    {bottom: 5, left: 5},
    {bottom: 7, left: 10},
    {bottom: 12, left: 10},
    {bottom: 17, left: 10},
    {bottom: 22, left: 10},
    {bottom: 27, left: 10},
    {bottom: 32, left: 10},
    {bottom: 37, left: 10}
  ];
  
  var pos = j_positions[getI];
  
  if(!pos) {
    return j_positions;
  }else{
    return pos;
  }
}

function get_a_positions(getI) {
  
  var a_positions = [
    {bottom: 7, left: 0},
    {bottom: 12, left: 0},
    {bottom: 17, left: 0},
    {bottom: 22, left: 0},
    {bottom: 27, left: 0},
    {bottom: 32, left: 0},
    {bottom: 37, left: 5},
    {bottom: 37, left: 10},
    {bottom: 20, left: 5},
    {bottom: 20, left: 10},
    {bottom: 32, left: 15},
    {bottom: 27, left: 15},
    {bottom: 22, left: 15},
    {bottom: 17, left: 15},
    {bottom: 12, left: 15},
    {bottom: 7, left: 15}
  ];

  var pos = a_positions[getI];  
  if(!pos) {
    return a_positions;
  }else{
    return pos;
  }
}


function get_e_positions(getI) {
  var e_positions = [
    {bottom: 12, left: 0},
    {bottom: 17, left: 0},
    {bottom: 22, left: 0},
    {bottom: 27, left: 0},
    {bottom: 32, left: 0},
    {bottom: 7, left: 5},
    {bottom: 7, left: 10},
    {bottom: 20, left: 5},
    {bottom: 20, left: 10},
    {bottom: 37, left: 5},
    {bottom: 37, left: 10}
  ];
  
  var pos = e_positions[getI];
  
  if(!pos) {
    return e_positions;
  }else{
    return pos;
  }
}

function get_h_positions(getI) {  
  var h_positions = [
    {bottom: 7, left: 0},
    {bottom: 12, left: 0},
    {bottom: 17, left: 0},
    {bottom: 22, left: 0},
    {bottom: 27, left: 0},
    {bottom: 32, left: 0},
    {bottom: 37, left: 0},
    {bottom: 20, left: 5},
    {bottom: 20, left: 10},
    {bottom: 37, left: 15},
    {bottom: 32, left: 15},
    {bottom: 27, left: 15},
    {bottom: 22, left: 15},
    {bottom: 17, left: 15},
    {bottom: 12, left: 15},
    {bottom: 7, left: 15}
  ];
  
  var pos = h_positions[getI];
  
  if(!pos) {
    return h_positions;
  }else{
    return pos;
  }
}
