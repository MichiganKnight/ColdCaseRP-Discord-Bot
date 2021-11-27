const { Client, Intents } = require('discord.js');

require('dotenv').config();

const myIntents = new Intents();

myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

const client = new Client({ intents: myIntents });

client.on('ready', () => {
    console.log("Ready");
});

client.login(process.env.BOT_TOKEN);