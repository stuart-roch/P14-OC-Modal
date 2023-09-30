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
 * @author ROCH Stuart
 * @version 0.1.13
 */
/**
 * Create a Modal React Component
 *  
 * @param {string} className - Class of the modal container
 * @param {[boolean, function()]} modalState - React State from the parent component that render the modal
 * @param {string} [modalContentDivClassName] - Class of the modal content container
 * @param {boolean} [hasCloseButton=true] - Indicate if the modal has a close button with a default value at true
 * @param {string} [closeButtonClassName] - Class of the close button
 * @param {HTMLElement|ReactComponent} [closeButtonChild] - Content between opening and closing tag of the close Button
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

/**
 * Style the elements of the modal using styled-components lib
 * @type {ReactComponent}
 */
var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n    display: ", "\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    \n    > div{\n        border: 1px solid black;\n        width: 50%;\n        height: fit-content;\n        display: flex;\n        flex-direction: column;\n        box-shadow: 10px 10px 10px #D9D9D9;\n        border-radius: 10px;\n        position: relative;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        padding: 20px;\n\n        button:last-child{\n            margin-top: 20px;\n            border: 1px solid #D9D9D9;\n            padding: 10px;\n            background-color: #D9D9D9;\n            align-self: end;\n            border-radius: 5px;\n            opacity: 0.8;\n        }\n\n        button:last-child:hover{\n            opacity: 1;\n        }\n\n\n    }\n\n    \n\n    \n"])), function (props) {
  return props.$openModal ? "block !important;" : "none !important;";
});