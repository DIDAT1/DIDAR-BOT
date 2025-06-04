const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "Amit Max ⚡",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "profile",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 𝗔𝗠𝗜𝗧 𝗠𝗔𝗫 ⚡ 』

• Name: Didar  
• Class: 10
• Group: Accounting  
• Gender: Male  
• DOB: 22-01-2006  
• Religion: Sanatan  
• Blood: B+  
• Height: 5.5 ft  
• Location: Comilla 
• Hobby: Flirting  
• Status: Single  
• FB:  https://www.facebook.com/didar.xx2
• IG: instagram.com/didar.xx2  
• Email: didar329@gmail.com  

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
