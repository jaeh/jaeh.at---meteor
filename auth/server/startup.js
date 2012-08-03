"use strict";

Meteor.startup(function() {
  //deny new user accounts
  Meteor.accounts.validateNewUser(function() {return false});
  if(!Pages.findOne()) {
      
    var home_page = {
      title: 'jaeh.at is the virtual home of jascha ehrenreich.',
      slug: 'home',
      body: '<p>welcome to the place in the web that i inhabit, i hope you will enjoy your stay.</p>'+
        '<p>if you want to you can read a bit <a href="/about" title="show page about me">about</a> my past and my current projects.</p>' +
        '<p>there also is a way to <a href="/contact" title="send me a message">contact</a> me.</p>',
      footer: ''
    }
    
    var pageHomeId = Pages.insert(home_page);
    
    
    var about_page = {
      title: 'about',
      slug: 'about',
      body: '<div class="me"></div>'+
        '<div class="body"><p>i am a web and street artist currently based in vienna, austria.</p>'+
          '<p>i juggle with code since ten,</p>'+
          '<p>with cones, balls and rings since twenty</p>'+
          '<p>and life juggles with me since about thirty years</p>'+
          '<p>i somehow manage to enjoy <span class="greyed">(almost)</span> every minute of it though.</p>'+
        '</div>', 
      footer: '<p>i hope this few lines of text were able to give you a picture of my projects and my goals,</p><p> thanks for reading :)</p>',
      hasTemplate: true
    }  
    
    var pageAboutId = Pages.insert(about_page);
    
    
    var contact_page = {
      title: 'contact',
      slug: 'contact',
      body: '<p>if you want to get in touch with me:</p><p>mail to <a href="mailto:jascha@jaeh.at">jascha@jaeh.at</a></p>',
      footer: '<p> the form below sends me a message directly to a program i wrote and always have running on my computer so it probably will be faster than the good old emails are.</p>',
      hasTemplate: true
    };
    
    var pageContactId = Pages.insert(contact_page);
    
    var impressum_page = {
      title: 'impressum',
      slug: 'impressum',
      body: '<p>responsible for the contents on this page: jascha ehrenreich</p>'+
        '<p>email: jascha@jaeh.at</p>'+
        '<p>letters for me will be accepted at the:</p>'+
        '<p>metalab, rathausstrasse 6, 1010 wien, &ouml;sterreich</p>',
      footer: 'this stuff has to be here to make sure there is someone to contact. this page has to be named impressum, as if the contact page would not be enough. there also has to be a postal address. there should also be a paragraph explaining why. which this paragraph just did.'
    };
    
    var pageImpressumId = Pages.insert(impressum_page);
    
    console.log('Added '+Pages.find().count()+" Pages");
    
    /*adding page lists */
    
     var page_lists = [
      {pageId: pageAboutId, name: 'current projects',slug: 'current_projects'},
      {pageId: pageAboutId, name: 'bio', slug: 'bio'},
      {pageId: pageAboutId, name: 'professional bio', slug: 'professional_bio'},
      {pageId: pageAboutId, name: 'toolset', slug:'toolset'},
      {pageId: pageContactId, name: 'social networks', slug:'social_networks'}
    ];
    
    var page_list_ids = {};
    
    for(var key in page_lists) {
      page_list_ids[page_lists[key].slug] = PageLists.insert(page_lists[key]);
      console.log("setting id with playlsts["+key+"].slug id ="+ page_list_ids[page_lists[key].slug]);
    }
        
    /*about page lists*/
    var current_projects_items = [
      {listId: page_list_ids['current_projects'], body: '<a target="utopia" href="http://britto-manarius.meteor.com">britto</a> is a cms/blogging system. it will slowly progress to become fully featured, but has a pretty impressive collection of functions already. this is my <a target="utopia" href="https://github.com/manarius/britto">fork<a> of <a target="utopia" href="https://github.com/jonathanKingston">jonathan kingston\'s</a> <a target="utopia" href="http://britto.co">britto</a> with some new features i added.'},
      {listId: page_list_ids['current_projects'], body: '<a target="utopia" href="http://deportationcounter.meteor.com">deportationcounter.eu</a> will be the first project that tries to collect deportation data from all across europe and make it visible. i will work with some big ngos that will supply the data and will try to create a visual experience that displays the crimes against humanity that happen everyday, almost every minute. This also will be the first page worldwide that aims to supply statistics from all across europe in one place.'},
      {listId: page_list_ids['current_projects'], body: '<a target="utopia" href="http://greenandsocial.meteor.com">greenandsocial.net</a>, a worldwide social network for green and social people. it will be a try to combine likeminded people and their skillsets. lots of wasted potential there still.'},
      {listId: page_list_ids['current_projects'], body: '<a target="utopia" href="http://steamflow.meteor.com">steamflow admin</a>, the admin interface for a future browsergame. about 20% done, which is almost all of the work, what remains is repeating and permutating the steps for all databases. slow progress though, the other projects are of bigger importance to me.'}
    ];
    
    var bio_items = [
      {listId: page_list_ids['bio'], date: '1982', body: 'august, friday 13th, took my first independent breath'},
      {listId: page_list_ids['bio'], date: '1989', body: 'started school in vienna'},
      {listId: page_list_ids['bio'], date: '2002', body: 'finished school, achieved to learn how to learn, started to learn programming through self-education.'},
      {listId: page_list_ids['bio'], date: '2003 - present', body: 'making a living as a freelance web developer, creating pages for non profit organizations whenever i can afford, creating web projects i am personally fond of, playing around with new languages and programs, juggling whenever using public transportation systems and walking the streets'}
    ];
    var profbio_items = [
      {listId: page_list_ids['professional_bio'], date: '2002 - 2003', body: 'first game: <a target="utopia" href="http://ayris.jaeh.at">ayris</a>, made in flash engine version 8, the performance you see was unique back then. unfortunately the idea of advertisement in games was pretty new too...)'},
      {listId: page_list_ids['professional_bio'], date: '2002 - 2004', body: 'created my first (php & javascript) content management system. professional and feature complete enough for multiple customers back then. <a href="http://combineart.at/">combineart.at</a>, the page of a company we founded back then, is the only page i know of that still uses my cms.'},
      {listId: page_list_ids['professional_bio'], date: '2005', body: '<a target="utopia" href="http://djangoproject.org">django</a> <a target="utopia" href="http://python.org">(python)</a> content management system, after 3 month of work a forgotten backup destroyed my achievements, like so many others i learned to backup the hard way.'},
      {listId: page_list_ids['professional_bio'], date: '2008 - 2009', body: ' worked on "the last chariot of the gods", which would have been a point and click adventure, unfortunately the project never came past alpha. creating game scripts, homepage and everything else that we needed and i could do.'},
      {listId: page_list_ids['professional_bio'], date: '2011', body: 'started looking into <a target="utopia" href="http://nodejs.org">nodejs</a>'},
      {listId: page_list_ids['professional_bio'], date: '2012', body: 'beginning to fully embracing the powers of nodejs, creating some quite interesting projects (see <a href="#current-projects">current projects</a> above)'}
    ];
    var toolset_items = [
      {listId: page_list_ids['toolset'], name: 'javascript', body: 'i use javascript since i started programing and enjoy the language a lot. if its possible i prefer to use no other language for webprojects, which simplifies development enormously. i use <a href="http://nodejs.org">nodejs</a> and <a href="http://meteor.com">meteor</a> as a framework. on top of meteor we built <a href="https://github.com/jonathanKingston/stellar">stellar</a> to further simplify the development process.'},
      {listId: page_list_ids['toolset'], name: 'php', body: 'i used php a lot, i <span class="italic">can</span> use it and tend to write pretty good code, but i always have to think about the fact that the implementation of this language turned out to be pretty imperfect once i understood it.'},
      {listId: page_list_ids['toolset'], name: 'python', body: 'python is a very nice language, i used it for webdevelopment (<a target="utopia" href="http://djangoproject.com">django</a>) and game development (<a href="http://blender.org">blender</a>) and i like it a lot.'},
      {listId: page_list_ids['toolset'], name: 'c#', body: 'i used c# when programing games in <a target="utopia" href="http://unity3d.com">unity3d</a>, a marvellous 3d engine that soon will have linux browser and standalone app support, which will make it the "next best thing" for browsergames.'},
      {listId: page_list_ids['toolset'], name: 'actionscript', body: 'i learned actionscript 2 & 3, i enjoy programing in flash a lot, but i only use it if i absolutely have to. javascript can do most animations nowadays and unity3d is a way better gameengine, so i dont need to start the flash ide a lot anymore. i still consider myself to be quite professional when using it though.'}
    ];
    
    
   
    for(var key in current_projects_items) {
      PageListItems.insert(current_projects_items[key]);
    }
    for(var key in profbio_items) {
      PageListItems.insert(profbio_items[key]);
    }
    for(var key in bio_items) {
      PageListItems.insert(bio_items[key]);
    }
    for(var key in toolset_items) {
      PageListItems.insert(toolset_items[key]);
    }
    
    /*end of aboutpagelists */
    
    /*contact page lists*/
    var social_network_items = [
      {listId: page_list_ids['social_networks'], href: 'http://facebook.com/manarius.van.klyst', text: 'facebook'},
      {listId: page_list_ids['social_networks'], href: 'https://plus.google.com/108989470337499589626/posts', text: 'google+'},
      {listId: page_list_ids['social_networks'], href: 'https://github.com/manarius/', text: 'github'}
    ];
    
    for(var key in social_network_items) {
      PageListItems.insert(social_network_items[key]);
    }
    /* end of contact page lists */
    
    console.log('pagelistitems.count = '+PageListItems.find().count());
    console.log('setup done');
  }
});
