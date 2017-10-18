const puppeteer = require('puppeteer')

;(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    })
    const page = await browser.newPage()
    page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://www.baidu.com/', { waitUntil: 'networkidle'})

    await page.type('input[name=wd]', '云服务器哪一家好啊')
    await page.click('input[type="submit"]')
})()
