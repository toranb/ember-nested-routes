var Router = Ember.Router.extend();

Router.map(function() {
    this.resource("accounts", { path: "/" }, function() {
        this.resource("detail", { path: "/:account_id" }, function() {
            this.resource("users", { path: "/users" });
        });
    });
});

export default Router;
