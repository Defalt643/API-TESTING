const mongoose = require('mongoose')
const Building = require('../model/Building')
mongoose.connect('mongodb://localhost:27017/example')

async function clear () {
  await Building.deleteMany({})
}
async function main () {
  await clear()
  await Building.insertMany([{
    name: 'ตึกวิทยาการสารสนเทศ',
    level: 11
  }, {
    name: 'ตึกสิรินธร',
    level: 5
  }])
}

main().then(function () {
  console.log('Finish')
})
