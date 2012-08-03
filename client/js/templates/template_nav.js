"use strict";

Template.nav.menuItems = function () {
  var mIs = [
    {url: '/home/about', text: "about"},
    {url: '/home/contact', text: "contact"},
  ];
  
  return mIs;
};

Template.footer_nav.menuItems = function () {
  
  var mIs = [
      {url: "/home/impressum", text: "impressum"}
  ];
  
  return mIs;
};

