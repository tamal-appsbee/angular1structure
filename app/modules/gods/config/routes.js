/*@ngInject*/
export default ($stateProvider) => {
    $stateProvider
        .state('listGods', {
            url: '/gods',
            template: require('../view/gods.html'),
            controller: 'GodsController',
            controllerAs: 'gods',
            resolve: {
                gods: (GodService) => {
                    return GodService.getGods().then((object) => {
                        return object.data;
                    });
                }
            }
        })
        .state('god', {
            url: '/gods/:godId',
            template: require('../view/god.html'),
            controller: 'GodController',
            controllerAs: 'god',
            resolve: {
                god: (GodService, $stateParams) => {
                    return GodService.getGod($stateParams.godId).then((object) => {
                        return object.data;
                    });
                },
                user: (GodService, god) => {
                    return GodService.getUser(god.userId).then((object) => {
                        return object.data;
                    });
                },
                comments: (GodService, god) => {
                    return GodService.getComments(god.id).then((object) => {
                        return object.data;
                    });
                }
            }
        });
}
