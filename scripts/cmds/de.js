module.exports = {
  config: {
    name: "de",
    aliases: ["del"],
    author: "BaYjid",
role: 2,
    category: "system"
  },

  onStart: async function ({ api, event, args }) {
    const fs = require('fs');
    const path = require('path');

    const fileName = args[0];

    if (!fileName) {
      api.sendMessage("Please provide a file name to delete.", event.threadID);
      return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        api.sendMessage(`🤷‍♂️ 𝐅𝐔*𝐊 𝐘𝐎𝐔, 𝐘𝐨𝐮 𝐀𝐫𝐞 𝐓𝐲𝐩𝐞 𝐖𝐨𝐫𝐧𝐠 ${fileName}.𝐅𝐈𝐋𝐄 𝐍𝐀𝐌𝐄`, event.threadID);
        return;
      }
      api.sendMessage(`✅ 𝐓𝐀𝐍𝐕𝐈𝐑 𝐘𝐎𝐔𝐑 𝐂𝐌𝐃 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐃𝐄𝐋𝐄𝐓𝐄𝐃 ➪ ( ${fileName} ) 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋`, event.threadID);
    });
  }
};
