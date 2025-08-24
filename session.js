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
SESSION_ID: process.env.SESSION_ID || "Danuzz-MDeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0cxV011dVlZbU5FWUgrOGMzd1YyYW1rNE14TVI2SEJjYUQzc0E0UUkxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaytuMHYwOUxEUEc2M2JPWHZmcjEyb2lSMFZBYkNLcHJGR2tLaTJWR1RnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRnBYMnVJcFI3MVFpYnRFU3E4Ym5qdVUxMmtjUy9OVHJzd3JqRlNxSVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR2QwaWVrUTh3bmM2eUdlcG84QUpuUk5leGdXbXc2OTVXVlhlN2FZcVVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGZ2RnVk85ZFZ4QmUyRkVCaEJKR3BBekM0R05hWW0yb2kxakp4aVRDSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDODdQZ3dZTTdnNmF1U01SNE03K2NMTDZaWEtoVUx3L1lXQUFwZ3k1MUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RZVU40ZkZrSFIyT0ZVN1M1MTdHcVk5VmNmY08welNucUthVnZnZ1VHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDdqVWlpRkF6S2EzTnVINklXYmwyQ2NvSGVkMjhlSVNIQ2tnVkNPcUZDcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFXVnc4K254SjZ4Z1YwbU1vQkNvMy9qSWxBTk9pOEIrbDcwZS9XWlVBdHRvZWphYmY5NnRkZ2NVV1h0K0pZRFR6Mll3YTF5cElWUUlMdW1kczBsQmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJWQU1ucXFURDJNb3lFYlJWdThkcTJ4ZDJTb2FuMlp6Q2xoQitsaXp6VnlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0c1ByWDVqRVNfLWxSNkR0MDZYdDJ3IiwicGhvbmVJZCI6IjdkZjU2ZjlmLTg5N2UtNGQ1Ni1hN2NhLTcwNmJhZWExYjVjNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS1JGb2NrbWJQSjdSaHUydVo2cjhnL0ppVlE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJRajd2QW9QQWpMK2xURW9FYjZPSE1MYml3az0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3Uzcvb0dFTE81ck1VR0dCMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldzeTZaQUtpM0lGeHc0Y3Z5N25JcG1jT3I1U0RNanViTHVwZnN1Y0lMd1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik10aUpXZnl2cGZuYVB0Ky9MVXFOOURrcjZsRjhBWmRlOHdVYkpqSzFUWHN3dnBpVm0vYkZqVWpDQkFkditNRU13eU1NcUdZNkZVRk52NE5NWmJFOER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkS3V3V0xKamFra0JxSEdvaVlxR0syT0dQU0toRDlqZjgrcWdmTFlQdEMvWE9oNGFyQmtnT3FxSERyTFBkY1VOVzFtcjFlUEpkUmpLb0h0dkJhQlloZz09In0sIm1lIjp7ImlkIjoiOTQ3NjIyOTQ3NDU6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGFuaWR1PDMiLCJsaWQiOiIxMzIyNDQwNTY1OTg1MDoxNkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjIyOTQ3NDU6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnJNdW1RQ290eUJjY09ITDh1NXlLWm5EcStVZ3pJN215N3FYN0xuQ0M4RiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDQ0NDcwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTdPIn0=",
PORT: process.env.PORT || "8000"
};
