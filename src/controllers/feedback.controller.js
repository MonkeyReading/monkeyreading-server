import { BaseError } from "../../config/error.js";
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { getAnsId, getQuesId, getUserAns, getUserSent } from "../providers/feedback.provider.js";
import { addAnswerSentiment, addUserAnswer } from "../services/feedback.service.js";

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

// 답변에 대한 센티멘트 저장
export const answerSentiment=async(req,res,next)=>{
    res.send(response(status.SUCCESS,await addAnswerSentiment(req.body)));
}

// 질문 아이디 가져오기
export const getQuestionId=async(req,res,next)=>{
    res.send(response(status.SUCCESS,await getQuesId(req.query)));
}

// 답변 아이디 가져오기
export const getAnswerId=async(req,res,next)=>{
    res.send(response(status.SUCCESS,await getAnsId(req.query)));
}

// 유저의 답변 가져오기
export const getUserAnswer=async(req,res,next)=>{
    res.send(response(status.SUCCESS,await getUserAns(req.params,req.query)));
}

// 유저 답변의 세그먼트 가져오기
export const getUserSentiment=async(req,res,next)=>{
    res.send(response(status.SUCCESS,await getUserSent(req.params)));
}