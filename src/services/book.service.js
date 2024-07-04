import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addBook, setUserBook, getUserByToken } from "../models/book.dao.js";

export const joinBook = async (header, body) => {
    const author = body.author;

    const userId = await getUserByToken(header.authorization); 

    const joinBookData = await addBook({
        'isbn': body.isbn,
        'title': body.title,
        'summary': body.summary,
        'publisher': body.publisher,
        'thumbnail': body.thumbnail,
        'author' : body.author
    }); 

    if(joinBookData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        await setUserBook(userId[0][0].user_id, joinBookData);

        return;
    }

    await setUserBook(params.userId, joinBookData);

    return;
  }
};
