/**
 * UserAccounts configuration
 */
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
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: false,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

/**
 * Accounts configuration (is it overloaded by UserAccounts ?
 */
Accounts.config({
  // forbidClientAccountCreation: false, // already done in AccountsTemplate
  // sendVerificationEmail: false, // same above
  loginExpirationInDays: 30
});
