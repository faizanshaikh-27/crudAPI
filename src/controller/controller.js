const express = require("express");
const StudentRanking = require("../models/stud");

const postRequest = async(req, res) => {
    try{
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
      res.send(getStudentRecordsIndividual);

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