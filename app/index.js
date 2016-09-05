import 'angular';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';

import home from './home/home.module';
import appState from './appState/appState.module';
import yaml from './yaml/yaml.module';
import page from './page/page.module';
import sidenav from './sidenav/sidenav.module';

// Project specific style
import './scss/bootstrap.scss'

export const yamlyModule = angular.module('yamly', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    yaml,    
    appState,
    home,
    page,
    sidenav
]);

yamlyModule.config(($stateProvider) => {
    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

yamlyModule.controller('MainController', function($mdSidenav, AppStateService, YamlService) {

    'ngInject';

    this.AppStateService = AppStateService;
    this.YamlService = YamlService;
    this.appState = AppStateService.getAppState();

    this.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    this.closeSidenav = () => {
        $mdSidenav('left').close();
    };

    this.saveAsYaml = () => {
        this.YamlService.saveAsYaml(this.appState);
    }
});
