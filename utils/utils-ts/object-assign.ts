const hasOwnProperty = Object.prototype.hasOwnProperty

function fallback(to: Object, ...args: Object[]): Object {
    args.forEach(from => {
        for(let key in from) {
            if(hasOwnProperty.call(from, key)) {
                to[key] = from[key]
            }
        }
    })
    return to
}

export const objectAssign = Object.assign || fallback