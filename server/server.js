const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const port = process.env.PORT || 4000


const{ getHtml, getCss, getJS} = require('./controller')

app.get("/", getHtml)
app.get("/css", getCss)
app.get("/js", getJS)

app.listen(port, console.log(`Server running on ${port}`))