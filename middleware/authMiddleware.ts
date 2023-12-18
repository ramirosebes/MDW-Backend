import { Request, Response, NextFunction } from "express";
import admin from 'firebase-admin'

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const idToken = req.headers.authorization as string | undefined;
  
    try {
      if (!idToken) {
        throw new Error('Token no proporcionado');
      }
  
      await admin.auth().verifyIdToken(idToken);
      next();
    } catch (error) {
      res.status(401).json({ error: "Token invalido " + idToken });
    }
  };
  
  export { verifyToken };
  