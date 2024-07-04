import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getAId, getQId, getUserAnswers } from "../models/feedback.dao.js";

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