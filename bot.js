const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 


client.login(process.env.NzU3MjU1NjEwMDM0MjkwODM5.X2dvPg.VvdcDBQZFOP0JVhaVNKiPb5saUY);
