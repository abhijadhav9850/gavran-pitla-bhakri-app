var bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const app = express();
var unirest = require("unirest");
const { data } = require("autoprefixer");
const port = 4000;
const uuid = require("uuid");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const pg = require("knex")({
  client: "pg",
  connection: {
    connectionString:
      "postgres://pithla_bhakri_user:yiRU6i6FUMJ0IIG2k2PCPhTYEfSFNkOe@dpg-cls291fqd2ns73dus3sg-a.oregon-postgres.render.com/pithla_bhakri",
    host: "dpg-cls291fqd2ns73dus3sg-a.oregon-postgres.render.com",
    port: 5432,
    user: "pithla_bhakri_user",
    database: "pithla_bhakri",
    password: "yiRU6i6FUMJ0IIG2k2PCPhTYEfSFNkOe",
    ssl: true,
  },
});

let Mobiledata = [];
let UserData = [];
let OrderData = [];
let OrderData1 = [];
let otpvalue;
let otpArray = [];

//login with jwt

const secretkey = "secretkey";

app.post("/login", (req, res) => {
  const user = {
    Mobile_No: req.body.Mobile_No,
  };
  console.log(user);
  jwt.sign({ user }, secretkey, { expiresIn: "100s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

function VerifiyToken(req, res, next) {
  const bearerHeder = req.headers["authorization"];
  if (typeof bearerHeder !== "undefined") {
    const bearer = bearerHeder.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "token in not valid",
    });
  }
}

function generateOTP() {
  const timestamp = Date.now(); // Get current timestamp
  const uniqueNumber = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
  const otp = (timestamp + uniqueNumber) % 10000; // Ensure a 4-digit number

  // Pad the OTP with zeros if it's less than 4 digits
  const paddedOTP = otp.toString().padStart(4, "0");

  return paddedOTP;
}

otpvalue = generateOTP();
console.log(otpvalue);

app.post("/profile", VerifiyToken, (req, res) => {
  jwt.verify(req.token, secretkey, (err, authdata) => {
    if (err) {
      res.send({
        result: "invalid token",
      });
    } else {
      res.json({
        massage: "profile accesess",
        authdata,
      });
    }
  });
});

//POST API FOR ADD USERS INTO THE DATABASE IF YOUR ALREADY EXIST THEN SEND RESPONSE AS USER PRESENT EITHER ADD NEW USER!
app.post("/Mobile_No/Add_User", async (req, res) => {
  try {
    const { Mobile_No } = req.body;
    let data = await pg
      .select("id", "mobileno", "register_id")
      .from("user_mobile");

    let userAlreadyExist = data.find((e) => e.mobileno == Mobile_No);

    if (userAlreadyExist) {
      // If user already exists, send a response
      return res.status(200).json({
        result: userAlreadyExist,
        message: "User already exists in the database!",
      });
    }
    if (!Mobile_No) {
      return res
        .status(400)
        .json({ success: false, message: "Mobile_No is required!" });
    }
    // Convert Mobile_No to a number
    const mobileno = parseInt(Mobile_No, 10);
    const token = await new Promise((resolve, reject) => {
      jwt.sign(
        { user: { Mobile_No: mobileno } },
        secretkey,
        { expiresIn: "100s" },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });
    const result = await pg("user_mobile").insert([
      {
        mobileno: mobileno,
        register_id: token,
      },
    ]);
    const obj = {
      mobileno: mobileno,
      register_id: token,
    };
    res
      .status(200)
      .json({ result: obj, message: "New User added in database!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//POST API FOR ADD USERS DETAILS INTO THE DATABASE!
app.post("/user/userDetails", async (req, res) => {
  try {
    let result = await pg("user_info").insert([
      {
        username: `${req.body.username}`,
        useraddress: `${req.body.useraddress}`,
        usercity: `${req.body.usercity}`,
        register_id: `${req.body.register_id}`,
      },
    ]);
    res
      .status(200)
      .json({ success: true, message: "User Data Added Successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//POST API FOR ADD ORDER DETAILS INTO THE DATABASE!
app.post("/OrderData/Details", async (req, res) => {
  try {
    let result = await pg("user_order").insert([
      {
        // ID: `${req.body.ID}`,
        bhakri: `${req.body.bhakri}`,
        pithla: `${req.body.pithla}`,
        test: `${req.body.test}`,
        totalprice: `${req.body.totalPrice}`,
        register_id: `${req.body.register_id}`,
      },
    ]);
    res
      .status(200)
      .json({ success: true, message: `Order Added Successfully!` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//POST API FOR SEND OTP FOR USER!
app.post("/Mobile_No/Send_OTP", async (req, res) => {
  try {
    const apiKey =
      "IkHy8BjOpAJ8ELcVuqbMRqkBVwEQKub5mgrCGacphfH1hvF9DmB5uU9kVaKs";
    const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

    function generateOTP() {
      const timestamp = Date.now(); // Get current timestamp
      const uniqueNumber = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
      const otp = (timestamp + uniqueNumber) % 10000; // Ensure a 4-digit number
      // Pad the OTP with zeros if it's less than 4 digits
      const paddedOTP = otp.toString().padStart(4, "0");
      return paddedOTP;
    }
    otpvalue = generateOTP();
    otpArray.push(otpvalue);
    const smsData = {
      variables_values: otpvalue,
      route: "otp",
      numbers: req.body.Mobile_No,
    };
    unirest
      .post(apiUrl)
      .headers({
        authorization: apiKey,
      })
      .form(smsData)
      .end((response) => {
        if (response.error) {
          console.error("Error:", response.error);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.status(200).json({ otpvalue: otpvalue, response: response.body });
        }
      });
  } catch (error) {
    console.log("Unable to Send OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

//POST API FOR CHECK ENTER OTP IS RIGHT OR WRONG!
app.post("/OTP/GetOTP", async (req, res) => {
  try {
    let otp = req.body.otp.toString()
    if (otpArray.includes(otp)) {
        res.status(200).json({ success: true, message: "OTP Verified Successfully!" });
      } else {
        res.status(200).json({ success: false, message: "Invalid OTP" });
      }
  } catch (error) {
    console.error("Error getting OTP:", error);
    res.status(500).json({ success: false, message: "Failed to get OTP" });
  }
});

//POST API FOR GET ORDER HISTORY OF LOGIN USER!
app.post("/getData", async (req, res) => {
  try {
    let users = [];
    let order_List = [];

    let getUsers = await pg
      .select("mobileno", "register_id")
      .from("user_mobile");
    users.push(...getUsers);

    let orders = await pg
      .select("id", "bhakri", "pithla", "test", "totalprice", "register_id")
      .from("user_order");
    order_List.push(...orders);

    let findUser = users.find((e) => e.mobileno == req.body.Mobile_No);
    let ordersList = order_List.filter(
      (e) => e.register_id === findUser.register_id
    );
    res.status(200).json({ Message: "successful", Result: ordersList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(port, (req, res) => {
  console.log(`Using Port http://localhost:${port}/`);
});
