const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretkey = "@123";
const saltround = 10;

async function register(req, res) {
  const details = req.body;
  const email = details.email;
  console.log(details);
 
    const hashpassword = bcrypt.hashSync(details.password,saltround);
  
  
  const temp = {
    userName: details.userName,
    mobile: details.mobile,
    email: details.email,
    password: hashpassword,
  };
  try {
    const find = await User.findOne({ email: email });
    if (find) {
      return res.send({ msg: "user is already exist" });
    }

    const result = await User.create(temp);
    const token = jwt.sign({ email: details.email,userName:details.userName }, secretkey, {
      expiresIn: "2d",
    });
    return res.send({ msg: "user Register successfully", token: token });
  } catch (e) {
    res.send("error",e);
  }
}

const login = async (req, res) => {
  const data = req.body;
  const email = data.email;
  const user = await User.findOne({ email: email });
  console.log("user data",user)
  if (user) {
    const password = bcrypt.compareSync(data.password, user.password);
    if (password) {
      const token = jwt.sign({ email: data.email,userName:user.userName }, secretkey, {expiresIn: "5d"});
      return res.send({ msg: "Success", token: token });
    } else {
      return res.send({ msg: "password is wrong" });
    }
  } else {
    return res.send({ msg: "user Not exist" });
  }
};
const cart=(req,res)=>{
  res.send({})
}

module.exports = { login, register,cart};
