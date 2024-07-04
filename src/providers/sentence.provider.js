import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { recentSentencesResponseDTO } from "../dtos/sentence.response.dto.js";
import { getRecentSentences } from "../models/sentence.dao.js";

export const getRecentSentenceList = async (header) => {
    return recentSentencesResponseDTO(await getRecentSentences(header.authorization));
}