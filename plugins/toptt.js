const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas audio yang ingin diubah ke voice note dengan caption *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
    conn.sendMessage(m.chat, audio, MessageType.audio, null, m, true, {
      quoted: m,
      /*type: 'audioMessage',*/
      ptt: true
  })
   //conn.sendfile(m.chat, audio, 'yamete.mp3', null, m, true, {
   //     type: 'audiomessage', // paksa tanpa convert di ffmpeg
   //     ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
   // })
}
handler.help = ['tovn']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i

module.exports = handler