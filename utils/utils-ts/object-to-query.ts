export function objectToQuery(obj: Object): string {
    return Object.keys(obj).map(key => 
        key + '=' + encodeURIComponent(obj[key] === void 0 ? '' : obj[key])
    ).join('&')
}