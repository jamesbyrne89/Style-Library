"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Style Library\\style-library\\components\\Colour.js";


var Colour = function Colour(props) {
    var _props$col = props.col,
        hex = _props$col.hex,
        name = _props$col.name,
        rgb = _props$col.rgb;

    console.log(hex);
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement("div", { className: "colour__sample", style: { backgroundColor: hex }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement("span", { className: "colour__hex", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, hex), _react2.default.createElement("span", { className: "colour__rgb", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, rgb));
};

exports.default = Colour;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbG91ci5qcyJdLCJuYW1lcyI6WyJDb2xvdXIiLCJwcm9wcyIsImNvbCIsImhleCIsIm5hbWUiLCJyZ2IiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFVO3FCQUNLLE1BREwsQUFDVztRQURYLEFBQ2QsaUJBRGMsQUFDZDtRQURjLEFBQ1Qsa0JBRFMsQUFDVDtRQURTLEFBQ0gsaUJBREcsQUFDSCxBQUNuQjs7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzJCQUNRLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEseUNBQ1MsV0FBTCxBQUFlLGtCQUFpQixPQUFPLEVBQUMsaUJBQXhDLEFBQXVDLEFBQWtCO3NCQUF6RDt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFBK0I7QUFBL0I7T0FGSixBQUVJLEFBQ0Esc0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQStCO0FBQS9CO09BSlosQUFDUSxBQUdJLEFBSWY7QUFYRCxBQWFBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbG91ci5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL2h0ZG9jcy9TdHlsZSBMaWJyYXJ5L3N0eWxlLWxpYnJhcnkifQ==