export class PrincipalService {
    constructor() {
        this.user = {};
        this.isLoggedIn = false;
        //1st: Does token exist? Is it valid? Get data from API endpoint about user (by token).
        //2nd: Initialize local variables from above.
    }

    authenticate(user) {
        this.isLoggedIn = true;
        this.user = user;

        console.log('principalService.authenticate');
        console.log(this.user);
    }

    logout() {
        this.user = {};
        this.isLoggedIn = false;

        console.log('principalService.logout');
        console.log(this.isLoggedIn);
    }
}