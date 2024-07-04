import express from "express";
import { bookRegister } from "../controllers/book.controller.js";

export const bookRouter = express.Router();

bookRouter.post('/:userId', bookRegister);