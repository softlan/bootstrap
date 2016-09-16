var arr = [
    {
        path: '/',
        name: 'home',
        tpl: 'home',
        fields: [
            { main: 'home' },
            { nav: "nav" }
        ]
    },
    {
        path: 'second',
        name: 'second',
        tpl: 'second',
        fields: [
            { main: 'home' },
            { nav: "nav" }
        ]
    },
    {
        path: 'features',
        name: 'features',
        tpl: 'features',
        fields: [
            { main: 'features' },
            { nav: "nav" }
        ]
    },
];



FlowRouter.route('/', {
    name: 'home',
    action() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].path == '/') {
                var page = arr[i];
            }
        }

        BlazeLayout.render('masterLayout', {
            main: page.tpl,
            nav: "nav"
        });
    }
});


FlowRouter.route('/:page', {
    name: 'page',
    action() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].path == this.options.action.arguments[0].page) {
                var page = arr[i];
            }
        }

        BlazeLayout.render('masterLayout', {
            main: page.tpl,
            nav: "nav"
        });
    }
});



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