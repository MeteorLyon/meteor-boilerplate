Package.describe({
  name: 'rebolon:common-router',
  version: '0.0.1',
  summary: 'common routes used by mainly all apps',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'useraccounts:core', 'kadira:flow-router']);
  api.imply(['kadira:flow-router']);
  api.addFiles(['router.js'], ['server', 'client']);
});
