import '../sass/posts.scss';
export default class PostsController {
    constructor($stateParams, $location, posts) {
        this.$stateParams = $stateParams;
        this.$location = $location;
        this.posts = posts;
    }
}

PostsController.$inject = ['$stateParams', '$location', 'posts'];
