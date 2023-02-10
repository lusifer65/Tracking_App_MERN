import { model } from "mongoose";
import Order_model from "../models/order.js";

class OrderController {
  static getAllOrders = async (req, res) => {
    try {
      const all_order = await Order_model.find({});
      if (all_order) {
        return res.status(200).json(all_order);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  };

  static genrateId =  () => {
    let id;
    do{
      id = parseInt(Math.random() * (10000 - 1000)) + 1000;
    }while(Order_model.find({"_id":id},{"_id":1})==null)
    return `OD${id}` || "OD000";
  };

  static addOrder = async (req, res) => {
    const { product, model, quantity, address, price } = req.body;
    const date = new Date();
    let currentDate = new Date(Date.now()).valueOf().toString();
    try {
      let id=this.genrateId()
      if (product && model && quantity && address && price) {
        const new_order = Order_model({
          "_id": id,
          product,
          model,
          quantity,
          address,
          price,
          date: currentDate
        });
        const save_order = new_order.save();
        if (save_order) {
          return res.status(201).json({"id":id,});
        } else {
          res.status(404).json({ message: "order is not created" });
        }
      } else {
        res.status(404).json({ message: "all filed is required" });
      }
    } catch (error) {
      res.status(404).json(error);
    }
  };
  static getSingleOrder = async (req, res) => {
    const { id } = req.params;
    if (id) {
      const data = await Order_model.findById(id);
      return res.status(200).json(data);
    } else {
      res.status(400).json({ message: "id not found" });
    }
  };
  static updateOrder = async (req, res) => {
    const { id } = req.params;
    if (id) {
      const data = await Order_model.findByIdAndUpdate(id, req.body);
      return res.status(200).json(data);
    } else {
      res.status(400).json({ message: "id not found" });
    }
  };
  static deleteOrder = async (req, res) => {
    const { id } = req.params;
    if (id) {
      const data = await Order_model.findByIdAndDelete(id);
      return res.status(200).json(data);
    } else {
      res.status(400).json({ message: "id not found" });
    }
  };
}

export default OrderController;
