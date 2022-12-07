import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export const keyWordsGenerator = async (text) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Extract keywords from this text:\n" + text,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0.8,
      presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  } catch (error) {
    throw error;
  }
};

export const textCorrection = async (input) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Correct this to standard English, '${input}'`,
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    throw error;
  }
};

export const studyNotesMaker = async (question) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    throw error;
  }
};
