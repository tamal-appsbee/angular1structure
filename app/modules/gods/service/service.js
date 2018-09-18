/*@ngInject*/
export default class GodService {
    constructor($http) {
        this.$http = $http;
    }

    getGods() {
        return this.$http.get('http://jsonplaceholder.typicode.com/gods');
    }

    getGod(godId) {
        return this.$http.get('http://jsonplaceholder.typicode.com/gods/' + godId);
    }

    getUser(usreId) {
        return this.$http.get('http://jsonplaceholder.typicode.com/users/' + usreId);
    }

    getComments(godId) {
        return this.$http.get('http://jsonplaceholder.typicode.com/gods/' + godId + '/comments');
    }
}
