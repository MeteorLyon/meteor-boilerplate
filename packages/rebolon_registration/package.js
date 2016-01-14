Package.describe({
  name: 'rebolon:common-registration',
  summary: 'Registration process used by mainly all apps',
  version: '0.0.1',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use(['ecmascript', 'mongo', 'useraccounts:core'], ['server', 'client']);
  api.use(['templating'], ['client']);

  api.addFiles(['useraccounts.js'], ['server', 'client']);
  api.addFiles(['server/useraccounts.js'], ['server']);
  api.addFiles(['client/main.js', 'client/terms.html', 'client/terms.js', 'client/fields/is-major.html'], ['client']);
});
