"use strict";


Template.nav.menuItems = function () {
  if(Jaeh && Jaeh.pages){
    var mIs = [];
    
    Jaeh.pages.forEach(function(page) {
      if(page.menu === 'main') {
        mIs.push({url: '/'+page.slug, text: page.slug});
      }
    });
    return mIs;
  }
};

Template.footer_nav.menuItems = function () {
  if(Jaeh && Jaeh.pages){
    var mIs = [];
    
    Jaeh.pages.forEach(function(page) {
      if(page.menu === 'footer') {
        mIs.push({url: '/'+page.slug, text: page.slug});
      }
    });
    return mIs;
  }
};


