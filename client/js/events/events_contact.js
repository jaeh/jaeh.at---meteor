"use strict";

Template.contact_page.events = {
  'change input#mail-from, keyup input#mail-from' : send_to_check_mail,
  'click input[type="submit"], submit #contact-form' : send_mail,
  'click .close-alert': close_alert
};

function send_to_check_mail(e) {
  var value = e.target.value;
  check_mail(value, e.target);
}

function check_mail(value, target) {
  // checks that an input string looks like a valid email address.
  var isEmail_re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  if( String(value).search (isEmail_re) === -1) {
    $(target).addClass('invalid');
    return false;
  }else{
    $(target).removeClass('invalid');
    return true;
  }
}

function send_mail(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  
  var mail = {
    from: $('#mail-from').val(),
    url: $('#mail-url').val(),
    subject: $('#mail-subject').val(),
    content: $('#mail-content').val()
  };
  
  if(!mail.from && !check_mail(mail.from)) {
    Jaeh.alert('alert', 'email is no email', '#contact-form');
    return false;
  }
  
  if(!mail.subject || mail.subject == '') {
    Jaeh.alert('alert', 'subject field is empty', '#contact-form');
    return false;
  }
  
  if(!mail.content || mail.content == '') {
    Jaeh.alert('alert', 'content field is empty', '#contact-form');
    return false;
  }
  
  Meteor.call('insert_message', mail, mail_handler);
  
  return false;
}

function mail_handler(e, m) {
  if(e && e.reason) {
    Jaeh.alert('alert', e.reason, '#contact-form');
    return false;
  }
  $('#contact-form').prepend('<div class="success">message sent successfully<button class="close-alert">×</button></div>');
  
}

function close_alert(e) {
  $(e.target).parent().remove();
}
