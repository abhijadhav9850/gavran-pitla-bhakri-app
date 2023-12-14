// const { Sequelize, DataTypes } = require("sequelize");
// const nodemailer = require("nodemailer");
// var bodyParser = require("body-parser");
// const express = require("express");
// var cors = require("cors");
// const unirest = require("unirest");
// const async = require("rxjs");
// const app = express();
// const port = 5432;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

// const sequelize = new Sequelize("pitla_bhakri", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   define: {
//     timestamps: false,
//   },
// });

// const Users = sequelize.define(
//   "users",
//   {
//     UserId: { type: DataTypes.INTEGER, primaryKey: true },
//     UserName: { type: DataTypes.STRING, allowNull: false },
//     UserAddress: { type: DataTypes.STRING },
//     UserCity: { type: DataTypes.STRING },
//   },
//   { tableName: "users" }
// );

// const Payment = sequelize.define(
//   "payment",
//   {
//     PaymentId: { type: DataTypes.INTEGER, primaryKey: true },
//     PaymentMethod: { type: DataTypes.STRING },
//   },
//   { tableName: "payment" }
// );

// const Order_Data_Table = sequelize.define(
//   "order_data_table",
//   {
//     ID: { type: DataTypes.INTEGER, primaryKey: true },
//     bhakri: { type: DataTypes.INTEGER },
//     pithla: { type: DataTypes.INTEGER },
//     test: { type: DataTypes.STRING },
//     totalPrice: { type: DataTypes.INTEGER },
//   },
//   { tableName: "order_data_table" }
// );

// const Product = sequelize.define(
//   "product",
//   {
//     ProductId: { type: DataTypes.INTEGER, primaryKey: true },
//     ProductName: { type: DataTypes.STRING, allowNull: false },
//     Quantity: { type: DataTypes.INTEGER },
//     Price: { type: DataTypes.INTEGER },
//   },
//   { tableName: "product" }
// );

// const Email_ID = sequelize.define(
//   "email_id_table",
//   {
//     ID: { type: DataTypes.INTEGER, primaryKey: true },
//     Email_ID: { type: DataTypes.STRING, allowNull: false },
//   },
//   { tableName: "email_id_table" }
// );

// const Mobile_No = sequelize.define(
//   "mobile_no_table",
//   {
//     ID: { type: DataTypes.INTEGER, primaryKey: true },
//     Mobile_No: { type: DataTypes.STRING, allowNull: false },
//     OTP_No: { type: DataTypes.INTEGER, allowNull: false },
//   },
//   { tableName: "mobile_no_table" }
// );

// async function start() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (err) {
//     console.log("unable to connect to the database:", err.message);
//   }
// }

// start();

// let otpvalue;

// app.post("/User/Add", async (req, res) => {
//   let Add = await Users.create(req.body);
//   res.send(Add);
//   console.log(Add);
// });

// app.get("/User/Findall", async (req, res) => {
//   const list = await Users.findAll();
//   console.log("All available columns in Table: ", list);
//   res.send(list);
// });

// app.get("/User/EmailID", async (req, res) => {
//   try {
//     if (!req.body || !req.body.Email_ID) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid request body" });
//     }

//     let otpvalue = Math.floor(1000 + Math.random() * 8888);

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "pitlabhakri1@gmail.com",
//         pass: "runkpscpbcjzhrkw",
//       },
//     });

//     let mailOptions = {
//       from: "pitlabhakri1@gmail.com",
//       to: req.body.Email_ID,
//       subject: `Your OTP is: ${otpvalue}`,
//     };

//     let result = await transporter.sendMail(mailOptions);
//     console.log("Email Sent Successfully");

//     res.json({ message: "Email sent successfully", otp: otpvalue });
//   } catch (error) {
//     console.log("Unable to Send OTP:", error);

//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// app.post("/Order_Details", async (req, res) => {
//   let Add = await Order_Data_Table.create(req.body);
//   res.json({ success: true, message: `Ordered Data` });
// });

// app.post("/Order_Details/Findall", async (req, res) => {
//   let list = await Order_Data_Table.findAll();
//   res.json({ success: true, message: `All available columns in Table: : ${list}` });
// });

// app.post("/Mobile_No/Send_OTP", async (req, res) => {
//   try {
//     // const apiKey =
//     //   "IkHy8BjOpAJ8ELcVuqbMRqkBVwEQKub5mgrCGacphfH1hvF9DmB5uU9kVaKs";
//     // const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

//     //  otpvalue = Math.floor(1000 + Math.random() * 8888);

//     // const smsData = {
//     //   variables_values: otpvalue,
//     //   route: "otp",
//     //   numbers: req.body.Mobile_No,
//     // };

//     // unirest
//     //   .post(apiUrl)
//     //   .headers({
//     //     authorization: apiKey,
//     //   })
//     //   .form(smsData)
//     //   .end((response) => {
//     //     if (response.error) {
//     //       console.error("Error:", response.error);
//     //       res.status(500).json({ error: "Internal Server Error" });
//     //     } else {
//     //       console.log(response.body);
//     //       // res.status(200).json(response.body);
//     //       res.status(200).json({ otpvalue: otpvalue, response: response.body });
//     //     }
//     //   });

//     otpvalue = 1234;
//     res.json(`otpvalue = ${otpvalue}`);
//   } catch (error) {
//     console.log("Unable to Send OTP:", error);
//     res.status(500).json({ success: false, message: "Failed to send OTP" });
//   }
// });

// app.post("/OTP/GetOTP", async (req, res) => {
//   try {
//     if (req.body.otp == otpvalue) {
//       res.json({ success: true, message: "OTP Verified" });
//     } else {
//       res.json({ success: false, message: "Invalid OTP" });
//     }
//   } catch (error) {
//     console.error("Error getting OTP:", error);
//     res.status(500).json({ success: false, message: "Failed to get OTP" });
//   }
// });

// app.post("/Mobile_No/Add", async (req, res) => {
//   let Add = await Mobile_No.create(req.body);
//   res.json(Add);
//   console.log(Add);
// });

// app.get("/Mobile_No/Findall", async (req, res) => {
//   const list = await Mobile_No.findAll();
//   console.log("All available columns in Table: ", list);
//   res.send(list);
// });

// app.get("/User/Update", async (req, res) => {
//   const update = await Users.update(req.query, {
//     where: { id: 1 },
//   });
//   res.send("User Updated Successfully: " + JSON.stringify(update));
//   console.log(update);
// });

// app.get("/User/Delete", async (req, res) => {
//   const Delete = await Users.destroy({
//     where: { UserName: req.query.UserName },
//   });
//   res.send(Delete);
//   console.log(`Deleted Row(s): ${Delete}`);
// });

// app.listen(port, () => {
//   console.log(`Using http://localhost:${port}/`);
// });
