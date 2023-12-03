const express = require("express");
var bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
var cors = require('cors')
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const sequelize = new Sequelize("pitla_bhakri", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const Users = sequelize.define(
  "users",
  {
    UserId: { type: DataTypes.INTEGER, primaryKey: true },
    UserName: { type: DataTypes.STRING, allowNull: false },
    UserAddress: { type: DataTypes.STRING },
    UserCity: { type: DataTypes.STRING },
  },
  { tableName: "users" }
);

const Payment = sequelize.define(
  "payment",
  {
    PaymentId: { type: DataTypes.INTEGER, primaryKey: true },
    PaymentMethod: { type: DataTypes.STRING },
  },
  { tableName: "payment" }
);

const Product = sequelize.define(
  "product",
  {
    ProductId: { type: DataTypes.INTEGER, primaryKey: true },
    ProductName: { type: DataTypes.STRING, allowNull: false },
    Quantity: { type: DataTypes.INTEGER },
    Price: { type: DataTypes.INTEGER },
  },
  { tableName: "product" }
);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch {
    console.log("unable to connect to tge database:");
  }
}

start();

app.post("/User/Add", async (req, res) => {
  let Add = await Users.create(req.body);
  res.send(Add);
  console.log(Add);
});

app.get("/User/Findall", async (req, res) => {
  const list = await Users.findAll();
  console.log("All available columns in Table: ", list);
  res.send(list);
});

app.get("/User/Update", async (req, res) => {
  const update = await Users.update(req.query, {
    where: { id: 1 },
  });
  res.send("User Updated Successfully: " + JSON.stringify(update));
  console.log(update);
});

app.get("/User/Delete", async (req, res) => {
  const Delete = await Users.destroy({
    where: { UserName: req.query.UserName },
  });
  res.send(Delete);
  console.log(`Deleted Row(s): ${Delete}`);
});

app.listen(port, () => {
  console.log(`Using http://localhost:${port}/`);
});
