export const addAnswerQuery="INSERT INTO ANSWER(question_id,content) VALUES(?,?)";
export const addSentimentQuery="INSERT INTO SENTIMENT(answer_id,positive,negative,neutral) VALUES(?,?,?,?)";
