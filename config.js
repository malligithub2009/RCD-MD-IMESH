//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54a5257d839eaa2b8f6b4.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94754898399";
global.owner = process.env.OWNER_NUMBER || "94754898399";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlRTE43T3JqWmc3KzFEZERDajZwRWQ1U3YvUTJnck54VkNFNHBqUzRtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXl4N1NHOWZFM3dqb1Jtb0pSNnZUZmlldmsxN2tkdy9lOHFDOURtUExWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUGIrTmVqcmxvMGRWM3ZXYitseklMd3RvYjR2ZjhSOXdXYVdWQUFqSVhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRVhvTlM4dU5RQUZSbWJyWmFwNEVZR3p5SHVDajdIS0J1QVFYdUdGdmlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGQTNwa0dJbzF4R3p6cEs3dThlZFpaMVRPaHlqVmN6eStUc1M5SVRXV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndORHI5K3FLcXdHR0FwUU5pTERUUEg3cCtGVVVwalJKZ0xrbUtFMWFUd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5keklQMThtK0ZaejFnWmRtb2JXSzAwR3BJZ25pNUYyOXRNN28vbDFsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFVKNzdPMFhUOHQ3MjhwNjZlVStlVlliME85V001T3NaYk1qOXRQSmJ4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdvd2xFVy9PdW5HSG51aDA0eXRYOHAxR29SQ2ljOU5aa3pLKzFBOXAwUDVpNHZLRUhENUhsWmEvcGd4QUljZUJUSG1GbXV1WGtncWhIOXpNNm9xeGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6InNsT0hacTlKNDlmajZBVXE2d1F4dmdPVWw0dVNpWHFqOG42V2FGcjFtc2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhmMGt0eEVqUjZteGdwNFltOVpTaGciLCJwaG9uZUlkIjoiNmY0ODYyOWMtMzkxNi00ZGNhLTk0MTAtNmI3OTY0OTk2ZTM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9lcmJNVW04d2ZOSENqMFNKQkxOVUlxMFIxbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dTdMM1kxVU9LM3RCSnMyZ3NYdkhlSDFJM1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlNCREtLNDkiLCJtZSI6eyJpZCI6Ijk0NzU0ODk4Mzk5OjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkBfzILMgsyC4oGx4bWQ4bWJzZzLosqw4a2EX8yCzILMgkAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tINXQ3VUhFSm1TcHJRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ill3NVlHdHpGVXl4YkFWWGh0SVJTNTJiTmM5MmVNRy93aVR6TndSc2VhVjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBOKzA0UjZZeklXMGgyb2kzVnhzNVcrUktqNHN5dG9tNDBDS2F5S29TWDgvbWdhTFhMTllxWno4WXo1TkRQMXNoWUlnRU03VGFTa1VmL2NTV2JkVEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlKzNmVThZUm1PUzBkeGtZT3ByYmo4QjMydHBlUXBjY0orOWpGYVh3a2h6N0sxV0dqTnBvRlBwSWlrUU1QaG4yUlBNbjRkYVhjakgyVkRjK3IvSU1ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0ODk4Mzk5OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldNT1dCcmN4Vk1zV3dGVjRiU0VVdWRtelhQZG5qQnY4SWs4emNFYkhtbGUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyODk1NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0VwIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "IMESH",
  author: process.env.PACK_AUTHER || "IMESH",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "IMESH MD",
  ownername: process.env.OWNER_NAME || "IMESH",
  errorChat: process.env.ERROR_CHAT || "94754898399",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
