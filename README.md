# Nylas AI-Driven Email Categorizer with Priority Detection

## Overview

This project is an **AI-Driven Email Categorizer with Priority Detection**. It automates the categorization of incoming emails into different buckets (e.g., work, personal, urgent) and highlights the most important ones for immediate attention. The tool leverages the Nylas API for email retrieval and integrates AI models from OpenAI and Google Gemini to categorize and prioritize emails.

## Features

- Retrieve emails using Nylas API
- Categorize emails using OpenAI and Google Gemini models
- Detect and prioritize urgent emails

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **Nylas Account**: Sign up for a Nylas account and obtain your API key and user grant ID.

- **OpenAI API Key**: Obtain an API key from OpenAI. You can sign up at [openai.com](https://openai.com/).

- **Google Gemini API Key**: Obtain an API key from Google Generative AI. Sign up at [Google Cloud](https://cloud.google.com/generative-ai).

## Environment Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/email-categorizer.git
   cd nylas-email-categorizer
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Create an Environment File**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   NYLAS_API_KEY=your_nylas_api_key
   NYLAS_API_URI=your_nylas_api_uri
   NYLAS_USER_GRANT_ID=your_user_grant_id
   GEMINI_API_KEY=your_gemini_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

   Replace `your_nylas_api_key`, `your_nylas_api_uri`, `your_user_grant_id`, `your_openai_api_key`, and `your_gemini_api_key` with your actual API keys and user grant ID.

4. **Run the Application**

   Start the application using the following command:

   ```bash
   npm start
   ```

   The server will start and listen on port 3000 by default. You can access the endpoints at `http://localhost:3000`.

## Endpoints

- **`GET /categorize-email-gemini`**: Fetch recent emails and categorize them using Google Gemini.

- **`GET /emails`**: Fetch recent emails and categorize them using OpenAI.

## Troubleshooting

- **Error: `GoogleGenerativeAIError: [GoogleGenerativeAI Error]: First content should be with role 'user', got system`**

  Ensure that you are sending the initial message with the role 'user' as required by the Gemini API.

- **Error: `TypeError: Nylas.config is not a function`**

  Make sure you are using the correct Nylas SDK version and initializing it according to the latest documentation.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, you can ping me.