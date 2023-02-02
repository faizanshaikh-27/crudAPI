const StudentRanking = require("../models/stud");
var Validator = require('jsonschema').Validator;
var v = new Validator();


const studentDeleteSchema = {
  type: "object",
  properties: {
    _id: {
      type: 'string',
      required: true
    },
    name: {
      type: 'String'
    },
    age: {
      type: 'Number'
    },
    subject: {
      type: 'String'
    },
    gender: {
      type: 'String'
    }
  }
}

const deletingMiddleware = async (req, res, next) => {
  let deletingValidation = await StudentRanking(req.body)
  if (!deletingValidation) {
      return res.status(400).json({ message: "Deleting Error, Please try again" })
  } else {
      console.log("This is a Delete Middleware Hello")
  }
  next()
}

const deletingIndividualStudentRequest = async (req, res) => {
  try {
    const valid = v.validate(req.body, studentDeleteSchema)
    if(valid.errors.length){
      return res.status(400).json({ errors: valid.errors})
    }
    const _id = req.params.id;
    const getStudentRecordsIndividual = await StudentRanking.findByIdAndDelete(_id)
    res.send("ID Deleted Sucessfully !");

  } catch (error) {
    if (req.params!= req.body) {
      return res.status(400).json("Invalid ID, Please Enter a valid ID")
    } 
    res.status(500).send(error)
  }
}

module.exports = { deletingMiddleware, deletingIndividualStudentRequest }