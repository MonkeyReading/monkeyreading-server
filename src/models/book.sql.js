// 책 생성 API

//// 책 정보 삽입
export const insertBookSql = "INSERT INTO BOOK (isbn, title, summary, publisher, thumbnail, author) VALUES (?, ?, ?, ?, ?, ?);";

//// 책 - 사용자 연결
export const connectUserBook = "INSERT INTO USER_BOOK (user_id, book_id) VALUES (?, ?);";

//// 저자 삽입
export const insertAuthorSql = "INSERT INTO AUTHOR (name) VALUES (?);";

//// 책 - 저자 연결
export const connectBookAuthor = "INSERT INTO BOOK_AUTHOR (book_id, author_id) VALUES (?, ?);";

//// 사용자 user_id 찾기
export const getUserID = "SELECT u.user_id FROM USER u JOIN TOKEN t ON u.token_id = t.token_id WHERE t.access_token = ?;";