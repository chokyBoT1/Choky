const { MessageType } = require('@adiwajshing/baileys')
const { text } = MessageType
const fs = require('fs')
let moment = require('moment-timezone');
const solat = require('./jadwalsholat')
let { fetchJson } = require('./fetcher');
let axios = require('axios')
let cheerio = require('cheerio')
let jaso = JSON.parse(fs.readFileSync('./lib/jadwalsolat.json'))
let cron = require('node-cron')
moment.tz.setDefault('Asia/Jakarta').locale('id')

function _axios(host) {
        return new Promise(async(resolve, reject) => {
                axios.get(host).then(({ data }) => {
                        resolve(data)
                })
        })
}

function sholatAll(kota) {
        return new Promise(async(resolve, reject) => {
                let html = await _axios('https://m.dream.co.id/jadwal-salat/' + kota.replace(/\s/g, '-').toLowerCase())
                $ = cheerio.load(html)
                let data = []
                $('table[class="table-index-jadwal"] > tbody > tr').each(function(i, e) {
                        data.push({
                                'tanggal' : $(e).find('td[data-title="Tanggal"]').text(),
                                'subuh' : $(e).find('td[data-title="Subuh"]').text(),
                                'duha' : $(e).find('td[data-title="Duha"]').text(),
                                'zuhur' : $(e).find('td[data-title="Zuhur"]').text(),
                                'ashar' : $(e).find('td[data-title="Asar"]').text(),
                                'magrib' : $(e).find('td[data-title="Magrib"]').text(),
                                'isya' : $(e).find('td[data-title="Isya"]').text()
                        })
                }); resolve(data)
        })
}
cron.schedule('0 0 * * *', async() => {
           jaso = await sholatAll('jakarta timur')
		   fs.writeFileSync('./jadwalsolat.json', JSON.stringify(jaso))
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })
async function jadwalAdzan (to, benny, adadeh, namaBot) {
	try {
		let tanggal = moment().tz('Asia/Jakarta').format("YYYY-MM-DD")
		let waktu = moment().tz('Asia/Jakarta').format("HH:mm")
		let adzan = jaso
		let subuh = adzan.subuh
		let dzuhur = adzan.zuhur
		let ashar = adzan.ashar
		let maghrib = adzan.magrib
		let isya = adzan.isya
		let nama = 'Jakarta'
		if (waktu === isya) return benny.sendMessage(to, `Telah Masuk Waktu sholat Isya\nUntuk ${nama} dan sekitarnya\nPukul: ${waktu}\n          ${namaBot}`, text, {quoted: adadeh})
		if (waktu === subuh) return benny.sendMessage(to, `Telah Masuk Waktu sholat Subuh\nUntuk ${nama} dan sekitarnya\nPukul: ${waktu}\n          ${namaBot}`, text, {quoted: adadeh})
	    if (waktu === dzuhur) return benny.sendMessage(to, `Telah Masuk Waktu sholat Dzuhur\nUntuk ${nama} dan sekitarnya\nPukul: ${waktu}\n          ${namaBot}`, text, {quoted: adadeh})
		if (waktu === ashar) return benny.sendMessage(to, `Telah Masuk Waktu sholat Ashar\nUntuk ${nama} dan sekitarnya\nPukul: ${waktu}\n          ${namaBot}`, text, {quoted: adadeh})
		if (waktu === maghrib) return benny.sendMessage(to, `Telah Masuk Waktu sholat Maghrib\nUntuk ${nama} dan sekitarnya\nPukul: ${waktu}\n          ${namaBot}`, text, {quoted: adadeh})
	} catch (e) {
	}
}

module.exports = {jadwalAdzan}
