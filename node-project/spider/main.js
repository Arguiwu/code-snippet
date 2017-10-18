const superagent = require('superagent')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const urlencode = require('urlencode')

const MovieModel = require('./MovieSchema')
const requestHeader = require('./header')
const getMovie = require('./spider')

mongoose.connect('mongodb://localhost/Movie')
const db = mongoose.connection

let page = 0,
    url,
    tags = [],
    tagsLength,
    start = 0,
    doubanUrl = 'https://movie.douban.com/tag/'

db.on('error', () => {
    console.log('数据库链接错误')
})

db.on('open', () => {
    superagent.get(doubanUrl)
        .set(requestHeader)
        .end((err, res) => {
            if(err) {
                console.log('是不是出错啦')
                console.log(err)
                return
            }
            const $ = cheerio.load(res.text)
            $('.tagCol td a').each((i, item) => {
                tags.push(urlencode($(this).text()))
            })
            tagsLength = tags.length
            url = doubanUrl + tags[start] + '?start=' + page * 20 + '&type=T'
            getLink(url)
        })
})

function getLink(url) {
    superagent.get(url)
        .set(requestHeader)
        .timeout(10000)
        .end((err, res) => {
            if(err) {
                if(err.timeout) {
                    console.log('超时')
                }
                getLink(url)
                return
            }
            const $ = cheerio.load(res.text)
            const links = $('.item .pl2 a')
            const listCount = links.length
            if(!listCount) {
                setTimeout(() => {
                    if(start <= tagsLength) {
                        start++
                        page = 0
                        url = doubanUrl + tags[start] + '?start=' + page * 20 + '&type=T'
                        console.log(tags[start] = '标签已爬完')
                        getLink(url)
                    }else {
                        console.log('全部标签已爬完')
                    }
                }, 20000)
                return
            }
            links.each((i, elem) => {
                if( i + 1 == listCount) {
                    page++
                    url = doubanUrl + tags[start] + '?start=' + page * 20 + '&type=T'
                    getLink(url)
                    return
                }
                const link = $(this).attr('href')
                const movie = getMovie(link, save)
            })
        })
}

function save(movie, $) {
    MovieModel.findOne({_id: movie._id}, (err, res) => {
        if(err) {
            conssole.log('保存出错')
        }
        if(res) {
            return
        }else if($('.episode_list').text()) {
            return
        }else {
            var movieEntity = new MovieModel(movie)
            movieEntity.markModified('directors')
            movieEntity.markModified('scenarists')
            movieEntity.markModified('actors')
            movieEntity.markModified('imdb')
            movieEntity.markModified('recommendations')
            movieEntity.save(err => {
                
            })
        }
    })
}