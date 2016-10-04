Package.describe({
  name: 'softlan:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Механизм отображения ошибок приложения пользователю',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use('templating', 'client');
    api.use('ecmascript');
    api.addFiles(['lib/errors.js', 'lib/errors_list.html', 'lib/errors_list.js'], 'client');
    api.mainModule('lib/errors.js');
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('softlan:errors');
  api.mainModule('errors-tests.js');
});
