import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertBookSql, insertAuthorSql, connectUserBook, connectBookAuthor } from "./book.sql.js";

// BOOK 데이터 삽입
export const addBook = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertBookSql, [data.isbn, data.title, data.summary, data.publisher, data.thumbnail]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
}

// AUTHOR 데이터 삽입
export const addAuthor = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertAuthorSql, [data.name]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
}

// 책 - 저자 매핑
export const setBookAuthor = async (book_id, author_id) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectBookAuthor, [book_id, author_id]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.BAD_REQUEST);

    }
}

// 책 - 사용자 매핑
export const setUserBook = async (user_id, book_id) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectUserBook, [user_id, book_id]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.BAD_REQUEST);

    }
}
