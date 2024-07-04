import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getUserID, selectRecentWordSql } from "./word.sql.js";

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
