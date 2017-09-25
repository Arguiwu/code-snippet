interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 20
square.penWidth = 5.0


interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {}
    counter.interval = 123
    counter.reset = function() {}
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
