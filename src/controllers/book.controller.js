import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinBook } from "../services/book.service.js";

export const bookRegister = async (req, res, next) => {
    // console.log("책 추가를 요청하였습니다!");
    // console.log("path:", req.params); // 값이 잘 들어오나 찍어보기 위한 테스트 용
    // console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinBook(req.headers, req.body)));
}