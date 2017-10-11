export function decode(value: string): string {
    try {
        return decodeURIComponent(value)
    } catch(e) {
        return void 0
    }
}