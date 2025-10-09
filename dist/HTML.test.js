"use strict";

var _react = _interopRequireDefault(require("react"));
var _HTML = require("./HTML.js");
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('HTML.div tests', async () => {
  // ARRANGE
  (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_HTML.HTML.Div, {
    className: "test_class",
    role: "div"
  }, "Hello World"));
  // ASSERT
  expect(_react2.screen.getByRole('div')).toHaveTextContent('Hello World');
});
test('HTML.tag tests', async () => {
  // ARRANGE
  (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_HTML.HTML.Tag, {
    className: "test_class",
    tag: "span",
    role: "span",
    have_html: true,
    value: "<span>Inner Span</span>"
  }));
  // ASSERT
  expect(_react2.screen.getByRole('span')).toBeInTheDocument();
  expect(_react2.screen.getByRole('span')).toHaveTextContent('Inner Span');
});