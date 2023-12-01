const express = require("express");
const { createPool } = require("mysql");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

let PitlaBhakri = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pitla_bhakri",
  port: "3306",
});

const sequelize = new Sequelize("pitla_bhakri", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Studentable = sequelize.define(
  "Studentable",
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    contact: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
  },
  { tableName: "Studentable" }
);

app.get("/Enter_Mobile_Number/:Mob_No", (req, res) => {
  let number = parseInt(req.params["Mob_No"]);
  var val = Math.floor(100000 + Math.random() * 999999);
  res.send("Hey Customer, Your OTP code is " + val);
});

app.get("/Users/Add/:Name/:Address/:City", (req, res) => {
  PitlaBhakri.query(
    `insert into users values ("${req.params.Name}","${req.params.Address}","${req.params.City}")`,
    (Error, results) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send(results);
        console.log(results);
      }
    }
  );
});

app.get("/Users/List", (req, res) => {
  PitlaBhakri.query(`Select * from users`, (Error, results) => {
    if (Error) {
      console.log(Error);
    } else {
      res.send(results);
      console.log(results);
    }
  });
});

app.get("/Users/Update/:Name/:Address", (req, res) => {
  PitlaBhakri.query(
    `UPDATE users SET UserAddress="${req.params.Address}" WHERE UserName="${req.params.Name}"`,
    (Error, results) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send(results);
        console.log(results);
      }
    }
  );
});

app.get("/Users/Delete/:Name", (req, res) => {
  PitlaBhakri.query(
    `delete from users where UserName="${req.params.Name}"`,
    (Error, results) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send(results);
        console.log(results);
      }
    }
  );
});

app.listen(port, (req, res) => {
  console.log(`Using Port http://localhost:${port}/`);
});
