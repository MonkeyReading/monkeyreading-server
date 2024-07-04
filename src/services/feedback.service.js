import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addAnswer } from "../models/feedback.dao.js";

//유저의 답변 저장
export const addUserAnswer=async(data)=>{
    //유저의 답변을 저장하는 비즈니스 로직
    const addAnswerData=await addAnswer({
        question_id:data.question_id,
        content:data.content
    });
    if(addAnswerData==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    else{
        return {"answer_id":addAnswerData};
    }
}