import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addBook, addAuthor, setBookAuthor, setUserBook } from "../models/book.dao.js";

export const joinBook = async (params, body) => {
    const author = body.author;

    const joinBookData = await addBook({
        'isbn': body.isbn,
        'title': body.title,
        'summary': body.summary,
        'publisher': body.publisher,
        'thumbnail': body.thumbnail
    }); 

    if(joinBookData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < author.length; i++) {
            const joinAuthorData = await addAuthor({'name': author[i]});
            await setBookAuthor(joinBookData, joinAuthorData);
        }
        
        await setUserBook(params.userId, joinBookData);

        return;
    }
}