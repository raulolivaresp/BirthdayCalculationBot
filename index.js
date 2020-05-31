//get arguments from console
const arguments = process.argv.slice(2);

const MissingTime = require('./calculateDate.js');
const SearchWords = require('./searchWords.js');
const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();

const name = arguments[0];
const possibleBirthday = MissingTime.calculateNextBirhday(arguments[1]);
const token = arguments[2];
const idDiscordApp = arguments[3];
const differentZoneMilliseconds = arguments[4];

const words= ['importante', 'hoy', 'cumpleaños', 'birthday', 'cumpleañero', 'cuanto', 'falta', 'mañana'];

bot.on('ready', () => {
    console.log('Raul birhday bot is online');
})

bot.on('message', msg => {

    if (msg.author.id !== idDiscordApp){

        if (SearchWords.loopAllWords(msg.content, words)){

            let missing = MissingTime.calculateDifference(possibleBirthday, msg.createdTimestamp, differentZoneMilliseconds);

            console.log("keep missing: " + missing + "days :(");

            if(missing === 0){ 
                msg.reply("Es hoy 🥳!!!");
                const attachment = new MessageAttachment('https://i02.appmifile.com/images/2019/11/05/81b3d413-77b0-46da-9877-a519c1e22108.png');
                msg.channel.send(msg.author, attachment);
            }
            else {
                msg.reply("No es hoy 😢. Quedan " + missing + " dias para el cumpleaños del "+ name );
            }
        }
    }

})

bot.login(token);