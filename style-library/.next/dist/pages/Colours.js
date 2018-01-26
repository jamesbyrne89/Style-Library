'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _NavBar = require('../components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Colour = require('../components/Colour');

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