const express = require("express")
const cors = require("cors")
const app = express()

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: 'fd70263409c14f6bb66c2c4d051e8bae',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const port = process.env.PORT || 4000


const{ getHtml, getCss, getJS} = require('./controller')

app.get("/", getHtml)
app.get("/css", getCss)
app.get("/js", getJS)

app.listen(port, console.log(`Server running on ${port}`))