import { NextFunction, Request, Response } from "express";

export type ControllerType<T = any> = (
  req: Request,
  res: Response<T>,
  next: NextFunction
) => Promise<void | Response<T>>;

export interface NewUserRequestBody {
  accountName: string;
  accountType: string;
  accountBalance: number;
  isDefault: boolean;
}

export type ResponseType = {
  success: boolean;
  message?: string;
  data?: any;
};

export interface SaveDetailsRequestBody {
  clerkUserId: string;
  email: string;
  name: string;
  imageUrl: string;
}
