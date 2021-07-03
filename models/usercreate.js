const mongoose = require("mongoose")

const usercreateSchema  = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required:true,
        unique:true
    },

    password:{
        type: String,
        required: true,
        
    },

    createddate:{
        type: Date, 
        required: true, 
        default: Date.now
    },

    roleid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Register._id",
        default:null
    },

    updateddate:{
        type: Date, 
        required: true, 
        default: Date.now
    }
})

const Usercreate = new mongoose.model("user", usercreateSchema);
module.exports = Usercreate