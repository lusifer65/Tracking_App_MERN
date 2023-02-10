import mongoose from "mongoose";

const order_schema = mongoose.Schema({
    _id:{
        type:String
    },
  product: {
    type: String
  },
  model: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  Address: {
    type: String
  },
  date: {
    type: String
  }
});

const Order_model = mongoose.model("Order", order_schema);

export default Order_model;
