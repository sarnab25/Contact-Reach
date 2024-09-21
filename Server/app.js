const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const Contact = require("./models/contact.js")
const Message = require("./models/messages.js")
const dotenv = require("dotenv")
const contactRouter = require("./routes/contacts.js")
const messageRouter = require('./routes/messages.js')
const twilio = require("twilio");
const app = express()
dotenv.config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const dbURL = process.env.ATLAS_URL

main().then(()=>
{
    console.log("Connected to DB")
}).catch((err)=>
{
    console.log(err)
})

app.listen(7080, ()=>
{
    console.log("Server Listening on 7080")
})

async function main()
{
    await mongoose.connect(dbURL)
}

app.use(cors())
app.use(bodyParser.json())
app.use("/contacts", contactRouter)
app.use("/messages", messageRouter)

app.get('/', async(req,res)=>
{
    res.send("I am Root")
})

app.get("/test", async(req, res)=>
    {
        let newContact = new Contact(
            {
               fisrt_name:"Sarnab",
               last_name:"Ghosh",
               mobile_Number:9723233433, 
            })
    
            await newContact.save()
            console.log("Saved Contact")
            res.send("successfully saved")
    })
        
    app.post('/send/:fullName', async(req,res)=>
    {
        const {fullName}= req.params
        try {
            const OTP = Math.floor(100000+ Math.random()*900000)
            client.messages
                .create({
                    body:`Hi, Your OtP is ${OTP}`,
                            from: process.env.TWILIO_PHONE_NUMBER,
                    to: process.env.PHONE_NUMBER
                })

                const newMessage = new Message({
                    contact_name:fullName,
                    otp:OTP
                })

                await newMessage.save()
                res.status(200).json(OTP)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to send OTP' });

        }
  
    



    })