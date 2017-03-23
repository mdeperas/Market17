export class UserInfoService {
    constructor($http) {
        this.http = $http;
    }

    //1a Przerob na obiekt http.
    getUserInfo() {
        return this.http.get('http://localhost:59038/api/account');
    }
}