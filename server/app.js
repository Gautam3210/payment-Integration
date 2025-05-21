const express = require("express");
const dotenv = require("dotenv").config();
const Razorpay = require("Razorpay");
const cors = require("cors");
const crypto = require("crypto");

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
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.status(200).json(order);
  });
});

app.post("/payment-complete", (req, res) => {
  console.log(req.body);

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body =  razorpay_order_id + "|" + razorpay_payment_id ;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.key_secret)
    .update(body.toString())
    .digest("hex");

  const isAuth = expectedSignature === razorpay_signature;
  if (isAuth) {
    
    res.send("payment successful");
  } else {
    res.send("unsuccessful")
  }
});

app.get("/get-key", (req, res) => {
  res.json({ keyId: process.env.key_id });
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
