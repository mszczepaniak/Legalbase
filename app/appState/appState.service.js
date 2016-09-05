class AppStateService {

    constructor()  {
       this.appState = this.createDefaultAppState(); 
    }

    createDefaultAppState() {
        let pages = [
            {
                title: 'Sample Page',
                id: 1,
                elements: []
            }
        ]
        return pages;
    }

    getAppState() {
        return this.appState;
    }

    setAppState(appState) {
        this.appState = appState;
    }
}

export default AppStateService;