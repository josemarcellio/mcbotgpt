const dotenv = require('dotenv');
const settingMinecraftBot = require('./minecraft.js');
const ChatGPTChat = require('./chatgpt.js');

dotenv.config();

function startBot() {
  const bot = settingMinecraftBot();
  const chatGPTChat = new ChatGPTChat(bot);

  bot.on('chat', async (username, message) => {
    if (username === bot.username) return;
    chatGPTChat.chatWithGPT(username, message);
  });
}

module.exports = startBot;
