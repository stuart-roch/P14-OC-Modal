"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function Modal(_ref) {
  var className = _ref.className,
    children = _ref.children,
    modalState = _ref.modalState,
    _ref$hasCloseButton = _ref.hasCloseButton,
    hasCloseButton = _ref$hasCloseButton === void 0 ? true : _ref$hasCloseButton,
    closeButtonClassName = _ref.closeButtonClassName,
    closeButtonChild = _ref.closeButtonChild,
    onClose = _ref.onClose;
  var _modalState = (0, _slicedToArray2.default)(modalState, 2),
    openModal = _modalState[0],
    setOpenModal = _modalState[1];
  if (typeof onClose !== "function") {
    onClose = function onClose() {
      return setOpenModal(false);
    };
  }
  return /*#__PURE__*/React.createElement(Container, {
    className: className,
    openModal: openModal
  }, hasCloseButton && /*#__PURE__*/React.createElement("button", {
    className: closeButtonClassName,
    onClick: onClose
  }, closeButtonChild), children);
}
var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n    display: ", "\n\n"])), function (_ref2) {
  var openModal = _ref2.openModal;
  return openModal ? "block" : "none";
});