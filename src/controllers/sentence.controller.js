import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getRecentSentenceList } from "../providers/sentence.provider.js";

export const recentSentences = async (req, res, next) => {
    console.log("최근 문장을 요청하였습니다!");
    console.log("header:", req.headers.authorization); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    return res.send(response(status.SUCCESS, await getRecentSentenceList(req.headers)));
}