// require express 
const express = require("express")

// requiring connection from mongodb database
require("../src/db/conn")


const router = require("../src/routers/router")

// will use express method through app()
const app = express()

// to listen through localhost
const port = process.env.PORT || 3000

app.use(express.json()) //to use json file
app.use(router)



// Listening through port
app.listen(port, () => {
    console.log(`Connection is live at port ${port}`)
})