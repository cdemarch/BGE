const User = require('/Users/kelseyphelps/WebstormProjects/bge/backend/models/user.js')
const jwt = require("jsonwebtoken");

// Create JWT
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// Login
// Login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);

    // Create a token
    const token = createToken(user._id);

    // Send the response with username and token
    return res.status(200).json({ username, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Signup
const signupUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body

  try {
    const user = await User.signup(username, password, firstName, lastName);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({username, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}


module.exports = {signupUser, loginUser}