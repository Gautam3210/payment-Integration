const express = require("express");
const dotenv = require("dotenv").config();
const Razorpay = require("Razorpay");

const app = express();

const instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});
const options = {
  amount: 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  receipt: "order_rcptid_11",
};

app.get("/create-order", (req, res) => {
  instance.orders.create(options, function (err, order) {
    console.log(order);
  });
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
