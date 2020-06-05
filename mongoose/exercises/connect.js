const mongoose = require('mongoose')
const connect = (url) => mongoose.connect(url)

// create a new mongoose schema ===
const student = new mongoose.Schema({
    firstName: { type: String, unique: true, required: true },
    favFoods: [{ type: String }],
    info: {
        school: {
            type: String
        },
        shoeSize: {
            type: Number
        }
    }
})

const StudentModel = mongoose.model('student', student)

// run the mongoose.connect function which is a promise
const connectUrl = `mongodb+srv://km-repota:uCOUWZHKyxvb1ZVH@bro-keeper-e5kfj.mongodb.net/scott?retryWrites=true&w=majority`
connect(connectUrl)
    .then(async connection => {
        // let student = await StudentModel.create({ firstName: "Andrew" })
        // console.log(student)
    })
    .catch(e => console.error(e))