const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generate_Image")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hallo!")
    } else if (message.content == "hallo ganteng") {
        message.reply("Hallo juga ganteng😊")
    } else if (message.content == "lagi apa?") {
        message.reply("Lagi mikirin kamu 😘")
    } else if (message.content == "asu") {
        message.reply("Jangan ngomong kasar ya 😉")
    }
})

const welcomeChannelId = "991610772377583657"
const generalChannelId = "990829093434056711"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)