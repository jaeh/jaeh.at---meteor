"use strict";

var HomeController = new Stellar.Controller('home');

function home_body() {
  var body = '<p>welcome to the place in the web that i inhabit, i hope you will enjoy your stay.</p>'+
    '<p>if you want to you can read a bit <a href="/about" title="show page about me">about</a> my past and my current projects.</p>' +
    '<p>there also is a way to <a href="/contact" title="send me a message">contact</a> me.</p>';
  return body;
}

HomeController.index = function() {
  var body = home_body();
  var page = {
    title: 'jaeh.at is the virtual home of jascha ehrenreich.',
    body: body,
    footer: ''
  };
  
  Stellar.render('static_page', {page: page});
};


HomeController.show = function() {
  Stellar.redirect('/404');
}

var Controller404 = new Stellar.Controller('404');
Controller404.index = function() {

  var page = {
    title: 'this is a 404.',
    body: 'ooow, this is a 404.',
    footer: 'sorry for that.'
  };
  
  Stellar.render('404_page', {page: page});
}
