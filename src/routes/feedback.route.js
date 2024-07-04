import express from "express";
import {
  answerSentiment,
  feedbackUserAnswer,
  getAnswerId,
  getQuestionId,
} from "../controllers/feedback.controller.js";
import expressAsyncHandler from "express-async-handler";
import { get } from "http";

export const feedbackRoute = express.Router();
feedbackRoute.post("/user/answer", expressAsyncHandler(feedbackUserAnswer));
feedbackRoute.post("/answer/sentiment", expressAsyncHandler(answerSentiment));
feedbackRoute.get("/question_id", expressAsyncHandler(getQuestionId));
feedbackRoute.get("/answer_id", expressAsyncHandler(getAnswerId));
