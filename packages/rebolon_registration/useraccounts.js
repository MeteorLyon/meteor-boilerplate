// Set up login services
/*Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { "service": "facebook" },
    {
      $set: {
        "appId": "",
        "secret": "",
        "redirectUrl": ""
      }
    },
    { upsert: true }
  );
});*/

AccountsTemplates.configure({
  defaultLayout: 'MainLayout',
  defaultLayoutRegions: {
    "topZone": "nav",
    "bottomZone": "footer",
    "mainZone": "main"
  },
  defaultContentRegion: 'mainZone',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  //sendVerificationEmail: true,
  //enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  homeRoutePath: '/home',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: false,

  showValidating: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',

  texts: {
    navSignIn: "Login",
    navSignOut: "Déconnexion",
    optionalField: "optionelle",
    pwdLink_pre: "",
    pwdLink_link: "forgotPassword",
    pwdLink_suff: "",
    resendVerificationEmailLink_pre: "Verification email lost?",
    resendVerificationEmailLink_link: "Send again",
    resendVerificationEmailLink_suff: "",
    sep: "OR",
    signInLink_pre: "ifYouAlreadyHaveAnAccount",
    signInLink_link: "signin",
    signInLink_suff: "",
    signUpLink_pre: "dontHaveAnAccount",
    signUpLink_link: "signUp",
    signUpLink_suff: "",
    socialAdd: "add",
    socialConfigure: "configure",
    /*socialIcons: {
      "meteor-developer": "fa fa-rocket",
    },*/
    socialRemove: "remove",
    socialSignIn: "signIn",
    socialSignUp: "signUp",
    socialWith: "with",
    termsPreamble: "clickAgree",
    termsPrivacy: "privacyPolicy",
    termsAnd: "and",
    termsTerms: "terms",
    title: {
      changePwd: "Changer votre mot de passe",
      enrollAccount: "Création de compte",
      forgotPwd: "Mot de passe oublié",
      resetPwd: "Re-créer un mot de passe",
      signIn: "Login",
      signUp: "Créer un compte",
      verifyEmail: "Vérification de l'email",
    },
    button: {
      changePwd: "Change",
      enrollAccount: "Créer",
      forgotPwd: "Oublié",
      resetPwd: "Reset",
      signIn: "Login",
      signUp: "Créer",
    },
    errors: {
      accountsCreationDisabled: "La création de compte est désactivé pour le moment",
      cannotRemoveService: "Impossible de retirer le seul service",
      captchaVerification: "La vérification captcha a échoué",
      loginForbidden: "Login interdit",
      mustBeLoggedIn: "Doit être identifié",
      pwdMismatch: "Les mots de passes sont différents",
      validationErrors: "Erreurs de validation",
      verifyEmailFirst: "Veuillez d'abord vérifier votre email. Vérifiez-le en cliquant sur le lien suivant.",
    }
  }
});

AccountsTemplates.addField({
  _id: 'age',
  type: 'checkbox',
  template: "field-is-major",
  errStr: "Vous devez être majeur pour utiliser cette application",
  func: function(value) {
    return !value;
  },
  negativeValidation: false
});

Meteor.startup(function userAccountsConfig() {
});
/**
 * Accounts configuration (is it overloaded by UserAccounts ?
 */
Accounts.config({
  loginExpirationInDays: 15
});

AccountsTemplates.ensureAcceptTerms = function() {
  if (!Meteor.user()) {
    if ((Meteor.isClient || Meteor.isCordova)) {
      console.warn("woups seems user() not find so maybe we loose connection ?");
      console.warn(Meteor.status().connected);

      if (!Meteor.status().connected) {
        console.warn("Connection lost with server");
        Materialize.Toast("Connection lost with server");

        Meteor.onConnection(function () {
          console.info("Connection done with server;")
          Materialize.Toast("Connection done with server");
        });

        Meteor.reconnect();
      }
    }
  }

  if (Meteor.user() && Meteor.user().termsAccepted) return true;

  return false;
};