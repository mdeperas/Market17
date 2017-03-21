export function CompanyResource ($resource) {
    return $resource('http://localhost:59038/api/companies', {}, {
        'query': {
            method: 'GET',
            isArray: true
        },
        'hcwd' : {
            method: 'GET',
            isArray: true
        }
    });
}