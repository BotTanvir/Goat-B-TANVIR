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
        api.sendMessage(`🤷‍♂️𝐅𝐔*𝐊 𝐘𝐎𝐔, 𝐘𝐨𝐮𝐫 𝐀𝐫𝐞 𝐓𝐲𝐩𝐞 𝐖𝐨𝐫𝐧𝐠${fileName}.𝙵𝙸𝙻𝙴 𝙽𝙰𝙼𝙴`, event.threadID);
        return;
      }
      api.sendMessage(`✅ 𝐓𝐀𝐍𝐕𝐈𝐑 𝐘𝐎𝐔𝐑 𝐓𝐇𝐄 𝐂𝐌𝐃 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐃𝐄𝐋𝐄𝐓𝐄 ➪ ( ${fileName} ) 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈`, event.threadID);
    });
  }
};
