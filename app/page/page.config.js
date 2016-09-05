class PageConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.page', {
            url: "/page/:pageId",
            params: {
                pageId: null
            },
            views: {
                'content@': {
                    templateUrl: require("./page.html"),
                    controller: "PageController as page"
                }
            }
        });
        $urlRouterProvider.otherwise("/public/home");
    }
}

export default PageConfig.initRoute;