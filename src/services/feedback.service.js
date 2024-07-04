import dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from "openai";
import { saveQuestions } from '../models/feedback.dao.js';

// ChatGPT로 질문 생성
export const generateQuestions = async (book_id, selected_quotes) => {
    const openai = new OpenAI({ 
        apiKey: process.env.OpenAI_API_KEY 
    });

    try {
        const messages = selected_quotes.map(quote => ({ role: 'user', content: quote.quote_text }));

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: messages,
//          prompt: "~했나요?와 같이 유아들이 친근하게 느낄 수 있는 말투로, 책의 내용을 이해했는지 물어보는 질문들을 한국어로 생성해줘.",
            max_tokens: 150,
        });

        // ChatGPT가 생성한 모든 질문 추출
        const generatedQuestions = response.choices.map(choice => choice.message.content);

        // 그 중에서 랜덤으로 3개 선택
        const shuffledQuestions = shuffleArray(generatedQuestions).slice(0, 3);

        // 객체로 변환
        const questions = shuffledQuestions.map((question, index) => ({
            quote_id: selected_quotes[index % selected_quotes.length].quote_id, 
            question_text: question,
        }));

        // DB에 저장
        await saveQuestions(book_id, questions);

        // 생성된 질문들을 반환
        return questions;

    } catch (error) {
        console.error('Error calling ChatGPT API:', error);
        throw new Error('Failed to generate questions using ChatGPT');
    }
};

// 배열을 섞는 함수
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
