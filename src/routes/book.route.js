import express from "express";
import { bookRegister } from "../controllers/book.controller.js";
import { wordRegister } from "../controllers/word.controller.js";

export const bookRouter = express.Router();

bookRouter.post('', bookRegister);
bookRouter.post('/word', wordRegister);