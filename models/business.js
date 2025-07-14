const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema(
    { //object
        name: String,
        category: String,
        description: String,
        location: String,
        phoneNumber: String,
        website: String,
        isVerified: {
            type: Boolean,
            default: false
        }
    }, { //option
        timestamps: true }
)

const Business = mongoose.model('Business', businessSchema)
module.exports = Business