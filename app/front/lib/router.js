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
            footer: "footer",
            main: "pageNotFound",
            nav: "nav"
        });
    }
};

FlowRouter.route('/', {
    name: 'home',
    subscriptions: function(params, queryParams) {

    },
    action: function(params) {
        BlazeLayout.render('MainLayout', {
            nav: "nav",
            main: "main",
            footer: "footer"
        });
    }
});
/*
FlowRouter.route('/privacy', {
    name: 'Privacy',
    subscriptions: function(params, queryParams) {

    },
    action: function(params) {
        BlazeLayout.render('MainLayout', {
            nav: "nav",
            main: "main",
            footer: "footer"
        });
    }
});

FlowRouter.route('/terms-of-use', {
    subscriptions: function(params, queryParams) {

    },
    action: function(params) {
        BlazeLayout.render('MainLayout', {
            nav: "nav",
            main: "main",
            footer: "footer"
        });
    },
    name: 'Terms of use'
});
/* all private route must use triggersEnter */
/*FlowRouter.route('/private', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function() {
        BlazeLayout.render(...)
    }
});*/
