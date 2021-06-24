const fetch = require("node-fetch");
let handler = async (m, { conn, command, isPrems, isOwner }) => {
  let chat = global.DATABASE._data.chats[m.chat]
  await m.reply('Oke! .')
  const url2 = 'http://kkn.lp2m.unpkediri.ac.id/laporan/2015/api/main.php?home=update'
const myHeaders = {
    "Content-Type": "application/json",
};

const requestOptions = {
    method: 'GET'
}
const getData = async () => {
    const res = await fetch(url2, requestOptions);
    const myJSON = await res.text()
    return myJSON
}

getData().then(function (result) {
    let anu = [];
    const kolala = JSON.parse(result);
    let anoa = kolala.latestupdate
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
  
handler.help = ['anime']
handler.tags = ['anime']
handler.command = /^(anime)$/i

module.exports = handler