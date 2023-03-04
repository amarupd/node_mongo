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
// const getDocument=async()=>{
//     const result=await Playlist.find();
//     console.log(result);
// }
// getDocument();

// const getDocument1=async()=>{
//     const result=await Playlist.find({membersince: 12}).select({name:1}).limit(3)
//     console.log(result);
// }
// getDocument1();


// const getDocument1=async()=>{
//     const result=await Playlist.find().select({_id:0,name:1}).limit(2)
//     console.log(result);
// }
// getDocument1();


// const getDocument2 = async () => {
//     const result = await Playlist.find({ membersince: 12 })
//         .select({ _id: 0, name: 1, occupation: 1 });
//     let mappedArray = result.map(item => item.name);
//     const str = mappedArray.toString();
//     var string = str.split(",");
    
//     console.log(string[0])
//     console.log(string[1])

// }
// getDocument2();


// const getDocument = async () => {
//     const result = await Playlist.find({ membersince: 12 })
//         .select({ _id: 0, name: 1, occupation: 1 });
//     let mappedArray = result.map(item => item.name);
//     const str = mappedArray.toString();
//     var string = str.split(",");
//     let mappedArra = result.map(item => item.occupation);
//     const str1 = mappedArra.toString();
//     var occ = str1.split(",");
//     console.log(string[0]+' working as '+occ[0])
//     console.log(string[1]+' working as '+occ[1])

//     console.log(result);

// }
// getDocument();


const getDocument1=async()=>{
    const result=await Playlist.find({membersince:{$gte:16}}).select({_id:0,name:1})
    console.log(result);
}
getDocument1();