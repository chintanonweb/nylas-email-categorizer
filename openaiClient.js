import 'dotenv/config';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function categorizeEmail(emailContent) {
  try {
    console.log(emailContent);
    
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      messages: [
        {
          role: 'system',
          content: 'You are an email categorizer. Categorize the email content into work, personal, urgent, etc.',
        },
        {
          role: 'user',
          content: emailContent,
        },
      ],
      max_tokens: 100,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error categorizing email:', error);
    throw error;
  }
}
