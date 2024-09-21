const express = require("express")
const messageController = require("../controllers/messages.js")
const router = express.Router()
router.get("/get", messageController.getallMessages)
module.exports=router