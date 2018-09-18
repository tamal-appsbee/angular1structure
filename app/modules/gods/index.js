import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import Vote from './directive/vote';
import Social from './directive/social';
import GodService from './service/service';
import GodsController from './controller/gods';
import GodController from './controller/god';
import replay from './filter/reply';

export default angular.module('god', [uirouter])
    .config(routes)
    .service('GodService', GodService)
    .controller('GodsController', GodsController)
    .controller('GodController', GodController)
    .filter('reply', replay)
    .directive('vote', () => new Vote())
    .directive('social', () => new Social())
    .name;
