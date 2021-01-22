import express from "express";
const router = express.Router();

import { protect, admin } from "../middleware/authMiddleware.js";

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/").post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router.route("/:id").get(getProductById);
router.route("/:id").delete(protect, admin, deleteProduct);
router.route("/:id").put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
