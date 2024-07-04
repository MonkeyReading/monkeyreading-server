// 최근에 공부한 단어 가져오기(최대 5개) API

//// 단어 5개 가져오기
export const selectRecentWordSql = "SELECT id as word_id, korean, english, image_url FROM WORD WHERE user_id = ? ORDER BY id DESC LIMIT 5;"

//// 사용자 user_id 찾기
export const getUserID = "SELECT u.user_id FROM USER u JOIN TOKEN t ON u.token_id = t.token_id WHERE t.access_token = ?;";