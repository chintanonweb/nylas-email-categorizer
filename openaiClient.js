import 'dotenv/config';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function categorizeEmail(emailContent) {
  try {
    // Send a chat message to the model    
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

// content = `You are an email classifier, classify the emails from the following array ${data} into the following categories (Important, Promotions, Social, Marketing, Spam, General) Follow this Important: Emails that are personal or work-related and require immediate attention.
// Promotions: Emails related to sales, discounts, and marketing campaigns.
// Social: Emails from social networks, friends, and family.
// Marketing: Emails related to marketing, newsletters, and notifications.
// Spam: Unwanted or unsolicited emails.
// General: If none of the above are matched, use General
// . Output the response in the following format [{emailId, category}] only do not give other things like text, etc....`;