import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/api';
import cors from 'cors';
import admin from 'firebase-admin';

dotenv.config();

// Configuración de Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });



const app: Express = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is up and running at port ${process.env.PORT}`);
});

connectToDb()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log(err));

async function connectToDb() {
    if (process.env.DB_CONNECTION_STRING) {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
    } else {
    console.log("Connection string is missing");
    }
}