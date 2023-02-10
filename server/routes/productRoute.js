import express from "express";
import ProductController from "../controller/productController.js";

const router=express.Router();

router.get("/products",ProductController.allProducts);
router.post("/models",ProductController.getModels);

export default router;