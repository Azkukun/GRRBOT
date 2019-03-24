//Hey guys !
//Thanks for your help !
//My bot is french and... for you, i speack "english" (Google Translate... LOL)
// I have 1 problem ! (line 35)


let prefix = "+"

const Discord = require("discord.js");


const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 


});


client.on("message", message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.content === prefix + "test"){
  message.reply("je suis opérationnel")
  }


//I create a webhook for my server and...
const hook = new Discord.WebhookClient('555824385915617300', 'YOU HAVE NOT ACCESS FOR YA !');

//I can not make the args for the bot to say exactly what is written after the command +captainhook
if(message.content === prefix + "captainhook"){
 let subr = args.join(" ");

           message.channel.send("Envoie...");
console.log("Envoie d'hook 1");
        hook.send("Un évent est en préparation ! (Invitez des gens en attendant jusqu'à 17h)");
}
});
