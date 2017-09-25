interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {x: 10, y: 20}

let a: number[] = [1, 2, 3, 4, 5, 6]
let ro: ReadonlyArray<number> = a