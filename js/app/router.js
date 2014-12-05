var Router = Ember.Router.extend();

Router.map(function() {
    this.route("accounts", { path: "/" }, function() {
        this.route("detail", { path: "/:account_id" }, function() {
            this.route("users", { path: "/users" });
        });
    });
});

export default Router;
