var AccountsRoute = Ember.Route.extend({
    model: function() {
        var accounts = [];
        accounts.push({id: 1, name: 'bank'});
        accounts.push({id: 2, name: 'home'});
        accounts.push({id: 3, name: 'work'});
        return accounts;
    }
});

export default AccountsRoute;
