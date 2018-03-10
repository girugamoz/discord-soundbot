/* eslint-disable import/newline-after-import */
const config = require('./config/config.json');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ counts: [], ignoreList: [] }).write();

const SoundBot = require('./src/SoundBot.js');
const bot = new SoundBot();
bot.start();

const message = [
  'Use the following URL to let the bot join your server!',
  `https://discordapp.com/oauth2/authorize?client_id=${config.client_id}&scope=bot`
].join('\n');
console.log(message); // eslint-disable-line no-console