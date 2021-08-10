
const express = require('express')
const app = express()
const port = 3000
const server = express()
const kodersRouter = require('./routers/koders.js')
const mentorsRouter = require('./routers/mentors.js')

server.use(express.json())

server.use('/koders',kodersRouter);
server.use('/mentors',mentorsRouter);


server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})