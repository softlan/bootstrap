pages = [
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

BlazeLayout.setRoot('body'); // для исключения промежуточного div, чтоб сразу начиналось всё с body

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
    // для формирования меню в шаблоне nav
    pathForPage: function () {
        var page = this;
        var params = {
            page: page.address,
        };
        var queryParams = {};
        var routeAddress = page.address;
        var path = FlowRouter.path(routeAddress, params, queryParams);

        return path;
    },
    // получение коллекции pages
    pages: function () {
        return pages; //Pages.find();
    }
});

Template.nav.events({
    'click .logout': function (event) {
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('sign-in');
    }
});


T9n.setLanguage('ru');

var mainSection = FlowRouter.group({
    prefix: "" // "/:foo(\\d+)"
});


mainSection.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('register', {});
    }
});



/*mainSection.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('login', { });
    }
});*/

// Options
AccountsTemplates.configure({
    defaultLayout: 'myLayout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,

    // sendVerificationEmail: true,
    // enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: true,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: false,
    positiveFeedback: true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

mainSection.route('/:page*', {  //'/:page/:subpage*'
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function (params, queryParams) {
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].address == '/' + (params.page == undefined ? "" : params.page)) {
                var page = pages[i];

                break;
            }
        }

        BlazeLayout.render(page.tpl, page.fields[0]);

    },
});
/*if (params.subpage != undefined) { // вложенные страницы
    for (var j = 0; j < page.subpages.length; j++) {
        if (page.subpages[j].address == params.subpage) {
            page = page.subpages[j];
            this.name = page.name;
            break;
        }
    }
}*/



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