const { log } = require('console')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/CWAblog')
.then(()=>console.log('connection is established'))
.catch((err)=>console.log(err))
const playlistSchema=mongoose.Schema({
    name: String,
    Dob: String,
    occupation: String,
    role: String,
    membersince: Number,
    date:{
        type: date,
        default: Date.now
    }
})