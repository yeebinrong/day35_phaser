const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const expressWS = require('express-ws')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

const app = express()
const appWS = expressWS(app)

app.use(morgan('combined'))
app.use(cors())

app.ws('/play', (ws, req) => {

	ws.on('close', () => {
		// do something
	})
})

app.listen(PORT, () => {
	console.info(`Application started on port ${PORT} at ${new Date()}`)
})
