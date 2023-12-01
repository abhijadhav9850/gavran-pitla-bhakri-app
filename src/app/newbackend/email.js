const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

// Generate a 6-digit OTP
// const otp = otpGenerator.generate(6, {
//   upperCase: false,
//   specialChars: false,
//   alphabets: false,
// });

var val = Math.floor(100000 + Math.random() * 999999);

// Replace 'your_email@gmail.com' with the recipient's email address
const toEmail = "shubhamsalunkhe19202@gmail.com";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pitlabhakri1@gmail.com",
    pass: "PitlaBhakri@123",
  },
});

// Define the email options
const mailOptions = {
  from: "pitlabhakri1@gmail.com",
  to: toEmail,
  subject: "Your OTP Code",
  text: `Your OTP code is: ${val}`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
