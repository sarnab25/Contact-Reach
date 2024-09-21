const Message= require("../models/messages.js")

module.exports.getallMessages=async(req,res)=>
{
    try {
        const allMessages = await Message.find().sort({dataSent:-1})
        res.status(200).json(allMessages)
    } catch (error) {
        res.status(500).json({error:"Failed to fetch messages"})
    }
}