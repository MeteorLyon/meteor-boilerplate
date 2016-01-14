Template.rebolon_registration_terms.events({
    "click button[data-action=accept-terms]": function() {
        if (!Meteor.user()) throw new Meteor.Error('Unauthorized access [403]');

        Meteor.call("acceptTerms", function(err, res) {
            if (err) {
                Materialize.toast("An error happened, please try later");
                // @TODO log womething on server here (if connected)
                return;
            }

            FlowRouter.go("/home");
        });
    }
});

