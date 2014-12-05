import Application from 'js/app';
import Router from 'js/router';

var container;

Application.initializer({
  name: 'extractContainer',

  initialize: function(c) {
    container = c;
  }
});

Ember.Test.registerHelper('lookup', function(app, fullName) {
  return container.lookup(fullName);
});

function startApp() {
  var App;

  var attributes = {
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: false,
    LOG_MODULE_RESOLVER: false,
    LOG_TRANSITIONS: false,
    LOG_TRANSITIONS_INTERNAL: false,
    LOG_VIEW_LOOKUPS: false
  };

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset();

  return App;
}

export default startApp;
