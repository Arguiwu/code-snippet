'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\ant\\hello-next\\pages\\index.js?entry';


var Index = function Index(props) {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('h1', {
		'data-jsx': 1091919747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'Batman TV Shows'), _react2.default.createElement('ul', {
		'data-jsx': 1091919747,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, props.shows.map(function (_ref) {
		var show = _ref.show;
		return _react2.default.createElement('li', { key: show.id, 'data-jsx': 1091919747,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?title=' + show.name, __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		}, _react2.default.createElement('a', {
			'data-jsx': 1091919747,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 12
			}
		}, show.name)));
	})), _react2.default.createElement(_style2.default, {
		styleId: 1091919747,
		css: 'h1,a{font-family:"Arial"}ul{padding:0}li{list-style:none;margin:5px 0}a{-webkit-text-decoration:none;text-decoration:none;color:blue}a:hover{opacity:0.6}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnFCLEFBR3lCLEFBQ1YsQUFDTSxBQUNLLEFBQ1QsV0FIRSxFQUdFLElBRmtCLElBRlYsVUFFYyxxQkFDRCxZQUFJIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJkOi9hbnQvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0PlxyXG5cdFx0PGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcblx0XHQ8dWw+XHJcblx0XHRcdHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxyXG5cdFx0XHRcdDxsaSBrZXk9e3Nob3cuaWR9PlxyXG5cdFx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7c2hvdy5uYW1lfWB9PlxyXG5cdFx0XHRcdFx0XHQ8YT57c2hvdy5uYW1lfTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvdWw+XHJcblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRoMSwgYSB7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHR1bCB7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsaSB7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHRtYXJnaW46IDVweCAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGEge1xyXG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRjb2xvcjogYmx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhOmhvdmVyIHtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRcdH1cclxuXHRcdGB9XHJcblx0XHQ8L3N0eWxlPlxyXG5cdDwvTGF5b3V0PlxyXG4pXHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblx0cmV0dXJuIHtcclxuXHRcdHNob3dzOiBkYXRhXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
	}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	var res, data;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

				case 2:
					res = _context.sent;
					_context.next = 5;
					return res.json();

				case 5:
					data = _context.sent;
					return _context.abrupt('return', {
						shows: data
					});

				case 7:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Index;