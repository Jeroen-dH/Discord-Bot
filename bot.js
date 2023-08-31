require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits, EmbedBuilder} = require('discord.js')
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
    
    if(interaction.commandName === 'steam'){
        const SteamAPI = require('steamapi');
        const steam = new SteamAPI('3875F82F65D5E2D0C42959930633103D');
        const steam_id = interaction.options.get('steam-id').value;
        var games = []
       

        steam.getUserSummary(steam_id).then(summary => {

            (async() => {
                const steam_games = await steam.getUserOwnedGames(steam_id, true);
                // console.log(steam_games);
                // console.log(steam_games);
                steam_games.forEach(element => {
                    games.push("\n"+element.name);
                });
                interaction.reply('games van steam user '+ summary.nickname+'\n'+games);
            })();
            // console.log(summary.nickname);


        });


    }

    if(interaction.commandName === 'game'){
        const embed = new EmbedBuilder()
            .setTitle('Game picker')
            .setDescription('Please select 3 games you want to add to the game picker.')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png")
            .setColor(0x001ff)
            .addFields(
                {
                    name: 'Field title',
                    value: 'field value',
                    inline: true,
                },
                {
                    name: 'Field title',
                    value: 'field value',
                    inline: true,
                })
        interaction.reply({embeds: [embed]});
    }

    if(interaction.commandName === 'ping'){
        interaction.reply('pong');
    }
    // console.log(interaction.commandName);
})



// Log In our bot
client.login(process.env.CLIENT_TOKEN);