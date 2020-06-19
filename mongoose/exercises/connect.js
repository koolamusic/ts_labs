const mongoose = require('mongoose')
const connect = (url) => mongoose.connect(url)


const sourceModel = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId(),
    },
    source: {
        type: String, // would be unique per customerId or schoolId
        required: true
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    project: String,
    events: [{
        reader: String,
        status: String,
    }]

}, { timestamps: true });


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

// Virtual for Students
student.virtual('_total').get(function () {
    console.log("WE HIT VIRTUAL")
    return this.favFoods.length
})

// Compound Index for Source Model
sourceModel.index({
    source: 1,
    project: 1
}, { unique: true })

const StudentModel = mongoose.model('student', student);
const SourceModel = mongoose.model('source', sourceModel);

// run the mongoose.connect function which is a promise
const connectUrl = `mongodb+srv://Sasa:Mocic@cluster0-vdqqe.mongodb.net/UnchainedCarrot?retryWrites=true&w=majority`
connect(connectUrl)
    .then(async connection => {
        // let student = await StudentModel.create({ firstName: "Red", favFoods: ['3', 'e', 'x', 'r'] })
        // console.log(student)
        let result = await StudentModel.findOne({ _id: '5eecce917edab1344514780e' }).exec()
        console.log(result._total)

        // Create Compound indexes for an element
        // 5eecce917edab1344514780e
        let source = await SourceModel.create({
            source: 'mixpanel',
            schoolId: '5eecce917edab1344514780e',
            project: 'restaurant',
            events: {
                reader: "click",
                status: 'success',
            }
        })
        // let source = await SourceModel.find({ source: 'segment' }).exec();
        // let milk = await SourceModel.findByIdAndDelete({ _id: '5eecd63d4887f23d7d42bc81' }).exec()
        console.log("hold on", source)
    })
    .catch(e => console.error(e))



//     _id: 5eecd61f54219c3d4e9a21e7,
//   source: 'segment',
//   schoolId: 5eecce917edab1344514780e,
//   project: 'restaurant',
//   events: [ { _id: 5eecd62154219c3d4e9a21e8, status: 'success' } ],
//   createdAt: 2020-06-19T15:13:37.524Z,
//   updatedAt: 2020-06-19T15:13:37.524Z,
//   __v: 0