export function setCookie(key: string, value: string): void {
    document.cookie  = key + '=' + encodeURIComponent(value) + ';'
}