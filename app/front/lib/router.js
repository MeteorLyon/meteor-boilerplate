AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    template: 'login'
});

AccountsTemplates.configureRoute('signUp', {
    path: '/register',
    template: 'login',
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('MainLayout', {
            bottomZone: "footer",
            mainZone: "pageNotFound",
            topZone: "nav"
        });
    }
};

FlowRouter.route('/', {
    name: 'home',
    subscriptions: function(params, queryParams) {

    },
    action: function(params) {
        BlazeLayout.render('MainLayout', {
            topZone: "nav",
            mainZone: "main",
            bottomZone: "footer"
        });
    }
});

/* all private route must use triggersEnter */
/*FlowRouter.route('/private', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function() {
        BlazeLayout.render(...)
    }
});*/
