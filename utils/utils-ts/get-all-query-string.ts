import { decode } from './decode'

export type QueryString = {
    [key: string]: string
}

export function getAllQueryString(): QueryString {
    const arr = location.search.substr(1).split('&')
    const result = {}
    const { length } = arr
    for(let i = 0; i < length; i++) {
        const item = arr[i].split('=')
        const key = item.shift()
        result[key] = decode(item.join('='))
    }
    return <QueryString> result
}