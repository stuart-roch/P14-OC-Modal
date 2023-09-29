"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject;
/**
 * Create a React Component
 *  
 * @param {string} className - Class of the modal container
 * @param {[boolean, function()]} modalState - React State from the parent component that render the modal
 * @param {string} [modalContentDivClassName] - Class of the modal content container
 * @param {HTMLElement or ReactComponent}  [children] - Content between opening and closing tag 
 * @param {boolean} [hasCloseButton=true] - Indicate if the modal has a close button with a default value at true
 * @param {string} [closeButtonClassName] - Class of the close button
 * @param {HTMLElement or ReactComponent} [closeButtonChild] - Content between opening and closing tag of the close Button
 * @param {function} [onClose] - Function executed on the click of the close button
 * @returns {ReactComponent} - A Modal React Component
 */
function Modal(_ref) {
  var className = _ref.className,
    modalContentDivClassName = _ref.modalContentDivClassName,
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
  return /*#__PURE__*/_react.default.createElement(Container, {
    className: className,
    $openModal: openModal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: modalContentDivClassName
  }, children, hasCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: closeButtonClassName,
    onClick: onClose
  }, closeButtonChild === undefined ? "Close" : closeButtonChild)));
}
var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n    display: ", "\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    \n    div{\n        border: 1px solid black;\n        width: 50%;\n        height: 50%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    button{\n        border-radius: 25px;\n        padding: 10px;\n        background-color: transparent;\n    }\n"])), function (props) {
  return props.$openModal ? "block !important;" : "none !important;";
});