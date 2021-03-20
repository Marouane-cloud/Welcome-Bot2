//define the libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//when its ready log it
client.on("ready", ()=>console.log("READY"));
//define welcome "package"
const welcome = require("./welcome");
welcome(client);
//start the bot
client.login(config.TOKEN);

//NOTE:
/*
hada l fichier dial config.json 

"TOKEN"           ...token dial l bot
"CHANNEL_WELCOME" ... id dial chanel welcome
"ROLES_WELCOME"   ... id dial roles fach kayd5el chi wxa7ed jdid

{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/