const mongoose = require("mongoose")

const roleSchema  = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    scope:{
        type: String,
        required: true,
        
    },

    createddate:{
        type: Date, 
        required: true, 
        default: Date.now
    },

    updatedate:{
        type: Date, 
        required: true, 
        default: Date.now
    }
})

const Role = new mongoose.model("Register", roleSchema);
module.exports = Role