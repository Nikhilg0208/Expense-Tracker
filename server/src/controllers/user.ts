import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(
  async (req: Request<{}, {}, any>, res: Response, next: NextFunction) => {
    const { name, email, photo, gender, _id, dob } = req.body;

    return res.status(201).json({
      success: true,
      message: `Welcome, `,
    });
  }
);
