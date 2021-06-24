const fetch = require("node-fetch");
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari apa?'
  let chat = global.DATABASE._data.chats[m.chat]
  await m.reply('Sedang mencari sabar oni-chan! .')
  const url2 = 'http://kkn.lp2m.unpkediri.ac.id/laporan/2015/api/main.php?home=all&q='
const myHeaders = {
    "Content-Type": "application/json",
};

const requestOptions = {
    method: 'GET'
}
const getData = async () => {
    const res = await fetch(url2 + text, requestOptions);
    const myJSON = await res.text()
    return myJSON
}

getData().then(function (result) {
    let anu = [];
    const anoa = JSON.parse(result);
     anoa.forEach(x => {
anu += `
❏ ID : ${x.id_title}
❏ Judul : ${x.title}
❏ Episode : ${x.episode}
❏ Status : ${x.status}
` })
//consol
//conn.sendFile(m.chat, link, '', `${nobuyaki}`, m)
m.reply(anu.trim())
    }).catch(error => {
        console.log('Error:', error)
  })
  }
  
handler.help = ['carianime'].map(v => v + ' <text>')
handler.tags = ['anime']
handler.command = /^(carianime)$/i

module.exports = handler