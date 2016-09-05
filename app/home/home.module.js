import HomeConfig from './home.config';
import HomeController from './home.controller';
require('./home.scss');

let homeModule = angular.module('yamly.home', []);

homeModule.config(HomeConfig);
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name
