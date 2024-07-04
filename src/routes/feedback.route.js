import express from "express";
import { feedbackUserAnswer } from "../controllers/feedback.controller.js";
import expressAsyncHandler from "express-async-handler";

export const feedbackRoute = express.Router();
feedbackRoute.post("/user/answer", expressAsyncHandler(feedbackUserAnswer));
