// this is email otp 
const nodemailer = require('nodemailer');
async function sendMail(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pitlabhakri1@gmail.com',
            pass: 'runkpscpbcjzhrkw'
        }
    })

    const otpvalue = Math.floor(1000 + Math.random() * 9999);
    const mailOptions ={
        from:'pitlabhakri1@gmail.com',
        to: 'shubhamsalunkhe19202@gmail.com',
        subject:`Your OTP is : ${otpvalue}`,
    }

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email Send Successfully');
    } catch (error) {
        console.log('Enable To Send OTP:', error);
    }

}
sendMail()
