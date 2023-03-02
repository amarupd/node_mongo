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

const createDocument = async () => {
    const abcd = new Playlist({
            
                name: 'piyush sir',
                Dob: '11-march-1981',
                occupation: 'software engineer',
                role: 'TPO of company',
                membersince: 13
            })
        const abcd1 = new Playlist({name: 'kishan sir',
        Dob: '11-march-1981',
        occupation: 'software engineer',
        role: 'TPO of company',
        membersince: 13})
    const fhfh=new Playlist({
        
            name: 'ashish sir',
            Dob: '11-march-1981',
            occupation: 'software engineer',
            role: 'TPO of company',
            membersince: 13
        
    })

    const ress = await abcd.save();
    const ress1 = await abcd1.save();
    const ress2 = await fhfh.save();
    console.log('data saved succesfully' + ress+ress1+ress2);
}
createDocument();

