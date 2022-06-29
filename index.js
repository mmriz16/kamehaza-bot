const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTkxNjA0NDA1MjczMTE2Njcy.G_ZRKW.wbcE9aOrN0dSNo5GG7c-G624ECoRIgTuEomURU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)