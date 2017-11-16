const APIAI_TOKEN = 'b5cebf097e9b41248a5587b502c41b7f'
const APIAI_SESSION_ID = '25a7aaebbef045209dafcc09cd5a7f10'

const express = require('express')
const app = express()

const _root = __dirname

app.use(express.static(_root + '/views'))
app.use(express.static(_root + '/public'))

const server = app.listen(3000, () => {
	console.log('服务器运行在3000')
})

const io = require('socket.io')(server)
io.on('connection', function(socket) {
	console.log('a user connected')
})

const apiai = require('apiai')(APIAI_TOKEN)

app.get('/', (req, res) => {
	res.sendFile('index.html')
})

io.on('connection', function(socket) {
	socket.on('chat message', (text) => {
		console.log('Message:' + text)

		let apiaiReq = apiai.textRequest(text, {
			sessionId: APIAI_SESSION_ID
		})
		apiaiReq('response', (response) => {
			let aiText = response.result.fulfillment.speech
			socket.emit('bot reply', aiText)
		})
		apiaiReq.on('err', (error) => {
			console.log(error)
		})

		apiaiReq.end();
	})
})