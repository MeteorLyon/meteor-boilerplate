Accounts.emailTemplates.siteName = Meteor.settings.sitename;
Accounts.emailTemplates.from = Meteor.settings.emails.contact.from;
Accounts.emailTemplates.resetPassword.subject = function (user) {
  return "Message for " + user.profile.displayName;
};
Accounts.emailTemplates.resetPassword.text = function (user, url) {
  var signature = Meteor.settings.email.signature;

  return "Dear " + user.profile.displayName + ",\n\n" +
    "Click the following link to set your new password:\n" +
    url + "\n\n" +
    "Please never forget it again!!!\n\n\n" +
    "Cheers,\n" +
    signature;
};