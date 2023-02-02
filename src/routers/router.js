const express = require("express")
const router = new express.Router()
const StudentRanking = require("../models/stud")
const { addingStudentRequest, addingMiddleware } = require("../controller/addingStudentToDatabase") //post
const { readingStudentRequest } = require("../controller/readingStudentInDatabase") //get
const { readingIndividualStudentRequest, readingMiddleware } = require("../controller/readingIndividualStudentInDatabase") //get individual
const { updatingIndividualStudentRequest, updatingMiddleware } = require("../controller/updatingStudentInDatabase") // patch individual
const { deletingIndividualStudentRequest, deletingMiddleware } = require("../controller/deletingStudentInDatabase")

router.post("/", addingMiddleware, addingStudentRequest)
router.get("/", readingStudentRequest)
router.get("/:id", readingMiddleware, readingIndividualStudentRequest)
router.patch("/updatingIndividualStudentRequest", updatingMiddleware, updatingIndividualStudentRequest)
router.delete("/:id",deletingMiddleware, deletingIndividualStudentRequest)

module.exports = router;