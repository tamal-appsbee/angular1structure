import '../sass/god.scss';
export default class GodController {
    constructor($stateParams, $location, god, user, comments) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.god = god;
        this.user = user;
        this.comments = comments;
        this.author = 'Yang Zhao';
    }
}

GodController.$inject = ['$stateParams', '$location', 'god', 'user', 'comments'];
