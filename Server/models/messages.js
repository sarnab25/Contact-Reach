const mongoose= require("mongoose")
const messageSchema = new mongoose.Schema({
    contact_name:
    {
        type:String,
        required:true,
    },
    otp:
    {
        type:Number,
        required:true,
    },

    dataSent:
    {
type:Date,
default:Date.now
    }
})

const Message = mongoose.model("Message", messageSchema)
module.exports=Message