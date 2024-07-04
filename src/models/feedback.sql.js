export const addAnswerQuery="INSERT INTO ANSWER(question_id,content) VALUES(?,?)";
export const addSentimentQuery="INSERT INTO SENTIMENT(answer_id,positive,negative,neutral) VALUES(?,?,?,?)";
export const getQuestionIdQuery="SELECT id FROM QUESTION WHERE content=?";
export const getAnswerIdQuery="SELECT id FROM ANSWER WHERE content=?";
export const getUserAnswerQuery="SELECT a.*, q.book_id FROM ANSWER a JOIN QUESTION q ON a.question_id=q.id WHERE a.user_id=? AND a.question_id=? AND q.book_id=?";