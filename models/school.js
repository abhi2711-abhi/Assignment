const mongoose = require("mongoose")

const schoolSchema  = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    city:{
        type: String,
        required: true
    },
    
    state:{
        type: String,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    createddate:{
        type: Date, 
        required: true, 
        default: Date.now
       
    },

    updateddate:{
        type: Date, 
        required: true, 
        default: Date.now
    }
})

const School = new mongoose.model("School", schoolSchema);
module.exports = School