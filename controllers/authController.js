// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (!user || !(await user.comparePassword(password))) {
//     return res.status(401).json({ msg: "Invalid credentials" });
//   }

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "2h",
//   });

//   res.json({ token, user });
// };


// backend/controllers/authController.js
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
  const { username, password } = req.body;

  // Mock check (replace with actual DB check)
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '2h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const registerUser = (req, res) => {
  const { username, password } = req.body;
  // Save user logic goes here (e.g., save to DB)
  res.status(201).json({ message: 'User registered successfully' });
};

module.exports = {
  loginUser,
  registerUser,
};
