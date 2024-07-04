// profile.controller.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

export async function updateProfile(req, res) {
  const { nickname, age } = req.body; // req.body에서 nickname과 age를 추출합니다.
  const userId = req.user.id; // 예시: 사용자의 ID를 세션에서 가져오거나 인증된 사용자에서 추출합니다.

  try {
    // 프로필 정보 저장을 위한 SQL 쿼리
    const sql = `
      INSERT INTO user_profile (user_id, nickname, age)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE nickname = VALUES(nickname), age = VALUES(age)
    `;

    // SQL 쿼리 실행
    await pool.execute(sql, [userId, nickname, age]);

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
