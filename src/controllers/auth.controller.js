// auth.controller.js

import { getKakaoTokens } from "../services/kakao.service.js";

export const kakaoLogin = async (req, res) => {
  const { authCode } = req.body;
  if (!authCode) {
    return res.status(400).json({ error: "Authorization code is required" });
  }

  try {
    const tokens = await getKakaoTokens(authCode);
    return res.status(200).json(tokens);
  } catch (error) {
    console.error("Error while fetching tokens:", error);
    return res.status(500).json({ error: "Failed to fetch tokens" });
  }
};
