const Contact = require("../models/contact.js")

module.exports.getallContacts=async(req,res)=>
{
    try {
        const allContacts = await Contact.find({})
res.status(200).json(allContacts)
    } catch (error) {
        res.status(400).json({error:error.message})

    }
}

module.exports.getDetails=async(req,res)=>
{
    try {
        const {id}=req.params
        const contact = await Contact.findById(id)
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports.createContact=async(req,res)=>
{
    try {
        const {Firstname, Lastname, Mobile}=req.body
        const newContact = new Contact(
            {
               fisrt_name:Firstname,
               last_name:Lastname,
               mobile_Number:Mobile, 
            })
    
            await newContact.save()
            res.status(200).json(newContact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports.deleteContact =async(req,res)=>
{
    try {
        const {id}=req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).json({message:"Contact deleted successfully"})
    } catch (error) {
        res.status(400).json({error:error.message})

    }
}