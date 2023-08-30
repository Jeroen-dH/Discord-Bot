require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
})

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});


client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'game'){
        interaction.reply('games');
    }
    if(interaction.commandName === 'ping'){
        interaction.reply('pong');
    }
    // console.log(interaction.commandName);
})



// Log In our bot
client.login(process.env.CLIENT_TOKEN);