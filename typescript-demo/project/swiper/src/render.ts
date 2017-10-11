type Sign = 0 | -1 | 1

interface RenderInterface {
    [key: string]: any
}

export default abstract class Render {
    
    static _renders: RenderInterface = {}

    static register(name: string, renderClass: any) {
        Render._renders[name] = renderClass
    }

    static getRenderInstance(name: string) {
        let renderClass = Render._renders[name]
        if(!renderClass) {
            throw new Error(`Missing render : ${ name }`)
        }

        return new renderClass()
    }

    protected sign(x: number): Sign {
        x = +x

        if(x === 0 || isNaN(x)) {
            return 0
        }

        return x > 0 ? 1 : -1
    }

    abstract doRender(swiper): any
}