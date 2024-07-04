import express from "express";
import asyncHandler from "express-async-handler";
import { kakaoLogin } from "../controllers/auth.controller.js";

export const authRouter = express.Router(); // authRouter를 named export로 설정합니다.

authRouter.post(
  "/auth/kakao",
  asyncHandler(async (req, res) => {
    const { auth_code } = req.body;

    if (!auth_code) {
      return res.status(400).json({ error: "Authorization code is required" });
    }

    await kakaoLogin(req, res, auth_code);
  })
);
