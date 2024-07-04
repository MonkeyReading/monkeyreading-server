const axios = require("axios");
const kakaoConfig = require("../../config/kakao.config.js");

exports.getKakaoTokens = async (authCode) => {
  const response = await axios.post(kakaoConfig.tokenUrl, null, {
    params: {
      grant_type: "authorization_code",
      client_id: kakaoConfig.clientId,
      redirect_uri: kakaoConfig.redirectUri,
      code: authCode,
    },
  });

  return {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
  };
};
