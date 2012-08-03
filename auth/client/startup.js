/*
Meteor.startup(function () {
  console.log('creating user');
  Meteor.createUser({username:'ja_admin', password: 'testing'},{}, created);
  
  Meteor.subscribe('users',function() {
    users = users.find();
    
    console.log(users);
  });
});

function created(error) {
  if(error) {
    console.log(error);
  }else{
    console.log('user created');
  }
}
*/
