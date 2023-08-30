const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Get a gamepicker'),
	async execute(interaction) {
		await interaction.reply('Embed');
	},
};