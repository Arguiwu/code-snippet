const express =  require('express')
const {graphql} = require('graphql')
const bodyParser = require('body-parser')
const schema = require('./schema')

let app = express()
let PORT = 3000

app.use(bodyParser.text({ type: 'application/graphql' }))

app.post('/graphql', (req, res) => {
	graphql(schema, req.body)
		.then((result) => {
			res.send(JSON.stringify(result, null, 2))
		})
})

let server = app.listen(PORT, () => {
	let host = server.address().address
	let port = server.address().port
	console.log('GraphQL listening at http://%s:%s', host, port)
})