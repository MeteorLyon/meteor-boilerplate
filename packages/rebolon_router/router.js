// If your app implies from user the app terms acceptation
let checkTerms = (context, redirect) => {
    if (!AccountsTemplates.ensureAcceptTerms()) {
        console.log("current", FlowRouter.current());
        // @TODO how to get current Path and add it to the queryString as ?redirect=currentPath
        redirect('/terms?redirect=' + FlowRouter.current().path);
    }
};

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

// terms cgv page
FlowRouter.route('/terms', {
    name: 'terms',
    action: function(params) {
        BlazeLayout.render('MainLayout', {
            topZone: "nav",
            mainZone: "rebolon_registration_terms",
            bottomZone: "footer"
        });
    }
});

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
    triggersEnter: [AccountsTemplates.ensureSignedIn, checkCGU],
    action: function() {
        BlazeLayout.render(...)
    }
});*/
