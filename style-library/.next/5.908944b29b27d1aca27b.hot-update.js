webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _NavBar = __webpack_require__(393);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Colour = __webpack_require__(394);

var _Colour2 = _interopRequireDefault(_Colour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Style Library\\style-library\\pages\\Colours.js?entry';


var colourVals = {
    neutral: [{
        name: 'White',
        hex: '#ffffff',
        rgb: 'rgb(255,255,255)'
    }, {
        name: 'Black',
        hex: '#000000',
        rgb: 'rgb(0,0,0)'
    }, {
        name: 'Lilac',
        hex: '#605471',
        rgb: 'rgb(96,84,113)'
    }, {
        name: 'Cream',
        hex: '#f8ede0',
        rgb: 'rgb(96,84,113)'
    }, {
        name: "Grey",
        hex: "#e0e0e0",
        rgb: "rgb(224,224,224)"
    }],
    primary: []
};

var Colours = function Colours() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, 'Style Library: Colours'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    })), _react2.default.createElement(_NavBar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement('main', { className: 'app-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('section', { className: 'content-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement('h1', { className: 'page-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, 'Colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, 'Purpose'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, 'Spicy jalapeno bacon ipsum dolor amet pork loin hamburger ham porchetta prosciutto kevin turkey buffalo beef ribs leberkas fatback chuck. Filet mignon andouille shank tri-tip pig bresaola, meatloaf jowl beef brisket. Bacon boudin tail, pancetta capicola ground round ham andouille ball tip. Chuck picanha bresaola kielbasa beef ribs, boudin venison ribeye. Salami t-bone beef biltong, andouille hamburger fatback corned beef. Hamburger leberkas sirloin andouille corned beef.'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, 'Neutrals'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, colourVals.neutral.map(function (col) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 58
            }
        }, _react2.default.createElement(_Colour2.default, { col: col, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
            }
        }));
    }))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, 'Primary colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, colourVals.primary.map(function (col) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 67
            }
        }, _react2.default.createElement(_Colour2.default, { col: col, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
            }
        }));
    }), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, 'rgb(237,242,7)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, '#f8ede0'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, 'rgb(248,237,224)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, 'rgb(237,242,7)')))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }))));
};

exports.default = Colours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDb2xvdXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIk5hdkJhciIsIkNvbG91ciIsImNvbG91clZhbHMiLCJuZXV0cmFsIiwibmFtZSIsImhleCIsInJnYiIsInByaW1hcnkiLCJDb2xvdXJzIiwibWFwIiwiY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNOztjQUVFLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQUpDLEFBQ0wsQUFHUztBQUhULEFBQ0ksS0FGQztjQU1MLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQVRDLEFBTUwsQUFHUztBQUhULEFBQ0k7Y0FJSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFkQyxBQVdMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBbkJDLEFBZ0JMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBekJPLEFBQ04sQUFxQkwsQUFHUyxBQUdiO0FBTkksQUFDSTthQXZCWixBQUFtQixBQTRCTjtBQTVCTSxBQUNmOztBQWdDSixJQUFNLFVBQVUsU0FBVixBQUFVLFVBQU0sQUFDbEI7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsbUVBQU0sTUFBTixBQUFXLDREQUEyRCxLQUF0RSxBQUEwRTtzQkFBMUU7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLDZCQUE0QixLQUF2QyxBQUEyQztzQkFBM0M7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFG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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Style Library\\style-library\\pages\\Colours.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Style Library\\style-library\\pages\\Colours.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Colours")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MDg5NDRiMjliMjdkMWFjYTI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29sb3Vycy5qcz8xYTJhOGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgQ29sb3VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3VyJztcclxuXHJcblxyXG5jb25zdCBjb2xvdXJWYWxzID0ge1xyXG4gICAgbmV1dHJhbDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1doaXRlJyxcclxuICAgICAgICAgICAgaGV4OiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIHJnYjogJ3JnYigyNTUsMjU1LDI1NSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCbGFjaycsXHJcbiAgICAgICAgICAgIGhleDogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoMCwwLDApJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGlsYWMnLFxyXG4gICAgICAgICAgICBoZXg6ICcjNjA1NDcxJyxcclxuICAgICAgICAgICAgcmdiOiAncmdiKDk2LDg0LDExMyknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVhbScsXHJcbiAgICAgICAgICAgIGhleDogJyNmOGVkZTAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoOTYsODQsMTEzKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHcmV5XCIsXHJcbiAgICAgICAgICAgIGhleDogXCIjZTBlMGUwXCIsXHJcbiAgICAgICAgICAgIHJnYjogXCJyZ2IoMjI0LDIyNCwyMjQpXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgcHJpbWFyeTogW1xyXG4gICAgICAgIFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBDb2xvdXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TdHlsZSBMaWJyYXJ5OiBDb2xvdXJzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9zdHlsZXMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+Q29sb3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5QdXJwb3NlPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+U3BpY3kgamFsYXBlbm8gYmFjb24gaXBzdW0gZG9sb3IgYW1ldCBwb3JrIGxvaW4gaGFtYnVyZ2VyIGhhbSBwb3JjaGV0dGEgcHJvc2NpdXR0byBrZXZpbiB0dXJrZXkgYnVmZmFsbyBiZWVmIHJpYnMgbGViZXJrYXMgZmF0YmFjayBjaHVjay4gRmlsZXQgbWlnbm9uIGFuZG91aWxsZSBzaGFuayB0cmktdGlwIHBpZyBicmVzYW9sYSwgbWVhdGxvYWYgam93bCBiZWVmIGJyaXNrZXQuIEJhY29uIGJvdWRpbiB0YWlsLCBwYW5jZXR0YSBjYXBpY29sYSBncm91bmQgcm91bmQgaGFtIGFuZG91aWxsZSBiYWxsIHRpcC4gQ2h1Y2sgcGljYW5oYSBicmVzYW9sYSBraWVsYmFzYSBiZWVmIHJpYnMsIGJvdWRpbiB2ZW5pc29uIHJpYmV5ZS4gU2FsYW1pIHQtYm9uZSBiZWVmIGJpbHRvbmcsIGFuZG91aWxsZSBoYW1idXJnZXIgZmF0YmFjayBjb3JuZWQgYmVlZi4gSGFtYnVyZ2VyIGxlYmVya2FzIHNpcmxvaW4gYW5kb3VpbGxlIGNvcm5lZCBiZWVmLjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPk5ldXRyYWxzPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sb3VyLXBhbGV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbG91clZhbHMubmV1dHJhbC5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48Q29sb3VyIGNvbD17Y29sfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+UHJpbWFyeSBjb2xvdXJzPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG91ci1wYWxldHRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbG91clZhbHMucHJpbWFyeS5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48Q29sb3VyIGNvbD17Y29sfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG91cl9fc2FtcGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvdXJfX2hleFwiPiNlZGYyMDc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvdXJfX3JnYlwiPnJnYigyMzcsMjQyLDcpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG91cl9fc2FtcGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvdXJfX2hleFwiPiNmOGVkZTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvdXJfX3JnYlwiPnJnYigyNDgsMjM3LDIyNCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3VyX19zYW1wbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9faGV4XCI+I2VkZjIwNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9fcmdiXCI+cmdiKDIzNywyNDIsNyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvdXJzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0NvbG91cnMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7O0FBSUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBR0E7QUFMQTtBQUtBO0FBM0JBO0FBQ0E7QUErQkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFBQTtBQU9BO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9