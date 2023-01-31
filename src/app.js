const express = require("express")
const studentDataBase = require("../src/db/conn")
const router = require("../src/routers/router")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use ("/student", router)

app.listen(port, () => {
    console.log(`Connection is live at port ${port}`)
})