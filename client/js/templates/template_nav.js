"use strict";

Template.nav.menuItems = function () {
  var mIs = [
    {url: '/about', text: "about"},
    {url: '/contact', text: "contact"},
  ];
  
  return mIs;
};

Template.footer_nav.menuItems = function () {
  
  var mIs = [
      {url: "/impressum", text: "impressum"}
  ];
  
  return mIs;
};

