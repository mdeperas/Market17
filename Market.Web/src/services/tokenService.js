export class TokenService {
    constructor() {
        this.token = {};
        //remove this.token
    }

    addToken(token) {
        let expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + token.expires_in);
        token.expires_in = expiresAt;

        this.token = token;
        //save in some storage
    }

    removeToken() {
        this.token = {};
        //remove it from storage
    }

    getToken() {
        return this.token; //from some storage
    }
    
    isValid() {
        return this.token.access_token && this.token.expires_in > new Date().getTime();
        //getToken() instead of this.token
    }
}