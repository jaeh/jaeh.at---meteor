"use strict";

//all controllers that get populated
var page_controllers = {};
//using the values in the array below
var pages = ['home', 'about','contact','impressum'];

function createPageControllers() {
  //for every item in the pages array above
  for(var key in pages) {
    //slug of the page
    var pageslug = pages[key];
    
    //first create the controller
    page_controllers[pageslug] = new Stellar.Controller(pageslug);

    //controller indexview
    page_controllers[pageslug].index = indexView;

    //controller show view, redirects to index
    page_controllers[pageslug].show = function() {
      //find name of controller (eg about);
      var page = Stellar.page.controller;
      //redirect to page_controller[page].index
      Stellar.redirect(page);
    }
  }
}


createPageControllers();

function indexView() {
  //if this stays false through the whole loop below 404 will be thrown
  var controller_exists = false;
  //page to load
  var show = Stellar.page.controller;
  
  //see if pageslug is in pages array defined above
  for(var i = 0; i < pages.length; i++) {
    if(show == pages[i]) {
      controller_exists = true;
      break;
    }
  }
  //if there is no controller
  if(!controller_exists) { 
    //throw 404
    Stellar.redirect('404');
    //stop execution
    return false;
  }
  
  //get this page fields from the db
  Meteor.subscribe('pages', show, function() {
    var page = Pages.findOne({slug: show});
    
    //if the page exists, continue else throw a 404
    if(page) {
      //get pagelists for this page if they exist
      Meteor.subscribe('pagelists', page._id, function() {
        //save the page_lists and use as a param for page_list_items
        var page_lists = PageLists.find({pageId: page._id}).fetch();
      
        //get and store ids of the page_lists in this page to load pagelistitems
        var page_list_ids = [];
        for(var key in page_lists) {
          page_list_ids[key] = page_lists[key]._id;
        }
        //get all pagelistitems using {$in: page_list_ids} in the mongo query
        Meteor.subscribe('pagelistitems', page_list_ids, function() {     
          //set the page_list_items var of the page_list objects
          for(var key in page_lists) {
            //get list items
            var page_list_items = PageListItems.find({listId: page_list_ids[key]});
            //set list items of page lists
            page_lists[key].page_list_items = page_list_items;
          }
          //add the page_lists to the page
          page.page_lists = page_lists;
          
          
          //defining different prefixes for defined templates - needs cleanup
          var render = 'static';
          //if page has template :< hardcoded >:
          if(page.slug === 'contact' || page.slug === 'about') {
            render = page.slug;
          }
          //render the template using the page defined above
          //if page_lists dont exist they just wont be rendered.
          Stellar.render(render+'_page', {page: page});
            
        });
      });
    }else{
      //page doesnt exist in database - 404
      Stellar.redirect('404');
    }
  });
}
