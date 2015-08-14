/*AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    template: 'login'
});
AccountsTemplates.configureRoute('signUp', {
    path: '/register',
    template: 'login',
});
//Routes
AccountsTemplates.configureRoute('changePwd', {
    path: '/change-password',
    template: 'login',
});
AccountsTemplates.configureRoute('forgotPwd', {
    path: '/forgot-password',
    template: 'login',
});
AccountsTemplates.configureRoute('resetPwd', {
    path: '/reset-password',
      template: 'login',
});
AccountsTemplates.configureRoute('verifyEmail', {
    path: '/verify-email',
    template: 'login',
});
*/


FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('MainLayout', {
            footer: "footer",
            main: "pageNotFound",
            nav: "nav",
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
/*
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',

});*/

/* all private route must use triggersEnter */
/*FlowRouter.route('/private', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function() {
        BlazeLayout.render(...)
    }
});*/
