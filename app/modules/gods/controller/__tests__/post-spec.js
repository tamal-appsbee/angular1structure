import god from '../../index';

describe('GodController', () => {
    let controller;
    let service;
    beforeEach(() => {
        angular.mock.module(god);
        angular.mock.inject(($injector, $controller, $stateParams, $location) => {
            service = $injector.get('GodService');
            controller = $controller('GodController', {
                $stateParams: $stateParams,
                $location: $location,
                god: service,
                user: service,
                comments: service
            });
        })
    });


    it('should have correct author name', () => {
        assert.equal(controller.author, 'Yang Zhao', 'PostController has correct author name');
    });
});
