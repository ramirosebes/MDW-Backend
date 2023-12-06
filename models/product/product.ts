import { model, Schema } from "mongoose";

interface IProduct {
    name: string
    description: string
    image: string
    price: number
    stock: number
}
const productSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: false
        },
        price: {
            type: Number,
            require: true
        },
        stock: {
            type: Number,
            require: true
        }
    }
)

export default model<IProduct>("Product", productSchema);