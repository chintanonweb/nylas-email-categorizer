import express from 'express';
import bodyParser from 'body-parser';
import { fetchEmails } from './nylasClient.js';
import { categorizeEmail } from './openaiClient.js';
import { categorizeEmailWithGemini } from './geminiClient.js';

const app = express();
app.use(bodyParser.json());

// Route for fetching emails and categorizing them using OpenAI
app.get('/emails', async (req, res) => {
  try {
    const emails = await fetchEmails();
    
    const categorizedEmails = await Promise.all(emails.map(async (email) => {
      const category = await categorizeEmail(email.snippet);
      return { ...email, category };
    }));
    
    console.log('categorizedEmails', categorizedEmails);
    res.json(categorizedEmails);
  } catch (error) {
    res.status(500).send('Error retrieving or categorizing emails');
  }
});

// Route for fetching emails and categorizing them using Gemini
app.get('/categorize-email-gemini', async (req, res) => {
  try {
    const emails = await fetchEmails();
    
    const categorizedEmails = await Promise.all(emails.map(async (email) => {
      const category = await categorizeEmailWithGemini(email.snippet);
      return { ...email, category };
    }));
    
    console.log('categorizedEmails with Gemini', categorizedEmails);
    res.json(categorizedEmails);
  } catch (error) {
    res.status(500).send('Error retrieving or categorizing emails with Gemini');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
