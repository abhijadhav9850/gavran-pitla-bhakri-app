var bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken")
var cors = require("cors");
const app = express();
var unirest = require('unirest');
const { data } = require("autoprefixer");
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

let Mobiledata = [];
let UserData = []
let OrderData = []
let OrderData1 = []
let otpvalue;

//login with jwt

const secretkey = "secretkey"

app.post("/login",(req,res)=>{
  const user ={
    Mobile_No : 8010154150,
  }
  jwt.sign({user},secretkey,{expiresIn:'100s'},(err,token) => {
    res.json({
      token
    })
  })
})

function VerifiyToken(req,res,next){
  const bearerHeder=req.headers['authorization'];
  if (typeof bearerHeder !== 'undefined') {
    const bearer = bearerHeder.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result:'token in not valid'
    })
  } 
}

app.post("/profile",VerifiyToken,(req,res)=>{
  jwt.verify(req.token,secretkey,(err,authdata)=>{
    if (err) {
      res.send({
        result:"invalid token"
      })
      
    } else {
      res.json({
        massage:"profile accesess",
        authdata
      })
    }
  })
})

// otp send working

app.post("/Mobile_No/Send_OTP", async (req, res) => {
  try {
    const apiKey = "IkHy8BjOpAJ8ELcVuqbMRqkBVwEQKub5mgrCGacphfH1hvF9DmB5uU9kVaKs";
    const apiUrl = "https://www.fast2sms.com/dev/bulkV2";

    otpvalue = Math.floor(1000 + Math.random() * 8888);

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
          console.log(response.body);
          res.status(200).json({ otpvalue: otpvalue, response: response.body });
        }
      });
  } catch (error) {
    console.log("Unable to Send OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

app.post("/Mobile_No/No_Add", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("mobile_no_table").insert([
        {
          // ID: `${req.body.ID}`,
          Mobile_No: `${req.body.Mobile_No}`,
        },
      ]);
      // Mobiledata.push(req.body.Mobile_No)
      // console.log(Mobiledata);
      res.json({ success: true, message: req.body.Mobile_No });
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

// ------new one add api-----
app.post("/User/userdata", (req, res) => {
  setTimeout(async () => {
    try {
      let result = await pg("user_data").insert([
        {
          username: `${req.body.username}`,
          useraddress: `${req.body.useraddress}`,
          usercity: `${req.body.usercity}`,
          mobile_no: `${req.body.mobile_no}`,
          otp: `${req.body.otp}`,
        },
      ]);
      res.json({ success: true, message: `User Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});


app.post("/OrderData/Details", async (req, res) => {
  try {
    let result = await pg("order_data_table").insert([
      {
        // ID: `${req.body.ID}`,
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
});

app.post("/OrderData/Data", async (req, res) => {
  try {
    let result = await pg("order_data").insert([
      {
        // ID: `${req.body.ID}`,
        bhakri: `${req.body.bhakri}`,
        pithla: `${req.body.pithla}`,
        test: `${req.body.test}`,
        totalprice: `${req.body.totalprice}`,
        // user_id:user_id
      },
    ]);
    res.json({ success: true, message: `User Added : ${result}` });
  } catch (err) {
    console.log(err);
  }
});

app.get("/Get_OrderData", async (req, res) => {
  try {
    let data = await pg.select('ID', 'bhakri', 'pithla', 'test', 'totalPrice')
    .from('order_data_table')
    OrderData.push(data)
    res.json(data)
  } catch (error) {
    console.log(err);
  }
})

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

app.post("/UserAll/Data", (req, res) => {
  setTimeout(async () => {
    try {
      console.log(req.body);
      return
      let result = await pg("user_data").insert([
        {
          Mobile_No: `${req.body.Mobile_No}`,
          UserName: `${req.body.UserName}`,
          UserAddress: `${req.body.UserAddress}`,
          UserCity: `${req.body.UserCity}`,
          bhakri: `${req.body.bhakri}`,
          pithla: `${req.body.pithla}`,
          test: `${req.body.test}`,
          totalPrice: `${req.body.totalPrice}`,
        },
      ]);
      res.json({ success: true, message: `No Added : ${result}` });
    } catch (err) {
      console.log(err);
    }
  }, 5000);
});

// get Data 
app.get("/Get_Mobile_No", async (req,res)=>{
  try {
    let data = await pg.select('ID', 'Mobile_No')
  .from('mobile_no_table')
  Mobiledata.push(data)
  res.json({success:true,message:Mobiledata})
  } catch (error) {
    console.log(err);
  }
})

app.get("/Get_userData", async (req,res)=>{
  try {
    let data = await pg.select('ID', 'UserName','UserAddress','UserCity')
  .from('users')
  UserData.push(data)
  res.json({success:true,message:UserData})
  // console.log(UserData);
  } catch (error) {
    console.log(err);
  }
})

app.post("/getData", async (req, res) => {
  try {
    let allData = []; 
    let order_List = []

    let data1 = await pg.select('ID', 'Mobile_No').from('mobile_no_table');
    allData.push(...data1);

    let data3 = await pg.select('ID', 'bhakri', 'pithla', 'test', 'totalPrice').from('order_data_table');
    order_List.push(...data3);

    let obj = allData.filter(e => e.Mobile_No == req.body.Mobile_No)

    let obj2 = []
    
    function findData(ID) {
      const idObj = order_List.filter(e => e.ID == ID)
      obj2.push(idObj)
    }


    obj.forEach(e => {
      findData(e.ID)
    })

    let orderList = obj2.flat()
    console.log(orderList);
    
    res.json({ success: true, message: orderList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get("/User/List", (req, res) => {
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

app.listen(port, (req, res) => {
  console.log(`Using Port http://localhost:${port}/`);
});
