import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { recentWordsResponseDTO } from "../dtos/word.response.dto.js";
import { getRecentWords } from "../models/word.dao.js";

export const getRecentWordList = async (header) => {
    return recentWordsResponseDTO(await getRecentWords(header.authorization));
}