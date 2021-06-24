const fetch = require("node-fetch");
const fs = require('fs');

let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw `❌ cari dulu idnya baru episodenya terus diisi oni-chan!!`
  let [ l, r ] = text.split`|`
  let chat = global.DATABASE._data.chats[m.chat]
  await m.reply(`[❗] Sedang mencari`)
  let url1 = `http://kkn.lp2m.unpkediri.ac.id/laporan/2015/api/main.php?home=episode&id=${l}&q=${r}&z=1`
  async function cekData(url){
      let teks = false
      try{
      let response = await fetch(url);
	  teks = await response.text();
	  if(teks == false) throw `[❌] Anime/Episode Tidak ditemukan!!`
	//if(!teks) throw `[❌] Anime/Episode Tidak ditemukan!!`
    let anu = [];
    const koala = JSON.parse(teks);
    let anoa = koala.episode[0]
    let {title, episode, thumbnail} = anoa
    conn.sendFile(m.chat, `${thumbnail}`, 'fileanim.jpg', `❏ Judul : ${title}
❏ Episode : ${episode}`)
}catch (e){}
}
cekData(url1)
const requestOptions = {

    method: 'GET'

}
const getData = async () => {
    const res = await fetch(url2 , requestOptions);
    const myJSON = await res.text()
    return myJSON
}
//consol

    
  let url2 = `http://kkn.lp2m.unpkediri.ac.id/laporan/2015/api/main.php?home=episode&id=${l}&q=${r}`
const getData2 = async () => {
    const res = await fetch(url2 , requestOptions);
    const myJSON = await res.text()
    return myJSON
}

getData2().then(function (result) {
    let url3 = result
//consol
m.reply(url3)
  })
  }
handler.help = ['playanime'].map(v => v + ' <ID>|<episode>')
handler.tags = ['anime']
handler.command = /^(playanime)$/i

module.exports = handler