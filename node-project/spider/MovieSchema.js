const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/Movie')
const db = mongoose.connection

var MovieSchema = new Schema({
	_id: Number,
	zh_name: String,
	foreign_name: String,
	image: String,
	directors: [{}],
	scenarists: [{}],
	actors: [{}],
	genres: [String],
	initialReleaseDate: [String],
	runtime: String,
	imdb: {},
	summary: String,
	recommendations: [{}],
	average: Number,
	tags: [String],
	language: [String],
	region: [String],
	aka: [String],
	votes: Number
}, {
		_id: false
	})

var MovieModal = db.model('t_movies', MovieSchema)

module.exports = MovieModal
