"use strict";

Template.colorswitcher.colors = function () {
  var colors = [    
    {name: "grey"}, 
    {name: "orange"},  
    {name: "darkblue"},
    {name: "lightblue"}, 
    {name: "turquoise"},  
    {name: "lightgreen"}, 
    {name: "flatgreen"},  
    {name: "lightpurple"}, 
    {name: "purple"},  
    {name: "red"},  
    {name: "yellow"}  
  ];
  
  return colors;
}

Template.colorswitcher.bgcolors = function() {
  var colors = [
    {name: "black"},
    {name: "grey"},
    {name: "white"}
  ];
  return colors;
}
