const mongodb = require('mongodb');
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

module.exports = mongodb.model('Movie', movieSchema)
