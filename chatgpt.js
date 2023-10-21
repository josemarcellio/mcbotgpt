const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

class ChatGPTChat {
  constructor(bot) {
    this.bot = bot;
  }

  async chatWithGPT(username, message) {
    if (message.includes(process.env.MINECRAFT_USERNAME)) {
      try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: process.env.MODEL_AI,
          messages: [
            {
              role: 'system',
              content: process.env.PROMPT,
            },
            {
              role: 'user',
              content: message,
            },
          ],
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        });

        this.bot.chat(response.data.choices[0].message.content);

        if (process.env.LOG === 'true') {
        console.log(username + ": " + message)
        console.log(process.env.MINECRAFT_USERNAME + ": " + response.data.choices[0].message.content)
        }

      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}

module.exports = ChatGPTChat;
