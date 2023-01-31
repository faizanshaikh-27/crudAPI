const mongoose = require("mongoose");
const StudentRanking = require("../models/stud");
var Validator = require('jsonschema').Validator;
var v = new Validator();



// get Request
const readingStudentRequest = async (req, res) => {
    try {
      const getStudentRecords = await StudentRanking.find({}).sort({ "ranking": 1 })
      res.send(getStudentRecords);
  
    } catch (error) {
      res.status(400).send(error)
    }
  }

  module.exports = {readingStudentRequest}