function add(x: number, y: number, ...restOfName: string[]): number {
    return x + y
}

let myAdd = function(x: number, y: number): number {
    return x + y
}

let myAdd2: (x:number, y: number) => number = function(x: number, y: number): number {
    return x + y
}