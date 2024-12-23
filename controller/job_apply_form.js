// const User = require("../models/user_model");
const candidate = require("../models/candidate_model");

exports.addForm = async (req, res) => {
  const { name, email, company_name, phone, } =
    req.body;

  try {
    // Create a new graph entry
    const vacancy = new candidate({
      name,
      email,
      phone,
      company_name,
    });

    console.log("email -- "+ email);

    await vacancy.save();


    // Respond with success
    return res.status(200).json({
      status: true,
      message: "You have applied successfully",
      new_id: vacancy._id,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
