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

app.get("/User/Add/:ID/:Name/:City", (req, res) => {
  setTimeout(async () => {
    let result = await pg("users").insert([
      {
        ID: `${req.params.ID}`,
        Name: `${req.params.Name}`,
        Contact: `${req.params.City}`,
      },
    ]);
    res.send(result);
    console.log(result);
  }, 5000);
});
