var AccountsDetailUsersRoute = Ember.Route.extend({
    model: function() {
        var users = [];
        users.push({username: 'toran'});
        users.push({username: 'brandon'});
        users.push({username: 'jarrod'});
        return users;
    }
});

export default AccountsDetailUsersRoute;
