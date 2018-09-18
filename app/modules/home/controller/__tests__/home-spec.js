import home from '../../index';
import 'angular-mocks';
describe('HomeController', () => {
    let controller;
    beforeEach(() => {
        angular.mock.module(home);
        angular.mock.inject(($controller, $location) => {
            controller = $controller('HomeController', {$location: $location});
        })
    });


    it('should initiate with correct home title and body', () => {
        assert.equal(controller.title, 'Angular Quickstart', 'HomeController has correct title');
        assert.equal(controller.description, 'An AngularJS 1.x QuickStart kit featuring: ES6, Webpack, UI-Router, and more', 'HomeController has correct description');
    });
});
