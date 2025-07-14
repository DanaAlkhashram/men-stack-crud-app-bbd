const mongoose = require('mongose');

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
            defualt: false,
        }, 
    },{ //option
        timestamps: true,
    }
)

const Business = mongoose.model('Business'.businessSchema);
model.exports = Business;