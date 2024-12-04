// const User = require("../models/user_model");
const Contact = require("../models/contact");

exports.contactUs = async (req, res) => {
  const { name, email, company_name, phone,message } =
    req.body;

  try {
    // Create a new graph entry
    const vacancy = new Contact({
      name,
      email,
      phone,
      company_name,
      message,
    });

    console.log("email -- "+ email);

    await vacancy.save();


    // Respond with success
    return res.status(200).json({
      status: true,
      message: "Thanks for Your Response!!",
      id: vacancy._id,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
