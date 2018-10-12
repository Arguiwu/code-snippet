const Koa = require('./application')
const app = new Koa()

app.use((req, res) => {
	res.end('Hello world')
})

app.listen(3000)
