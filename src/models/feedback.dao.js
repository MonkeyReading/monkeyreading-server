import { pool } from '../../config/db.connect.js';
import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';

// 질문 데이터 삽입
export const saveQuestions = async (book_id, questions) => {
    try {
        const conn = await pool.getConnection();

        const query = 'INSERT INTO QUESTION (book_id, quote_id, content) VALUES (?, ?, ?)';

        // 생성된 질문 3개 DB에 삽입
        for (let question of questions) {
            await conn.query(query, [book_id, question.quote_id, question.question_text]);
        }

        conn.release();
        return questions;

    } catch (err) {
        console.error('Error saving questions to database:', err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};
