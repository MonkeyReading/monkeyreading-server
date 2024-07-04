import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getUserID, selectRecentWordSql, insertWordSql } from "./word.sql.js";

// USER user_id 찾기
export const getUserByToken = async (access_token) => {

    try{
        const conn = await pool.getConnection();

        const result = await pool.query(getUserID, access_token);

        conn.release();
        return result;
        
    }catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
}

// WORD 데이터 삽입
export const addWord = async (user_id, data) => {

    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertWordSql, [user_id[0][0].user_id, data.book_id, data.korean, data.english, data.image_url]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
}

export const getRecentWords = async (access_token) => {
    try {
        const conn = await pool.getConnection();
        const userId = await pool.query(getUserID, access_token);


        const word_list = await pool.query(selectRecentWordSql, userId[0][0].user_id);

        if(userId.length == 0){
            return -1;
        }

        conn.release();
        return word_list[0];
        
    } catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
}
