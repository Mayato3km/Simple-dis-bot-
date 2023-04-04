let config = require('../config.json');
let token = config.token
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
intents: [GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log('The bot now online! awesome!');
});


client.login(token);
