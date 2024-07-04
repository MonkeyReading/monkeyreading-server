import express from "express";
import {
  answerSentiment,
  feedbackUserAnswer,
} from "../controllers/feedback.controller.js";
import expressAsyncHandler from "express-async-handler";

export const feedbackRoute = express.Router();
feedbackRoute.post("/user/answer", expressAsyncHandler(feedbackUserAnswer));
feedbackRoute.post("/answer/sentiment", expressAsyncHandler(answerSentiment));
