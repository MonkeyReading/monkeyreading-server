import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getRecentWordList } from "../providers/word.provider.js";

export const recentWords = async (req, res, next) => {
    // console.log("최근 단어를 요청하였습니다!");
    // console.log("header:", req.headers.authorization); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    return res.send(response(status.SUCCESS, await getRecentWordList(req.headers)));
}