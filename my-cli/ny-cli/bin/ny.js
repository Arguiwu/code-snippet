#! /usr/bin/env node
const fs = require('fs');

const tempFilePath = '/template/User/Niaoyun/PC/Page/';

const argv = process.argv.slice(2);
const name = argv[0];					// Domain/index
const _root = process.cwd();

if(!name) {
	console.log('请输入文件名');
	return false;
}


const arr = name.split('/');
const filesPath = _root + tempFilePath + arr[0];
const file = filesPath + '/' + arr[1] + '.html';

if(!fs.existsSync(filesPath)) {
	fs.mkdirSync(filesPath, 0755);
}
fs.writeFile(file, '', function(err) {
	if (err) {
       return console.error(err);
   }
   console.log("创建成功!");
});