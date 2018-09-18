import '../sass/home.scss';
export default class HomeController {
    constructor($location) {
        this.$location = $location;
        this.title = 'Angular Quickstart';
        this.description = 'An AngularJS 1.x QuickStart kit featuring: ES6, Webpack, UI-Router, and more';
    }
}

HomeController.$inject = ['$location'];
