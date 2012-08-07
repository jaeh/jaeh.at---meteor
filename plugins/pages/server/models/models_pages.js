Meteor.publish("pages", function (show) {
  return Pages.find({slug: show, published: true});
});

Meteor.publish("pagelists", function (show) {
 return PageLists.find({pageId: show});
});

Meteor.publish("pagelistitems", function (show) {
  return PageListItems.find({listId: {$in: show}});
});
