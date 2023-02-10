import mongoose from "mongoose";

const productSchmea = mongoose.Schema({
  type: {
    type: String
  },
  models: [{ model: String, price: Number }]
});

const productModel = mongoose.model('Product', productSchmea)

export default productModel;