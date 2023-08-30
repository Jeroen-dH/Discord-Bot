require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'game',
        description: 'Get the gamepicker!',
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