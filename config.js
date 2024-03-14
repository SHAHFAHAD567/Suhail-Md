const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ShahFahad:<password>@cluster0.sjl1xjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_07_03_14_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUpoVUg4OGFraCtXT2M5NWxCaWtFRzZzN1ZVd0IzOHdTUkRBNUNzbGwwbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBxR256ODh5L1RkRXpQMlkvL3JNcnAxSDNyMFdUR25QWXN0WXBJQ1hjUUU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkxlZDc4VktPTVRSZ24xMEZzZUoycWZxcHNrcGVRMzRUNWY1UWtPZjdXOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi9tNmwraWNrZTh4ME05UzFZL2FUM3puTFRsNk1uZzdVZ2l5THlvTlBia1k9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUQ2ajA4VjRkKy9WcEhUZ29jQ1ZUaFp0SFlXa3hpYW1rMnEzRHJ3Uk0zdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImxXZ0pGbjRHaFZiU0l6ZGhnSG9HWjVhbk9keDd2RFRyb1pMbmx6bDlKVjg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrRHpKcGxUKzRObGJuY0dsNW1CSjFGc2JwSmwxbUwzRUdSQUs3Uy9zTG1VPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUlDZ1ZLVWNuVWJOTmRaRjB3N01ZOGpQaVNCTEtJMm9DcnpTOVQ2bG1pRT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJwTHZIQWlKc3JKcWIvUFlDTnp4Z2l5THI1YXkyRjI2cit6ZSttTko0VDF4aE03UGhTaTNFRXpaWFZsSTJlT0dQQS9YWi9PMTdyZTZMM2ViRS83bFZBdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjQ5LFwiYWR2U2VjcmV0S2V5XCI6XCJrQnVaZWkwamJqNk83ZnB1WlJUNzVhTEVSUmJSU0dHZmR4TFRIZFoyUFlrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBMjgyQjMzODY5NDdEQUZBRDM3OTc0N0UyQjQyODA5XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MDcyMjV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjEyNDVCMjZENTk0QUNDRjQ3MEQyODYyMDQxNUI0ODEzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MDcyMjZ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjIwMTY0MUVCQ0E5QkQwMjU1Qjg4OTlBREYzQTJGODBBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MDcyMjl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDE3Njc0NDgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkJGODg2NTU3QUMwNEUwMDk4NDcwNEFEMTNEMTk1RDFGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA0MDcyMjl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJZUzJLLU51Z1FsS1RlVzlOSXpDTDdBXCIsXCJwaG9uZUlkXCI6XCI1ZjE1OTg1YS04ZGRjLTQ2YTMtOTcwOS0xZGVkODBjNjFkNzZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImE2dVJMcXNtVklHMTU0RFRyTHh2a1dEbnNRMD1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXS2pKRnE1ODJRUEtoYzlzUTFxYTRBYVdLejg9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiOUNONFM4NFZcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzQxNzY3NDQ4MjozQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJVbmtub3duXCIsXCJsaWRcIjpcIjExOTkyODY0MDMwMzI0NTozQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTm45c3ZjRkVMVDh5cThHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkt2RUEvdnZrTFZYa2U0Vk40ZGhlQ1FZY0J1YkV2MmRhWHFiSFB3b0hjaEU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJVaUZsNisrTjRsMmFuWG56N1FPUUFMSFZqeGFtbzVCM1dMbWFzdmprQVdsL2V2SGI4ZFIzSlViNTBrcEgwNVlCQUhYcmdNS1NucjNPU1ZNM2ljb0tBUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImdQZm1MMDB3RWVEUTlBeHRVYTFzUjk2OEs3aTZoUmhYV2xRS2U4WG9vYWphUDA3RW5MZmNSanlrRzNtS25YNVZWMXJoUjVDQ0JvZ3J5RkRGK3JYNERBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0MTc2NzQ0ODI6M0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJTcnhBUDc3NUMxVjVIdUZUZUhZWGdrR0hBYm14TDluV2w2bXh6OEtCM0lSXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDQwNzIyNCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFBa3hcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBa3guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRHFqNUJwVjdUUWdJVVJ4cVZNWmFYNkF0QlpIdEN5blFOYi9mVFhRT1R3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTI1NzM2NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDM1MTQ0MjQ5N1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
