require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents

const { Client, GatewayIntentBits, EmbedBuilder} = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
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
                steam_games.forEach(element => {
                    games.push("\n"+element.name);
                });
                interaction.reply('games van steam user '+ summary.nickname+'\n'+games);
            })();
        });


    }
    
    if(interaction.commandName === 'game'){
        const options = [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ];
        
        const embed = new EmbedBuilder()
            .setTitle('Game Selector - Game Picker')
            .setDescription('Please select the game you wanna play.')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png")
            .setAuthor({ name: 'Jimmy Neutron'})
            .setColor(0x001ff)
            
            interaction.reply({embeds: [embed]});
    }

    if(interaction.commandName === 'ping'){
        interaction.reply('pong');
    }
    if(interaction.commandName === 'gamepicker'){
        const SteamAPI = require('steamapi');
        const steam = new SteamAPI('3875F82F65D5E2D0C42959930633103D');
        var games2 = [];
        var iedereen = [];
        const steam_id = ["76561198448201686",'76561199164949506','76561198119550296'];
        var num = 1;

        steam_id.forEach(id => {
            num += 1;
            steam.getUserSummary(id).then(summary => {
                (async() => {
                    const steam_games = await steam.getUserOwnedGames(id, true);
                    steam_games.forEach(element => {
                        games2.push(element.name);
                    });
                    const elementCounts = {};
        
                    games2.forEach(element => {
                      elementCounts[element] = (elementCounts[element] || 0) + 1;
                    });
                    for (const [key, value] of Object.entries(elementCounts)) {
                        if (value === 3){
                            iedereen.push(key);
                        }
                    }
                    console.log(iedereen);
                    interaction.reply(iedereen);
                })();
                // console.log(summary.nickname);
    
            });
        });



    }
    // console.log(interaction.commandName);
})



// Log In our bot
client.login(process.env.CLIENT_TOKEN);