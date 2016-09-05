class PageController {
    
    constructor($scope, $state, $stateParams, AppStateService) {
        'ngInject';

        this.$state = $state;
        this.AppStateService = AppStateService;
        this.appState = AppStateService.getAppState();

        this.pageId = $stateParams.pageId;
        this.currentPage = this.appState[this.pageId-1]
        
        this.types = ['input', 'text area', 'radio', 'file'];
    }

    addElement(pageId, type) {
        this.appState[pageId-1].elements.push({
            id: this.appState[pageId-1].elements.length + 1,
            type: type
        });
    }

    removeElement(pageId, elem) {
        let index = this.appState[pageId-1].elements.indexOf(elem);
        this.appState[pageId-1].elements.splice(index, 1);
    }

    addValueToRadioElem (element, value) {
        element.values = element.values || [];
        let index = element.values.indexOf(value);
        if(index == -1){
            element.values.push(value);
        }
    };

    removeValueFromRadioElem (element, value) {
        let index = element.values.indexOf(value);
        element.values.splice(index, 1);
    };

    savePage() {
        this.AppStateService.setAppState(this.appState);
        this.$state.go('public.home');
    }
}

export default PageController;