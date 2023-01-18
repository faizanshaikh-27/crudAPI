const express = require("express")
const router = new express.Router()

// requiring from schema model export
const StudentRanking = require("../models/stud")



// app.post, app.get will change to router.post, router.get when its moved to another file path(router)

//we will handle a post request
router.post("/student", async(req, res) => {
    try{
        const addingStudentRecords = new StudentRanking(req.body)
        console.log(req.body)
      const insertStudent = await addingStudentRecords.save();
      res.status(201).send(insertStudent);

    }catch(e){
        res.status(400).send(e)
    }
})


//we will handle a get request
router.get("/student", async(req, res) => {
    try{
        const getStudentRecords = await StudentRanking.find({}).sort({"ranking":1})
      res.send(getStudentRecords);

    }catch(e){
        res.status(400).send(e)
    }
})


//we will handle a get request of individual
router.get("/student/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findById(_id)
      res.send(getStudentRecordsIndividual);

    }catch(e){
        res.status(400).send(e)
    }
})


//we will handle a patch request of individual
router.patch("/student/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })
      res.send(getStudentRecordsIndividual);

    }catch(e){
        res.status(500).send(e)
    }
})


//we will handle a delete request of individual
router.delete("/student/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getStudentRecordsIndividual = await StudentRanking.findByIdAndDelete(_id)
      res.send(getStudentRecordsIndividual);

    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;