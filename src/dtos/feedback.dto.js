export const createQuestionsDto = (questions) => {
    return {
      generated_questions: questions.map(question => ({
        quote_id: question.quote_id,
        question_text: question.question_text
      }))
    };
  };
  