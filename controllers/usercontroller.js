const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();

/************
 * User Signup
 ************/

router.post("/create", async function (req, res) {
  try{

    let user = await User.create({
      userName: req.body.user.userName,
      email: req.body.user.email,
      passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13),
    })
    createSuccess(user)
    function createSuccess(user) {
      let token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 24 }
      );
      res.status(200).json({
        user: user,
        message: "User successfully Signed Up",
        sessionToken: token,
      });
    }
    

  }catch(e){
    res.status(500).json({message: e.message})
  }
});

/************
 * User Login
 ************/

router.post("/login", async function (req, res) {
  try{

    // Create a variable to store the promise
    let user = await User.findOne({
      where: {
        userName: req.body.user.userName,
      },
    })
  
  loginSuccess(user)
    function loginSuccess(user) {
        if (user) {
          bcrypt.compare( req.body.user.passwordhash, user.passwordhash, 
            function (err, matches) {
              if (matches) {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                  expiresIn: 60 * 60 * 24,
                });
  
                res.status(200).json({
                  user: user,
                  message: "User successfully logged in!",
                  sessionToken: token,
                });
              } else {
                res.status(502).send({ error: "Login Failed" });
              }
            }
          );
        } else {
          res.status(500).json({ error: "User does not exist." });
        }
      }
  }catch(e){
    res.status(500).json({message: e.message})
  }
});

module.exports = router;
