interface Drivable {
    start(): void
    drive(distance: number): boolean
    getPosition(): number
}

class Car implements Drivable {
    private _isRuning: boolean
    private _distanceFromStart: number

    constructor() {
        this._isRuning = false
        this._distanceFromStart = 0
    }

    public start() {
        this._isRuning = true
    }
    public drive(distance: number): boolean {
        if(this._isRuning) {
            this._distanceFromStart += distance
            return true
        }
        return false
    }
    public getPosition(): number {
        return this._distanceFromStart
    }
}


// 可索引的类型
interface StringArray {
    readonly [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]


interface ClockInterface {
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: number, m: number) {

    }
}