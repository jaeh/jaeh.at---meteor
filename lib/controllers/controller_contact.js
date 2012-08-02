"use strict";

var ContactController = new Stellar.Controller("contact");

function contact_body() {
  var body = '<p>if you want to get in touch with me:</p><p>mail to <a href="mailto:jascha@jaeh.at">jascha@jaeh.at</a></p>'+
    '<ul>'+
      '<li>social networks:</li>'+
      '<li><a target="utopia" href="http://facebook.com/manarius.van.klyst">facebook</a></li>'+
      '<li><a target="utopia" href="https://plus.google.com/108989470337499589626/posts">google+</a></li>'+
      '<li><a target="utopia" href="https://github.com/manarius/">github</a></li>'+
    '</ul>'+
    '<p> the form below sends me a message directly to a program i wrote and always have running on my computer so it probably will be faster than the good old emails are.</p>';
  return body;
}

ContactController.index = function() {
  var body = contact_body();
  var page = {
    title: 'contact',
    body: body,
    footer: ''
  };
  Stellar.render('contact_page', {page: page});
}

ContactController.show = function() {
  Stellar.redirect('/contact');
}


