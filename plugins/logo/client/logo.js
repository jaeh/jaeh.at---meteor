"use strict";

Template.header.logo_customize = function() {return true;}


Jaeh.get_positions = function(letter) {
  var fontname = $.cookie('csw-font');
  if(!fontname) {
    fontname = 'standard';
  }
  var positions = [];
  var pos = Jaeh.positions[letter];
  
  if(pos && pos[fontname]) {
    positions = pos[fontname];
  }else if(pos){
    positions = pos['standard']
  }
  return positions;
}

Jaeh.positions = {
  j: {offset: {}},
  a: {offset: {}},
  e: {offset: {}},
  h: {offset: {}}
};



Jaeh.positions.j.offset.standard = 0;
Jaeh.positions.j.offset.pixelade = 0;
Jaeh.positions.j.offset.verdana = 0;
Jaeh.positions.j.offset.times = 0;

Jaeh.positions.j.standard = [
  {bottom: 2, left: 0},
  {bottom: 0, left: 5},
  {bottom: 2, left: 10},
  {bottom: 7, left: 10},
  {bottom: 12, left: 10},
  {bottom: 17, left: 10},
  {bottom: 22, left: 10},
  {bottom: 27, left: 10},
  {bottom: 32, left: 10}
];

Jaeh.positions.j.pixelade = [
  
  {bottom: 0, left: 0},
  {bottom: 3, left: 4},
  {bottom: 8, left: 4},
  {bottom: 13, left: 4},
  {bottom: 18, left: 4},
  {bottom: 23, left: 4},
  {bottom: 31, left: 4}
];


Jaeh.positions.j.verdana = [
  
  {bottom: 1, left: -2},
  {bottom: 0, left: 2},
  {bottom: 3, left: 6},
  {bottom: 8, left: 6},
  {bottom: 13, left: 6},
  {bottom: 19, left: 6},
  {bottom: 24, left: 6},
  {bottom: 24, left: 2},
  {bottom: 33, left: 6}
];

Jaeh.positions.j.times = [
  {bottom: 0, left: 0},
  {bottom: 0, left: 4},
  {bottom: 3, left: 7},
  {bottom: 7, left: 7},
  {bottom: 11, left: 7},
  {bottom: 15, left: 7},
  {bottom: 19, left: 7},
  {bottom: 23, left: 7},
  {bottom: 32, left: 7},
  {bottom: 21, left: 4}
];

Jaeh.positions.a.offset.standard = 20;
Jaeh.positions.a.offset.pixelade = 12;
Jaeh.positions.a.offset.verdana = 15;
Jaeh.positions.a.offset.times = 16;

Jaeh.positions.a.standard = [
  {bottom: 2, left: 0},
  {bottom: 7, left: 0},
  {bottom: 12, left: 0},
  {bottom: 17, left: 0},
  {bottom: 22, left: 0},
  {bottom: 27, left: 0},
  {bottom: 32, left: 5},
  {bottom: 32, left: 10},
  {bottom: 15, left: 5},
  {bottom: 15, left: 10},
  {bottom: 27, left: 15},
  {bottom: 22, left: 15},
  {bottom: 17, left: 15},
  {bottom: 12, left: 15},
  {bottom: 7, left: 15},
  {bottom: 2, left: 15}
];

Jaeh.positions.a.pixelade = [
  {bottom: 12, left: 0},
  {bottom: 8, left: 4},
  {bottom: 8, left: 8},
  {bottom: 8, left: 12},
  {bottom: 12, left: 12},
  {bottom: 16, left: 12},
  {bottom: 20, left: 12},
  {bottom: 24, left: 8},
  {bottom: 24, left: 4},
  {bottom: 16, left: 4},
  {bottom: 16, left: 8}
];

Jaeh.positions.a.verdana = [
  {bottom: 12, left: 0},
  {bottom: 8, left: 2},
  {bottom: 7, left: 8},
  {bottom: 7, left: 14},
  {bottom: 13, left: 14},
  {bottom: 18, left: 8},
  {bottom: 18, left: 14},
  {bottom: 23, left: 13},
  {bottom: 26, left: 10},
  {bottom: 26, left: 5},
  {bottom: 17, left: 3}
];

Jaeh.positions.a.times = [
  {bottom:  9, left: 0},
  {bottom:  7, left: 4},
  {bottom:  9, left: 9},
  {bottom: 13, left: 1},
  {bottom: 15, left:5},
  {bottom: 14, left: 9},
  {bottom:  7, left: 13},
  {bottom: 19, left: 9},
  {bottom: 23, left: 8},
  {bottom: 23, left: 3},
  {bottom: 20, left: 0}
];



Jaeh.positions.e.offset.standard = 20;
Jaeh.positions.e.offset.pixelade = 10;
Jaeh.positions.e.offset.verdana = 20;
Jaeh.positions.e.offset.times = 20;

Jaeh.positions.e.standard = [
  {bottom: 7, left: 0},
  {bottom: 12, left: 0},
  {bottom: 17, left: 0},
  {bottom: 22, left: 0},
  {bottom: 27, left: 0},
  {bottom: 2, left: 5},
  {bottom: 2, left: 10},
  {bottom: 15, left: 5},
  {bottom: 15, left: 10},
  {bottom: 32, left: 5},
  {bottom: 32, left: 10}
];

Jaeh.positions.e.pixelade = [
  {bottom: 8, left: 8},
  {bottom: 8, left: 4},
  {bottom: 12, left: 0},
  {bottom: 16, left: 0},
  {bottom: 20, left: 0},
  {bottom: 15, left: 4},
  {bottom: 15, left: 8},
  {bottom: 19, left: 12},
  {bottom: 23, left: 8},
  {bottom: 23, left: 4}
];


Jaeh.positions.e.verdana = [
  {bottom: 9, left: 15},
  {bottom: 7, left: 11},
  {bottom: 8, left: 5},
  {bottom: 11, left: 1},
  {bottom: 16, left: 0},
  {bottom: 17, left: 5},
  {bottom: 17, left: 10},
  {bottom: 17, left: 15},
  {bottom: 25, left: 5},
  {bottom: 22, left: 1},
  {bottom: 25, left: 11},
  {bottom: 22, left: 15}
];

Jaeh.positions.e.times = [
  {bottom: 11, left: 12},
  {bottom: 8, left: 9},
  {bottom: 8, left: 4},
  {bottom: 11, left: 1},
  {bottom: 16, left: 0},
  {bottom: 17, left: 6},
  {bottom: 17, left: 11},
  {bottom: 21, left: 10},
  {bottom: 23, left: 6},
  {bottom: 20, left: 1}
];


Jaeh.positions.h.offset.standard = 65;
Jaeh.positions.h.offset.pixelade = 50;
Jaeh.positions.h.offset.verdana = 62;
Jaeh.positions.h.offset.times = 51;

Jaeh.positions.h.standard =[
  {bottom: 2, left: 0},
  {bottom: 7, left: 0},
  {bottom: 12, left: 0},
  {bottom: 17, left: 0},
  {bottom: 22, left: 0},
  {bottom: 27, left: 0},
  {bottom: 32, left: 0},
  {bottom: 15, left: 5},
  {bottom: 15, left: 10},
  {bottom: 32, left: 15},
  {bottom: 27, left: 15},
  {bottom: 22, left: 15},
  {bottom: 17, left: 15},
  {bottom: 12, left: 15},
  {bottom: 7, left: 15},
  {bottom: 2, left: 15}
];

Jaeh.positions.h.pixelade =[
  {bottom: 8, left: 0},
  {bottom: 12, left: 0},
  {bottom: 16, left: 0},
  {bottom: 20, left: 0},
  {bottom: 24, left: 0},
  {bottom: 28, left: 0},
  {bottom: 32, left: 0},
  {bottom: 23, left: 4},
  {bottom: 23, left: 8},
  {bottom: 19, left: 12},
  {bottom: 15, left: 12},
  {bottom: 11, left: 12},
  {bottom: 8, left: 12}
];

Jaeh.positions.h.verdana =[
  {bottom: 8, left: 0},
  {bottom: 13, left: 0},
  {bottom: 18, left: 0},
  {bottom: 24, left: 0},
  {bottom: 29, left: 0},
  {bottom: 34, left: 0},
  {bottom: 23, left: 4},
  {bottom: 25, left: 8},
  {bottom: 24, left: 12},
  {bottom: 19, left: 14},
  {bottom: 13, left: 14},
  {bottom: 8, left: 14}
];


Jaeh.positions.h.times =[
  {bottom: 9, left: 0},
  {bottom: 14, left: 0},
  {bottom: 19, left: 0},
  {bottom: 24, left: 0},
  {bottom: 29, left: 0},
  {bottom: 34, left: 0},
  {bottom: 32, left: -4},
  {bottom: 23, left: 4},
  {bottom: 23, left: 8},
  {bottom: 19, left: 10},
  {bottom: 14, left: 10},
  {bottom: 9, left: 10}
];
