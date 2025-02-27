import {pool} from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addAnswerQuery, addSentimentQuery } from "./feedback.sql.js";

export const addAnswer=async(data)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(addAnswerQuery,[data.question_id,data.content]);
        if(result.length==0){
            return -1;
        }
        conn.release();
        return result.insertId; //삽입된 데이터의 id값 반환
    }
    catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const addSentiment=async(data)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(addSentimentQuery,[data.answer_id,data.positive,data.negative,data.neutral]);
        if(result.length==0){
            return -1;
        }
        conn.release();
        return result.insertId; //삽입된 데이터의 id값 반환
    }
    catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}