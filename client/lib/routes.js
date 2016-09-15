var arr = [
    {
        path: '/',
        name: 'home',
            main: 'home',
            nav: "nav"
    },
    {
        path: '/features',
        name: 'features',
            main: 'features',
            nav: "nav"
    },
];

for (var i = 0; i < arr.length; i++) {

    var path = i == 0 ? '/' : '/features';
    var name = i == 0 ? 'home' : 'features';
    var main = i == 0 ? 'home' : 'features';
    var nav = i == 0 ? 'nav' : 'nav';

    FlowRouter.route(path, {
        name: name,
        action() {
            BlazeLayout.render('masterLayout', {
                main: main,
                nav: nav
            });
        }
    });
}

/*FlowRouter.route('/', {
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
});*/