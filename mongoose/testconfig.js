const mongoose = require('mongoose')
const cuid = require('cuid')
const connect = require('./exercises/connect')
const url = 'mongodb+srv://km-repota:uCOUWZHKyxvb1ZVH@bro-keeper-e5kfj.mongodb.net/scott?retryWrites=true&w=majority'

global.newId = () => {
  return mongoose.Types.ObjectId()
}

beforeEach(async done => {
  const db = cuid()
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function () { })
    }
    return done()
  }
  if (mongoose.connection.readyState === 0) {
    try {
      await connect(url + db)
      clearDB()
    } catch (e) {
      throw e
    }
  } else {
    clearDB()
  }
})
afterEach(async done => {
  return done()
})
afterAll(done => {
  mongoose.disconnect()
  return done()
})
