const { isValidObjectId } = require("mongoose");
const StudentRanking = require("../models/stud");
var Validator = require('jsonschema').Validator;
const _ = require("lodash")


Validator.prototype.customFormats.objectId = function(input) {
  return isValidObjectId(input)
};
var v = new Validator();


const schema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "objectId",
      required: true,
    }
  }
}

// get Individual Request
const readingIndividualStudentRequest = async (req, res) => {
    try {
      const valid = v.validate(req.params, schema)
      if(valid.errors.length) {
        return res.status(400).json({ message: "Invalid ID, please enter a Valid ID"})
      }

      if (!req.params.id)
    return res.status(400).send({ message: "Missing student id in URL" });
    
      const _id = req.params.id;
      const getStudentRecordsIndividual = await StudentRanking.findById(_id)
      res.send(getStudentRecordsIndividual);
  
    } catch (error) {
      console.log(error)
      res.status(400).send({message: error})
    }
  }

  module.exports = {readingIndividualStudentRequest}