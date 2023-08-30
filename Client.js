require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);