const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    favouriteAnime: String,
    

})



module.exports = mongoose.model('User', UserSchema)
