const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = await User.create({
      name,
      email,
      username,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyValue.email) {
        res.status(400).json({ message: "Email already exists" });
      } else if (error.keyValue.username) {
        res.status(400).json({ message: "Username already exists" });
      }
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyValue.email) {
        res.status(400).json({ message: "Email already exists" });
      } else if (error.keyValue.username) {
        res.status(400).json({ message: "Username already exists" });
      }
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await User.deleteOne({ _id: req.params.id });
      res.json({ message: "User removed" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    if (error.name === "CastError" && error.kind === "ObjectId") {
      res.status(400).json({ message: "Invalid user ID" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
