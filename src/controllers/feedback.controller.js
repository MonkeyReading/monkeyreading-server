import { BaseError } from "../../config/error.js";
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { addUserAnswer } from "../services/feedback.service.js";

// 유저의 답변 저장
export const feedbackUserAnswer = async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await addUserAnswer(req.body);
        res.send(response(status.SUCCESS, result));
    } catch (error) {
        // 에러가 발생하면 기본 에러 객체와 함께 next로 전달
        next(new BaseError(status.INTERNAL_SERVER_ERROR));
    }
};