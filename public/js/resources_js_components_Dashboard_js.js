(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_js"],{

/***/ "./node_modules/@mantine/core/esm/AppShell/AppShell.context.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/AppShell.context.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellProvider": () => (/* binding */ AppShellProvider),
/* harmony export */   "useAppShellContext": () => (/* binding */ useAppShellContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AppShellContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  zIndex: 1e3,
  fixed: false,
  layout: "default"
});
const AppShellProvider = AppShellContext.Provider;
function useAppShellContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppShellContext);
}


//# sourceMappingURL=AppShell.context.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalSection": () => (/* binding */ HorizontalSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/Global.js");
/* harmony import */ var _AppShell_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppShell.context.js */ "./node_modules/@mantine/core/esm/AppShell/AppShell.context.js");
/* harmony import */ var _get_sorted_breakpoints_get_sorted_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-sorted-breakpoints/get-sorted-breakpoints.js */ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints.js");
/* harmony import */ var _HorizontalSection_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalSection.styles.js */ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.styles.js");
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Box/Box.js */ "./node_modules/@mantine/core/esm/Box/Box.js");







var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const HorizontalSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_a, ref) => {
  var _b = _a, {
    width,
    height,
    fixed = false,
    position,
    zIndex,
    hiddenBreakpoint = "md",
    hidden = false,
    withBorder = true,
    className,
    classNames,
    styles,
    children,
    section,
    __staticSelector,
    unstyled,
    variant
  } = _b, others = __objRest(_b, [
    "width",
    "height",
    "fixed",
    "position",
    "zIndex",
    "hiddenBreakpoint",
    "hidden",
    "withBorder",
    "className",
    "classNames",
    "styles",
    "children",
    "section",
    "__staticSelector",
    "unstyled",
    "variant"
  ]);
  const ctx = (0,_AppShell_context_js__WEBPACK_IMPORTED_MODULE_1__.useAppShellContext)();
  const { classes, cx, theme } = (0,_HorizontalSection_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    width,
    height,
    fixed: ctx.fixed || fixed,
    position,
    hiddenBreakpoint,
    zIndex: zIndex || ctx.zIndex || (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_3__.getDefaultZIndex)("app"),
    section,
    withBorder,
    layout: ctx.layout
  }, { classNames, styles, name: __staticSelector, unstyled, variant });
  const breakpoints = (0,_get_sorted_breakpoints_get_sorted_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.getSortedBreakpoints)(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_5__.em)(breakpoint)})`] = {
      [`--mantine-${section}-width`]: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_5__.rem)(breakpointSize)
    };
    return acc;
  }, {});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_6__.Box, __spreadValues({
    component: section === "navbar" ? "nav" : "aside",
    ref,
    "data-hidden": hidden || void 0,
    className: cx(classes.root, className)
  }, others), children, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mantine_styles__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: () => ({
      ":root": __spreadValues({
        [`--mantine-${section}-width`]: (width == null ? void 0 : width.base) ? (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_5__.rem)(width.base) : "0rem"
      }, breakpoints)
    })
  }));
});
HorizontalSection.displayName = "@mantine/core/HorizontalSection";


//# sourceMappingURL=HorizontalSection.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.styles.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.styles.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/create-styles.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");
/* harmony import */ var _get_sorted_breakpoints_get_sorted_breakpoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-sorted-breakpoints/get-sorted-breakpoints.js */ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints.js");



var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme, {
  height,
  width,
  fixed,
  position,
  hiddenBreakpoint,
  zIndex,
  section,
  withBorder,
  layout
}) => {
  const breakpoints = typeof width === "object" && width !== null ? (0,_get_sorted_breakpoints_get_sorted_breakpoints_js__WEBPACK_IMPORTED_MODULE_1__.getSortedBreakpoints)(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.em)(breakpoint)})`] = {
      width: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)(breakpointSize),
      minWidth: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)(breakpointSize)
    };
    return acc;
  }, {}) : null;
  const borderStyles = withBorder ? {
    [section === "navbar" ? "borderRight" : "borderLeft"]: `${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
  } : {};
  return {
    root: __spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, theme.fn.fontStyles()), position), {
      top: layout === "alt" ? 0 : (position == null ? void 0 : position.top) || "var(--mantine-header-height)",
      bottom: 0,
      zIndex,
      height: height ? (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)(height) : layout === "alt" ? "auto" : "calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem))",
      width: (width == null ? void 0 : width.base) ? (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)(width == null ? void 0 : width.base) : "100%",
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }), borderStyles), breakpoints), {
      "&[data-hidden]": {
        [`@media (max-width: ${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.em)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_3__.getBreakpointValue)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_4__.getSize)({
          size: hiddenBreakpoint,
          sizes: theme.breakpoints
        })) - 1)})`]: {
          display: "none"
        }
      }
    })
  };
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);
//# sourceMappingURL=HorizontalSection.styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/Section/Section.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/HorizontalSection/Section/Section.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section),
/* harmony export */   "_Section": () => (/* binding */ _Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/utils */ "./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js");
/* harmony import */ var _mantine_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/utils */ "./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js");
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Box/Box.js */ "./node_modules/@mantine/core/esm/Box/Box.js");




var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Section = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_a, ref) => {
  var _b = _a, { children, grow = false, sx } = _b, others = __objRest(_b, ["children", "grow", "sx"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__.Box, __spreadValues({
    ref,
    sx: [{ flex: grow ? 1 : 0, boxSizing: "border-box" }, ...(0,_mantine_utils__WEBPACK_IMPORTED_MODULE_2__.packSx)(sx)]
  }, others), children);
});
_Section.displayName = "@mantine/core/Section";
const Section = (0,_mantine_utils__WEBPACK_IMPORTED_MODULE_3__.createPolymorphicComponent)(_Section);


//# sourceMappingURL=Section.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSortedBreakpoints": () => (/* binding */ getSortedBreakpoints)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js");


function getSortedBreakpoints(breakpoints, theme) {
  if (!breakpoints) {
    return [];
  }
  const values = Object.keys(breakpoints).filter((breakpoint) => breakpoint !== "base").map((breakpoint) => [
    (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getSize)({ size: breakpoint, sizes: theme.breakpoints, units: "em" }),
    breakpoints[breakpoint]
  ]);
  values.sort((a, b) => (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getBreakpointValue)(a[0]) - (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getBreakpointValue)(b[0]));
  return values;
}


//# sourceMappingURL=get-sorted-breakpoints.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/AppShell/Navbar/Navbar.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/AppShell/Navbar/Navbar.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _HorizontalSection_HorizontalSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HorizontalSection/HorizontalSection.js */ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/HorizontalSection.js");
/* harmony import */ var _HorizontalSection_Section_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HorizontalSection/Section/Section.js */ "./node_modules/@mantine/core/esm/AppShell/HorizontalSection/Section/Section.js");





var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const defaultProps = {
  fixed: false,
  position: { top: 0, left: 0 },
  hiddenBreakpoint: "md",
  hidden: false
};
const Navbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const _props = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useComponentDefaultProps)("Navbar", defaultProps, props);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HorizontalSection_HorizontalSection_js__WEBPACK_IMPORTED_MODULE_2__.HorizontalSection, __spreadValues({
    section: "navbar",
    __staticSelector: "Navbar",
    ref
  }, _props));
});
Navbar.Section = _HorizontalSection_Section_Section_js__WEBPACK_IMPORTED_MODULE_3__.Section;
Navbar.displayName = "@mantine/core/Navbar";


//# sourceMappingURL=Navbar.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/Box.js":
/*!***************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/Box.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "_Box": () => (/* binding */ _Box)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/utils */ "./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js");
/* harmony import */ var _style_system_props_extract_system_styles_extract_system_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-system-props/extract-system-styles/extract-system-styles.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/extract-system-styles/extract-system-styles.js");
/* harmony import */ var _use_sx_use_sx_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-sx/use-sx.js */ "./node_modules/@mantine/core/esm/Box/use-sx/use-sx.js");





var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Box = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_a, ref) => {
  var _b = _a, { className, component, style, sx } = _b, others = __objRest(_b, ["className", "component", "style", "sx"]);
  const { systemStyles, rest } = (0,_style_system_props_extract_system_styles_extract_system_styles_js__WEBPACK_IMPORTED_MODULE_1__.extractSystemStyles)(others);
  const Element = component || "div";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Element, __spreadValues({
    ref,
    className: (0,_use_sx_use_sx_js__WEBPACK_IMPORTED_MODULE_2__.useSx)(sx, systemStyles, className),
    style
  }, rest));
});
_Box.displayName = "@mantine/core/Box";
const Box = (0,_mantine_utils__WEBPACK_IMPORTED_MODULE_3__.createPolymorphicComponent)(_Box);


//# sourceMappingURL=Box.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/extract-system-styles/extract-system-styles.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/extract-system-styles/extract-system-styles.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractSystemStyles": () => (/* binding */ extractSystemStyles)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/filter-props/filter-props.js");


var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractSystemStyles(others) {
  const _a = others, {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  } = _a, rest = __objRest(_a, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display"
  ]);
  const systemStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.filterProps)({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  });
  return { systemStyles, rest };
}


//# sourceMappingURL=extract-system-styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/get-responsive-value/get-responsive-value.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/get-responsive-value/get-responsive-value.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResponsiveValue": () => (/* binding */ getResponsiveValue)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");


function getSortedKeys(value, theme) {
  const sorted = Object.keys(value).filter((breakpoint) => breakpoint !== "base").sort((a, b) => (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getBreakpointValue)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getSize)({ size: a, sizes: theme.breakpoints })) - (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getBreakpointValue)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getSize)({ size: b, sizes: theme.breakpoints })));
  return "base" in value ? ["base", ...sorted] : sorted;
}
function getResponsiveValue({ value, theme, getValue, property }) {
  if (value == null) {
    return void 0;
  }
  if (typeof value === "object") {
    const result = getSortedKeys(value, theme).reduce((acc, breakpointKey) => {
      if (breakpointKey === "base" && value.base !== void 0) {
        const baseValue = getValue(value.base, theme);
        if (Array.isArray(property)) {
          property.forEach((prop) => {
            acc[prop] = baseValue;
          });
          return acc;
        }
        acc[property] = baseValue;
        return acc;
      }
      const breakpointValue = getValue(value[breakpointKey], theme);
      if (Array.isArray(property)) {
        acc[theme.fn.largerThan(breakpointKey)] = {};
        property.forEach((prop) => {
          acc[theme.fn.largerThan(breakpointKey)][prop] = breakpointValue;
        });
        return acc;
      }
      acc[theme.fn.largerThan(breakpointKey)] = {
        [property]: breakpointValue
      };
      return acc;
    }, {});
    return result;
  }
  const cssValue = getValue(value, theme);
  if (Array.isArray(property)) {
    return property.reduce((acc, prop) => {
      acc[prop] = cssValue;
      return acc;
    }, {});
  }
  return { [property]: cssValue };
}


//# sourceMappingURL=get-responsive-value.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/get-system-styles/get-system-styles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/get-system-styles/get-system-styles.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSystemStyles": () => (/* binding */ getSystemStyles)
/* harmony export */ });
/* harmony import */ var _get_responsive_value_get_responsive_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-responsive-value/get-responsive-value.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/get-responsive-value/get-responsive-value.js");
/* harmony import */ var _value_getters_value_getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../value-getters/value-getters.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/value-getters.js");
/* harmony import */ var _system_props_system_props_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system-props/system-props.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/system-props/system-props.js");




var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getSystemStyles(systemStyles, theme, systemProps = _system_props_system_props_js__WEBPACK_IMPORTED_MODULE_0__.SYSTEM_PROPS) {
  const styles = Object.keys(systemProps).reduce((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== void 0) {
      acc.push((0,_get_responsive_value_get_responsive_value_js__WEBPACK_IMPORTED_MODULE_1__.getResponsiveValue)({
        value: systemStyles[systemProp],
        getValue: _value_getters_value_getters_js__WEBPACK_IMPORTED_MODULE_2__.valueGetters[systemProps[systemProp].type],
        property: systemProps[systemProp].property,
        theme
      }));
    }
    return acc;
  }, []);
  return styles.reduce((acc, stylesPartial) => {
    Object.keys(stylesPartial).forEach((property) => {
      if (typeof stylesPartial[property] === "object" && stylesPartial[property] !== null) {
        if (!(property in acc)) {
          acc[property] = stylesPartial[property];
        } else {
          acc[property] = __spreadValues(__spreadValues({}, acc[property]), stylesPartial[property]);
        }
      } else {
        acc[property] = stylesPartial[property];
      }
    });
    return acc;
  }, {});
}


//# sourceMappingURL=get-system-styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/system-props/system-props.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/system-props/system-props.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYSTEM_PROPS": () => (/* binding */ SYSTEM_PROPS)
/* harmony export */ });
const SYSTEM_PROPS = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "identity", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};


//# sourceMappingURL=system-props.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-color-value.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-color-value.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColorValue": () => (/* binding */ getColorValue)
/* harmony export */ });
function getColorValue(color, theme) {
  if (color === "dimmed") {
    return theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6];
  }
  return theme.fn.variant({ variant: "filled", color, primaryFallback: false }).background;
}


//# sourceMappingURL=get-color-value.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-default-value.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-default-value.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSizeValue": () => (/* binding */ getSizeValue),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");


function getSizeValue(value) {
  return (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
}
function identity(value) {
  return value;
}


//# sourceMappingURL=get-default-value.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-font-size-value.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-font-size-value.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFontSizeValue": () => (/* binding */ getFontSizeValue)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");


function getFontSizeValue(size, theme) {
  return (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getSize)({ size, sizes: theme.fontSizes });
}


//# sourceMappingURL=get-font-size-value.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-spacing-value.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-spacing-value.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSpacingValue": () => (/* binding */ getSpacingValue)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");


const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function getSpacingValue(size, theme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return `calc(${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getSize)({
      size: size.replace("-", ""),
      sizes: theme.spacing
    })} * -1)`;
  }
  return (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.getSize)({ size, sizes: theme.spacing });
}


//# sourceMappingURL=get-spacing-value.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/value-getters.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/value-getters.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueGetters": () => (/* binding */ valueGetters)
/* harmony export */ });
/* harmony import */ var _get_color_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-color-value.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-color-value.js");
/* harmony import */ var _get_default_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-default-value.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-default-value.js");
/* harmony import */ var _get_font_size_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-font-size-value.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-font-size-value.js");
/* harmony import */ var _get_spacing_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-spacing-value.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-spacing-value.js");





const valueGetters = {
  identity: _get_default_value_js__WEBPACK_IMPORTED_MODULE_0__.identity,
  color: _get_color_value_js__WEBPACK_IMPORTED_MODULE_1__.getColorValue,
  size: _get_default_value_js__WEBPACK_IMPORTED_MODULE_0__.getSizeValue,
  fontSize: _get_font_size_value_js__WEBPACK_IMPORTED_MODULE_2__.getFontSizeValue,
  spacing: _get_spacing_value_js__WEBPACK_IMPORTED_MODULE_3__.getSpacingValue
};


//# sourceMappingURL=value-getters.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Box/use-sx/use-sx.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Box/use-sx/use-sx.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSx": () => (/* binding */ useSx)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/use-css.js");
/* harmony import */ var _style_system_props_get_system_styles_get_system_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-system-props/get-system-styles/get-system-styles.js */ "./node_modules/@mantine/core/esm/Box/style-system-props/get-system-styles/get-system-styles.js");



function extractSx(sx, theme) {
  return typeof sx === "function" ? sx(theme) : sx;
}
function useSx(sx, systemProps, className) {
  const theme = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.useMantineTheme)();
  const { css, cx } = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useCss)();
  if (Array.isArray(sx)) {
    return cx(className, css((0,_style_system_props_get_system_styles_get_system_styles_js__WEBPACK_IMPORTED_MODULE_2__.getSystemStyles)(systemProps, theme)), sx.map((partial) => css(extractSx(partial, theme))));
  }
  return cx(className, css(extractSx(sx, theme)), css((0,_style_system_props_get_system_styles_get_system_styles_js__WEBPACK_IMPORTED_MODULE_2__.getSystemStyles)(systemProps, theme)));
}


//# sourceMappingURL=use-sx.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Code/Code.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Code/Code.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Code": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _Code_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Code.styles.js */ "./node_modules/@mantine/core/esm/Code/Code.styles.js");
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box/Box.js */ "./node_modules/@mantine/core/esm/Box/Box.js");





var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const Code = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const _a = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useComponentDefaultProps)("Code", defaultProps, props), { className, children, block, color, unstyled, variant } = _a, others = __objRest(_a, ["className", "children", "block", "color", "unstyled", "variant"]);
  const { classes, cx } = (0,_Code_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])({ color }, { name: "Code", unstyled, variant });
  if (block) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__.Box, __spreadValues({
      component: "pre",
      dir: "ltr",
      className: cx(classes.root, classes.block, className),
      ref
    }, others), children);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__.Box, __spreadValues({
    component: "code",
    className: cx(classes.root, className),
    ref,
    dir: "ltr"
  }, others), children);
});
Code.displayName = "@mantine/core/Code";


//# sourceMappingURL=Code.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Code/Code.styles.js":
/*!************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Code/Code.styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/create-styles.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme, { color: _color }) => {
  const color = _color || (theme.colorScheme === "dark" ? "dark" : "gray");
  const colors = theme.fn.variant({ color, variant: "light" });
  return {
    root: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      lineHeight: theme.lineHeight,
      padding: `${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(2)} calc(${theme.spacing.xs} / 2)`,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === "dark" ? color === "dark" ? theme.colors.dark[0] : theme.white : theme.colors.dark[7],
      backgroundColor: theme.colorScheme === "dark" && color === "dark" ? theme.colors.dark[5] : colors.background,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs
    }),
    block: {
      padding: theme.spacing.xs,
      margin: 0,
      overflowX: "auto"
    }
  };
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);
//# sourceMappingURL=Code.styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Group/Group.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Group/Group.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _filter_falsy_children_filter_falsy_children_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-falsy-children/filter-falsy-children.js */ "./node_modules/@mantine/core/esm/Group/filter-falsy-children/filter-falsy-children.js");
/* harmony import */ var _Group_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Group.styles.js */ "./node_modules/@mantine/core/esm/Group/Group.styles.js");
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box/Box.js */ "./node_modules/@mantine/core/esm/Box/Box.js");






var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  position: "left",
  spacing: "md"
};
const Group = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const _a = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useComponentDefaultProps)("Group", defaultProps, props), {
    className,
    position,
    align,
    children,
    noWrap,
    grow,
    spacing,
    unstyled,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "position",
    "align",
    "children",
    "noWrap",
    "grow",
    "spacing",
    "unstyled",
    "variant"
  ]);
  const filteredChildren = (0,_filter_falsy_children_filter_falsy_children_js__WEBPACK_IMPORTED_MODULE_2__.filterFalsyChildren)(children);
  const { classes, cx } = (0,_Group_styles_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    align,
    grow,
    noWrap,
    spacing,
    position,
    count: filteredChildren.length
  }, { unstyled, name: "Group", variant });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__.Box, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), filteredChildren);
});
Group.displayName = "@mantine/core/Group";


//# sourceMappingURL=Group.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Group/Group.styles.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Group/Group.styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GROUP_POSITIONS": () => (/* binding */ GROUP_POSITIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/create-styles.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");


const GROUP_POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme, { spacing, position, noWrap, grow, align, count }) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: align || "center",
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: GROUP_POSITIONS[position],
    gap: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getSize)({ size: spacing, sizes: theme.spacing }),
    "& > *": {
      boxSizing: "border-box",
      maxWidth: grow ? `calc(${100 / count}% - (${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.rem)((0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getSize)({ size: spacing, sizes: theme.spacing }))} - ${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.getSize)({ size: spacing, sizes: theme.spacing })} / ${count}))` : void 0,
      flexGrow: grow ? 1 : 0
    }
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

//# sourceMappingURL=Group.styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/Group/filter-falsy-children/filter-falsy-children.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/Group/filter-falsy-children/filter-falsy-children.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterFalsyChildren": () => (/* binding */ filterFalsyChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function filterFalsyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);
}


//# sourceMappingURL=filter-falsy-children.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollArea": () => (/* binding */ ScrollArea),
/* harmony export */   "_ScrollArea": () => (/* binding */ _ScrollArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-scroll-area */ "./node_modules/@radix-ui/react-scroll-area/dist/index.module.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _mantine_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/utils */ "./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js");
/* harmony import */ var _ScrollArea_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollArea.styles.js */ "./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.styles.js");
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box/Box.js */ "./node_modules/@mantine/core/esm/Box/Box.js");







var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  scrollbarSize: 12,
  scrollHideDelay: 1e3,
  type: "hover",
  offsetScrollbars: false
};
const _ScrollArea = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const _a = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useComponentDefaultProps)("ScrollArea", defaultProps, props), {
    children,
    className,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps
  } = _a, others = __objRest(_a, [
    "children",
    "className",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const theme = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();
  const { classes, cx } = (0,_ScrollArea_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])({ scrollbarSize, offsetScrollbars, scrollbarHovered, hidden: type === "never" }, { name: "ScrollArea", classNames, styles, unstyled, variant });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Root, {
    type: type === "never" ? "always" : type,
    scrollHideDelay,
    dir: dir || theme.dir,
    ref,
    asChild: true
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__.Box, __spreadValues({
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Viewport, __spreadProps(__spreadValues({}, viewportProps), {
    className: classes.viewport,
    ref: viewportRef,
    onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
      x: currentTarget.scrollLeft,
      y: currentTarget.scrollTop
    }) : void 0
  }), children), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Scrollbar, {
    orientation: "horizontal",
    className: classes.scrollbar,
    forceMount: true,
    onMouseEnter: () => setScrollbarHovered(true),
    onMouseLeave: () => setScrollbarHovered(false)
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Thumb, {
    className: classes.thumb
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Scrollbar, {
    orientation: "vertical",
    className: classes.scrollbar,
    forceMount: true,
    onMouseEnter: () => setScrollbarHovered(true),
    onMouseLeave: () => setScrollbarHovered(false)
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Thumb, {
    className: classes.thumb
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_3__.Corner, {
    className: classes.corner
  })));
});
const ScrollAreaAutosize = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const _a = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.useComponentDefaultProps)("ScrollAreaAutosize", defaultProps, props), {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    sx,
    variant,
    viewportProps
  } = _a, others = __objRest(_a, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "sx",
    "variant",
    "viewportProps"
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__.Box, __spreadProps(__spreadValues({}, others), {
    ref,
    sx: [{ display: "flex" }, ...(0,_mantine_utils__WEBPACK_IMPORTED_MODULE_5__.packSx)(sx)]
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__.Box, {
    sx: { display: "flex", flexDirection: "column", flex: 1 }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScrollArea, {
    classNames,
    styles,
    scrollHideDelay,
    scrollbarSize,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps
  }, children)));
});
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
_ScrollArea.displayName = "@mantine/core/ScrollArea";
_ScrollArea.Autosize = ScrollAreaAutosize;
const ScrollArea = _ScrollArea;


//# sourceMappingURL=ScrollArea.js.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.styles.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.styles.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/create-styles.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/styles */ "./node_modules/@mantine/styles/esm/tss/get-styles-ref.js");


var useStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)((theme, { scrollbarSize, offsetScrollbars, scrollbarHovered, hidden }) => ({
  root: {
    overflow: "hidden"
  },
  viewport: {
    width: "100%",
    height: "100%",
    paddingRight: offsetScrollbars ? (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize) : void 0,
    paddingBottom: offsetScrollbars ? (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize) : void 0
  },
  scrollbar: {
    display: hidden ? "none" : "flex",
    userSelect: "none",
    touchAction: "none",
    boxSizing: "border-box",
    padding: `calc(${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize)}  / 5)`,
    transition: "background-color 150ms ease, opacity 150ms ease",
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      [`& .${(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.getStylesRef)("thumb")}`]: {
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.white, 0.5) : theme.fn.rgba(theme.black, 0.5)
      }
    },
    '&[data-orientation="vertical"]': {
      width: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize)
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize)
    },
    '&[data-state="hidden"]': {
      display: "none",
      opacity: 0
    }
  },
  thumb: {
    ref: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.getStylesRef)("thumb"),
    flex: 1,
    backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.white, 0.4) : theme.fn.rgba(theme.black, 0.4),
    borderRadius: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(scrollbarSize),
    position: "relative",
    transition: "background-color 150ms ease",
    display: hidden ? "none" : void 0,
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      minWidth: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(44),
      minHeight: (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_1__.rem)(44)
    }
  },
  corner: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    transition: "opacity 150ms ease",
    opacity: scrollbarHovered ? 1 : 0,
    display: hidden ? "none" : void 0
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);
//# sourceMappingURL=ScrollArea.styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultZIndex": () => (/* binding */ getDefaultZIndex)
/* harmony export */ });
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}


//# sourceMappingURL=get-default-z-index.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/Global.js":
/*!********************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/Global.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Global": () => (/* binding */ Global)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/MantineProvider.js */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");




function Global({ styles }) {
  const theme = (0,_theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
    styles: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(typeof styles === "function" ? styles(theme) : styles)
  });
}


//# sourceMappingURL=Global.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/create-styles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/create-styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStyles": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _use_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-css.js */ "./node_modules/@mantine/styles/esm/tss/use-css.js");
/* harmony import */ var _theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/MantineProvider.js */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");
/* harmony import */ var _utils_merge_class_names_merge_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/merge-class-names/merge-class-names.js */ "./node_modules/@mantine/styles/esm/tss/utils/merge-class-names/merge-class-names.js");




var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function assignAccStyles(acc, styles) {
  if (styles) {
    Object.keys(styles).forEach((key) => {
      if (!acc[key]) {
        acc[key] = __spreadValues({}, styles[key]);
      } else {
        acc[key] = __spreadValues(__spreadValues({}, acc[key]), styles[key]);
      }
    });
  }
  return acc;
}
function getStyles(styles, theme, params, contextParams) {
  const extractStyles = (stylesPartial) => typeof stylesPartial === "function" ? stylesPartial(theme, params || {}, contextParams) : stylesPartial || {};
  if (Array.isArray(styles)) {
    return styles.map((item) => extractStyles(item.styles)).reduce((acc, item) => assignAccStyles(acc, item), {});
  }
  return extractStyles(styles);
}
function getContextVariation({ ctx, theme, params, variant, size }) {
  return ctx.reduce((acc, item) => {
    if (item.variants && variant in item.variants) {
      assignAccStyles(acc, item.variants[variant](theme, params, { variant, size }));
    }
    if (item.sizes && size in item.sizes) {
      assignAccStyles(acc, item.sizes[size](theme, params, { variant, size }));
    }
    return acc;
  }, {});
}
function createStyles(input) {
  const getCssObject = typeof input === "function" ? input : () => input;
  function useStyles(params, options) {
    const theme = (0,_theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__.useMantineTheme)();
    const context = (0,_theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__.useMantineProviderStyles)(options == null ? void 0 : options.name);
    const cache = (0,_theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__.useMantineEmotionCache)();
    const contextParams = { variant: options == null ? void 0 : options.variant, size: options == null ? void 0 : options.size };
    const { css, cx } = (0,_use_css_js__WEBPACK_IMPORTED_MODULE_1__.useCss)();
    const cssObject = getCssObject(theme, params, contextParams);
    const componentStyles = getStyles(options == null ? void 0 : options.styles, theme, params, contextParams);
    const providerStyles = getStyles(context, theme, params, contextParams);
    const contextVariations = getContextVariation({
      ctx: context,
      theme,
      params,
      variant: options == null ? void 0 : options.variant,
      size: options == null ? void 0 : options.size
    });
    const classes = Object.fromEntries(Object.keys(cssObject).map((key) => {
      const mergedStyles = cx({ [css(cssObject[key])]: !(options == null ? void 0 : options.unstyled) }, css(contextVariations[key]), css(providerStyles[key]), css(componentStyles[key]));
      return [key, mergedStyles];
    }));
    return {
      classes: (0,_utils_merge_class_names_merge_class_names_js__WEBPACK_IMPORTED_MODULE_2__.mergeClassNames)({
        cx,
        classes,
        context,
        classNames: options == null ? void 0 : options.classNames,
        name: options == null ? void 0 : options.name,
        cache
      }),
      cx,
      theme
    };
  }
  return useStyles;
}


//# sourceMappingURL=create-styles.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/default-emotion-cache.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/default-emotion-cache.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMantineEmotionCache": () => (/* binding */ defaultMantineEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");


const defaultMantineEmotionCache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({ key: "mantine", prepend: true });


//# sourceMappingURL=default-emotion-cache.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/get-styles-ref.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/get-styles-ref.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylesRef": () => (/* binding */ getStylesRef)
/* harmony export */ });
function getStylesRef(refName) {
  return `___ref-${refName || ""}`;
}


//# sourceMappingURL=get-styles-ref.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/use-css.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/use-css.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssFactory": () => (/* binding */ cssFactory),
/* harmony export */   "useCss": () => (/* binding */ useCss)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _utils_use_guaranteed_memo_use_guaranteed_memo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/use-guaranteed-memo/use-guaranteed-memo.js */ "./node_modules/@mantine/styles/esm/tss/utils/use-guaranteed-memo/use-guaranteed-memo.js");
/* harmony import */ var _use_emotion_cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-emotion-cache.js */ "./node_modules/@mantine/styles/esm/tss/use-emotion-cache.js");






var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const refPropertyName = "ref";
function getRef(args) {
  let ref;
  if (args.length !== 1) {
    return { args, ref };
  }
  const [arg] = args;
  if (!(arg instanceof Object)) {
    return { args, ref };
  }
  if (!(refPropertyName in arg)) {
    return { args, ref };
  }
  ref = arg[refPropertyName];
  const argCopy = __spreadValues({}, arg);
  delete argCopy[refPropertyName];
  return { args: [argCopy], ref };
}
const { cssFactory } = (() => {
  function merge(registered, css, className) {
    const registeredStyles = [];
    const rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyles)(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css(registeredStyles);
  }
  function _cssFactory(params) {
    const { cache } = params;
    const css = (...styles) => {
      const { ref, args } = getRef(styles);
      const serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__.serializeStyles)(args, cache.registered);
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serialized, false);
      return `${cache.key}-${serialized.name}${ref === void 0 ? "" : ` ${ref}`}`;
    };
    const cx = (...args) => merge(cache.registered, css, (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(args));
    return { css, cx };
  }
  return { cssFactory: _cssFactory };
})();
function useCss() {
  const cache = (0,_use_emotion_cache_js__WEBPACK_IMPORTED_MODULE_3__.useEmotionCache)();
  return (0,_utils_use_guaranteed_memo_use_guaranteed_memo_js__WEBPACK_IMPORTED_MODULE_4__.useGuaranteedMemo)(() => cssFactory({ cache }), [cache]);
}


//# sourceMappingURL=use-css.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/use-emotion-cache.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/use-emotion-cache.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEmotionCache": () => (/* binding */ useEmotionCache)
/* harmony export */ });
/* harmony import */ var _default_emotion_cache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-emotion-cache.js */ "./node_modules/@mantine/styles/esm/tss/default-emotion-cache.js");
/* harmony import */ var _theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/MantineProvider.js */ "./node_modules/@mantine/styles/esm/theme/MantineProvider.js");



function useEmotionCache() {
  const cache = (0,_theme_MantineProvider_js__WEBPACK_IMPORTED_MODULE_0__.useMantineEmotionCache)();
  return cache || _default_emotion_cache_js__WEBPACK_IMPORTED_MODULE_1__.defaultMantineEmotionCache;
}


//# sourceMappingURL=use-emotion-cache.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/utils/merge-class-names/merge-class-names.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/utils/merge-class-names/merge-class-names.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeClassNames": () => (/* binding */ mergeClassNames)
/* harmony export */ });
function mergeClassNames({
  cx,
  classes,
  context,
  classNames,
  name,
  cache
}) {
  const contextClassNames = context.reduce((acc, item) => {
    Object.keys(item.classNames).forEach((key) => {
      if (typeof acc[key] !== "string") {
        acc[key] = `${item.classNames[key]}`;
      } else {
        acc[key] = `${acc[key]} ${item.classNames[key]}`;
      }
    });
    return acc;
  }, {});
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], contextClassNames[className], classNames != null && classNames[className], Array.isArray(name) ? name.filter(Boolean).map((part) => `${(cache == null ? void 0 : cache.key) || "mantine"}-${part}-${className}`).join(" ") : name ? `${(cache == null ? void 0 : cache.key) || "mantine"}-${name}-${className}` : null);
    return acc;
  }, {});
}


//# sourceMappingURL=merge-class-names.js.map


/***/ }),

/***/ "./node_modules/@mantine/styles/esm/tss/utils/use-guaranteed-memo/use-guaranteed-memo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/styles/esm/tss/utils/use-guaranteed-memo/use-guaranteed-memo.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGuaranteedMemo": () => (/* binding */ useGuaranteedMemo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useGuaranteedMemo(fn, deps) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
    ref.current = {
      v: fn(),
      prevDeps: [...deps]
    };
  }
  return ref.current.v;
}


//# sourceMappingURL=use-guaranteed-memo.js.map


/***/ }),

/***/ "./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPolymorphicComponent": () => (/* binding */ createPolymorphicComponent)
/* harmony export */ });
function createPolymorphicComponent(component) {
  return component;
}


//# sourceMappingURL=create-polymorphic-component.js.map


/***/ }),

/***/ "./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js":
/*!************************************************************!*\
  !*** ./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packSx": () => (/* binding */ packSx)
/* harmony export */ });
function packSx(sx) {
  return Array.isArray(sx) ? sx : [sx];
}


//# sourceMappingURL=pack-sx.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/number/dist/index.module.js":
/*!************************************************************!*\
  !*** ./node_modules/@radix-ui/number/dist/index.module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ $ae6933e535247d3d$export$7d15b64cf5a3a4c4)
/* harmony export */ });
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/primitive/dist/index.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/@radix-ui/primitive/dist/index.module.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeEventHandlers": () => (/* binding */ $e42e1063c40fb3ef$export$b9ecd428b558ff10)
/* harmony export */ });
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-compose-refs/dist/index.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-compose-refs/dist/index.module.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeRefs": () => (/* binding */ $6ed0406888f73fc4$export$43e446d32b3d21af),
/* harmony export */   "useComposedRefs": () => (/* binding */ $6ed0406888f73fc4$export$c7b2cbe3552a0d05)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-context/dist/index.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@radix-ui/react-context/dist/index.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContext": () => (/* binding */ $c512c27ab02ef895$export$fd42f52fd3ae1109),
/* harmony export */   "createContextScope": () => (/* binding */ $c512c27ab02ef895$export$50c7b4e9d9f19c1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context
        , Object.values(context));
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {
            value: value
        }, children);
    }
    function useContext(consumerName) {
        const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context
            , Object.values(context));
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $c512c27ab02ef895$export$fd42f52fd3ae1109,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-direction/dist/index.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@radix-ui/react-direction/dist/index.module.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionProvider": () => (/* binding */ $f631663db3294ace$export$c760c09fdd558351),
/* harmony export */   "Provider": () => (/* binding */ $f631663db3294ace$export$2881499e37b75b9a),
/* harmony export */   "useDirection": () => (/* binding */ $f631663db3294ace$export$b39126d51d94e6f3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = $f631663db3294ace$export$c760c09fdd558351;





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-presence/dist/index.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/@radix-ui/react-presence/dist/index.module.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presence": () => (/* binding */ $921a889cee6df7e8$export$99c2b779aa4e8b8b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "./node_modules/@radix-ui/react-compose-refs/dist/index.module.js");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js");










function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        ref: ref
    }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const stylesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const prevPresentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present);
    const prevAnimationNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-primitive/dist/index.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@radix-ui/react-primitive/dist/index.module.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Primitive": () => (/* binding */ $8927f6f2acc4f386$export$250ffa63cdc0d034),
/* harmony export */   "Root": () => (/* binding */ $8927f6f2acc4f386$export$be92b6f5f03c0fe9),
/* harmony export */   "dispatchDiscreteCustomEvent": () => (/* binding */ $8927f6f2acc4f386$export$6d1a0317bde7de7f)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@radix-ui/react-primitive/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.module.js");









const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'h2',
    'h3',
    'img',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : node;
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Comp, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$be92b6f5f03c0fe9 = $8927f6f2acc4f386$export$250ffa63cdc0d034;





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-scroll-area/dist/index.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@radix-ui/react-scroll-area/dist/index.module.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Corner": () => (/* binding */ $57acba87d6e25586$export$ac61190d9fc311a9),
/* harmony export */   "Root": () => (/* binding */ $57acba87d6e25586$export$be92b6f5f03c0fe9),
/* harmony export */   "ScrollArea": () => (/* binding */ $57acba87d6e25586$export$ccf8d8d7bbf3c2cc),
/* harmony export */   "ScrollAreaCorner": () => (/* binding */ $57acba87d6e25586$export$56969d565df7cc4b),
/* harmony export */   "ScrollAreaScrollbar": () => (/* binding */ $57acba87d6e25586$export$2fabd85d0eba3c57),
/* harmony export */   "ScrollAreaThumb": () => (/* binding */ $57acba87d6e25586$export$9fba1154677d7cd2),
/* harmony export */   "ScrollAreaViewport": () => (/* binding */ $57acba87d6e25586$export$a21cbf9f11fca853),
/* harmony export */   "Scrollbar": () => (/* binding */ $57acba87d6e25586$export$9a4e88b92edfce6b),
/* harmony export */   "Thumb": () => (/* binding */ $57acba87d6e25586$export$6521433ed15a34db),
/* harmony export */   "Viewport": () => (/* binding */ $57acba87d6e25586$export$d5c6c08dc2d3ca7),
/* harmony export */   "createScrollAreaScope": () => (/* binding */ $57acba87d6e25586$export$488468afe3a6f2b1)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@radix-ui/react-scroll-area/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-primitive */ "./node_modules/@radix-ui/react-primitive/dist/index.module.js");
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-presence */ "./node_modules/@radix-ui/react-presence/dist/index.module.js");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ "./node_modules/@radix-ui/react-context/dist/index.module.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "./node_modules/@radix-ui/react-compose-refs/dist/index.module.js");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js");
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-direction */ "./node_modules/@radix-ui/react-direction/dist/index.module.js");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js");
/* harmony import */ var _radix_ui_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/number */ "./node_modules/@radix-ui/number/dist/index.module.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/primitive */ "./node_modules/@radix-ui/primitive/dist/index.module.js");
























function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


/* -------------------------------------------------------------------------------------------------
 * ScrollArea
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$SCROLL_AREA_NAME = 'ScrollArea';
const [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)($57acba87d6e25586$var$SCROLL_AREA_NAME);
const [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME);
const $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , type: type = 'hover' , dir: dir , scrollHideDelay: scrollHideDelay = 600 , ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [scrollbarX, setScrollbarX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [scrollbarY, setScrollbarY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [cornerWidth, setCornerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [cornerHeight, setCornerHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>setScrollArea(node)
    );
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__.useDirection)(dir);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type: type,
        dir: direction,
        scrollHideDelay: scrollHideDelay,
        scrollArea: scrollArea,
        viewport: viewport,
        onViewportChange: setViewport,
        content: content,
        onContentChange: setContent,
        scrollbarX: scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled: scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY: scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled: scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        dir: direction
    }, scrollAreaProps, {
        ref: composedRefs,
        style: {
            position: 'relative',
            // Pass corner sizes as CSS vars to reduce re-renders of context consumers
            ['--radix-scroll-area-corner-width']: cornerWidth + 'px',
            ['--radix-scroll-area-corner-height']: cornerHeight + 'px',
            ...props.style
        }
    })));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$ccf8d8d7bbf3c2cc, {
    displayName: $57acba87d6e25586$var$SCROLL_AREA_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaViewport
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$VIEWPORT_NAME = 'ScrollAreaViewport';
const $57acba87d6e25586$export$a21cbf9f11fca853 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , children: children , ...viewportProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref, context.onViewportChange);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-radix-scroll-area-viewport": ""
    }, viewportProps, {
        ref: composedRefs,
        style: {
            /**
       * We don't support `visible` because the intention is to have at least one scrollbar
       * if this component is used and `visible` will behave like `auto` in that case
       * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
       *
       * We don't handle `auto` because the intention is for the native implementation
       * to be hidden if using this component. We just want to ensure the node is scrollable
       * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
       * the browser from having to work out whether to render native scrollbars or not,
       * we tell it to with the intention of hiding them in CSS.
       */ overflowX: context.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: context.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...props.style
        }
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        ref: context.onContentChange,
        style: {
            minWidth: '100%',
            display: 'table'
        }
    }, children)));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$a21cbf9f11fca853, {
    displayName: $57acba87d6e25586$var$VIEWPORT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaScrollbar
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$SCROLLBAR_NAME = 'ScrollAreaScrollbar';
const $57acba87d6e25586$export$2fabd85d0eba3c57 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange: onScrollbarXEnabledChange , onScrollbarYEnabledChange: onScrollbarYEnabledChange  } = context;
    const isHorizontal = props.orientation === 'horizontal';
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === 'hover' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'scroll' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'auto' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollbarProps, {
        ref: forwardedRef,
        forceMount: forceMount
    })) : context.type === 'always' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollbarProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$2fabd85d0eba3c57, {
    displayName: $57acba87d6e25586$var$SCROLLBAR_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarHover = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false)
                , context.scrollHideDelay);
            };
            scrollArea.addEventListener('pointerenter', handlePointerEnter);
            scrollArea.addEventListener('pointerleave', handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener('pointerenter', handlePointerEnter);
                scrollArea.removeEventListener('pointerleave', handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.Presence, {
        present: forceMount || visible
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-state": visible ? 'visible' : 'hidden'
    }, scrollbarProps, {
        ref: forwardedRef
    })));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarScroll = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === 'horizontal';
    const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(()=>send('SCROLL_END')
    , 100);
    const [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f('hidden', {
        hidden: {
            SCROLL: 'scrolling'
        },
        scrolling: {
            SCROLL_END: 'idle',
            POINTER_ENTER: 'interacting'
        },
        interacting: {
            SCROLL: 'interacting',
            POINTER_LEAVE: 'idle'
        },
        idle: {
            HIDE: 'hidden',
            SCROLL: 'scrolling',
            POINTER_ENTER: 'interacting'
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (state === 'idle') {
            const hideTimer = window.setTimeout(()=>send('HIDE')
            , context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer)
            ;
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? 'scrollLeft' : 'scrollTop';
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send('SCROLL');
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.Presence, {
        present: forceMount || state !== 'hidden'
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-state": state === 'hidden' ? 'hidden' : 'visible'
    }, scrollbarProps, {
        ref: forwardedRef,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerEnter, ()=>send('POINTER_ENTER')
        ),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerLeave, ()=>send('POINTER_LEAVE')
        )
    })));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarAuto = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount: forceMount , ...scrollbarProps } = props;
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isHorizontal = props.orientation === 'horizontal';
    const handleResize = $57acba87d6e25586$var$useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize);
    $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.Presence, {
        present: forceMount || visible
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-state": visible ? 'visible' : 'hidden'
    }, scrollbarProps, {
        ref: forwardedRef
    })));
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarVisible = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { orientation: orientation = 'vertical' , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const pointerOffsetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const [sizes, setSizes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes: sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb
        ,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0
        ,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === 'horizontal') return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        ref: forwardedRef,
        onThumbPositionChange: ()=>{
            if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollLeft;
                const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
            }
        },
        onWheelScroll: (scrollPos)=>{
            if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos)=>{
            if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
        }
    }));
    if (orientation === 'vertical') return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        ref: forwardedRef,
        onThumbPositionChange: ()=>{
            if (context.viewport && thumbRef.current) {
                const scrollPos = context.viewport.scrollTop;
                const offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes);
                thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
        },
        onWheelScroll: (scrollPos)=>{
            if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos)=>{
            if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
    }));
    return null;
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaScrollbarX = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { sizes: sizes , onSizesChange: onSizesChange , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const composeRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref, context.onScrollbarXChange);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-orientation": "horizontal"
    }, scrollbarProps, {
        ref: composeRefs,
        sizes: sizes,
        style: {
            bottom: 0,
            left: context.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
            right: context.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
            ['--radix-scroll-area-thumb-width']: $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x)
        ,
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x)
        ,
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos); // prevent window scroll when wheeling on scrollbar
                if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) onSizesChange({
                content: context.viewport.scrollWidth,
                viewport: context.viewport.offsetWidth,
                scrollbar: {
                    size: ref.current.clientWidth,
                    paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft),
                    paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight)
                }
            });
        }
    }));
});
const $57acba87d6e25586$var$ScrollAreaScrollbarY = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { sizes: sizes , onSizesChange: onSizesChange , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const composeRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref, context.onScrollbarYChange);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-orientation": "vertical"
    }, scrollbarProps, {
        ref: composeRefs,
        sizes: sizes,
        style: {
            top: 0,
            right: context.dir === 'ltr' ? 0 : undefined,
            left: context.dir === 'rtl' ? 0 : undefined,
            bottom: 'var(--radix-scroll-area-corner-height)',
            ['--radix-scroll-area-thumb-height']: $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y)
        ,
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y)
        ,
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos); // prevent window scroll when wheeling on scrollbar
                if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) onSizesChange({
                content: context.viewport.scrollHeight,
                viewport: context.viewport.offsetHeight,
                scrollbar: {
                    size: ref.current.clientHeight,
                    paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop),
                    paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom)
                }
            });
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME);
const $57acba87d6e25586$var$ScrollAreaScrollbarImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , sizes: sizes , hasThumb: hasThumb , onThumbChange: onThumbChange , onThumbPointerUp: onThumbPointerUp , onThumbPointerDown: onThumbPointerDown , onThumbPositionChange: onThumbPositionChange , onDragScroll: onDragScroll , onWheelScroll: onWheelScroll , onResize: onResize , ...scrollbarProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const composeRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>setScrollbar(node)
    );
    const rectRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const prevWebkitUserSelectRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onWheelScroll);
    const handleThumbPositionChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onThumbPositionChange);
    const handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x: x,
                y: y
            });
        }
    }
    /**
   * We bind wheel event imperatively so we can switch off passive
   * mode for document wheel event to allow it to be prevented
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener('wheel', handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener('wheel', handleWheel, {
                passive: false
            })
        ;
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    /**
   * Update thumb position on sizes change
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize);
    $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar: scrollbar,
        hasThumb: hasThumb,
        onThumbChange: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onThumbChange),
        onThumbPointerUp: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onThumbPointerDown)
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollbarProps, {
        ref: composeRefs,
        style: {
            position: 'absolute',
            ...scrollbarProps.style
        },
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerDown, (event)=>{
            const mainPointer = 0;
            if (event.button === mainPointer) {
                const element = event.target;
                element.setPointerCapture(event.pointerId);
                rectRef.current = scrollbar.getBoundingClientRect(); // pointer capture doesn't prevent text selection in Safari
                // so we remove text selection manually when scrolling
                prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                document.body.style.webkitUserSelect = 'none';
                handleDragScroll(event);
            }
        }),
        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerMove, handleDragScroll),
        onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerUp, (event)=>{
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
        })
    })));
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaThumb
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$THUMB_NAME = 'ScrollAreaThumb';
const $57acba87d6e25586$export$9fba1154677d7cd2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...thumbProps } = props;
    const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__.Presence, {
        present: forceMount || scrollbarContext.hasThumb
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: forwardedRef
    }, thumbProps)));
});
const $57acba87d6e25586$var$ScrollAreaThumbImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , style: style , ...thumbProps } = props;
    const scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange: onThumbPositionChange  } = scrollbarContext;
    const composedRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = undefined;
        }
    }, 100);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            /**
       * We only bind to native scroll event so we know when scroll starts and ends.
       * When scroll starts we start a requestAnimationFrame loop that checks for
       * changes to scroll position. That rAF loop triggers our thumb position change
       * when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
       * https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
       */ const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "data-state": scrollbarContext.hasThumb ? 'visible' : 'hidden'
    }, thumbProps, {
        ref: composedRef,
        style: {
            width: 'var(--radix-scroll-area-thumb-width)',
            height: 'var(--radix-scroll-area-thumb-height)',
            ...style
        },
        onPointerDownCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x: x,
                y: y
            });
        }),
        onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }));
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$9fba1154677d7cd2, {
    displayName: $57acba87d6e25586$var$THUMB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ScrollAreaCorner
 * -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$CORNER_NAME = 'ScrollAreaCorner';
const $57acba87d6e25586$export$56969d565df7cc4b = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== 'scroll' && hasBothScrollbarsVisible;
    return hasCorner ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($57acba87d6e25586$export$56969d565df7cc4b, {
    displayName: $57acba87d6e25586$var$CORNER_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$var$ScrollAreaCornerImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { __scopeScrollArea: __scopeScrollArea , ...cornerProps } = props;
    const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea);
    const [width1, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [height1, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const hasSize = Boolean(width1 && height1);
    $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, ()=>{
        var _context$scrollbarX;
        const height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
        context.onCornerHeightChange(height);
        setHeight(height);
    });
    $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, ()=>{
        var _context$scrollbarY;
        const width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
        context.onCornerWidthChange(width);
        setWidth(width);
    });
    return hasSize ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cornerProps, {
        ref: forwardedRef,
        style: {
            width: width1,
            height: height1,
            position: 'absolute',
            right: context.dir === 'ltr' ? 0 : undefined,
            left: context.dir === 'rtl' ? 0 : undefined,
            bottom: 0,
            ...props.style
        }
    })) : null;
});
/* -----------------------------------------------------------------------------------------------*/ function $57acba87d6e25586$var$toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
    const ratio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio; // minimum of 18 matches macOS minimum
    return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = 'ltr') {
    const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === 'ltr' ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = $57acba87d6e25586$var$linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, dir = 'ltr') {
    const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === 'ltr' ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = (0,_radix_ui_number__WEBPACK_IMPORTED_MODULE_9__.clamp)(scrollPos, scrollClampRange);
    const interpolate = $57acba87d6e25586$var$linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
} // https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function $57acba87d6e25586$var$linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
} // Custom scroll handler to avoid scroll-linked effects
// https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
const $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF)
    ;
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
    const handleCallback = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(callback);
    const debounceTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>window.clearTimeout(debounceTimerRef.current)
    , []);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
    const handleResize = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onResize);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_10__.useLayoutEffect)(()=>{
        let rAF = 0;
        if (element) {
            /**
       * Resize Observer will throw an often benign error that says `ResizeObserver loop
       * completed with undelivered notifications`. This means that ResizeObserver was not
       * able to deliver all observations within a single animation frame, so we use
       * `requestAnimationFrame` to ensure we don't deliver unnecessary observations.
       * Further reading: https://github.com/WICG/resize-observer/issues/38
       */ const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
/* -----------------------------------------------------------------------------------------------*/ const $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc;
const $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853;
const $57acba87d6e25586$export$9a4e88b92edfce6b = $57acba87d6e25586$export$2fabd85d0eba3c57;
const $57acba87d6e25586$export$6521433ed15a34db = $57acba87d6e25586$export$9fba1154677d7cd2;
const $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-slot/dist/index.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/@radix-ui/react-slot/dist/index.module.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Root": () => (/* binding */ $5e63c961fc1ce211$export$be92b6f5f03c0fe9),
/* harmony export */   "Slot": () => (/* binding */ $5e63c961fc1ce211$export$8c6ed5c666ac1360),
/* harmony export */   "Slottable": () => (/* binding */ $5e63c961fc1ce211$export$d9f1ccf0bdb05d45)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@radix-ui/react-slot/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "./node_modules/@radix-ui/react-compose-refs/dist/index.module.js");







/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (react__WEBPACK_IMPORTED_MODULE_1__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_1__.Children.only(null);
                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($5e63c961fc1ce211$var$SlotClone, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(newElement) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($5e63c961fc1ce211$var$SlotClone, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(children)) return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, children.ref)
    });
    return react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_1__.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
const $5e63c961fc1ce211$export$be92b6f5f03c0fe9 = $5e63c961fc1ce211$export$8c6ed5c666ac1360;





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallbackRef": () => (/* binding */ $b1b2314f5f9a1d84$export$25bec8c6f54ee79a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLayoutEffect": () => (/* binding */ $9f79659886946c16$export$e5c5a5f917a5871c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : ()=>{};





//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReactComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */





var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, stroke = 2, children } = _b, rest = __objRest(_b, ["color", "size", "stroke", "children"]);
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]),
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};


//# sourceMappingURL=createReactComponent.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @tabler/icons-react v2.17.0 - MIT
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustments.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustments.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconAdjustments)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconAdjustments = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]);


//# sourceMappingURL=IconAdjustments.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconCalendarStats.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconCalendarStats.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconCalendarStats)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconCalendarStats = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("calendar-stats", "IconCalendarStats", [
  [
    "path",
    {
      d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M18 14v4h4", key: "svg-1" }],
  ["path", { d: "M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-2" }],
  ["path", { d: "M15 3v4", key: "svg-3" }],
  ["path", { d: "M7 3v4", key: "svg-4" }],
  ["path", { d: "M3 11h16", key: "svg-5" }]
]);


//# sourceMappingURL=IconCalendarStats.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconFileAnalytics.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconFileAnalytics.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconFileAnalytics)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconFileAnalytics = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("file-analytics", "IconFileAnalytics", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M9 17l0 -5", key: "svg-2" }],
  ["path", { d: "M12 17l0 -1", key: "svg-3" }],
  ["path", { d: "M15 17l0 -3", key: "svg-4" }]
]);


//# sourceMappingURL=IconFileAnalytics.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconGauge.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconGauge.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconGauge)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconGauge = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gauge", "IconGauge", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M13.41 10.59l2.59 -2.59", key: "svg-2" }],
  ["path", { d: "M7 12a5 5 0 0 1 5 -5", key: "svg-3" }]
]);


//# sourceMappingURL=IconGauge.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconLock.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconLock.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconLock)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconLock = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lock", "IconLock", [
  [
    "path",
    {
      d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }],
  ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]
]);


//# sourceMappingURL=IconLock.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconNotes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconNotes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconNotes)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconNotes = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("notes", "IconNotes", [
  [
    "path",
    {
      d: "M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 7l6 0", key: "svg-1" }],
  ["path", { d: "M9 11l6 0", key: "svg-2" }],
  ["path", { d: "M9 15l4 0", key: "svg-3" }]
]);


//# sourceMappingURL=IconNotes.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconPresentationAnalytics.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconPresentationAnalytics.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconPresentationAnalytics)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.17.0 - MIT
 */



var IconPresentationAnalytics = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  "presentation-analytics",
  "IconPresentationAnalytics",
  [
    ["path", { d: "M9 12v-4", key: "svg-0" }],
    ["path", { d: "M15 12v-2", key: "svg-1" }],
    ["path", { d: "M12 12v-1", key: "svg-2" }],
    ["path", { d: "M3 4h18", key: "svg-3" }],
    [
      "path",
      { d: "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10", key: "svg-4" }
    ],
    ["path", { d: "M12 16v4", key: "svg-5" }],
    ["path", { d: "M9 20h6", key: "svg-6" }]
  ]
);


//# sourceMappingURL=IconPresentationAnalytics.js.map


/***/ }),

/***/ "./resources/js/components/Dashboard.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Dashboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/Navbar */ "./resources/js/components/layouts/Navbar/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Dashboard() {
  return (
    /*#__PURE__*/
    // <div className="dashboard">
    //   <h1>Laravel React Boilerplate</h1>
    //   <Text>Welcome to Mantine!</Text>
    // </div>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarNested, {})
    })
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./resources/js/components/layouts/Navbar/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/Navbar/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNested": () => (/* binding */ NavbarNested)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/styles/esm/tss/create-styles.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/AppShell/Navbar/Navbar.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/Group/Group.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/Code/Code.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconGauge.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconNotes.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconCalendarStats.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconPresentationAnalytics.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconFileAnalytics.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustments.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconLock.js");
/* harmony import */ var _mantine_UserButton_UserButton_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mantine/UserButton/UserButton.tsx */ "./resources/js/components/mantine/UserButton/UserButton.tsx");
/* harmony import */ var _mantine_UserButton_UserButton_tsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mantine_UserButton_UserButton_tsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_NavbarLinksGroup_NavbarLinksGroup_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mantine/NavbarLinksGroup/NavbarLinksGroup.tsx */ "./resources/js/components/mantine/NavbarLinksGroup/NavbarLinksGroup.tsx");
/* harmony import */ var _mantine_NavbarLinksGroup_NavbarLinksGroup_tsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_NavbarLinksGroup_NavbarLinksGroup_tsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { UserButton } from 'components/mantine/UserButton/UserButton';
// import { LinksGroup } from 'components/mantine/NavbarLinksGroup/NavbarLinksGroup';
// import { Logo } from './Logo';




var mockdata = [{
  label: 'Dashboard',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  label: 'Market news',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  initiallyOpened: true,
  links: [{
    label: 'Overview',
    link: '/'
  }, {
    label: 'Forecasts',
    link: '/'
  }, {
    label: 'Outlook',
    link: '/'
  }, {
    label: 'Real time',
    link: '/'
  }]
}, {
  label: 'Releases',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"],
  links: [{
    label: 'Upcoming releases',
    link: '/'
  }, {
    label: 'Previous releases',
    link: '/'
  }, {
    label: 'Releases schedule',
    link: '/'
  }]
}, {
  label: 'Analytics',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  label: 'Contracts',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  label: 'Settings',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  label: 'Security',
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  links: [{
    label: 'Enable 2FA',
    link: '/'
  }, {
    label: 'Change password',
    link: '/'
  }, {
    label: 'Recovery codes',
    link: '/'
  }]
}];
var useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_11__.createStyles)(function (theme) {
  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0
    },
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: "calc(".concat(theme.spacing.md, " * -1)"),
      marginRight: "calc(".concat(theme.spacing.md, " * -1)"),
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: "".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_12__.rem)(1), " solid ").concat(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3])
    },
    links: {
      marginLeft: "calc(".concat(theme.spacing.md, " * -1)"),
      marginRight: "calc(".concat(theme.spacing.md, " * -1)")
    },
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl
    },
    footer: {
      marginLeft: "calc(".concat(theme.spacing.md, " * -1)"),
      marginRight: "calc(".concat(theme.spacing.md, " * -1)"),
      borderTop: "".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_12__.rem)(1), " solid ").concat(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3])
    }
  };
});
function NavbarNested() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var links = mockdata.map(function (item) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_mantine_NavbarLinksGroup_NavbarLinksGroup_tsx__WEBPACK_IMPORTED_MODULE_1__.LinksGroup, _objectSpread(_objectSpread({}, item), {}, {
      key: item.label
    }));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_13__.Navbar, {
    height: 800,
    width: {
      sm: 300
    },
    p: "md",
    className: classes.navbar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Section, {
      className: classes.header,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_14__.Group, {
        position: "apart",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_15__.Code, {
          sx: {
            fontWeight: 700
          },
          children: "v3.1.2"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Section, {
      grow: true,
      className: classes.links,
      component: _mantine_core__WEBPACK_IMPORTED_MODULE_16__.ScrollArea,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: classes.linksInner,
        children: links
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Section, {
      className: classes.footer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_UserButton_UserButton_tsx__WEBPACK_IMPORTED_MODULE_0__.UserButton, {
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
        name: "Ann Nullpointer",
        email: "anullpointer@yahoo.com"
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/mantine/NavbarLinksGroup/NavbarLinksGroup.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/mantine/NavbarLinksGroup/NavbarLinksGroup.tsx ***!
  \*******************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\resources\\js\\components\\mantine\\NavbarLinksGroup\\NavbarLinksGroup.tsx: Unexpected reserved word 'interface'. (53:0)\n\n\u001b[0m \u001b[90m 51 |\u001b[39m }))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 52 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 53 |\u001b[39m \u001b[36minterface\u001b[39m \u001b[33mLinksGroupProps\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 54 |\u001b[39m   icon\u001b[33m:\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mFC\u001b[39m\u001b[33m<\u001b[39m\u001b[33many\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 55 |\u001b[39m   label\u001b[33m:\u001b[39m string\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 56 |\u001b[39m   initiallyOpened\u001b[33m?\u001b[39m\u001b[33m:\u001b[39m boolean\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:3271:19)\n    at JSXParserMixin.checkReservedWord (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12062:12)\n    at JSXParserMixin.parseIdentifierName (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12041:12)\n    at JSXParserMixin.parseIdentifier (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12016:23)\n    at JSXParserMixin.parseExprAtom (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:11236:27)\n    at JSXParserMixin.parseExprAtom (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:7008:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:10873:23)\n    at JSXParserMixin.parseUpdate (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:10856:21)");

/***/ }),

/***/ "./resources/js/components/mantine/UserButton/UserButton.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/components/mantine/UserButton/UserButton.tsx ***!
  \*******************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\resources\\js\\components\\mantine\\UserButton\\UserButton.tsx: Unexpected reserved word 'interface'. (24:0)\n\n\u001b[0m \u001b[90m 22 |\u001b[39m }))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 |\u001b[39m \u001b[36minterface\u001b[39m \u001b[33mUserButtonProps\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mUnstyledButtonProps\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m   image\u001b[33m:\u001b[39m string\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m   name\u001b[33m:\u001b[39m string\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m   email\u001b[33m:\u001b[39m string\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:3271:19)\n    at JSXParserMixin.checkReservedWord (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12062:12)\n    at JSXParserMixin.parseIdentifierName (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12041:12)\n    at JSXParserMixin.parseIdentifier (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:12016:23)\n    at JSXParserMixin.parseExprAtom (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:11236:27)\n    at JSXParserMixin.parseExprAtom (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:7008:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:10873:23)\n    at JSXParserMixin.parseUpdate (C:\\xampp\\htdocs\\projects\\Developments\\roommngnt\\sp-room-mngt\\node_modules\\@babel\\parser\\lib\\index.js:10856:21)");

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ "./node_modules/@radix-ui/react-primitive/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-primitive/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@radix-ui/react-scroll-area/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-scroll-area/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@radix-ui/react-slot/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@radix-ui/react-slot/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

}]);