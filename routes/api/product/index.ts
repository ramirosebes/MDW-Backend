import { Router } from "express";
import productController from "../../../controllers/product/product";
import { verifyToken } from "../../../middleware/authMiddleware";

const router = Router();

router.use(verifyToken);

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;

