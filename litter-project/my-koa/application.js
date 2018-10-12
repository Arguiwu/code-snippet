const http = require('http')
const EventEmitter = require('events')

const context = require('./context')
const request = require('./request')
const response = require('./response')

class Koa extends EventEmitter {
	constructor() {
		super()
		this.middlewares = []
		this.context = context
		this.request = request
		this.response = response
	}
	createContext(req, res) {
		const ctx = Object.create(this.context)
		const request = ctx.request = Object.create(this.request)
		const response = ctx.response = Object.create(this.response)

		ctx.req = request.req = response.req = req
		ctx.res = request.res = response.res = res
		request.ctx = response.ctx = ctx
		request.response = response
		response.request = request

		return ctx
	}
	handleRequest(req, res) {
		res.statusCode = 404
		const ctx = this.createContext(req, res)
		this.fn(ctx)
		res.send(ctx.body)
	}
	use(fn) {
		this.middlewares.push(fn)
	}
	compose(middlewares, ctx) {
		function dispatch(index) {
			if(index === middlewares.length) {
				return Promise.resolve()
			}
			const middleware = middlewares[index]
			return Promise.resolve(middleware(ctx, () => dispatch(index + 1)))
		}
		return dispatch(0)
	}
	listen(...args) {
		const server = http.createServer(this.handleRequest.bind(this))
		server.listen(...args)
	}
}

module.exports = Koa
