const express = require("express");
const StudentRanking = require("../models/stud");
var Validator = require('jsonschema').Validator;
var v = new Validator();

const addressSchema = {
    id: '/SimpleAddress',
    type: 'object',
    properties: {
      subject1: { type: 'string' },
      subject2: { type: 'string' },
      subject3: { type: 'string' }
    },
    required: ['subject1', 'subject2', 'subject3']
  }
  
  // Person
  const schema = {
    id: '/SimplePerson',
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer', minimum: 18 },
      subject: { $ref: '/SimpleAddress' },
      gender: { type: 'string', required: true }
    }
  }
  
  const p = {
    name: 'Faizan',
    subject: {
      subject1: 'English',
      subject2: 'Hindi',
      subject3: 'Marathi'
    },
    age: 23,
    gender: 'Male'
  }

  v.addSchema(addressSchema, '/SimpleAddress')
console.log(v.validate(p, schema))

const postRequest = async(req, res) => {
    try{
        const valid = v.validate(req.body, schema)
        if(!valid) {
         return res.status(400).json({errors: valid.errors})
        }
        const addingStudentRecords = new StudentRanking(req.body)
        console.log(req.body)
      const insertStudent = await addingStudentRecords.save();
      res.status(201).send(insertStudent);

    }catch(error){
        res.status(400).send(error)
    }
}

const getRequest = async(req, res) => {
    try{
        const getStudentRecords = await StudentRanking.find({}).sort({"ranking":1})
      res.send(getStudentRecords);

    }catch(error){
        res.status(400).send(error)
    }
}

const getIndividualRequest = async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findById(_id)
      res.send(getStudentRecordsIndividual);

    }catch(error){
        res.status(400).send(error)
    }
}

const patchIndividualRequest = async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })
      res.send(getStudentRecordsIndividual)

    }catch(error){
        res.status(500).send(error)
    }
}

const deleteIndividualRequest = async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findByIdAndDelete(_id)
      res.send(getStudentRecordsIndividual);

    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {postRequest, getRequest, getIndividualRequest, patchIndividualRequest, deleteIndividualRequest}