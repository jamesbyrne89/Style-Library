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
    primary: [{
        name: "Coral",
        hex: "#FC6962",
        rgb: "rgb(252,105,98)"
    }]
};

var Colours = function Colours() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, 'Style Library: Colours'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    })), _react2.default.createElement(_NavBar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), _react2.default.createElement('main', { className: 'app-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement('section', { className: 'content-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('h1', { className: 'page-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'Colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, 'Purpose'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, 'Spicy jalapeno bacon ipsum dolor amet pork loin hamburger ham porchetta prosciutto kevin turkey buffalo beef ribs leberkas fatback chuck. Filet mignon andouille shank tri-tip pig bresaola, meatloaf jowl beef brisket. Bacon boudin tail, pancetta capicola ground round ham andouille ball tip. Chuck picanha bresaola kielbasa beef ribs, boudin venison ribeye. Salami t-bone beef biltong, andouille hamburger fatback corned beef. Hamburger leberkas sirloin andouille corned beef.'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'Neutrals'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, colourVals.neutral.map(function (col) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 62
            }
        }, _react2.default.createElement(_Colour2.default, { col: col, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
            }
        }));
    }))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, 'Primary colours'), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('ul', { className: 'colour-palette', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, colourVals.primary.map(function (col) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 71
            }
        }, _react2.default.createElement(_Colour2.default, { col: col, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
            }
        }));
    }), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, 'rgb(237,242,7)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, '#f8ede0'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, 'rgb(248,237,224)')), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, _react2.default.createElement('div', { className: 'colour__sample', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }), _react2.default.createElement('span', { className: 'colour__hex', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, '#edf207'), _react2.default.createElement('span', { className: 'colour__rgb', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, 'rgb(237,242,7)')))), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }), _react2.default.createElement('article', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }))));
};

exports.default = Colours;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDb2xvdXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIk5hdkJhciIsIkNvbG91ciIsImNvbG91clZhbHMiLCJuZXV0cmFsIiwibmFtZSIsImhleCIsInJnYiIsInByaW1hcnkiLCJDb2xvdXJzIiwibWFwIiwiY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNOztjQUVFLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQUpDLEFBQ0wsQUFHUztBQUhULEFBQ0ksS0FGQztjQU1MLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQVRDLEFBTUwsQUFHUztBQUhULEFBQ0k7Y0FJSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFkQyxBQVdMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBbkJDLEFBZ0JMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBekJPLEFBQ04sQUFxQkwsQUFHUyxBQUdiO0FBTkksQUFDSTs7Y0FNSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFoQ1osQUFBbUIsQUE0Qk4sQUFDTCxBQUdTO0FBSFQsQUFDSSxLQUZDO0FBNUJNLEFBQ2Y7O0FBb0NKLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBTSxBQUNsQjsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxtRUFBTSxNQUFOLEFBQVcsNERBQTJELEtBQXRFLEFBQTBFO3NCQUExRTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxNQUFOLEFBQVcsNkJBQTRCLEtBQXZDLEFBQTJDO3NCQUEzQzt3QkFKUixBQUNJLEFBR0ksQUFFSjtBQUZJO3lCQUVKLEFBQUM7O3NCQUFEO3dCQU5KLEFBTUksQUFDQTtBQURBO0FBQUEsd0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLGFBQVMsV0FBVCxBQUFtQjtzQkFBbkI7d0JBQUEsQUFDQTtBQURBO3VCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURBLEFBQ0EsQUFDQSw0QkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGQSxBQUVBLEFBQ0EsNEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEEsQUFHQSxBQUNBLGdmQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUpBLEFBSUEsQUFDQSw2QkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNBO0FBREE7QUFBQSx1QkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ1M7QUFEVDtrQkFDUyxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQUMsS0FBUSxBQUM3QjsrQkFBTyxjQUFBOzswQkFBQTs0QkFBQSxBQUFJO0FBQUo7QUFBQSxTQUFBLGtCQUFJLEFBQUMsa0NBQU8sS0FBUixBQUFhOzBCQUFiOzRCQUFYLEFBQU8sQUFBSSxBQUNkO0FBRGM7O0FBUnZCLEFBS0EsQUFDQSxBQUNTLEFBTVQsMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BYkEsQUFhQSxBQUNBLG9DQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDQztBQUREO2tCQUNDLEFBQVcsUUFBWCxBQUFtQixJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3pCOytCQUFPLGNBQUE7OzBCQUFBOzRCQUFBLEFBQUk7QUFBSjtBQUFBLFNBQUEsa0JBQUksQUFBQyxrQ0FBTyxLQUFSLEFBQWE7MEJBQWI7NEJBQVgsQUFBTyxBQUFJLEFBQ2Q7QUFEYzs7QUFGbkIsQUFDQyxBQUdHLHdCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQVBSLEFBSUksQUFHSSxBQUVKLG9DQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQVpSLEFBU0ksQUFHSSxBQUVKLHNDQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQWhDWixBQWNBLEFBQ0ksQUFjSSxBQUdJLEFBSVo7O3NCQUFBO3dCQXBDQSxBQW9DQSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBckNBLEFBcUNBLEFBQ0E7QUFEQTtBQUFBOztzQkFDQTt3QkF0Q0EsQUFzQ0EsQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQXZDQSxBQXVDQSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBakRaLEFBQ0ksQUFPSSxBQUNJLEFBd0NBLEFBS2Y7QUFMZTtBQUFBO0FBbERoQixBQXlEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb2xvdXJzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvaHRkb2NzL1N0eWxlIExpYnJhcnkvc3R5bGUtbGlicmFyeSJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNmM5MDMwMTQ3ZTU0NWQyYjBkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29sb3Vycy5qcz9kNThhMmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgQ29sb3VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3VyJztcclxuXHJcblxyXG5jb25zdCBjb2xvdXJWYWxzID0ge1xyXG4gICAgbmV1dHJhbDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1doaXRlJyxcclxuICAgICAgICAgICAgaGV4OiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIHJnYjogJ3JnYigyNTUsMjU1LDI1NSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCbGFjaycsXHJcbiAgICAgICAgICAgIGhleDogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoMCwwLDApJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGlsYWMnLFxyXG4gICAgICAgICAgICBoZXg6ICcjNjA1NDcxJyxcclxuICAgICAgICAgICAgcmdiOiAncmdiKDk2LDg0LDExMyknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVhbScsXHJcbiAgICAgICAgICAgIGhleDogJyNmOGVkZTAnLFxyXG4gICAgICAgICAgICByZ2I6ICdyZ2IoOTYsODQsMTEzKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHcmV5XCIsXHJcbiAgICAgICAgICAgIGhleDogXCIjZTBlMGUwXCIsXHJcbiAgICAgICAgICAgIHJnYjogXCJyZ2IoMjI0LDIyNCwyMjQpXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgcHJpbWFyeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDb3JhbFwiLFxyXG4gICAgICAgICAgICBoZXg6IFwiI0ZDNjk2MlwiLFxyXG4gICAgICAgICAgICByZ2I6IFwicmdiKDI1MiwxMDUsOTgpXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IENvbG91cnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlN0eWxlIExpYnJhcnk6IENvbG91cnM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL3N0eWxlcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImFwcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5Db2xvdXJzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlB1cnBvc2U8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5TcGljeSBqYWxhcGVubyBiYWNvbiBpcHN1bSBkb2xvciBhbWV0IHBvcmsgbG9pbiBoYW1idXJnZXIgaGFtIHBvcmNoZXR0YSBwcm9zY2l1dHRvIGtldmluIHR1cmtleSBidWZmYWxvIGJlZWYgcmlicyBsZWJlcmthcyBmYXRiYWNrIGNodWNrLiBGaWxldCBtaWdub24gYW5kb3VpbGxlIHNoYW5rIHRyaS10aXAgcGlnIGJyZXNhb2xhLCBtZWF0bG9hZiBqb3dsIGJlZWYgYnJpc2tldC4gQmFjb24gYm91ZGluIHRhaWwsIHBhbmNldHRhIGNhcGljb2xhIGdyb3VuZCByb3VuZCBoYW0gYW5kb3VpbGxlIGJhbGwgdGlwLiBDaHVjayBwaWNhbmhhIGJyZXNhb2xhIGtpZWxiYXNhIGJlZWYgcmlicywgYm91ZGluIHZlbmlzb24gcmliZXllLiBTYWxhbWkgdC1ib25lIGJlZWYgYmlsdG9uZywgYW5kb3VpbGxlIGhhbWJ1cmdlciBmYXRiYWNrIGNvcm5lZCBiZWVmLiBIYW1idXJnZXIgbGViZXJrYXMgc2lybG9pbiBhbmRvdWlsbGUgY29ybmVkIGJlZWYuPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+TmV1dHJhbHM8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvdXItcGFsZXR0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sb3VyVmFscy5uZXV0cmFsLm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxDb2xvdXIgY29sPXtjb2x9IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5QcmltYXJ5IGNvbG91cnM8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sb3VyLXBhbGV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sb3VyVmFscy5wcmltYXJ5Lm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxDb2xvdXIgY29sPXtjb2x9IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3VyX19zYW1wbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9faGV4XCI+I2VkZjIwNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9fcmdiXCI+cmdiKDIzNywyNDIsNyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3VyX19zYW1wbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9faGV4XCI+I2Y4ZWRlMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG91cl9fcmdiXCI+cmdiKDI0OCwyMzcsMjI0KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvdXJfX3NhbXBsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3VyX19oZXhcIj4jZWRmMjA3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3VyX19yZ2JcIj5yZ2IoMjM3LDI0Miw3KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+PC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG91cnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQ29sb3Vycy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTs7QUFJQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFHQTtBQUxBOztBQVFBO0FBQ0E7QUFBQTtBQUZBO0FBN0JBO0FBQ0E7QUFtQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFBQTtBQU9BO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9