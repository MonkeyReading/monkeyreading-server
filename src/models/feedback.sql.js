export const addAnswerQuery="INSERT INTO ANSWER(question_id,content) VALUES(?,?)";
export const addSentimentQuery="INSERT INTO SENTIMENT(answer_id,positive,negative,neutral) VALUES(?,?,?,?)";
export const getQuestionIdQuery="SELECT id FROM QUESTION WHERE content=?";
export const getAnswerIdQuery="SELECT id FROM ANSWER WHERE content=?";
export const getUserAnswerQuery="SELECT * FROM ANSWER WHERE user_id=? AND book_id=?";