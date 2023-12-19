import { Router } from "express";
import productController from "../../../controllers/product/product";
import { verifyToken } from "../../../middleware/authMiddleware";

const router = Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", verifyToken, productController.createProduct);
router.put("/:id", verifyToken, productController.updateProduct);
router.delete("/:id", verifyToken, productController.deleteProduct);

export default router;

