// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: 'size 10 object'}
// printLabel(myObj)

interface LabelledValue {
    label: String
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'size 10 object'}
printLabel(myObj)


// option bags

interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string ;area: number} {
    let newSquare = { color: 'white', area: 100 }
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// const mySquare = createSquare({ color: 'black', width: 100, nonexisting: true} as SquareConfig)
const mySquare = createSquare({ color: 'black', width: 100, nonexisting: true})