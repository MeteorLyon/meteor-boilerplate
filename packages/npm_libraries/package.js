Package.describe({
  name: 'rebolon:npm-libraries',
  version: '0.0.1',
  summary: 'required npm libs',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['npm.js'], ['server']);
  api.export(['npm'], ['server'])
});

Npm.depends({
  "url": "0.11.0"
});
