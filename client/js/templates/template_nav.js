"use strict";

Template.nav.menuItems = function () {
  var mIs = [
    //{url: "/projects", text: "projects"},
    {url: "/about", text: "about"},
    {url: "/contact", text: "contact"}
  ];
  
  return mIs;
};

Template.footer_nav.menuItems = function () {
  
  var mIs = [
    //{url: "/aboutthispage", text: "about this page"},
    {url: "/impressum", text: "impressum"}
  ];
  
  return mIs;
};

