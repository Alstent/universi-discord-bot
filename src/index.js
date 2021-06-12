const { Client } = require('discord.js');

require('dotenv').config();

const serverStatus = require('./serverStatus');

const bot = new Client({
  partials: ['MESSAGE', 'REACTION'],
});

const PREFIX = '@el';
const helloArr = ['pau', 'ola', 'sup', 'hello']; // temp

bot.on('ready', () => {
  console.log(`${bot.user.tag} is online!`);
  serverStatus(bot);
});

bot.on('message', (message) => {
  if (message.author.bot) return;
  if (helloArr.includes(message.content)) {
    message.reply('sup pussy');
  }
  if (message.content.startsWith(PREFIX)) {
    const [pfx, CMD_NAME, ...args] = message.content
    // .substring(PREFIX.length) --> nao preciso da substring pk o comando sera:
    // '@el CMD_NAME' tirando o pk de utilizar subtring, sendo q o ' '(espaco) ja separa!
    .trim()
    .split(/\s+/);
 
    // console.log(pfx);
    // console.log(CMD_NAME);
    // console.log(args);
    if (CMD_NAME === 'kick') {
      message.channel.send('not implemented yet');
    }
    message.channel.send('commands not implemented yet c:');
  }
});

bot.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  //console.log(name);
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '852588637043949600') {
    switch (name) {
      case '✅': // add text no server!!
        member.roles.add('852589337618808844');
        break;
      default:
        console.log('nao funcionou'); // melhorar!!
        return;
    }
  }
})

bot.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  //console.log(name);
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '852588637043949600') {
    switch (name) {
      case '✅': // add text no server!!
        member.roles.remove('852589337618808844');
        break;
      default:
        console.log('nao funcionou'); // melhorar!!
        return;
    }
  }
})

bot.login(process.env.DISCORD_BOT_TOKEN);
