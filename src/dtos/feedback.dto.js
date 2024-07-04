export const userSentimentResponseDTO=(result)=>{
    return{
        "positive":result[0].positive,
        "negative":result[0].negative,
        "neutral":result[0].neutral
    }
}