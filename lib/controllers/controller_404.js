var Controller404 = new Stellar.Controller('404');
Controller404.index = function() {

  var page = {
    title: 'this is a 404.',
    body: 'ooow, this is a 404.',
    footer: 'sorry for that.'
  };
  
  Stellar.render('404_page', {page: page});
}
