module.exports = client => {
  const CHANNEL_ID = '852656560529342525';

  const updateMembers = guild => {
    const channel = guild.channels.cache.get(CHANNEL_ID);
    channel.setName(`[${guild.memberCount.toLocaleString()}] Members`); // alterar!
  }

  client.on('guildMemberAdd', member => updateMembers(member.guild));
  client.on('guildMemberRemove', member => updateMembers(member.guild));

  const guild = client.guilds.cache.get('852337615205695498');
  updateMembers(guild);
}
