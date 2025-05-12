import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { SaveDetailsRequestBody, ResponseType } from "../types/types.js";

export const SaveDetails = TryCatch<ResponseType>(
  async (
    req: Request<{}, {}, SaveDetailsRequestBody>,
    res: Response<ResponseType>,
    next: NextFunction
  ) => {
    const { clerkUserId, email, name, imageUrl } = req.body;
    if (!clerkUserId || !email)
      return next(new ErrorHandler("All Fields are required", 400));

    console.log(clerkUserId, email, name, imageUrl);

    return res.status(201).json({
      success: true,
      message: `Welcome, `,
    });
  }
);
