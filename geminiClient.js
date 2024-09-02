import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function categorizeEmailWithGemini(emailContent) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Start a chat session with the model, without initial system message
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are an email categorizer. Categorize the email content into work, personal, urgent, etc.",
            },
          ],
        },
      ],
    });

    // Send the email content as a message to the model
    let result = await chat.sendMessage(emailContent);

    // Retrieve and return the model's response
    const category = result.response.text();
    console.log("Categorized email with Gemini:", category);
    return category.trim();
  } catch (error) {
    console.error("Error categorizing email with Gemini:", error);
    throw error;
  }
}
// const prompt = `You are an email classifier, classify the emails from the following array ${data} into the following categories (Important, Promotions, Social, Marketing, Spam, General) Follow this Important: Emails that are personal or work-related and require immediate attention.
//     Promotions: Emails related to sales, discounts, and marketing campaigns.
//     Social: Emails from social networks, friends, and family.
//     Marketing: Emails related to marketing, newsletters, and notifications.
//     Spam: Unwanted or unsolicited emails.
//     General: If none of the above are matched, use General
//     . Output the response in the following format [{emailId, category}] only do not give other things like text, etc....`;
