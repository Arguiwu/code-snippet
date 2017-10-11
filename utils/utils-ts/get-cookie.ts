import { decode } from './decode'

export function getCookie(name: string): string {
    const arr = document.cookie.split(';')
    const { length } = arr
    for( let i = 0; i < length; i++) {
        const item = arr[i].split('=')
        if(item.shift() === name) {
            return decode(item.join('='))
        }
    }
    return ''
}