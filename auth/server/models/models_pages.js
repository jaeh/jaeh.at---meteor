// server: publish the rooms collection, minus secret info.
Meteor.publish("pages", function (show) {
  return Pages.find({slug: show});
});

// server: publish the rooms collection, minus secret info.
Meteor.publish("pagelists", function (show) {
 return PageLists.find({pageId: show});
});

// server: publish the rooms collection, minus secret info.
Meteor.publish("pagelistitems", function (show) {
  return PageListItems.find({listId: {$in: show}});
});
