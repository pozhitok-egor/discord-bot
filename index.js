import dotenv from 'dotenv';
import * as Discord from 'discord.js';

dotenv.config();

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]}); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get('channelID').send(`<:LGNDRY:730591882933174332> Рады тебя видеть, <@!${member.client.user.id}>`)
});

const prefix = "/";

client.on('messageCreate', message => {
  if (message.author.bot) return;
  message.reply(`<@!${message.author.id}>`)
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "avatar") {
    const user = !message.mentions.users.size ? message.author : message.mentions.users.first();
    message.reply(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`)
  }
});

client.login(process.env.CLIENT_TOKEN);
