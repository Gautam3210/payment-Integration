const express = require("express");
const dotenv = require("dotenv").config();
const Razorpay = require("Razorpay");
const cors = require("cors");

const corsConfig = {
  origin: "http://localhost:5173",
  method: ["post", "get"],
};
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsConfig));

const instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

app.post("/create-order", (req, res) => {
  const options = {
    amount: Number(req.body.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  instance.orders.create(options, function (err, order) {
    console.log(order);
  }); 

  res.status(200).json({ success: true });
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
