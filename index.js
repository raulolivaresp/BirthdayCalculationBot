const myArgs = process.argv.slice(2);

const MissingTime = require('./calculateDate.js')
const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();

//Token get from discord bot token
const token = myArgs[2];

bot.on('ready', () => {
    console.log('Raul birhday bot is online');
})

const possibleBirthday = MissingTime.calculateNextBirhday(myArgs[1]);

bot.on('message', msg => {

    if (msg.author.id !== '716124957674962944'){

        if (msg.content === 'es hoy?'){

            let missing = MissingTime.calculateDifference(possibleBirthday, msg.createdTimestamp);

            console.log("keep missing: " + missing + "days :(");

            if(missing === 0){ 
                msg.reply("Es hoy 🥳!!!");
                const attachment = new MessageAttachment('https://i02.appmifile.com/images/2019/11/05/81b3d413-77b0-46da-9877-a519c1e22108.png');
                msg.channel.send(msg.author, attachment);
            }
            else {
                msg.reply("No es hoy 😢. Quedan " + missing + " dias para el cumpleaños del "+ myArgs[0] );
            }
        }
    }

})

bot.login(token);