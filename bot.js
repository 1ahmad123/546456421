const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582906685753131018")
setInterval(function() {
channel.send(`عمك احمد يالنوب`);
}, 30)
})

client.login("NTgyOTA3MzU1ODE4MDk4NzEw.XO0o9A.ygTJNQ5gFAm27OHV2AdNeFBjjLo");
