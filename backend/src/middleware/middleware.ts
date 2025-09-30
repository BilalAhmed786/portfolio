import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

const authUser = (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const token = req?.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "No token, not authorized" });
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    
    (req as any).user = decoded;

    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authUser;
