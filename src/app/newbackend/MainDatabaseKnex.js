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
        connectionString: "postgres://pithla_bhakri_user:yiRU6i6FUMJ0IIG2k2PCPhTYEfSFNkOe@dpg-cls291fqd2ns73dus3sg-a.oregon-postgres.render.com/pithla_bhakri",
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

app.post("/login", (req, res) => {
    const user = {
        Mobile_No: 8010154150,
    }
    jwt.sign({ user }, secretkey, { expiresIn: '100s' }, (err, token) => {
        res.json({
            token
        })
    })
})

function VerifiyToken(req, res, next) {
    const bearerHeder = req.headers['authorization'];
    if (typeof bearerHeder !== 'undefined') {
        const bearer = bearerHeder.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.send({
            result: 'token in not valid'
        })
    }
}

app.post("/profile", VerifiyToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authdata) => {
        if (err) {
            res.send({
                result: "invalid token"
            })

        } else {
            res.json({
                massage: "profile accesess",
                authdata
            })
        }
    })
})

// otp send working

const uuid = require('uuid');


app.post("/Mobile_No/No_Add", (req, res) => {
    setTimeout(async () => {
        try {
            let result = await pg("user_mobile").insert([
                {
                    // ID: `${req.body.ID}`,
                    mobileno: `${req.body.mobileno}`,
                    register_id: `${req.body.register_id}`
                },
            ]);
            // Mobiledata.push(req.body.Mobile_No)
            // console.log(Mobiledata);
            res.json({ success: true, message: req.body.mobileno });
        } catch (err) {
            console.log(err);
        }
    }, 5000);
});

app.post("/user/userinfo", (req, res) => {
    setTimeout(async () => {
        try {
            let result = await pg("user_info").insert([
                {
                    username: `${req.body.username}`,
                    useraddress: `${req.body.useraddress}`,
                    usercity: `${req.body.usercity}`,
                    register_id: `${req.body.register_id}`
                },
            ]);
            // Mobiledata.push(req.body.Mobile_No)
            // console.log(Mobiledata);
            res.json({ success: true, message: req.body.mobileno });
        } catch (err) {
            console.log(err);
        }
    }, 5000);
});

app.post("/OrderData/Data", async (req, res) => {
      try {
        let result = await pg("user_order").insert([
          {
            // ID: `${req.body.ID}`,
            bhakri: `${req.body.bhakri}`,
            pithla: `${req.body.pithla}`,
            test: `${req.body.test}`,
            totalprice: `${req.body.totalprice}`,
            register_id: `${req.body.register_id}`
          },
        ]);
        res.json({ success: true, message: `User Added : ${result}` });
      } catch (err) {
        console.log(err);
      }
    });







app.listen(port, (req, res) => {
    console.log(`Using Port http://localhost:${port}/`);
});
