// ../services/kakao.service.js

import axios from "axios";
import { tokenUrl, clientId, redirectUri } from "../../config/kakao.config.js";

export const getKakaoTokens = async (authCode) => {
  try {
    const response = await axios.post(tokenUrl, null, {
      params: {
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: redirectUri,
        code: authCode,
      },
    });

    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
    };
  } catch (error) {
    throw new Error("Failed to fetch tokens");
  }
};
