require('dotenv').config();
const { REST, Routes, ApplicationCommand, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'game',
        description: 'Get the gamepicker!',
    },
    {
        name: 'play',
        description: 'kijkt welke games iedereen heeft',
    },
    {
        name: 'getsteamstats',
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
    {
        name: 'pablo',
        description: 'yes jump bro',
    },
    {
        name: 'sus',
        description: 'no sussy among us command',
    },
    {
        name: 'noob',
        description: 'get noobed kid',
    },
    {
        name: 'crypto',
        description: 'i see you have big money!',
    },
    {
        name: 'speed',
        description: 'ishowmeat',
    },
    {
        name: 'help',
        description: 'i see you need help',
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