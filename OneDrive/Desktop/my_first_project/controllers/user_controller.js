const users = require("../model/user_model");
const jwt = require("../jwt");

//create
exports.createUserData = async (req, res) => {
  try {
    const user = new users({
      name: req.body.name,
      mobile: req.body.mobile,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      birthDate: req.body.birthDate,
    });

    const saveUser = await user.save();
    res.send({
      error: false,
      statusCode: 200,
      message: "User created successfully",
      data: saveUser,
    });
  } catch (error) {
    if (error.code && error.code == 11000) {
      res.status(400).send({
        error: true,
        statusCode: 404,
        message: "Mobile number must be unique and required",
      });
    } else if (
      error.errors &&
      error.errors.mobile &&
      error.errors.mobile.message
    ) {
      res.status(400).send({
        error: true,
        statusCode: 404,
        message: error.errors.mobile.message,
      });
    } else {
      res.status(400).send({
        error: true,
        statusCode: 404,
        message: error,
      });
    }
  }
};

//login page
exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    let userData = await users.findOne({ email: email });
    console.log(typeof userData);
    if (userData) {
      if (userData.password == password) {
        const token = await jwt.generateAuthToken(userData._id);

        userData = userData.toObject();
        delete userData.password;

        res.json({
          error: false,
          statusCode: 200,
          message: "Login successfully",
          token: token,
          data: userData,
        });
      } else {
        res.json({
          error: true,
          statusCode: 200,
          message: "Invalid password",
        });
      }
    } else {
      res.json({
        error: true,
        statusCode: 204,
        message: "Account not found",
      });
    }
  } catch (error) {
    res.json({
      error: true,
      statusCode: 404,
      message: error.message,
    });
  }
};
