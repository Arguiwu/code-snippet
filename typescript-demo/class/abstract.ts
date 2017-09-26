abstract class Animal {
    abstract makeSound(): void
    move(): void {
        console.log('go go go...')
    }
}

abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log('department name is : ' + this.name)
    }
    abstract printMeeting(): void               // 必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing')
    }
    printMeeting(): void {
        console.log('')
    }
}


// 把类当做接口使用

class Point {
    x: number
    y: number
}

interface Point3d extends Point {
    z: number
}