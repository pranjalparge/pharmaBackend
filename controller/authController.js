const User = require("../models/user_model");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, phone, company_name } = req.body;

    // if (role !== 'superadmin') {
    //   return res.status(403).json({ message: 'Only super admin can register users' });
    // }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(200)
        .json({ status: false, message: "Client already exists" });
    }
    const user = new User({ name, email, phone, company_name });
    await user.save();
    user.uid = user._id;
    user.save();
    return res
      .status(200)
      .json({ status: true, message: "Client registered successfully" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// exports.AddSite = async (req, res) => {
//   const { siteName, siteLocation, siteAddress } = req.body;
//   try{

//     const user = await User.findOneAndUpdate({ email });

//     const userData = user({siteName, siteAddress, siteLocation});

//     await userData.save();

//     User.siteName = siteName;
//     User.siteName = siteName;
//     User.siteName = siteName;

//   }catch(err) {
//     return res.status(500).json({ status: false,  message: err.message });
//   }
// }
exports.contactUs = async (req, res) => {
  const { name, email, phone } = req.body;
  // console.log(" name     " + name);
  // console.log(" email    " + email);
  // console.log(" password " + password);
  // console.log(" role     " + role);

  try {
    // if (role !== 'superadmin') {
    //   return res.status(403).json({ message: 'Only super admin can register users' });
    // }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(200)
        .json({ status: false, message: "Client already exists" });
    }
    const user = new User({ name, email, phone });
    await user.save();

    user.uid = user._id;
    user.save();
    return res
      .status(200)
      .json({ status: true, message: "Client registered successfully" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ status: false, message: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(200).json({ status: false, message: "Wrong password" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      status: true,
      token: token,
      uid: user.uid,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        site: user.siteName,
        site_address: user.siteAddress,
        site_location: user.siteLocation,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

exports.home = async (req, res) => {
  try {
    return res.status(201).json({ message: "API working successfully 2" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
