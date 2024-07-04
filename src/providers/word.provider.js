import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { recentWordsResponseDTO } from "../dtos/word.response.dto.js";
import { getRecentWords, addWord, getUserByToken } from "../models/word.dao.js";

export const getRecentWordList = async (header) => {
    return recentWordsResponseDTO(await getRecentWords(header.authorization));
}

export const joinWord = async (header, body) => {
    const author = body.author;

    const userId = await getUserByToken(header.authorization); 

    const joinBookData = await addWord(userId, {
        'book_id': body.book_id,
        'korean': body.korean,
        'english': body.english,
        'image_url': body.image_url
    }); 

    if(joinBookData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return;
    }
}