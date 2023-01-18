// requiring mongoose
const mongoose = require("mongoose")


//Establishing connection to mongoDB
mongoose.connect("mongodb://localhost:27017/students").then(          // students is the database name
    () => {                                                           // connection returns a promise
        console.log("connection sucessfull")
    }
).catch((e) => {
    console.log("No connection")
})
