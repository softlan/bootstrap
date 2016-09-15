FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('masterLayout', {
            main: 'home',
            nav: "nav"
        });
    }
});

FlowRouter.route('/features', {
    name: 'features',
    action() {
        BlazeLayout.render('masterLayout', {
            main: 'features',
            nav: "nav"
        });
    }
});