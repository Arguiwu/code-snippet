import { TimeReporter } from '../shared/timeReporter'
import { EOL } from 'os'

function printer(s): void {
    console.log("The time is: " + s + EOL)
}

const timeReporter = new TimeReporter(printer)
timeReporter.start()