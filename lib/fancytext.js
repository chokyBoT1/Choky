const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')

function fancy(TEXT) {
	try {
		return new Promise((resolve, reject) => {
			fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(TEXT)}`, {
				method: 'GET'
			})
			.then(res => res.text())
			.then(html => {
				let dom = new JSDOM(html)
				let table = dom.window.document.querySelector('table').children[0].children
				let obj = {}
				for (let tr of table) {
					let name = tr.querySelector('.aname').innerHTML
					let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
					obj[name + (obj[name] ? ' Reversed' : '')] = content
				}
				resolve({
					status: 200,
					result: Object.keys(obj).map(name => `${name}\n${obj[name]}`).join('\n\n')
				})
			})
			.catch(err => {
				reject({
					status: 403,
					error: err
				})
			})
		})
	} catch (err) {
		return {
			status: 'error',
			error: err
		}
	}
}

module.exports.fancy = fancy
