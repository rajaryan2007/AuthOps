import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.API_KEY_GROQ,
});

export default groq;
