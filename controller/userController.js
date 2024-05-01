const Users = require('../models/userModel.js');

const getAllUsers = async(req, res)=>{
  try {
    const userData = await Users.find();
    res.status(200).json({
      message : "All User",
      success : true,
      data : userData
    })
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}

// nodemailer use 
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kongkonjowarder79@gmail.com',
    pass: 'drlk ytdz temz jkgz'
  }
});
const postUser = async (req, res)=>{
  const {email, subject, message} = req.body;
  console.log(req.body)

  // nodemailer use
  let mailOptions = {
    from: 'kongkonjowarder79@gmail.com',
    to: email,
    subject: subject,
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  // database use
  try {
    const { email, subject, message } = req.body;
    const newUser = new Users({
        email,
        subject,
        message
    });
    const userData = await newUser.save();
    console.log(userData);
    res.status(200).json({
        message: "Created user",
        data: userData,
        success: true
    });
} catch (error) {
    res.status(500).json({ message: error.message });
}


}

// delete user 
const deleteUser = async(req, res)=>{
  try {
    const id = req.params.id;
    const userData = await Users.findByIdAndDelete({_id:id})
    console.log(usersData)
    res.status(200).json({
      message : "Delete User",
      data : userData,
      success : true
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {getAllUsers, postUser, deleteUser}