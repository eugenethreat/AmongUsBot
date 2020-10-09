const Discord = require('discord.js');
const { waitForDebugger } = require('inspector');
const client = new Discord.Client();

login();

function getKey() {
    const fs = require('fs')
    let key = fs.readFileSync('key.txt').toString();
    //BLOCKS 
    return key;

    /*
    fs.readFile('key.txt', (err, data) => {
        if (err) throw err;
        key = data.toString();
        console.log(`${key}`)

    }) //code that I copied from https://www.geeksforgeeks.org/javascript-program-to-read-text-file/
        //READS ASYNCHRONOUSLY 
    */
}

function login() {

    try {
        let token = getKey();

        client.login(token)
        client.on('ready', () => {
            console.log('I am ready!');
        });

        // Create an event listener for messages
        client.on('message', message => {
            if (message.content === '!shh') {
                //see who sent the message
                //look at everyone in the channel
                //change voicestate to mute

                let people = message.member.voice.channel.members;

                people.forEach(GuildMember => {
                    GuildMember.voice.setMute(true, "ting");
                });
            }

            if (message.content === '!noshh') {
                //see who sent the message
                //look at everyone in the channel
                //change voicestate to unmute

                let people = message.member.voice.channel.members;

                people.forEach(GuildMember => {
                    GuildMember.voice.setMute(false, "ting");
                });

            }
        });

    } catch {

    }

    /*
        log in
        parse text channels for command - !shh
        look at everyone in the channel
        change voicestate to mute
        parse text channels for - "!talk"
        unmute
    */
}
