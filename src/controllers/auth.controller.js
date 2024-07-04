import { getKakaoTokens } from "../services/kakao.service.js";

export const kakaoLogin = async (req, res) => {
  const { auth_code } = req.body;
  if (!auth_code) {
    return res.status(400).json({ error: "Authorization code is required" });
  }

  try {
    const tokens = await getKakaoTokens(auth_code);
    return res.status(200).json(tokens);
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch tokens" });
  }
};
