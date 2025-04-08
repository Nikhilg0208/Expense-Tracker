import express from "express";
import { CreateAccount } from "../controllers/dashboard.js";

const dashboardRoute = express.Router();

dashboardRoute.post("/createAccount", CreateAccount);

export default dashboardRoute;
