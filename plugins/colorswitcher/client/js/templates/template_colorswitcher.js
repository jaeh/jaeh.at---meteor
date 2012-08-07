"use strict";


Template.colorswitcher.visibility_class = function () {
  var class_str = 'visible';
  
  if($.cookie('csw-visibility') === 'hidden') {
    class_str = 'hidden';
  }
  $.cookie('csw-visibility', class_str);
  return class_str;
}


Template.colorswitcher.enabled = function () {
  if(Jaeh && Jaeh.csw) {
    return Jaeh.csw.enabled;
  }
  
}
Template.colorswitcher.hide = function () {
  if(Jaeh && Jaeh.csw) {
    if(Jaeh.csw.hide && Jaeh.csw.hide.enabled === true) {
      return Jaeh.csw.enabled;
    }
  }
}

Template.colorswitcher.colors = function () {
  
  if(Jaeh && Jaeh.csw && Jaeh.csw.enabled) {
    var colors = [    
      {name: "grey"}, 
      {name: "orange"},  
      {name: "darkblue"},
      //{name: "lightblue"}, 
      {name: "turquoise"},  
      {name: "lightgreen"}, 
      {name: "lightred"},  
      //{name: "lightpurple"}, 
      {name: "purple"},  
      {name: "red"},  
      {name: "yellow"}  
    ];
    if(Jaeh.csw.txt_colors && Jaeh.csw.txt_colors.enabled === true) {
      return colors;
    }
  }
}

Template.colorswitcher.bgcolors = function() {
  if(Jaeh && Jaeh.csw && Jaeh.csw.enabled) {
  
    var colors = [
      {name: "black"},
      {name: "grey"},
      {name: "white"}
    ];
    if(Jaeh.csw.bg_colors && Jaeh.csw.bg_colors.enabled === true) {
      return colors;
    }
  }
}


Template.colorswitcher.fonts = function() {
  if(Jaeh && Jaeh.csw && Jaeh.csw.enabled) {
    var fonts = [
      {name: "pixelade"},
      {name: "verdana"},
      {name: "times"},
      {name: "simplelife"},
      {name: "roughtypewriter"}
    ];
    
    if(Jaeh.csw.fonts && Jaeh.csw.fonts.enabled === true) {
      return fonts;
    }
  }
}


Template.colorswitcher.fontsizes = function() {
  if(Jaeh && Jaeh.csw && Jaeh.csw.enabled) {
    
    var fontsizes = [
      {name: "70"},
      {name: "100"},
      {name: "150"},
      {name: "200"}
    ];
    
    if(Jaeh.csw.fontsizes && Jaeh.csw.fontsizes.enabled === true) {
      return fontsizes;
    }
  }
}
