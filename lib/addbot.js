const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode")
const moment = require("moment-timezone")
const fs = require("fs")

exports.addbot = async function(benny, sesi){
    const anu = new WAConnection()
    benny.on('qr', async qr => {
		qrcode.generate(qr, { small: true })
        let scan = await benny.sendMessage(mentioned[0], await qrcode.toDataURL(qr, { scale: 8 }), MessageType.image, {caption: 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik'})
        setTimeout(() => {
            benny.deleteMessage(mentioned[0], scan.key)
        }, 30000)
    })
    fs.existsSync(`./${sesi}.json`) && benny.loadAuthInfo(`./${sesi}.json`)
}