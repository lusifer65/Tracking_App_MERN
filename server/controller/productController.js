import productModel from "../models/product.js";

class ProductController {
  static allProducts = async (req, res) => {
    try {
      const product = await productModel.find({}, { _id: 0 });
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "no product is found" });
    }
  };
  static getModels = async (req, res) => {
    const { type } = req.body;
    try {
      const models = await productModel.find(
        { type: type },
        { _id: 0, models: 1 }
      );
      // console.log();
      res.status(200).json(models);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  };
}

export default ProductController;
