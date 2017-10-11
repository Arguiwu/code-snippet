let prev = Date.now()

function fallback(fn: Function): number {
    const curr = Date.now()
    const ms = Math.max(0, 16 - (curr - prev))
    const id = setTimeout(fn, ms)
    return id
}

const self = window

const iRaf = self.requestAnimationFrame
    || self.webkitCancelAnimationFrame
    || fallback

const iCancel = self.cancelAnimationFrame
    || self.webkitCancelAnimationFrame
    || self.clearTimeout

export function raf(fn, Function): number {
    return iRaf.call(self, fn)
}

export function cancel(id: number): void {
    iCancel.call(self, id)
}
