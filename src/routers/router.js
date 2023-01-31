const express = require("express")
const router = new express.Router()
const StudentRanking = require("../models/stud")
const {addingStudentRequest} = require("../controller/addingStudentToDatabase") //post
const {readingStudentRequest} = require("../controller/readingStudentInDatabase") //get
const {readingIndividualStudentRequest} = require("../controller/readingIndividualStudentInDatabase") //get individual
const {updatingIndividualStudentRequest} = require("../controller/updatingStudentInDatabase") // patch individual
const {deletingIndividualStudentRequest} = require("../controller/deletingStudentInDatabase")

router.post("/", addingStudentRequest)
router.get("/", readingStudentRequest )
router.get("/:id", readingIndividualStudentRequest)
router.patch("/updatingIndividualStudentRequest", updatingIndividualStudentRequest)
router.delete("/:id", deletingIndividualStudentRequest)

module.exports = router;