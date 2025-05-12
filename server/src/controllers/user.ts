import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { prisma } from "../prisma/index.js";
import { ResponseType, SaveDetailsRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";

export const SaveDetails = TryCatch<ResponseType>(
  async (
    req: Request<{}, {}, SaveDetailsRequestBody>,
    res: Response<ResponseType>,
    next: NextFunction
  ) => {
    const { clerkUserId, email, name, imageUrl } = req.body;

    if (!clerkUserId || !email)
      return next(new ErrorHandler("All Fields are required", 400));

    const existingUser = await prisma.user.findUnique({
      where: { clerkUserId },
    });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
      });
    }

    await prisma.user.create({
      data: {
        clerkUserId,
        email,
        name,
        imageUrl,
      },
    });
    return res.status(201).json({
      success: true,
      message: `Welcome, `,
    });
  }
);
