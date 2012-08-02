"use strict";

Template.footer.footer = function () {
  var year = new Date().getFullYear();
  var footer = '&#9398; 1982 - '+year+' jascha ehrenreich - node is poetry';
  return footer;
};

