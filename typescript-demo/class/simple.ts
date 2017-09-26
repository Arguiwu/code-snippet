class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return 'heelo, ' + this.greeting
    }
}

const greeter = new Greeter('wxg')


class Animal {
    name: string
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snaake extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...')
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...')
        super.move(distanceInMeters)
    }
}