require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_KEY;
const webAppURL = 'https://www.google.com/';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === '/start') {
    await bot.sendMessage(chatId, 'А теперь давай заполним форму', {
      reply_markup: {
        // keyboard: [[{text: 'Заполнить форму', web_app: {url: webAppURL}}]],
        inline_keyboard: [
          [{text: 'Заполнить форму', web_app: {url: webAppURL}}],
        ],
      },
    });
    // await bot.sendMessage(chatId, 'А теперь давай заполним форму', {
    //   reply_markup: {
    //     keyboard: [[{text: 'Заполнить форму', web_app: {url: webAppURL}}]],
    //   },
    // });
  } else {
    bot.sendMessage(chatId, 'Received your message');
  }
});
