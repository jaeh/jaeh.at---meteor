"use strict";

var HomeController = new Stellar.Controller('home');

HomeController.index = function() {
  var page_name = 'home';
  Meteor.subscribe('pages', page_name, function() {
    var page = Pages.findOne({slug: page_name});
  
    Stellar.render('static_page', {page: page});
  });
};

//show all different page objects, i will rather create dynamical controllers for them...

function createPageControllers() {
  Meteor.subscribe('allpages', function() {
    var page_controllers = {};
    pages.forEach(function(page) {
      if(page.slug !== 'home') {
        page_controllers[page.slug] = new Stellar.Controller('page.slug');
      }
    });
  });
}

HomeController.show = function() {
  var show = Stellar.page.params.show;
  Meteor.subscribe('pages', show, function() {
    var page = Pages.findOne({slug: show});
    console.log('page = ');
    console.log(page);
    if(page) {
      Meteor.subscribe('pagelists', page._id, function() {
        var page_lists = PageLists.find({pageId: page._id}).fetch();
        if(page_lists.length > 0 ) {
          var page_list_ids = [];
          for(var key in page_lists) {
            page_list_ids[key] = page_lists[key]._id;
          }
          
          Meteor.subscribe('pagelistitems', page_list_ids, function() {     
            for(var key in page_lists) {
              var page_list_items = PageListItems.find({listId: page_list_ids[key]});
              page_lists[key].page_list_items = page_list_items;
            }
            page.page_lists = page_lists;
          });
        }
        
        //defining different prefixes for defined templates - needs cleanup
        var render = 'static';
        if(page.slug === 'contact' || page.slug === 'about') {
          render = page.slug;
        }
        Stellar.render(render+'_page', {page: page});
        
      });
    }else{
      Stellar.redirect('404');
    }
  });
}
