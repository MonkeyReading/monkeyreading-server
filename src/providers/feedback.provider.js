import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { userSentimentResponseDTO } from "../dtos/feedback.dto.js";
import { getAId, getQId, getUserAnswers, getUserSentiments } from "../models/feedback.dao.js";

//질문 아이디 가져오기
export const getQuesId=async(content)=>{
    const result = await getQId(content);
    if(result==-1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return result;
    }
}
//답변 아이디 가져오기
export const getAnsId=async(content)=>{
    const result = await getAId(content);
    if(result==-1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return result;
    }
}

//유저의 답변 가져오기
export const getUserAns=async(params,book_id)=>{
    const result=await getUserAnswers(params.user_id,params.question_id,book_id);
    if(result==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    return {"content":result[0].content};
}

//유저 답변의 세그먼트 가져오기
export const getUserSent=async(params)=>{
    const result=await getUserSentiments(params.user_id,params.answer_id);
    if(result==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    return userSentimentResponseDTO(result);
}