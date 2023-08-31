require('dotenv').config();
const { REST, Routes, ApplicationCommand, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'game',
        description: 'Get the gamepicker!',
    },
    {
        name: 'gamepicker',
        description: 'kijkt welke games iedereen heeft',
    },
    {
        name: 'steam',
        description: 'Get steam games',
        options: [
            {
                name: 'steam-id',
                description: 'steam-id om te zien welke games de user heeft',
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    },
    {
        name: 'ping',
        description: 'pong',
    },
];

const rest = new REST({version: '10' }).setToken(process.env.CLIENT_TOKEN);

(async () => {
    try{
        console.log('registering commands');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log('commands registered');
    }catch (error) {
        console.log('an error occured: "'+error+'"');
    }
    
})();