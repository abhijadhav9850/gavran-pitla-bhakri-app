var bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const pg = require("knex")({
  client: "pg",
  connection: {
    connectionString:"postgres://pithla_bhakri_user:yiRU6i6FUMJ0IIG2k2PCPhTYEfSFNkOe@dpg-cls291fqd2ns73dus3sg-a.oregon-postgres.render.com/pithla_bhakri",
    host: "dpg-cls291fqd2ns73dus3sg-a.oregon-postgres.render.com",
    port: 5432,
    user: "pithla_bhakri_user",
    database: "pithla_bhakri",
    password: "yiRU6i6FUMJ0IIG2k2PCPhTYEfSFNkOe",
    ssl: true,
  },
});


app.post("/Mobile_No/Send_OTP", async (req, res) => {
  try {
    // const apiKey =
    //   "IkHy8BjOpAJ8ELcVuqbMRqkBVwEQKub5mgrCGacphfH1hvF9DmB5uU9kVaKs";
    // const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

    //  otpvalue = Math.floor(1000 + Math.random() * 8888);

    // const smsData = {
    //   variables_values: otpvalue,
    //   route: "otp",
    //   numbers: req.body.Mobile_No,
    // };

    // unirest
    //   .post(apiUrl)
    //   .headers({
    //     authorization: apiKey,
    //   })
    //   .form(smsData)
    //   .end((response) => {
    //     if (response.error) {
    //       console.error("Error:", response.error);
    //       res.status(500).json({ error: "Internal Server Error" });
    //     } else {
    //       console.log(response.body);
    //       // res.status(200).json(response.body);
    //       res.status(200).json({ otpvalue: otpvalue, response: response.body });
    //     }
    //   });

    otpvalue = 1234;
    res.json({message:"otp sent sucessfully",otp : otpvalue});
  } catch (error) {
    console.log("Unable to Send OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

app.post("/Mobile_No/No_Add", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("mobile_no").insert([
        {
          ID: `${req.body.ID}`,
          Mobile_No: `${req.body.Mobile_No}`,
          
        },
      ]);
      res.json({ success: true, message: `No Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/OTP/GetOTP", async (req, res) => {
  try {
    if (req.body.otp == otpvalue) {
      res.json({ success: true, message: "OTP Verified" });
    } else {
      res.json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error getting OTP:", error);
    res.status(500).json({ success: false, message: "Failed to get OTP" });
  }
});

app.post("/User/Add", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("users").insert([
        {
          UserId: `${req.body.UserId}`,
          UserName: `${req.body.UserName}`,
          UserAddress: `${req.body.UserAddress}`,
          UserCity: `${req.body.UserCity}`,
        },
      ]);
      res.json({ success: true, message: `User Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/MobileNo/Add", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("mobile_no_table").insert([
        {
          // ID: `${req.body.ID}`,
          Mobile_No: `${req.body.Mobile_No}`,
        },
      ]);
      res.json({ success: true, message: `User Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/Mobile_No/Send_OTP", async (req, res) => {
  try {
    // const apiKey =
    //   "IkHy8BjOpAJ8ELcVuqbMRqkBVwEQKub5mgrCGacphfH1hvF9DmB5uU9kVaKs";
    // const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

    //  otpvalue = Math.floor(1000 + Math.random() * 8888);

    // const smsData = {
    //   variables_values: otpvalue,
    //   route: "otp",
    //   numbers: req.body.Mobile_No,
    // };

    // unirest
    //   .post(apiUrl)
    //   .headers({
    //     authorization: apiKey,
    //   })
    //   .form(smsData)
    //   .end((response) => {
    //     if (response.error) {
    //       console.error("Error:", response.error);
    //       res.status(500).json({ error: "Internal Server Error" });
    //     } else {
    //       console.log(response.body);
    //       // res.status(200).json(response.body);
    //       res.status(200).json({ otpvalue: otpvalue, response: response.body });
    //     }
    //   });

    otpvalue = 1234;
    res.json(`otpvalue = ${otpvalue}`);
  } catch (error) {
    console.log("Unable to Send OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

app.post("/OrderData/Details", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("order_data_table").insert([
        {
          ID: `${req.body.ID}`,
          bhakri: `${req.body.bhakri}`,
          pithla: `${req.body.pithla}`,
          test: `${req.body.test}`,
          totalPrice: `${req.body.totalPrice}`,
        },
      ]);
      res.json({ success: true, message: `User Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/User/List", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg
        .select("UserId", "UserName", "UserAddress", "UserCity")
        .from("users");
      res.json({ success: true, message: `User Data : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/User/Update", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("users")
        .where("UserName", `${req.body.UserName}`)
        .update({ UserName: `${req.body.NewName}` });
      res.json({ success: true, message: `User Updated : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.post("/User/Delete", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("users")
        .where("UserName", `${req.params.UserName}`)
        .del();
      res.json({ success: true, message: `User Deleted : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

app.listen(port, (req, res) => {
  console.log(`Using Port http://localhost:${port}/`);
});
