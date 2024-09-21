const express = require("express")
const contactController = require("../controllers/contacts.js")

const router = express.Router()

router.get('/get', contactController.getallContacts)
router.get('/:id', contactController.getDetails)
router.post('/create', contactController.createContact)
router.delete('/delete/:id', contactController.deleteContact)
module.exports=router