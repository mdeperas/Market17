export function interceptors($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}

export function authInterceptor(TokenService) {
    return {
        request: (config) => {
            config.headers = config.headers || {};
        
            if(TokenService.isValid())
            {
                let token = TokenService.getToken();
                config.headers.Authorization = 'Bearer ' + token.access_token; 
            }

            return config;
        }
    }
}