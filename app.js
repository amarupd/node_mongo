const { log } = require('console')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/CWAblog')
    .then(() => console.log('connection is established'))
    .catch((err) => console.log(err))
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Dob: String,
    occupation: String,
    role: String,
    membersince: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model('Playlist', playlistSchema)

// const createDocument = async () => {
//     const abcd = new Playlist({
            
//                 name: 'fsdgwegg sir',
//                 Dob: '11-march-1981',
//                 occupation: 'software engineer',
//                 role: 'TPO of company',
//                 membersince: 13
//             })
//         const abcd1 = new Playlist({name: 'gdfgge sir',
//         Dob: '11-march-1981',
//         occupation: 'software engineer',
//         role: 'TPO of company',
//         membersince: 13})
//     const fhfh=new Playlist({
        
//             name: 'dfgtgrg sir',
//             Dob: '11-march-1981',
//             occupation: 'software engineer',
//             role: 'TPO of company',
//             membersince: 13
        
//     })

//     const ress = await Playlist.insertMany([abcd,abcd1,fhfh])
//     console.log('data saved succesfully' + ress);
// }
const getDocument=async()=>{
    const result=await Playlist.find();
    console.log(result);
}
getDocument();