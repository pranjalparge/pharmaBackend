// const User = require("../models/user_model");
const Graph = require("../models/new_vacancy_model");

exports.addVacancy = async (req, res) => {
  const { job_title, company_name, experience, valid_upto,img,decription ,  content1,
    heading1,
    content2,
    heading2, content3,
    heading3} = req.body;

  try {
    // Create a new graph entry
    const vacancy = new Graph({
      job_title,
      company_name,
      experience,
      valid_upto,
      img,
      decription,
      content1,
      heading1,
      content2,
      heading2, content3,
      heading3


    });

    // Save the graph to the database
    await vacancy.save();

    // Respond with success
    return res.status(200).json({
      status: true,
      message: "Vacancy added successfully",
      jobId: vacancy._id,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const uid = req.uid;
    console.log(req.params, "req");

    const vacancy = await Graph.findById(jobId);
    console.log(vacancy, "vacancy");

    // return;
    if (!vacancy) {
      return res
        .status(404)
        .json({ status: false, message: "Vacancies not found." });
    }
    await Graph.findByIdAndDelete({ _id: jobId });

    return res.status(200).json({
      status: true,
      message: "Graph deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// exports.GetAllJob = async (req, res) => {
//   // const uid =

//   const uid = req.uid;

//   try {
//     const userWithGraphs = await User.findById(uid).populate("graphList");
//     if (!userWithGraphs) {
//       return res
//         .status(200)
//         .json({ status: false, message: "No user available." });
//     }

//     return res.status(200).json({
//       status: true,
//       message: "User graphs fetched successfully",
//       graphs: userWithGraphs.graphList, // Return the populated graphList
//     });
//   } catch (error) {
//     return res.status(500).json({ status: false, message: error.message });
//   }
// };

exports.GetAllJob = async (req, res) => {
  try {
    // Fetch all jobs from the Graph collection
    const allJobs = await Graph.find();

    // Check if any jobs are available
    if (allJobs.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No jobs available.",
      });
    }

    // Respond with the job data
    return res.status(200).json({
      status: true,
      message: "Jobs fetched successfully.",
      jobs: allJobs,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
