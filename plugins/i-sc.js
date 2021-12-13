let handler  = async (m, { conn, args }) => {
   m.reply(`Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript

Apabila terjadi error, kalian bisa menghubungi owner bot ketik !owner

Jika kalian ingin berdiskusi tentang bot silahkan kunjungi
https://chat.whatsapp.com/BEL8HA90i86KhKcX0gPpFS

Terima kasih.
`)
}
 
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i

module.exports = handler
