const mongoose = require("mongoose")
const express = require("express")
const url = "mongodb://localhost:27017/students"

const retryConnection = () => {
    return mongoose.connect(url, (error) => {
        if (error){
        console.error("failed to connect, retrying in 5 sec")
        setTimeout(retryConnection, 5000)
        }
        else {
            console.log("connection Sucessfull")
        }
    })
}
retryConnection();