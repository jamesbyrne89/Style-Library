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
    }],
    primary: []
};

var Colours = function Colours() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, 'Style Library: Colours'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    })), _react2.default.createElement(_NavBar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), _react2.default.createElement('main', { className: 'app-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('section', { className: 'content-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement('h1', { className: 'page-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'Colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, 'Purpose'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, 'Spicy jalapeno bacon ipsum dolor amet pork loin hamburger ham porchetta prosciutto kevin turkey buffalo beef ribs leberkas fatback chuck. Filet mignon andouille shank tri-tip pig bresaola, meatloaf jowl beef brisket. Bacon boudin tail, pancetta capicola ground round ham andouille ball tip. Chuck picanha bresaola kielbasa beef ribs, boudin venison ribeye. Salami t-bone beef biltong, andouille hamburger fatback corned beef. Hamburger leberkas sirloin andouille corned beef.'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'Neutrals'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, colourVals.neutral.map(function (col) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 53
            }
        }, _react2.default.createElement(_Colour2.default, { col: col, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
            }
        }));
    }))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'Primary colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, 'rgb(237,242,7)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, '#f8ede0'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, 'rgb(248,237,224)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, 'rgb(237,242,7)')))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }))));
};

exports.default = Colours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDb2xvdXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIk5hdkJhciIsIkNvbG91ciIsImNvbG91clZhbHMiLCJuZXV0cmFsIiwibmFtZSIsImhleCIsInJnYiIsInByaW1hcnkiLCJDb2xvdXJzIiwibWFwIiwiY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNOztjQUVFLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQUpDLEFBQ0wsQUFHUztBQUhULEFBQ0ksS0FGQztjQU1MLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQVRDLEFBTUwsQUFHUztBQUhULEFBQ0k7Y0FJSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFkQyxBQVdMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBcEJPLEFBQ04sQUFnQkwsQUFHUyxBQUdiO0FBTkksQUFDSTthQWxCWixBQUFtQixBQXVCTjtBQXZCTSxBQUNmOztBQTJCSixJQUFNLFVBQVUsU0FBVixBQUFVLFVBQU0sQUFDbEI7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsbUVBQU0sTUFBTixBQUFXLDREQUEyRCxLQUF0RSxBQUEwRTtzQkFBMUU7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLDZCQUE0QixLQUF2QyxBQUEyQztzQkFBM0M7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTt5QkFFSixBQUFDOztzQkFBRDt3QkFOSixBQU1JLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxhQUFTLFdBQVQsQUFBbUI7c0JBQW5CO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FEQSxBQUNBLEFBQ0EsNEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRkEsQUFFQSxBQUNBLDRCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhBLEFBR0EsQUFDQSxnZkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FKQSxBQUlBLEFBQ0EsNkJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNTO0FBRFQ7a0JBQ1MsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLEtBQVEsQUFDN0I7K0JBQU8sY0FBQTs7MEJBQUE7NEJBQUEsQUFBSTtBQUFKO0FBQUEsU0FBQSxrQkFBSSxBQUFDLGtDQUFPLEtBQVIsQUFBYTswQkFBYjs0QkFBWCxBQUFPLEFBQUksQUFDZDtBQURjOztBQVJ2QixBQUtBLEFBQ0EsQUFDUyxBQU1ULDBCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWJBLEFBYUEsQUFDQSxvQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSw4Q0FDUyxXQUFMLEFBQWU7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FGSixBQUVJLEFBQ0EsNEJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FKUixBQUNJLEFBR0ksQUFFSixvQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSw4Q0FDUyxXQUFMLEFBQWU7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FGSixBQUVJLEFBQ0EsNEJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FUUixBQU1JLEFBR0ksQUFFSixzQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSw4Q0FDUyxXQUFMLEFBQWU7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FGSixBQUVJLEFBQ0EsNEJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0E3QlosQUFjQSxBQUNJLEFBV0ksQUFHSSxBQUlaOztzQkFBQTt3QkFqQ0EsQUFpQ0EsQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQWxDQSxBQWtDQSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBbkNBLEFBbUNBLEFBQ0E7QUFEQTtBQUFBOztzQkFDQTt3QkFwQ0EsQUFvQ0EsQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQTlDWixBQUNJLEFBT0ksQUFDSSxBQXFDQSxBQUtmO0FBTGU7QUFBQTtBQS9DaEIsQUFzREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29sb3Vycy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL2h0ZG9jcy9TdHlsZSBMaWJyYXJ5L3N0eWxlLWxpYnJhcnkifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mZGQ5ZWQ4Y2NkZGY5YzAwNzljNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29sb3Vycy5qcz81OTYzZDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgQ29sb3VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3VyJztcclxuXHJcblxyXG5jb25zdCBjb2xvdXJWYWxzID0ge1xyXG4gICAgbmV1dHJhbDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1doaXRlJyxcclxuICAgICAgICAgICAgaGV4OiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIHJnYjogJ3JnYigyNTUsMjU1LDI1NSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCbGFjaycsXHJcbiAgICAgICAgICAgIGhleDogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoMCwwLDApJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGlsYWMnLFxyXG4gICAgICAgICAgICBoZXg6ICcjNjA1NDcxJyxcclxuICAgICAgICAgICAgcmdiOiAncmdiKDk2LDg0LDExMyknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVhbScsXHJcbiAgICAgICAgICAgIGhleDogJyNmOGVkZTAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoOTYsODQsMTEzKSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgcHJpbWFyeTogW1xyXG4gICAgICAgIFxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBDb2xvdXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TdHlsZSBMaWJyYXJ5OiBDb2xvdXJzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9zdHlsZXMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+Q29sb3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5QdXJwb3NlPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+U3BpY3kgamFsYXBlbm8gYmFjb24gaXBzdW0gZG9sb3IgYW1ldCBwb3JrIGxvaW4gaGFtYnVyZ2VyIGhhbSBwb3JjaGV0dGEgcHJvc2NpdXR0byBrZXZpbiB0dXJrZXkgYnVmZmFsbyBiZWVmIHJpYnMgbGViZXJrYXMgZmF0YmFjayBjaHVjay4gRmlsZXQgbWlnbm9uIGFuZG91aWxsZSBzaGFuayB0cmktdGlwIHBpZyBicmVzYW9sYSwgbWVhdGxvYWYgam93bCBiZWVmIGJyaXNrZXQuIEJhY29uIGJvdWRpbiB0YWlsLCBwYW5jZXR0YSBjYXBpY29sYSBncm91bmQgcm91bmQgaGFtIGFuZG91aWxsZSBiYWxsIHRpcC4gQ2h1Y2sgcGljYW5oYSBicmVzYW9sYSBraWVsYmFzYSBiZWVmIHJpYnMsIGJvdWRpbiB2ZW5pc29uIHJpYmV5ZS4gU2FsYW1pIHQtYm9uZSBiZWVmIGJpbHRvbmcsIGFuZG91aWxsZSBoYW1idXJnZXIgZmF0YmFjayBjb3JuZWQgYmVlZi4gSGFtYnVyZ2VyIGxlYmVya2FzIHNpcmxvaW4gYW5kb3VpbGxlIGNvcm5lZCBiZWVmLjwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPk5ldXRyYWxzPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sb3VyLXBhbGV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbG91clZhbHMubmV1dHJhbC5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48Q29sb3VyIGNvbD17Y29sfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+UHJpbWFyeSBjb2xvdXJzPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG91ci1wYWxldHRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3VyX19zYW1wbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9faGV4XCI+I2VkZjIwNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9fcmdiXCI+cmdiKDIzNywyNDIsNyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3VyX19zYW1wbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9faGV4XCI+I2Y4ZWRlMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9fcmdiXCI+cmdiKDI0OCwyMzcsMjI0KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvdXJfX3NhbXBsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3VyX19oZXhcIj4jZWRmMjA3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3VyX19yZ2JcIj5yZ2IoMjM3LDI0Miw3KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG91cnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQ29sb3Vycy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTs7QUFJQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBR0E7QUFMQTtBQUtBO0FBdEJBO0FBQ0E7QUEwQkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFLQTtBQUxBO0FBQUE7QUFPQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==