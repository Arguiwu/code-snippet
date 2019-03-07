const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

function getTotalUrl() {
	const years = [2017, 2018, 2019];
	const results = [];
	for(let i = 0; i < years.length; i++) {
		let months = 13;
		if(years[i] === 2019) {
			months = 4;
		}
		for(let j = 1; j < months; j++) {
			let month = j;
			if(j < 10) {
				month = `0${j}`;
			}
			results.push(`http://www.66law.cn/question/${years[i]}/${month}/`)
		}
	}
	return results;
}

for(let i = 1; i < 11; i++) {
	setTimeout(() => {
		getListData(i);
	}, i * 5000);
}

function getListData(page) {
	superagent.get(`http://www.66law.cn/question/2017/01/${page}.aspx`).end((err, res) => {
		if(err) {
			return console.error('页面错误');
		}
		let $ = cheerio.load(res.text);
		const content = $(".histroy-art-list");
		$(content).find('li').each(function(idx, element) {
			const $_element = $(element);
			const url = $_element.find('.t a').attr('href');
			const index = idx + 1;
			
			setTimeout(() => {
				superagent.get(`http://www.66law.cn${url}`).end((err, res) => {
					if(err) {
						return console.error('详情错误');
					}
					console.log(`正在读取 ${url}的内容`)
					$ = cheerio.load(res.text);
					const results = [];
					$('.reply-list2').find('li').each(function(idx, element) {
						const $_element = $(element);
						results.push({
							name: $_element.find('.mb5 a').text(),
							phone: $_element.find('.heiti-std.s-cb.f14').eq(1).text(),
							content: $_element.find('.b').text(),
							time: $_element.find('.mt15').text(),
						})
					});
					
					const data = {
						title: $_element.find('.t a').attr('title'),
						type: $_element.find('.b').find('span').eq(0).text(),
						address: $_element.find('.b').find('span').eq(1).text(),
						time: $_element.find('.b').find('span').eq(2).text(),
						replys: results,
					}
					setJson(`data/2017-01-${page}.json`, data);
				});
			}, index * 500)

		});
	});
}


function setJson(filepath, contents) {
	fs.readFile(filepath, 'utf-8', function(err, data) {
		if(err) {
			fs.appendFileSync(filepath, JSON.stringify([contents]), function() {});
			return;
		}
		let newData = [];
		if(data) {
			newData = JSON.parse(data);
		}
		newData.push(contents);
		fs.appendFileSync(filepath, JSON.stringify(newData), {flag: 'w'}, function () {});
	});
}
