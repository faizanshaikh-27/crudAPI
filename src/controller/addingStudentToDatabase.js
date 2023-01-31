const StudentRanking = require("../models/stud");
var Validator = require('jsonschema').Validator;
var v = new Validator();

const schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer', minimum: 18 },
      subject: {
        type: 'array',
        minItems: 3,
        maxItems: 3,
        items: {
          type: 'string',
          enum:['English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Algebra', 'Geometry']
        },
        required: true
      },
      gender: { type: 'string', required: true, enum: ['Male', 'Female'] },
      ranking: { type: 'integer' }
    }
  }
  // post Request
  const addingStudentRequest = async (req, res) => {
    try {
      const valid = v.validate(req.body, schema)
      if (valid.errors.length) {
        return res.status(400).json({ errors: valid.errors })
      }
        const addingStudentRecords = new StudentRanking(req.body)
        console.log(req.body)
      const insertStudent = await addingStudentRecords.save();
      res.status(201).send(insertStudent);
  
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  module.exports= {addingStudentRequest}