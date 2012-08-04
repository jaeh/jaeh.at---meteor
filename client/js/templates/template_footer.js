"use strict";

Template.footer.year = function () {
  var year = new Date().getFullYear();
  return year;
};

