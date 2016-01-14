Template.registerHelper("termsAccepted", function() {
  if (!Meteor.user()) return false;

  var termsAccepted = Meteor.user().termsAccepted;

  return termsAccepted ? termsAccepted.toLocaleDateString() + " " + termsAccepted.toLocaleTimeString() : false;
});