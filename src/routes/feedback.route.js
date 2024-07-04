import express from 'express';
import asyncHandler from 'express-async-handler';
import { createQuestions } from '../controllers/feedback.controller.js';

export const feedbackRouter = express.Router();

feedbackRouter.post('/book/questions', asyncHandler(createQuestions));