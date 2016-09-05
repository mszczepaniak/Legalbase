class YamlService {

    constructor()  {}

    saveAsYaml(appState) {
        appState.forEach((page) => {
            delete page.$$hashKey;
        });

        let yamlStruct = {
            pages: [],
            elements: []
        };

        appState.map((page) => {
            let elementsId = page.elements.map((elem) => {
                elem.id = 'element' + yamlStruct.elements.length;
                yamlStruct.elements.push(elem);
                return elem.id;
            });
            yamlStruct.pages.push({
                title: page.title,
                elements: elementsId
            });
        });

        let yamlData = jsyaml.safeDump(yamlStruct);
        let filename = 'configuration.yaml';
        let blob = new Blob([yamlData], {type: 'text/yaml'});

        // FOR IE:
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            let e = document.createEvent('MouseEvents'),
                a = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/yaml', a.download, a.href].join(':');
            e.initEvent('click', true, false, window,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
    }
}

export default YamlService;