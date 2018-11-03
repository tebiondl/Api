const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: String,
    favouriteAnime: String,
    

})

module.exports = mongoose.model('Post', PostSchema)