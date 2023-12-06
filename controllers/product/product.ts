import { Request, Response } from "express";
import productModel from "../../models/product/product";

const productController = {
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getProductById(req: Request, res: Response) {
        try {
            const product = await productModel.findById(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createProduct(req: Request, res: Response) {
        if (req.body.name === "" || req.body.description === "" || req.body.image === "" ||req.body.price === null || req.body.stock === null) {
            return res.status(500).json("Params are missing...");
        } else {
            try {
                const newProduct = new productModel(req.body);
                const productRegistered = await productModel.findOne({name: req.body.name})
                if (productRegistered) {
                    res.status(500).json("Product already exists...");
                } else {
                    const product = await newProduct.save();
                    res.status(200).json(product);
                }
            } catch (err) {
                res.status(500).json(err);
            }
        }
    },
    async updateProduct(req: Request, res: Response) {
        try {
            const updatedProduct = await productModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteProduct(req: Request, res: Response) {
        try {
            await productModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Product has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

export default productController;