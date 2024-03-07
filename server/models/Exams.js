const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Creating a new schema for the exam */

const ExamSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    prof_email: {
      type: String,
      required: true
    },
    exam_link: {
      type: String,
      required: true
    },
    
    date_time_start:{
        type: Date,
        required:true
    },
    duration:{
      type: Number,
      required:true
    },
    exam_code:{
      type:String,
      required:true
    }
    
  });

/* Export the model */

module.exports = User = mongoose.model("exams", ExamSchema);