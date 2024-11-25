const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    job_title : { type: String, required : true},
    company_name: { type: String, required: true },
    experience: { type: String, required: true, },
    valid_upto : { type: String, required : true},
       img : { type: String, },
          decription : { type: String, }
});


const Graph = mongoose.model("new_vacancy", jobSchema);
module.exports = Graph;
