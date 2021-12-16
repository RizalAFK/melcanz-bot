let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPt_K-31G107KPdTY6XztDUkO4am1QRra8oQ&usqp=CAU'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "LartypsBotz",
        "description": `
*LartypsBotz*
        
GRATIS - CHAT OWNER

tertarik? hubungi:
@62895395165760 (Z E E Y)
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "ga usah di klik",
                    "products": [
                        {
                            "productId": "46969566403153241"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "46969566403153224",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "62895395165760@s.whatsapp.net"
        },
        "footerText": "wa.me/62895395165760"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot|melcanz)$/i

module.exports = handler
