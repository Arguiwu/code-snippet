#!/usr/bin/env node
var cmd = require('commander')
var path = require('path')
var fs = require('fs')
var appInfo = require('../package.json')


const animals = fs.readFileSync(path.join(__dirname, '../data/animals.txt')).toString().split('===============++++SEPERATOR++++====================\n')
const jokes = fs.readFileSync(path.join(__dirname, '../data/jokes.txt')).toString().split('%\n');
const quotes = fs.readFileSync(path.join(__dirname, '../data/quotes.txt')).toString().split('%\n');
const tang300 = fs.readFileSync(path.join(__dirname, '../data/tang300.txt')).toString().split('%\n');
const song100 = fs.readFileSync(path.join(__dirname, '../data/song100.txt')).toString().split('%\n');

/*
	返回随机动物 ascii
*/

function randomAnimal() {
	return animals[Math.floor(Math.random() * animals.length)]
}

/*
	返回段子
*/
function prefix(type) {
	switch(type) {
		case 'quotes':
			return quotes[Math.floor(Math.random() * quotes.length)]
			break
		case 'jokes':
			return jokes[Math.floor(Math.random() * jokes.length)]
			break
		case 'tang':
			return tang300[Math.floor(Math.random() * tang300.length)]
			break
		case 'song':
			return song100[Math.floor(Math.random() * song100.length)]
			break
		default:
			return tang300[Math.floor(Math.random() * tang300.length)]
	}
}

cmd
	.version(appInfo.version)
	.option('-i, --index <n>', 'ascii art index, default is random', -1, parseInt)
	.option('-t, --type <value>', '[quotes|jokes|tang|song]', 'quotes', /^(quotes|jokes|tang|song)$/i)
	.on('--help', function() {
		console.log('\t' + appInfo.repository.url)
	}).parse(process.argv)

const animal = cmd.index === -1 ? randomAnimal() : animals[cmd.index]
 
console.log(prefix(cmd.type))
console.log(animal)