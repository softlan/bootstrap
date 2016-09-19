var pages = [
    {
        address: '/',
        name: 'Главная',
        tpl: 'masterLayout',
        fields: [
            {
                main: 'home',
                nav: "nav"
            }
        ]
    },
    {
        address: '/second',
        name: 'Second1',
        tpl: 'secondLayout',
        fields: [
            {
                main: 'home',
                nav: "nav"
            }
        ]
    },
    {
        address: '/features',
        name: 'Возможности',
        tpl: 'masterLayout',
        fields: [
            {
                main: 'features',
                nav: "nav"
            }
        ],
        subpages: [
            {
                address: '/subpage',
                name: 'Subpage',
                tpl: 'masterLayout',
                fields: [
                    {
                        main: 'features',
                        nav: "nav"
                    }
                ],
            }
        ]
    },
];

BlazeLayout.setRoot('body');

/*var adminSection = FlowRouter.group({
    prefix: "/admin"
});

adminSection.route('/:page*', {
    action: function (params, queryParams) {
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].path == params.page) {
                var page = pages[i];
                this.name = page.name;
                break;
            }
        }

        BlazeLayout.render('adminLayout', {
            main: page.tpl,
            nav: "nav"
        });
    }
});*/

/*Tracker.autorun(function () {
    FlowRouter.watchPathChange();
    //var context = FlowRouter.getRouteName();
    //alert(context);
    // use context to access the URL state
});*/

Template.nav.helpers({
    pathForPage: function () {
        var page = this;
        var params = {
            page: page.address,
        };
        var queryParams = {};
        var routeName = page.address;
        var path = FlowRouter.path(routeName, params, queryParams);

        return path;
    },
    pages: function () {
        return pages; //Pages.find();
    }
});


var mainSection = FlowRouter.group({
    prefix: "" // "/:foo(\\d+)"
});

mainSection.route('/:page*', {  //'/:page/:subpage*'
    action: function(params, queryParams) {
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].address == '/' + (params.page == undefined ? "" : params.page)) {
                var page = pages[i];

                //if (page.tpl == 'secondLayout') import '/client/imports/css/justified-nav.css';
                //else import '/client/imports/css/cover.css';

                /*if (params.subpage != undefined) { // вложенные страницы
                    for (var j = 0; j < page.subpages.length; j++) {
                        if (page.subpages[j].address == params.subpage) {
                            page = page.subpages[j];
                            this.name = page.name;
                            break;
                        }
                    }
                }*/
                break;
            }
        }

        BlazeLayout.render(page.tpl, page.fields[0]);
        
    },
    // перезагрузка (вроде только данных)
    triggersEnter: [reloadCheck],
    triggersExit: [routeCleanup]
});

function reloadCheck(context, redirect, stop) {
    if (fireReload) {
        console.log('Reloading ...');
        FlowRouter.reload();
        stop();
    }
}

function routeCleanup() {
    fireReload = !fireReload;
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



// iron-route:

/*Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {

    this.route('home', {
        path: '/',
        action: function () {
            if (this.ready()) {
                for (var i = 0; i < pages.length; i++) {
                    if (pages[i].path == '/') {
                        var page = pages[i];
                    }
                }
                this.template = page.tpl;
                this.render(page.tpl);
            }
        }
    });

    this.route('page', {
        path: '/:page',
        action: function () {
            if (this.ready()) {
                for (var i = 0; i < pages.length; i++) {
                    if (pages[i].path == this.params.page) {
                        var page = pages[i];
                    }
                }
                this.template = page.tpl;
                this.render(page.tpl);
            }
        }
    });

});*/