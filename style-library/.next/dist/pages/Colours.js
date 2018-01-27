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
    }, 'Focus alpha lean startup hypotheses bootstrapping. Product management vesting period seed money entrepreneur leverage learning curve graphical user interface technology network effects low hanging fruit niche market disruptive. First mover advantage supply chain agile development interaction design crowdfunding A/B testing. Gamification market ownership business model canvas.'), _react2.default.createElement('article', {
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
    }, colourVals.neutral.map(function (col, i) {
        return _react2.default.createElement('li', { key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
            }
        }, _react2.default.createElement(_Colour2.default, { key: i, col: col, __source: {
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
    }, colourVals.primary.map(function (col, i) {
        return _react2.default.createElement('li', { key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
            }
        }, _react2.default.createElement(_Colour2.default, { key: i, col: col, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxDb2xvdXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIk5hdkJhciIsIkNvbG91ciIsImNvbG91clZhbHMiLCJuZXV0cmFsIiwibmFtZSIsImhleCIsInJnYiIsInByaW1hcnkiLCJDb2xvdXJzIiwibWFwIiwiY29sIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFHbkIsSUFBTTs7Y0FFRSxBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFKQyxBQUNMLEFBR1M7QUFIVCxBQUNJLEtBRkM7Y0FNTCxBQUNVLEFBQ047YUFGSixBQUVTLEFBQ0w7YUFUQyxBQU1MLEFBR1M7QUFIVCxBQUNJO2NBSUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBZEMsQUFXTCxBQUdTO0FBSFQsQUFDSTtjQUlKLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQW5CQyxBQWdCTCxBQUdTO0FBSFQsQUFDSTtjQUlKLEFBQ1UsQUFDTjthQUZKLEFBRVMsQUFDTDthQXpCTyxBQUNOLEFBcUJMLEFBR1MsQUFHYjtBQU5JLEFBQ0k7O2NBTUosQUFDVSxBQUNOO2FBRkosQUFFUyxBQUNMO2FBaENaLEFBQW1CLEFBNEJOLEFBQ0wsQUFHUztBQUhULEFBQ0ksS0FGQztBQTVCTSxBQUNmOztBQW9DSixJQUFNLFVBQVUsU0FBVixBQUFVLFVBQU0sQUFDbEI7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsbUVBQU0sTUFBTixBQUFXLDREQUEyRCxLQUF0RSxBQUEwRTtzQkFBMUU7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLDZCQUE0QixLQUF2QyxBQUEyQztzQkFBM0M7d0JBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTt5QkFFSixBQUFDOztzQkFBRDt3QkFOSixBQU1JLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxhQUFTLFdBQVQsQUFBbUI7c0JBQW5CO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FEQSxBQUNBLEFBQ0EsNEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRkEsQUFFQSxBQUNBLDRCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhBLEFBR0EsQUFDQSwrWUFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FKQSxBQUlBLEFBQ0EsNkJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNTO0FBRFQ7a0JBQ1MsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxHQUFNLEFBQ2hDOytCQUFPLGNBQUEsUUFBSSxLQUFKLEFBQVM7MEJBQVQ7NEJBQUEsQUFBWTtBQUFaO1NBQUEsa0JBQVksQUFBQyxrQ0FBTyxLQUFSLEFBQWEsR0FBRyxLQUFoQixBQUFxQjswQkFBckI7NEJBQW5CLEFBQU8sQUFBWSxBQUN0QjtBQURzQjs7QUFSL0IsQUFLQSxBQUNBLEFBQ1MsQUFNVCwwQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FiQSxBQWFBLEFBQ0Esb0NBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNDO0FBREQ7a0JBQ0MsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxHQUFNLEFBQzVCOytCQUFPLGNBQUEsUUFBSSxLQUFKLEFBQVM7MEJBQVQ7NEJBQUEsQUFBWTtBQUFaO1NBQUEsa0JBQVksQUFBQyxrQ0FBTyxLQUFSLEFBQWEsR0FBRyxLQUFoQixBQUFxQjswQkFBckI7NEJBQW5CLEFBQU8sQUFBWSxBQUN0QjtBQURzQjs7QUFGM0IsQUFDQyxBQUdHLHdCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQVBSLEFBSUksQUFHSSxBQUVKLG9DQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQVpSLEFBU0ksQUFHSSxBQUVKLHNDQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDhDQUNTLFdBQUwsQUFBZTtzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQWhDWixBQWNBLEFBQ0ksQUFjSSxBQUdJLEFBSVo7O3NCQUFBO3dCQXBDQSxBQW9DQSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBckNBLEFBcUNBLEFBQ0E7QUFEQTtBQUFBOztzQkFDQTt3QkF0Q0EsQUFzQ0EsQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQXZDQSxBQXVDQSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBakRaLEFBQ0ksQUFPSSxBQUNJLEFBd0NBLEFBS2Y7QUFMZTtBQUFBO0FBbERoQixBQXlEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb2xvdXJzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvaHRkb2NzL1N0eWxlIExpYnJhcnkvc3R5bGUtbGlicmFyeSJ9