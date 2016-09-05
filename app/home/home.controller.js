class HomeController {

    constructor($scope, $state, AppStateService, YamlService) {
        'ngInject';

        this.$state = $state;
        this.AppStateService = AppStateService;
        this.appState = AppStateService.getAppState();
        this.YamlService = YamlService;
    }

    addPage() {
        let newPage = {
            title: "New Page",
            id: this.appState.length+1,
            elements: []
        };

        this.appState.push(newPage);
        this.AppStateService.setAppState(this.appState);
        this.$state.go('public.page', {pageId: this.appState.length})
    }

    editPage(Id) {
        this.$state.go('public.page', {pageId: Id})        
    }

    removePage(page) {
        let index = this.appState.indexOf(page);
        this.appState.splice(index,1);
    }

    saveAsYaml() {
        this.YamlService.saveAsYaml(this.appState);
    }
}

export default HomeController;
