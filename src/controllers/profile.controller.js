// 프로필 업데이트 API 예시 (Node.js Express 기반)

// profile.controller.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

export async function updateProfile(req, res) {
  const { nickname, age } = req.body; // 사용자가 입력한 닉네임과 나이
  const userId = req.user.id; // 인증된 사용자의 ID

  try {
    // 프로필 정보 저장을 위한 SQL 쿼리
    const sql = `
      INSERT INTO user_profile (user_id, nickname, age)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE nickname = VALUES(nickname), age = VALUES(age)
    `;

    // SQL 쿼리 실행
    await pool.execute(sql, [userId, nickname, age]);

    // 프론트엔드로 응답 보내기
    res.status(200).json({
      success: true,
      message: "프로필이 성공적으로 업데이트되었습니다.",
      userId: userId, // 업데이트된 사용자의 ID
      nickname: nickname, // 업데이트된 닉네임
      age: age, // 업데이트된 나이
    });
  } catch (error) {
    console.error("프로필 업데이트 중 오류 발생:", error);
    res.status(500).json({ success: false, error: "서버 내부 오류" });
  }
}
