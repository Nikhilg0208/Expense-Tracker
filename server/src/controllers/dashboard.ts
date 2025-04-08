import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { NewUserRequestBody, ResponseType } from "../types/types.js";

export const CreateAccount = TryCatch<ResponseType>(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response<ResponseType>,
    next: NextFunction
  ) => {
    const { accountName, accountType, accountBalance, isDefault } = req.body;
    if (!accountName || !accountType || !accountBalance)
      return next(new ErrorHandler("All Fields are required", 400));

    return res.status(201).json({
      success: true,
      message: `Welcome, `,
    });
    
  }
);
