import express from "express";
import asyncHandler from "express-async-handler";
import axios from "axios";

const authRouter = express.Router();

const clientId = process.env.KAKAO_CLIENT_ID || "YOUR_CLIENT_ID";
const clientSecret = process.env.KAKAO_CLIENT_SECRET || "YOUR_CLIENT_SECRET";

// 카카오 로그인 처리
authRouter.post(
  "/kakao",
  asyncHandler(async (req, res) => {
    const { auth_code } = req.body;

    if (!auth_code) {
      return res.status(400).json({ error: "Authorization code is required" });
    }

    try {
      // 카카오로부터 토큰 요청
      const tokenRequestUrl = `https://kauth.kakao.com/oauth/token`;
      const params = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: clientId,
        client_secret: clientSecret,
        code: auth_code,
      });

      const response = await axios.post(tokenRequestUrl, params);

      if (
        !response.data ||
        !response.data.access_token ||
        !response.data.refresh_token
      ) {
        console.error("Failed to fetch tokens. Response data:", response.data);
        return res.status(500).json({ error: "Failed to fetch tokens" });
      }

      const { access_token, refresh_token } = response.data;

      // 성공적으로 토큰을 받았을 경우, 프론트엔드에게 응답
      res.json({ access_token, refresh_token });
    } catch (error) {
      console.error("Failed to fetch tokens:", error.message);
      return res.status(500).json({ error: "Failed to fetch tokens" });
    }
  })
);

export { authRouter };
