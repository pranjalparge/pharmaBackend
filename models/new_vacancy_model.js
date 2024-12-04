const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    job_title : { type: String, required : true},
    company_name: { type: String, required: true },
    experience: { type: String, required: true, },
    valid_upto : { type: String,},
       img : { type: String, },
          decription : { type: String, },

          heading1:{ type: String,},
          content1:{ type: String,},
          heading2:{ type: String,},
          content2:{ type: String,},
          heading3:{ type: String,},
          content3:{ type: String,},
          link:{ type:String, } 

});


const Graph = mongoose.model("new_vacancy", jobSchema);
module.exports = Graph;
