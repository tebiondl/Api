const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    job: String,
    income: String,
    

})

module.exports = mongoose.model('Job', JobSchema)