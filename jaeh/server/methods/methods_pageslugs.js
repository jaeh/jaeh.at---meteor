"use strict";

Meteor.methods({
  pageslugs: pageslugs
});

function pageslugs(show) {
  var pages = false;
  
  var query = {published: true};
  if(show) {
    query.menu = show;
  }
  
  var pages = Pages.find(query,{fields: {slug: 1, menu: 1}});
  
  var p = [];
  pages.forEach(function(page) {
    p.push({slug: page.slug, menu: page.menu});
    
  });
  return p;
}
