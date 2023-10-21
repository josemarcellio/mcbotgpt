const mineflayer = require('mineflayer');
const dotenv = require('dotenv');

dotenv.config();

function settingMinecraftBot() {
  const bot = mineflayer.createBot({
    host: process.env.MINECRAFT_HOST,
    port: parseInt(process.env.MINECRAFT_PORT),
    username: process.env.MINECRAFT_USERNAME,
    auth: process.env.MINECRAFT_AUTH
  });

  return bot;
}

module.exports = settingMinecraftBot;
