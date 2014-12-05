var App;

module('integration tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('will render the entire application correctly', function() {
    visit('/');
    andThen(function() {
        var accounts = find('.account');
        equal(accounts.length, 3);
        equal(find('.account:eq(0)').text(), 'bank');
    });
    click('.detail-link:eq(0)');
    andThen(function() {
        var details = find('#name');
        equal(details.text(), 'bank');
    });
    click('#users-link');
    andThen(function() {
        var users = find('.username');
        equal(users.length, 3);
        equal(find('.username:eq(0)').text(), 'toran');
    });
});
