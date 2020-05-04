const discord = require("discord.js")
const client = new discord.client;

client.on("message", message => ( 
  (message.content == "ping")
  message.reply("pong");
  )
});


{if (msg.author.id == YOUR-ID && msg.content.startsWith("!dm")) {
        let msg_to_send = msg.content.substring(4);
        let memarr = msg.guild.members.array();
        for (let i = 0; i < memarr.length; i++) {
            let mem = memarr[i]
            await mem.send(msg_to_send).catch(() => { });
        }
    }
}

client.login("NjkyMTQ0ODcwODgxNzU1MTg3.XnqQZA.fDnX099XOlMcqaM4K6BvBxKW3aI");
