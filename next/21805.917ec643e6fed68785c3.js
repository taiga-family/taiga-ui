"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[21805],{

/***/ 21805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TypographyModule": () => (/* binding */ TypographyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/typography/typography.component.ts






function TypographyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "h2", 2);
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "h3", 4);
    core/* ɵɵelementStart */.TgZ(3, "code");
    core/* ɵɵtext */._uU(4, "--tui-font-heading");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "table", 5);
    core/* ɵɵelementStart */.TgZ(6, "tr");
    core/* ɵɵelementStart */.TgZ(7, "th", 6);
    core/* ɵɵtext */._uU(8, "text");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(9, "th", 6);
    core/* ɵɵtext */._uU(10, "class");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "th", 6);
    core/* ɵɵtext */._uU(12, "var");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "th", 6);
    core/* ɵɵtext */._uU(14, "font-weight");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(15, "th", 6);
    core/* ɵɵtext */._uU(16, "font-size");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "th", 6);
    core/* ɵɵtext */._uU(18, "line-height");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "tr");
    core/* ɵɵelementStart */.TgZ(20, "td", 7);
    core/* ɵɵtext */._uU(21, "Taiga UI");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(22, "td", 8);
    core/* ɵɵelementStart */.TgZ(23, "tui-doc-copy", 9);
    core/* ɵɵtext */._uU(24, "tui-text_h1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(25, "td", 8);
    core/* ɵɵelementStart */.TgZ(26, "tui-doc-copy", 10);
    core/* ɵɵtext */._uU(27, "--tui-font-heading-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(28, "td", 8);
    core/* ɵɵtext */._uU(29, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(30, "td", 8);
    core/* ɵɵtext */._uU(31, "50px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(32, "td", 8);
    core/* ɵɵtext */._uU(33, "56px (1.12)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(34, "tr");
    core/* ɵɵelementStart */.TgZ(35, "td", 11);
    core/* ɵɵi18n */.SDv(36, 12);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(37, "td", 8);
    core/* ɵɵelementStart */.TgZ(38, "tui-doc-copy", 13);
    core/* ɵɵtext */._uU(39, "tui-text_h2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(40, "td", 8);
    core/* ɵɵelementStart */.TgZ(41, "tui-doc-copy", 14);
    core/* ɵɵtext */._uU(42, "--tui-font-heading-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(43, "td", 8);
    core/* ɵɵtext */._uU(44, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(45, "td", 8);
    core/* ɵɵtext */._uU(46, "44px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(47, "td", 8);
    core/* ɵɵtext */._uU(48, "48px (1.1)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(49, "tr");
    core/* ɵɵelementStart */.TgZ(50, "td", 15);
    core/* ɵɵi18n */.SDv(51, 16);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(52, "td", 8);
    core/* ɵɵelementStart */.TgZ(53, "tui-doc-copy", 17);
    core/* ɵɵtext */._uU(54, "tui-text_h3");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(55, "td", 8);
    core/* ɵɵelementStart */.TgZ(56, "tui-doc-copy", 18);
    core/* ɵɵtext */._uU(57, "--tui-font-heading-3");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(58, "td", 8);
    core/* ɵɵtext */._uU(59, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(60, "td", 8);
    core/* ɵɵtext */._uU(61, "36px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(62, "td", 8);
    core/* ɵɵtext */._uU(63, "40px (1.11)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(64, "tr");
    core/* ɵɵelementStart */.TgZ(65, "td", 19);
    core/* ɵɵi18n */.SDv(66, 20);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(67, "td", 8);
    core/* ɵɵelementStart */.TgZ(68, "tui-doc-copy", 21);
    core/* ɵɵtext */._uU(69, "tui-text_h4");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(70, "td", 8);
    core/* ɵɵelementStart */.TgZ(71, "tui-doc-copy", 22);
    core/* ɵɵtext */._uU(72, "--tui-font-heading-4");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(73, "td", 8);
    core/* ɵɵtext */._uU(74, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(75, "td", 8);
    core/* ɵɵtext */._uU(76, "28px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(77, "td", 8);
    core/* ɵɵtext */._uU(78, "32px (1.14)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(79, "tr");
    core/* ɵɵelementStart */.TgZ(80, "td", 23);
    core/* ɵɵi18n */.SDv(81, 24);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(82, "td", 8);
    core/* ɵɵelementStart */.TgZ(83, "tui-doc-copy", 25);
    core/* ɵɵtext */._uU(84, "tui-text_h5");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(85, "td", 8);
    core/* ɵɵelementStart */.TgZ(86, "tui-doc-copy", 26);
    core/* ɵɵtext */._uU(87, "--tui-font-heading-5");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(88, "td", 8);
    core/* ɵɵtext */._uU(89, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(90, "td", 8);
    core/* ɵɵtext */._uU(91, "24px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(92, "td", 8);
    core/* ɵɵtext */._uU(93, "28px (1.17)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(94, "tr");
    core/* ɵɵelementStart */.TgZ(95, "td", 27);
    core/* ɵɵi18n */.SDv(96, 28);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(97, "td", 8);
    core/* ɵɵelementStart */.TgZ(98, "tui-doc-copy", 29);
    core/* ɵɵtext */._uU(99, "tui-text_h6");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(100, "td", 8);
    core/* ɵɵelementStart */.TgZ(101, "tui-doc-copy", 30);
    core/* ɵɵtext */._uU(102, "--tui-font-heading-6");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(103, "td", 8);
    core/* ɵɵtext */._uU(104, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(105, "td", 8);
    core/* ɵɵtext */._uU(106, "20px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(107, "td", 8);
    core/* ɵɵtext */._uU(108, "24px (1.2)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(109, "h2", 2);
    core/* ɵɵi18n */.SDv(110, 31);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(111, "h3", 4);
    core/* ɵɵelementStart */.TgZ(112, "code");
    core/* ɵɵtext */._uU(113, "--tui-font-text");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(114, "table", 5);
    core/* ɵɵelementStart */.TgZ(115, "tr");
    core/* ɵɵelementStart */.TgZ(116, "th", 6);
    core/* ɵɵtext */._uU(117, "text");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(118, "th", 6);
    core/* ɵɵtext */._uU(119, "class");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(120, "th", 6);
    core/* ɵɵtext */._uU(121, "var");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(122, "th", 6);
    core/* ɵɵtext */._uU(123, "font-weight");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(124, "th", 6);
    core/* ɵɵtext */._uU(125, "font-size");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(126, "th", 6);
    core/* ɵɵtext */._uU(127, "line-height");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(128, "tr");
    core/* ɵɵelementStart */.TgZ(129, "td", 32);
    core/* ɵɵi18n */.SDv(130, 33);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(131, "td", 8);
    core/* ɵɵelementStart */.TgZ(132, "tui-doc-copy", 34);
    core/* ɵɵtext */._uU(133, "tui-text_body-xl");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(134, "td", 8);
    core/* ɵɵelementStart */.TgZ(135, "tui-doc-copy", 35);
    core/* ɵɵtext */._uU(136, "--tui-font-text-xl");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(137, "td", 8);
    core/* ɵɵtext */._uU(138, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(139, "td", 8);
    core/* ɵɵtext */._uU(140, "19px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(141, "td", 8);
    core/* ɵɵtext */._uU(142, "28px (1.47)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(143, "tr");
    core/* ɵɵelementStart */.TgZ(144, "td", 36);
    core/* ɵɵi18n */.SDv(145, 37);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(146, "td", 8);
    core/* ɵɵelementStart */.TgZ(147, "tui-doc-copy", 38);
    core/* ɵɵtext */._uU(148, "tui-text_body-l");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(149, "td", 8);
    core/* ɵɵelementStart */.TgZ(150, "tui-doc-copy", 39);
    core/* ɵɵtext */._uU(151, "--tui-font-text-l");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(152, "td", 8);
    core/* ɵɵtext */._uU(153, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(154, "td", 8);
    core/* ɵɵtext */._uU(155, "17px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(156, "td", 8);
    core/* ɵɵtext */._uU(157, "24px (1.41)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(158, "tr");
    core/* ɵɵelementStart */.TgZ(159, "td", 40);
    core/* ɵɵi18n */.SDv(160, 41);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(161, "td", 8);
    core/* ɵɵelementStart */.TgZ(162, "tui-doc-copy", 42);
    core/* ɵɵtext */._uU(163, "tui-text_body-l-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(164, "td", 8);
    core/* ɵɵelementStart */.TgZ(165, "tui-doc-copy", 39);
    core/* ɵɵtext */._uU(166, "--tui-font-text-l");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(167, "td", 8);
    core/* ɵɵtext */._uU(168, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(169, "td", 8);
    core/* ɵɵtext */._uU(170, "17px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(171, "td", 8);
    core/* ɵɵtext */._uU(172, "20px (1.18)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(173, "tr");
    core/* ɵɵelementStart */.TgZ(174, "td", 43);
    core/* ɵɵi18n */.SDv(175, 44);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(176, "td", 8);
    core/* ɵɵelementStart */.TgZ(177, "tui-doc-copy", 45);
    core/* ɵɵtext */._uU(178, "tui-text_body-m");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(179, "td", 8);
    core/* ɵɵelementStart */.TgZ(180, "tui-doc-copy", 46);
    core/* ɵɵtext */._uU(181, "--tui-font-text-m");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(182, "td", 8);
    core/* ɵɵtext */._uU(183, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(184, "td", 8);
    core/* ɵɵtext */._uU(185, "15px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(186, "td", 8);
    core/* ɵɵtext */._uU(187, "24px (1.6)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(188, "tr");
    core/* ɵɵelementStart */.TgZ(189, "td", 47);
    core/* ɵɵi18n */.SDv(190, 48);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(191, "td", 8);
    core/* ɵɵelementStart */.TgZ(192, "tui-doc-copy", 49);
    core/* ɵɵtext */._uU(193, "tui-text_body-m-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(194, "td", 8);
    core/* ɵɵelementStart */.TgZ(195, "tui-doc-copy", 46);
    core/* ɵɵtext */._uU(196, "--tui-font-text-m");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(197, "td", 8);
    core/* ɵɵtext */._uU(198, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(199, "td", 8);
    core/* ɵɵtext */._uU(200, "15px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(201, "td", 8);
    core/* ɵɵtext */._uU(202, "20px (1.33)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(203, "tr");
    core/* ɵɵelementStart */.TgZ(204, "td", 50);
    core/* ɵɵi18n */.SDv(205, 51);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(206, "td", 8);
    core/* ɵɵelementStart */.TgZ(207, "tui-doc-copy", 52);
    core/* ɵɵtext */._uU(208, "tui-text_body-s");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(209, "td", 8);
    core/* ɵɵelementStart */.TgZ(210, "tui-doc-copy", 53);
    core/* ɵɵtext */._uU(211, "--tui-font-text-s");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(212, "td", 8);
    core/* ɵɵtext */._uU(213, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(214, "td", 8);
    core/* ɵɵtext */._uU(215, "13px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(216, "td", 8);
    core/* ɵɵtext */._uU(217, "20px (1.54)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(218, "tr");
    core/* ɵɵelementStart */.TgZ(219, "td", 54);
    core/* ɵɵi18n */.SDv(220, 55);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(221, "td", 8);
    core/* ɵɵelementStart */.TgZ(222, "tui-doc-copy", 56);
    core/* ɵɵtext */._uU(223, "tui-text-body-s-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(224, "td", 8);
    core/* ɵɵelementStart */.TgZ(225, "tui-doc-copy", 53);
    core/* ɵɵtext */._uU(226, "--tui-font-text-s");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(227, "td", 8);
    core/* ɵɵtext */._uU(228, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(229, "td", 8);
    core/* ɵɵtext */._uU(230, "13px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(231, "td", 8);
    core/* ɵɵtext */._uU(232, "16px (1.23)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(233, "tr");
    core/* ɵɵelementStart */.TgZ(234, "td", 57);
    core/* ɵɵi18n */.SDv(235, 58);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(236, "td", 8);
    core/* ɵɵelementStart */.TgZ(237, "tui-doc-copy", 59);
    core/* ɵɵtext */._uU(238, "tui-text_body-xs");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(239, "td", 8);
    core/* ɵɵelementStart */.TgZ(240, "tui-doc-copy", 60);
    core/* ɵɵtext */._uU(241, "--tui-font-text-xs");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(242, "td", 8);
    core/* ɵɵtext */._uU(243, "normal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(244, "td", 8);
    core/* ɵɵtext */._uU(245, "11px");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(246, "td", 8);
    core/* ɵɵtext */._uU(247, "16px (1.45)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }
}

let TypographyComponent = /*#__PURE__*/(() => {
  class TypographyComponent {}

  TypographyComponent.ɵfac = function TypographyComponent_Factory(t) {
    return new (t || TypographyComponent)();
  };

  TypographyComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TypographyComponent,
    selectors: [["typography"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1067752137700545899$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS_1 = goog.getMsg("Typography");
        i18n_0 = MSG_EXTERNAL_1067752137700545899$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟2b5d33c0f4e9291e1be9f8fecaf2616badf676ee␟1067752137700545899:Typography`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8252764330661730655$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__3 = goog.getMsg(" Heading ");
        i18n_2 = MSG_EXTERNAL_8252764330661730655$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟819b4a5b34b1ec9e2ade3f742f5a63d0ac039ffa␟8252764330661730655: Heading `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__5 = goog.getMsg(" Taiga UI is a modern UI kit for Angular ");
        i18n_4 = MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟41b7a07ca898ecddeac828ac90dadb7acf684e39␟106859050455339465: Taiga UI is a modern UI kit for Angular `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__7 = goog.getMsg(" Taiga UI is a modern UI kit for Angular ");
        i18n_6 = MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟41b7a07ca898ecddeac828ac90dadb7acf684e39␟106859050455339465: Taiga UI is a modern UI kit for Angular `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__9 = goog.getMsg(" Taiga UI is a modern UI kit for Angular ");
        i18n_8 = MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟41b7a07ca898ecddeac828ac90dadb7acf684e39␟106859050455339465: Taiga UI is a modern UI kit for Angular `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__11 = goog.getMsg(" Taiga UI is a modern UI kit for Angular ");
        i18n_10 = MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟41b7a07ca898ecddeac828ac90dadb7acf684e39␟106859050455339465: Taiga UI is a modern UI kit for Angular `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__13 = goog.getMsg(" Taiga UI is a modern UI kit for Angular ");
        i18n_12 = MSG_EXTERNAL_106859050455339465$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟41b7a07ca898ecddeac828ac90dadb7acf684e39␟106859050455339465: Taiga UI is a modern UI kit for Angular `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1420958841152028959$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__15 = goog.getMsg(" Typesetting ");
        i18n_14 = MSG_EXTERNAL_1420958841152028959$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟227d20033e8562cbcab96191d434c33159940e0e␟1420958841152028959: Typesetting `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__17 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_16 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__19 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_18 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__21 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_20 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__23 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_22 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__25 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_24 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__27 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_26 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__29 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_28 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__31 = goog.getMsg(" Taiga UI reveals all the potential of Angular ");
        i18n_30 = MSG_EXTERNAL_5244067570056082367$$PROJECTS_DEMO_SRC_MODULES_MARKUP_TYPOGRAPHY_TYPOGRAPHY_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟c74b6b651c49d61ebb33f70ef0670a256069c83b␟5244067570056082367: Taiga UI reveals all the potential of Angular `;
      }

      return [["header", i18n_0], ["pageTab", ""], [1, "tui-text_h3", "tui-space_bottom-1"], i18n_2, [1, "tui-text_body-l", "tui-space_top-0", "tui-space_bottom-4"], [1, "table"], [1, "th"], [1, "td", "tui-text_h1"], [1, "td"], ["cdkCopyToClipboard", "tui-text_h1"], ["cdkCopyToClipboard", "var(--tui-font-heading-1)"], [1, "td", "tui-text_h2"], i18n_4, ["cdkCopyToClipboard", "tui-text_h2"], ["cdkCopyToClipboard", "var(--tui-font-heading-2)"], [1, "td", "tui-text_h3"], i18n_6, ["cdkCopyToClipboard", "tui-text_h3"], ["cdkCopyToClipboard", "var(--tui-font-heading-3)"], [1, "td", "tui-text_h4"], i18n_8, ["cdkCopyToClipboard", "tui-text_h4"], ["cdkCopyToClipboard", "var(--tui-font-heading-4)"], [1, "td", "tui-text_h5"], i18n_10, ["cdkCopyToClipboard", "tui-text_h5"], ["cdkCopyToClipboard", "var(--tui-font-heading-5)"], [1, "td", "tui-text_h6"], i18n_12, ["cdkCopyToClipboard", "tui-text_h6"], ["cdkCopyToClipboard", "var(--tui-font-heading-6)"], i18n_14, [1, "td", "tui-text_body-xl"], i18n_16, ["cdkCopyToClipboard", "tui-text_body-xl"], ["cdkCopyToClipboard", "var(--tui-font-text-xl)"], [1, "td", "tui-text_body-l"], i18n_18, ["cdkCopyToClipboard", "tui-text_body-l"], ["cdkCopyToClipboard", "var(--tui-font-text-l)"], [1, "td", "tui-text_body-l-2"], i18n_20, ["cdkCopyToClipboard", "tui-text_body-l-2"], [1, "td", "tui-text_body-m"], i18n_22, ["cdkCopyToClipboard", "tui-text_body-m"], ["cdkCopyToClipboard", "var(--tui-font-text-m)"], [1, "td", "tui-text_body-m-2"], i18n_24, ["cdkCopyToClipboard", "tui-text_body-m-2"], [1, "td", "tui-text_body-s"], i18n_26, ["cdkCopyToClipboard", "tui-text_body-s"], ["cdkCopyToClipboard", "var(--tui-font-text-s)"], [1, "td", "tui-text_body-s-2"], i18n_28, ["cdkCopyToClipboard", "tui-text-body-s-2"], [1, "td", "tui-text_body-xs"], i18n_30, ["cdkCopyToClipboard", "tui-text_body-xs"], ["cdkCopyToClipboard", "var(--tui-font-text-xs)"]];
    },
    template: function TypographyComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, TypographyComponent_ng_template_1_Template, 248, 0, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.table[_ngcontent-%COMP%]{width:100%}.th[_ngcontent-%COMP%]{font-size:.6875rem;line-height:1rem;text-transform:uppercase;letter-spacing:.075em;border-bottom:1px solid var(--tui-base-03);padding:.625rem 1.875rem;white-space:nowrap}.th[_ngcontent-%COMP%]:first-child{min-width:12.5rem;padding-left:0;text-align:left}.td[_ngcontent-%COMP%]{padding:1.875rem;vertical-align:baseline;white-space:nowrap}.td[_ngcontent-%COMP%]:first-child{padding-left:0;white-space:normal}"],
    changeDetection: 0
  });
  return TypographyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/typography/typography.module.ts






let TypographyModule = /*#__PURE__*/(() => {
  class TypographyModule {}

  TypographyModule.ɵfac = function TypographyModule_Factory(t) {
    return new (t || TypographyModule)();
  };

  TypographyModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TypographyModule
  });
  TypographyModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(TypographyComponent))]]
  });
  return TypographyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TypographyModule, {
    declarations: [TypographyComponent],
    imports: [clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [TypographyComponent]
  });
})();

/***/ })

}]);