const mongoose = require("mongoose")

const studentSchema  = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user._id",
        default:null
    },

    schoolid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"School._id",
        default:null
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

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student