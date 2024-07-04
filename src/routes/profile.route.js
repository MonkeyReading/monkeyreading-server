// profile.route.js

import express from "express";
import asyncHandler from "express-async-handler";
import { updateProfile } from "../controllers/profile.controller.js"; // 수정: updateProfile 함수 가져오기

export const profileRouter = express.Router();

profileRouter.post(
  "/user/updateProfile",
  asyncHandler(async (req, res) => {
    const { nickname, age } = req.body;

    if (!nickname || !age) {
      return res.status(400).json({ error: "nickname and age are required" });
    }

    await updateProfile(req, res); // 수정: updateProfile 함수 호출
  })
);
