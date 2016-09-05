class SidenavController {
    /**
     * Constructor class SidenavController
     *
     * @param {object} $scope
     */
    constructor($scope, $state, AppStateService) {
        'ngInject';

        this.$state = $state;
        this.AppStateService = AppStateService;
        this.appState = AppStateService.getAppState();
        var vm = this;
    }
}

export default SidenavController;
