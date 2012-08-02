"use strict";

var ImpressumController = new Stellar.Controller("impressum");

function impressum_body() {
  var body = '<p>responsible for the contents on this page: jascha ehrenreich</p>';
  body += '<p>email: jascha@jaeh.at</p>';
  body += '<p>letters for me will be accepted at the:</p>';
  body += '<p>metalab, rathausstrasse 6, 1010 wien, &ouml;sterreich</p>';
  return body;
}

ImpressumController.index = function() {
  var body = impressum_body();
  var page = {
    title: '',
    body: body,
    footer: ''
  };
  Stellar.render('static_page', {page: page});
}

ImpressumController.show = function() {
  Stellar.redirect('/impressum');
}
