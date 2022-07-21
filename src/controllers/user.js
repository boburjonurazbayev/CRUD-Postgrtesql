const model = require("../models/user.js");

const GET = async (req, res) => {
  try {
    let users = await model.getUser();

    if (users) {
      res.status(200).json({
        status: 200,
        message: "succes",
        data: users,
      });
    }else throw new Error('error message')
  } catch (error) {
    console.error(error);
  }
};

const POST = async (req, res) => {
    try {
      let user = await model.postUser(req.body);
  
      if (user) {
        res.status(201).json({
          status: 201,
          message: "succes",
          data: user,
        });
      }else throw new Error('error message')
    } catch (error) {
      console.error(error);
    }
  };

  const PUT = async (req, res) => {
    try {
      let user = await model.putUser(req.body);
  
      if (user) {
        res.status(200).json({
          status: 200,
          message: "succes",
          data: user,
        });
      }else throw new Error('error message')
    } catch (error) {
      console.error(error);
    }
  };

  const DELETE = async (req, res) => {
    try {
      let user = await model.deleteUser(req.body);
  
      if (user) {
        res.status(204).json({
          status: 204,
          message: "deleted",
        });
      }else throw new Error('error message')
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
  GET,
  POST,
  PUT,
  DELETE
};
