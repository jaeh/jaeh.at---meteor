"use strict";

Meteor.methods({
  insert_message: insert_message
});

function insert_message(mail) {
  if(mail && mail.from && mail.content && mail.subject) {
    var message_id = Messages.findOne({
      from: mail.from, 
      subject: mail.subject, 
      content: mail.content
    });
    
    if(message_id) {
      throw new Meteor.Error(666, 'message already exists');
      return false;
    }
    
    message_id = Messages.insert({
      from: mail.from, 
      subject: mail.subject, 
      content: mail.content,
      url: mail.url,
      date: new Date()
    });
    
    return message_id;
  }
  throw new Meteor.Error(666, 'some arguments are missing from your mail');
  return false;
}
