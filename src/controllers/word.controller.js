import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getRecentWordList, joinWord } from "../providers/word.provider.js";

export const recentWords = async (req, res, next) => {
    // console.log("최근 단어를 요청하였습니다!");
    // console.log("header:", req.headers.authorization); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    return res.send(response(status.SUCCESS, await getRecentWordList(req.headers)));
}

export const wordRegister = async (req, res, next) => {
    // console.log("책 추가를 요청하였습니다!");
    // console.log("req.headers:", req.headers); // 값이 잘 들어오나 찍어보기 위한 테스트 용
    // console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinWord(req.headers, req.body)));
}