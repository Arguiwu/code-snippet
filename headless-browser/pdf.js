const puppeteer = require('puppeteer')

;(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.niaoyun.com/', { waitUntil: 'networkidle'})

    await page.pdf({
        path: './download/niaoyun.pdf',
        format: 'letter'
    })

    await browser.close()
})()
