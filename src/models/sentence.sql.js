// 최근 책 구절(최대 5개) API

//// 구절 5개 가져오기
export const selectRecentSentenceSql = "SELECT s.id as sentence_id, b.title, s.quote, b.thumbnail as image_url FROM SENTENCE s JOIN BOOK b ON s.book_id = b.id WHERE s.user_id = ? ORDER BY s.id DESC LIMIT 5;"

//// 사용자 user_id 찾기
export const getUserID = "SELECT u.user_id FROM USER u JOIN TOKEN t ON u.token_id = t.token_id WHERE t.access_token = ?;";