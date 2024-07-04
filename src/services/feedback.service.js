import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addAnswer, addSentiment } from "../models/feedback.dao.js";

//유저의 답변 저장
export const addUserAnswer=async(data)=>{
    //유저의 답변을 저장하는 비즈니스 로직
    const addAnswerData=await addAnswer({
        user_id:data.user_id,
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

//답변에 대한 세그먼트 저장
export const addAnswerSentiment=async(data)=>{ 
    //답변에 대한 세그먼트를 저장하는 비즈니스 로직
    const addSentimentData=await addSentiment({
        answer_id:data.answer_id,
        positive:data.positive,
        negative:data.negative,
        neutral:data.neutral
    });
    if(addSentimentData==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    else{
        return {"sentiment_id":addSentimentData};
    }
}
