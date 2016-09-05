import PageConfig from './page.config';
import PageController from './page.controller';
require('./page.scss');

let pageModule = angular.module('yamly.page', []);

pageModule.config(PageConfig);
pageModule.controller('PageController', PageController);

export default pageModule = pageModule.name
