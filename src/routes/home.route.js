import express from "express";
import asyncHandler from 'express-async-handler';
import { recentWords } from "../controllers/word.controller.js";

export const homeRouter = express.Router({mergeParams: true});

homeRouter.get('/word', asyncHandler(recentWords));