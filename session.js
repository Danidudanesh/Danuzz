//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                     𝗗𝗔𝗡𝗨𝗭𝗭-𝗠𝗗 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//
//
//                       ████████████████████████████████████████
//                       █▄─▄▄▀██▀▄─██▄─▀█▄─▄█▄─██─▄█░▄▄░▄█░▄▄░▄█
//                       ██─██─██─▀─███─█▄▀─███─██─███▀▄█▀██▀▄█▀█
//                       ▀▄▄▄▄▀▀▄▄▀▄▄▀▄▄▄▀▀▄▄▀▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▄▀                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © Danuzz-MD
//  * @version      : 1.0
//  * @author       : Danidu Danesh
//  * @description  :© Danuzz-MD, A Multi-functional WhatsApp bot created by Danidu Danesh.
//*
//*
//Base by Danidu Danesh
//GitHub: @Danidudanesh
//WhatsApp: +94762294745
//   * Created By GitHub: Danidudanesh
//   * Credit To Danidu Danesh
//   * © 2025 © Danuzz-MD-V1.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
PORT: process.env.PORT || "8000"
};
