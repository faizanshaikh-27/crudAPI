
// requiring mongoose for schema model
const mongoose = require("mongoose")


// Structure of a document
const studSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true,
        trim: true
    },
    subject:[{
        type: String,
        required: true,
        enum:['English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Algebra', 'Geometry']
    }],
    gender:{
        type: String,
        required: true,
        trim: true
    },
    ranking:{
        type: Number,
        required: true,
        unique: true
    }
})






// creating a new collection
const StudentRanking = new mongoose.model("StudentRanking", studSchema)


module.exports = StudentRanking;