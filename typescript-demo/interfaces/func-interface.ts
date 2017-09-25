interface SearhFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearhFunc
mySearch = function(source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}