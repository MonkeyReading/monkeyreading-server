import { generateQuestions } from '../services/feedback.service.js';
import { createQuestionsDto } from '../dtos/feedback.dto.js';
import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';

export const createQuestions = async (req, res) => {
  const { book_id, selected_quotes } = req.body;

  if (!book_id || !selected_quotes || !Array.isArray(selected_quotes)) {
    return res.status(status.BAD_REQUEST.status).json(response(status.BAD_REQUEST, null));
  }

  try {
    const questions = await generateQuestions(book_id, selected_quotes);
    const responseDto = createQuestionsDto(questions);
    res.status(status.SUCCESS.status).json(response(status.SUCCESS, responseDto));
  } catch (error) {
    console.error(error);
    res.status(status.INTERNAL_SERVER_ERROR.status).json(response(status.INTERNAL_SERVER_ERROR, null));
  }
};
