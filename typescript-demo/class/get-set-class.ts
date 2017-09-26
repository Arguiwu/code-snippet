const passcode = 'mypass'

class Employee {
    private _fullName: string
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if(passcode && passcode === 'mypass') {
            this._fullName = newName
        }else {
            console.log('Error: Unauthorized update of employee!')
        }
    }
}