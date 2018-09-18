import '../sass/gods.scss';
export default class GodsController {
    constructor($stateParams, $location, gods) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.gods = gods;
    }
}

GodsController.$inject = ['$stateParams', '$location', 'gods'];
