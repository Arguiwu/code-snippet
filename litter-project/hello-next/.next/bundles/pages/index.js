
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(66);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(559);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(555);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "d:\\ant\\hello-next\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "d:\\ant\\hello-next\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "d:\\ant\\hello-next\\components\\Header.js";


var linkStyle = {
	marginRight: 15
};

var Header = function Header() {
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_link2.default, { href: "/", __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement("a", { style: linkStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement("a", { style: linkStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "d:\\ant\\hello-next\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "d:\\ant\\hello-next\\components\\Header.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(558);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\ant\\hello-next\\components\\MyLayout.js';


var layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #ddd'
};

var layout = function layout(props) {
	return _react2.default.createElement('div', { style: layoutStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(_Header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), props.children);
};

exports.default = layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "d:\\ant\\hello-next\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "d:\\ant\\hello-next\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ })

},[561]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDQ3OTllYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz80NDc5OWViIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlMYXlvdXQuanM/NDQ3OTllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcblx0PExheW91dD5cclxuXHRcdDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxyXG5cdFx0PHVsPlxyXG5cdFx0XHR7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtzaG93LmlkfT5cclxuXHRcdFx0XHRcdDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Nob3cubmFtZX1gfT5cclxuXHRcdFx0XHRcdFx0PGE+e3Nob3cubmFtZX08L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L3VsPlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0aDEsIGEge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0dWwge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGkge1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0bWFyZ2luOiA1cHggMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRhIHtcclxuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0Y29sb3I6IGJsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YTpob3ZlciB7XHJcblx0XHRcdFx0b3BhY2l0eTogMC42O1xyXG5cdFx0XHR9XHJcblx0XHRgfVxyXG5cdFx0PC9zdHlsZT5cclxuXHQ8L0xheW91dD5cclxuKVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cdHJldHVybiB7XHJcblx0XHRzaG93czogZGF0YVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuXHRtYXJnaW5SaWdodDogMTVcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHQ8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxyXG5cdFx0PC9MaW5rPlxyXG5cdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0XHQ8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cclxuXHRcdDwvTGluaz5cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG5cdG1hcmdpbjogMjAsXHJcblx0cGFkZGluZzogMjAsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkZGQnXHJcbn1cclxuXHJcbmNvbnN0IGxheW91dCA9IChwcm9wcykgPT4gKFxyXG5cdDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuXHRcdDxIZWFkZXIgLz5cclxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSEE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQWtDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTs7QUFJQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        