const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/")
  .then(console.log("db connected"));

const paymentSchema = new mongoose.Schema({
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

module.exports =  mongoose.model('payments', paymentSchema)

