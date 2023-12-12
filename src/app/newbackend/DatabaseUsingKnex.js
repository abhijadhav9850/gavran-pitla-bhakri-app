const express = require("express");
const app = express();
const port = 4000;

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

app.get("/User/Add/:ID/:Name/:Address/:City", (req, res) => {
  setTimeout(async () => {
    let result = await pg("users").insert([
      {
        UserId: `${req.params.ID}`,
        UserName: `${req.params.Name}`,
        UserAddress: `${req.params.Address}`,
        UserCity: `${req.params.City}`,
      },
    ]);
    res.json({ success: true, message: `User Added : ${result}` });
  }, 5000);
});

app.get("/User/List", (req, res) => {
  setTimeout(async () => {
    let result = await pg.select("ID", "Name", "City").from("users");
    res.json({ success: true, message: `User Data : ${result}` });
  }, 5000);
});

app.get("/User/Update/:Name/:NewName", (req, res) => {
  setTimeout(async () => {
    let result = await pg("users")
      .where("Name", "=", `${req.params.Name}`)
      .update({ Name: `${req.params.NewName}` });
    res.json({ success: true, message: `User Updated : ${result}` });
  }, 5000);
});

app.get("/User/Delete/:Name", (req, res) => {
  setTimeout(async () => {
    let result = await pg("users")
      .where("Name", `${req.params.Name}`)
      .del("ID");
    res.json({ success: true, message: `User Deleted : ${result}` });
  }, 5000);
});

app.listen(port, (req, res) => {
  console.log(`Using Port http://localhost:${port}/`);
});
