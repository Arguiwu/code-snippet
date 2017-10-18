const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')

;(async() => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	// await page.emulate(devices['iPhone 6'])

	page.setViewport({
		width: 1920,
		height: 1080
	})

	await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/examples/screenshot-fullpage.js')
	await page.screenshot({path: './download/niaoyun2.png', fullPage: true})
	
	await browser.close()
})()
