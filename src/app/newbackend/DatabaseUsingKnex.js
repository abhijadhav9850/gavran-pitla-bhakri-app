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
