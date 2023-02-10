import express from "express";
import OrderController from "../controller/orderController.js";
const router=express.Router();

router.get("/order",OrderController.getAllOrders);
router.get("/order/:id",OrderController.getSingleOrder);
router.post("/addorder",OrderController.addOrder);
router.put("/order/:id",OrderController.updateOrder);
router.delete("/order/:id",OrderController.deleteOrder);


export default router;