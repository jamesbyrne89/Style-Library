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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDb2xvdXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIk5hdkJhciIsIkNvbG91ciIsImNvbG91clZhbHMiLCJuZXV0cmFsIiwibmFtZSIsImhleCIsInJnYiIsInByaW1hcnkiLCJDb2xvdXJzIiwibWFwIiwiY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNOztjQUVFLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQUpDLEFBQ0wsQUFHUztBQUhULEFBQ0ksS0FGQztjQU1MLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQVRDLEFBTUwsQUFHUztBQUhULEFBQ0k7Y0FJSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFkQyxBQVdMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBbkJDLEFBZ0JMLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBekJPLEFBQ04sQUFxQkwsQUFHUyxBQUdiO0FBTkksQUFDSTs7Y0FNSixBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFoQ1osQUFBbUIsQUE0Qk4sQUFDTCxBQUdTO0FBSFQsQUFDSSxLQUZDO0FBNUJNLEFBQ2Y7O0FBb0NKLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBTSxBQUNsQjsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxtRUFBTSxNQUFOLEFBQVcsNERBQTJELEtBQXRFLEFBQTBFO3NCQUExRTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxNQUFO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