const express = require("express")
const router = new express.Router()
const StudentRanking = require("../models/stud")
const {postRequest} = require("../controller/controller")
const {getRequest} = require("../controller/controller")
const {getIndividualRequest} = require("../controller/controller")
const {patchIndividualRequest} = require("../controller/controller")
const {deleteIndividualRequest} = require("../controller/controller")

router.post("/", postRequest)
router.get("/", getRequest )
router.get("/:id", getIndividualRequest)
router.patch("/:id", patchIndividualRequest)
router.delete("/:id", deleteIndividualRequest)

module.exports = router;