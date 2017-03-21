export class AuthService {
    constructor($http, TokenService, $state) {
        this.http = $http;
        this.tokenService = TokenService;
        this.state = $state;
    }

    login(username, password) {
        let data = 'grant_type=password&client_secret=client_secret&client_id=client_id&username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
        return this.http.post('http://localhost:59038/token', data, { 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }});
    }

    register(user) {
        return this.http.post('http://localhost:59038/api/account/register', user, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }});
    }
}