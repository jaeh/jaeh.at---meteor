
//generate logo html
Template.header.logo = function() {
  
  var j_positions = Jaeh.get_positions('j');
  var a_positions = Jaeh.get_positions('a');
  var e_positions = Jaeh.get_positions('e');
  var h_positions = Jaeh.get_positions('h');
  
  var html = '';
  
  html += '<div class="letter j">';
  for(var i = 0; i < 15; i++) {
    if(i < j_positions.length) {
      var p = j_positions[i];
      html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
    }else{
      html += '<div class="point" id="point-'+i+'" style="bottom:300px;left:0px"></div>';
    }
  }
  html += '</div>';
  
  html += '<div class="letter a">';
  for(var i = 0; i < 20; i++) {
    
    if(i < a_positions.length) {
      var p = a_positions[i];
      html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
    }else{
      html += '<div class="point" id="point-'+i+'" style="bottom:300px;left:0px"></div>';
    }
  }
  html += '</div>';
  
  html += '<div class="letter e">';
  for(var i = 0; i < 20; i++) {
    
    if(i < e_positions.length) {
      var p = e_positions[i];
      html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
    }else{
      html += '<div class="point" id="point-'+i+'" style="bottom:300px;left:0px"></div>';
    }
  }
  html += '</div>';
  
  html += '<div class="letter h">';
  for(var i = 0; i < 20; i++) {
    if(i < h_positions.length) {
      var p = h_positions[i];
      html += '<div class="point" id="point-'+i+'" style="bottom:'+p.bottom+'px;left:'+p.left+'px"></div>';
    }else{
      html += '<div class="point" id="point-'+i+'" style="bottom:300px;left:0px"></div>';
    }
  }
  html += '</div>';
  
  return html;
}
