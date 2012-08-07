"use strict";

var AuthController = new Stellar.Controller('auth');

AuthController.index = function() {
  Stellar.render('page_auth');
}

AuthController.show = function() {
  Stellar.redirect('/auth');
}
