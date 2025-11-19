import UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.createUser(email, password);
    res.status(201).json({ 
      success: true, 
      message: [{result: "A new user has been created!" }]
      });

  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}