"use strict";

Handlebars.registerHelper('is_active', function (url) {
  var classAttr = '';
  if(window.location.pathname == url) {
    classAttr = ' class="active"';
  }
  return classAttr;
});

