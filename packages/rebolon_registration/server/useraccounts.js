Accounts.emailTemplates.siteName = Meteor.settings.sitename;
Accounts.emailTemplates.from = Meteor.settings.emails.contact.from;
Accounts.emailTemplates.resetPassword.subject = (user) => {
  return `Demande de nouveau mot de passe pour ${user.profile.displayName}`;
};
Accounts.emailTemplates.resetPassword.text = (user, url) => {
  let signature = Meteor.settings.emails.contact.signature;

  return `
Chère ${user.profile.displayName},

Cliquez sur le lien suivant pour choisir un nouveau mot de passe :
    <a href="${url}">${url}</a>
Cordialement,
${signature}`
};
Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `Bienvenue sur ${Meteor.settings.sitename}, ${user.profile.displayName}`;
};
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return
`Chère ${user.profile.displayName},


Bienvenue dans notre communauté !
Pour valider votre inscription veuillez cliquer sur le lien suivant : <a href="${url}">${url}</a>
Pour toute information complémentaire, écrivez-nous à ${Meteor.settings.email.contact.from}
A très bientôt,

${Meteor.settings.email.contact.signature}`;
};
