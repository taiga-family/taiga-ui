"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[61306],{

/***/ 61306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCarouselModule": () => (/* binding */ ExampleTuiCarouselModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/carousel/carousel.component.ts
var carousel_component = __webpack_require__(56272);
// EXTERNAL MODULE: ./projects/kit/components/carousel/carousel.directive.ts
var carousel_directive = __webpack_require__(22043);
// EXTERNAL MODULE: ./projects/kit/components/pagination/pagination.component.ts
var pagination_component = __webpack_require__(31639);
// EXTERNAL MODULE: ./projects/cdk/directives/item/item.directive.ts
var item_directive = __webpack_require__(82707);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/examples/1/index.ts









function TuiCarouselExample1_ng_container_1_tui_island_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 4);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 5);
    fesm2015_core/* ɵɵtext */._uU(4, " Wiki ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵpropertyInterpolate1 */.MGl("href", "https://en.wikipedia.org/wiki/", item_r1, "", fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function TuiCarouselExample1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample1_ng_container_1_tui_island_1_Template, 5, 2, "tui-island", 3);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiCarouselExample1 = /*#__PURE__*/(() => {
  class TuiCarouselExample1 {
    constructor() {
      this.index = 2;
      this.items = [`John Cleese`, `Eric Idle`, `Michael Palin`, `Graham Chapman`, `Terry Gilliam`, `Terry Jones`];
    }

  }

  TuiCarouselExample1.ɵfac = function TuiCarouselExample1_Factory(t) {
    return new (t || TuiCarouselExample1)();
  };

  TuiCarouselExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCarouselExample1,
    selectors: [["tui-carousel-example-1"]],
    decls: 3,
    vars: 5,
    consts: [[3, "duration", "index", "indexChange"], [4, "ngFor", "ngForOf"], ["size", "s", 1, "pagination", 3, "length", "index", "indexChange"], [4, "tuiItem"], [1, "tui-island__title"], ["tuiButton", "", 3, "href"]],
    template: function TuiCarouselExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-carousel", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample1_Template_tui_carousel_indexChange_0_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample1_ng_container_1_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-pagination", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample1_Template_tui_pagination_indexChange_2_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("duration", 4000)("index", ctx.index);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("length", ctx.items.length)("index", ctx.index);
      }
    },
    directives: [carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, common/* NgForOf */.sg, pagination_component/* TuiPaginationComponent */.r, item_directive/* TuiItemDirective */.w, island_component/* TuiIslandComponent */.h, button_component/* TuiButtonComponent */.v],
    styles: ["[_nghost-%COMP%]{display:block}.pagination[_ngcontent-%COMP%]{margin:1rem auto 0}"],
    changeDetection: 0
  });
  return TuiCarouselExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/examples/2/index.ts






function TuiCarouselExample2_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "img", 3);
  }

  if (rf & 2) {
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
    const i_r2 = ctx_r4.index;
    const item_r1 = ctx_r4.$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵclassProp */.ekj("item_active", i_r2 === ctx_r3.index + 1);
    fesm2015_core/* ɵɵpropertyInterpolate1 */.MGl("src", "assets/images/", item_r1, "", fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function TuiCarouselExample2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample2_ng_container_1_img_1_Template, 1, 3, "img", 2);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiCarouselExample2 = /*#__PURE__*/(() => {
  class TuiCarouselExample2 {
    constructor() {
      this.index = 0;
      this.items = [`angular.svg`, `avatar.jpg`, `angular.svg`, `avatar.jpg`, `angular.svg`, `avatar.jpg`];
    }

  }

  TuiCarouselExample2.ɵfac = function TuiCarouselExample2_Factory(t) {
    return new (t || TuiCarouselExample2)();
  };

  TuiCarouselExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCarouselExample2,
    selectors: [["tui-carousel-example-2"]],
    decls: 2,
    vars: 4,
    consts: [[3, "draggable", "itemsCount", "index", "indexChange"], [4, "ngFor", "ngForOf"], ["alt", "", "draggable", "false", "class", "item", 3, "src", "item_active", 4, "tuiItem"], ["alt", "", "draggable", "false", 1, "item", 3, "src"]],
    template: function TuiCarouselExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-carousel", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample2_Template_tui_carousel_indexChange_0_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample2_ng_container_1_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("draggable", true)("itemsCount", 3)("index", ctx.index);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
      }
    },
    directives: [carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, common/* NgForOf */.sg, item_directive/* TuiItemDirective */.w],
    styles: [".item[_ngcontent-%COMP%]{transition-property:box-shadow,transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;max-height:100px;margin:2rem auto;border-radius:100%}.item_active[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.16);transform:scale(1.2)}"],
    changeDetection: 0
  });
  return TuiCarouselExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/carousel/carousel-buttons.directive.ts
var carousel_buttons_directive = __webpack_require__(22096);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
// EXTERNAL MODULE: ./projects/kit/components/marker-icon/marker-icon.component.ts
var marker_icon_component = __webpack_require__(86187);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/examples/3/index.ts











function TuiCarouselExample3_tui_island_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 7);
    fesm2015_core/* ɵɵtext */._uU(2, "Monty Python and the Holy Grail");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, " King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(7, " Buy $ ");
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-money", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 10);
    fesm2015_core/* ɵɵtext */._uU(10, " Rent $ ");
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-money", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 12.99);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 4.99);
  }
}

function TuiCarouselExample3_tui_island_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-loader");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCarouselExample3_tui_island_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 7);
    fesm2015_core/* ɵɵtext */._uU(2, "Failed to load");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-marker-icon", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiCarouselExample3 = /*#__PURE__*/(() => {
  class TuiCarouselExample3 {}

  TuiCarouselExample3.ɵfac = function TuiCarouselExample3_Factory(t) {
    return new (t || TuiCarouselExample3)();
  };

  TuiCarouselExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCarouselExample3,
    selectors: [["tui-carousel-example-3"]],
    decls: 8,
    vars: 0,
    consts: [["tuiCarouselButtons", "", 1, "wrapper"], ["tuiIconButton", "", "icon", "tuiIconChevronLeftLarge", "title", "Previous", 3, "click"], [1, "carousel"], ["carousel", ""], [4, "tuiItem"], ["class", "tui-island_text-align_center", 4, "tuiItem"], ["tuiIconButton", "", "icon", "tuiIconChevronRightLarge", "title", "Next", 3, "click"], [1, "tui-island__title"], ["tuiButton", "", "appearance", "primary"], [3, "value"], ["tuiButton", "", 1, "tui-space_left-2"], [1, "tui-island_text-align_center"], ["mode", "error", "src", "tuiIconRemoveLarge"]],
    template: function TuiCarouselExample3_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample3_Template_button_click_1_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r4);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

          return _r0.prev();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-carousel", 2, 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCarouselExample3_tui_island_4_Template, 12, 2, "tui-island", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiCarouselExample3_tui_island_5_Template, 2, 0, "tui-island", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiCarouselExample3_tui_island_6_Template, 5, 0, "tui-island", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample3_Template_button_click_7_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r4);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

          return _r0.next();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [carousel_buttons_directive/* TuiCarouselButtonsDirective */.e, button_component/* TuiButtonComponent */.v, carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, item_directive/* TuiItemDirective */.w, island_component/* TuiIslandComponent */.h, money_component/* TuiMoneyComponent */.o, loader_component/* TuiLoaderComponent */.k, marker_icon_component/* TuiMarkerIconComponent */.B],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.carousel[_ngcontent-%COMP%]{width:25rem;flex-shrink:0}"],
    changeDetection: 0
  });
  return TuiCarouselExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/dialog/dialog.directive.ts
var dialog_directive = __webpack_require__(56423);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/examples/4/index.ts












function TuiCarouselExample4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "div", 3);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵstyleProp */.Udp("background-image", ctx_r1.background);
  }
}

function TuiCarouselExample4_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
    fesm2015_core/* ɵɵtext */._uU(2, "Carousel is awesome");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, "It can show arbitrary content and it's very easy to control");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCarouselExample4_ng_template_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
    fesm2015_core/* ɵɵtext */._uU(2, "Pagination");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, " You can use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 12);
    fesm2015_core/* ɵɵtext */._uU(6, " Pagination ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " component with size 's' together with it ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCarouselExample4_ng_template_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
    fesm2015_core/* ɵɵtext */._uU(2, "Buttons");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "tuiCarouselButtons");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " directive to setup navigation buttons ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiCarouselExample4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("touchstart.passive.stop", function TuiCarouselExample4_ng_template_4_Template_div_touchstart_passive_stop_0_listener() {
      return 0;
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample4_ng_template_4_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.navigate(-1);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-carousel", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample4_ng_template_4_Template_tui_carousel_indexChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.index = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiCarouselExample4_ng_template_4_div_3_Template, 5, 0, "div", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCarouselExample4_ng_template_4_div_4_Template, 8, 0, "div", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiCarouselExample4_ng_template_4_div_5_Template, 8, 0, "div", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample4_ng_template_4_Template_button_click_6_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.navigate(1);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-pagination", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample4_ng_template_4_Template_tui_pagination_indexChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.index = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "div", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample4_ng_template_4_Template_button_click_9_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.open = false;
    });
    fesm2015_core/* ɵɵtext */._uU(10, " Got it! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("index", ctx_r2.index);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("length", 3)("index", ctx_r2.index);
  }
}

const _c0 = function (a1) {
  return {
    size: "s",
    header: a1
  };
};

let TuiCarouselExample4 = /*#__PURE__*/(() => {
  class TuiCarouselExample4 {
    constructor() {
      this.open = false;
      this.index = 0;
    }

    get background() {
      switch (this.index) {
        case 0:
          return `url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)`;

        case 1:
          return `url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)`;

        default:
          return `url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)`;
      }
    }

    onClick() {
      this.index = 0;
      this.open = true;
    }

    navigate(delta) {
      this.index = (this.index + delta) % 3;
    }

  }

  TuiCarouselExample4.ɵfac = function TuiCarouselExample4_Factory(t) {
    return new (t || TuiCarouselExample4)();
  };

  TuiCarouselExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCarouselExample4,
    selectors: [["tui-carousel-example-4"]],
    decls: 5,
    vars: 4,
    consts: [["tuiButton", "", "size", "m", 3, "click"], ["header", ""], [3, "tuiDialogOptions", "tuiDialog", "tuiDialogChange"], [1, "header"], ["tuiCarouselButtons", "", 1, "wrapper", 3, "touchstart.passive.stop"], ["tuiIconButton", "", "tuiMode", "onDark", "icon", "tuiIconChevronLeftLarge", 1, "tui-space_right-4", 3, "click"], [3, "index", "indexChange"], [4, "tuiItem"], ["tuiIconButton", "", "tuiMode", "onDark", "icon", "tuiIconChevronRightLarge", 1, "tui-space_left-4", 3, "click"], ["size", "s", 1, "tui-space_top-4", 3, "length", "index", "indexChange"], [1, "tui-space_top-4"], ["tuiButton", "", "appearance", "primary", 3, "click"], ["tuiLink", "", "routerLink", "/components/pagination"]],
    template: function TuiCarouselExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiCarouselExample4_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show dialog with carousel\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiCarouselExample4_ng_template_2_Template, 1, 2, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCarouselExample4_ng_template_4_Template, 11, 3, "ng-template", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiDialogChange", function TuiCarouselExample4_Template_ng_template_tuiDialogChange_4_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDialogOptions", fesm2015_core/* ɵɵpureFunction1 */.VKq(2, _c0, _r0))("tuiDialog", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, dialog_directive/* TuiDialogDirective */.i, carousel_buttons_directive/* TuiCarouselButtonsDirective */.e, mode_directive/* TuiModeDirective */.w, carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, item_directive/* TuiItemDirective */.w, pagination_component/* TuiPaginationComponent */.r, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 -5rem}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:0}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:10rem;flex:1;background:var(--tui-base-01) center;background-size:cover}"],
    changeDetection: 0
  });
  return TuiCarouselExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/examples/5/index.ts








function TuiCarouselExample5_ng_container_1_tui_island_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 5);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 6);
    fesm2015_core/* ɵɵtext */._uU(4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r1.title);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r1.content);
  }
}

function TuiCarouselExample5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample5_ng_container_1_tui_island_1_Template, 5, 2, "tui-island", 3);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiCarouselExample5 = /*#__PURE__*/(() => {
  class TuiCarouselExample5 {
    constructor() {
      this.index = 0;
      this.itemsCount = 3;
      this.items = [{
        title: `First`,
        content: `First content`
      }, {
        title: `Title #2`,
        content: `Much more content here so the height is bigger`
      }, {
        title: `Title III`,
        content: `Small item again`
      }, {
        title: `Title four`,
        content: `Relatively ling content here`
      }, {
        title: `Fifth item`,
        content: `Tiny text`
      }, {
        title: `6`,
        content: `That one's short too`
      }, {
        title: `Lucky 7`,
        content: `This takes about two lines or so`
      }, {
        title: `Eighth card`,
        content: `Almost the last one`
      }, {
        title: `X`,
        content: `This is the longest item there is in this list`
      }];
    }

    get rounded() {
      return Math.floor(this.index / this.itemsCount);
    }

    onIndex(index) {
      this.index = index * this.itemsCount;
    }

  }

  TuiCarouselExample5.ɵfac = function TuiCarouselExample5_Factory(t) {
    return new (t || TuiCarouselExample5)();
  };

  TuiCarouselExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCarouselExample5,
    selectors: [["tui-carousel-example-5"]],
    decls: 3,
    vars: 5,
    consts: [[3, "itemsCount", "index", "indexChange"], [4, "ngFor", "ngForOf"], ["size", "s", 1, "tui-space_top-4", 3, "length", "index", "indexChange"], ["class", "item", 4, "tuiItem"], [1, "item"], [1, "tui-island__title"], [1, "tui-island__content"]],
    template: function TuiCarouselExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-carousel", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample5_Template_tui_carousel_indexChange_0_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCarouselExample5_ng_container_1_Template, 2, 0, "ng-container", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-pagination", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiCarouselExample5_Template_tui_pagination_indexChange_2_listener($event) {
          return ctx.onIndex($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("itemsCount", 3)("index", ctx.index);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("length", ctx.items.length / ctx.itemsCount)("index", ctx.rounded);
      }
    },
    directives: [carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, common/* NgForOf */.sg, pagination_component/* TuiPaginationComponent */.r, item_directive/* TuiItemDirective */.w, island_component/* TuiIslandComponent */.h],
    styles: [".item[_ngcontent-%COMP%]{margin-bottom:auto}"],
    changeDetection: 0
  });
  return TuiCarouselExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/cdk/directives/repeat-times/repeat-times.directive.ts
var repeat_times_directive = __webpack_require__(36097);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/carousel.component.ts





















function ExampleTuiCarouselComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-notification", 2);
    fesm2015_core/* ɵɵtext */._uU(1, " Requires ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(3, " IntersectionObserver ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " support or a ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 4);
    fesm2015_core/* ɵɵtext */._uU(6, " polyfill ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously. ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-carousel-example-1", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_1_touchstart_passive_stop_9_listener() {
      return 0;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-carousel-example-2", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_2_touchstart_passive_stop_11_listener() {
      return 0;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-carousel-example-3", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_1_Template_tui_carousel_example_3_touchstart_passive_stop_13_listener() {
      return 0;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-carousel-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-carousel-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 18);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 19);
    fesm2015_core/* ɵɵtext */._uU(3, " I'm focusable ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r11 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r11, " ");
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCarouselComponent_ng_template_2_ng_container_2_div_1_Template, 4, 1, "div", 17);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Whether or not slider can be dragged by clicking and holding ");
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation) ");
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Number of slides shown at the same time ");
  }
}

function ExampleTuiCarouselComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Current index ");
  }
}

function ExampleTuiCarouselComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-carousel", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function ExampleTuiCarouselComponent_ng_template_2_Template_tui_carousel_indexChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.index = $event;
    })("touchstart.passive.stop", function ExampleTuiCarouselComponent_ng_template_2_Template_tui_carousel_touchstart_passive_stop_1_listener() {
      return 0;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCarouselComponent_ng_template_2_ng_container_2_Template, 2, 0, "ng-container", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCarouselComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.draggable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiCarouselComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.duration = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiCarouselComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.itemsCount = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiCarouselComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCarouselComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.index = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("draggable", ctx_r1.draggable)("duration", ctx_r1.duration)("itemsCount", ctx_r1.itemsCount)("index", ctx_r1.index);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiRepeatTimesOf", 9);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.draggable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.durationVariants)("documentationPropertyValue", ctx_r1.duration);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.itemsCount);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.index);
  }
}

function ExampleTuiCarouselComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 21);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiCarouselComponent = /*#__PURE__*/(() => {
  class ExampleTuiCarouselComponent {
    constructor() {
      this.durationVariants = [0, 3000, 10000];
      this.draggable = false;
      this.duration = this.durationVariants[0];
      this.index = 0;
      this.itemsCount = 1;
      this.exampleModule = __webpack_require__.e(/* import() */ 16665).then(__webpack_require__.t.bind(__webpack_require__, 16665, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 94880).then(__webpack_require__.t.bind(__webpack_require__, 94880, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 70610).then(__webpack_require__.t.bind(__webpack_require__, 70610, 17)),
        HTML: __webpack_require__.e(/* import() */ 90947).then(__webpack_require__.t.bind(__webpack_require__, 90947, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 57929).then(__webpack_require__.t.bind(__webpack_require__, 57929, 17)),
        HTML: __webpack_require__.e(/* import() */ 79783).then(__webpack_require__.t.bind(__webpack_require__, 79783, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 66693).then(__webpack_require__.t.bind(__webpack_require__, 66693, 17)),
        HTML: __webpack_require__.e(/* import() */ 36838).then(__webpack_require__.t.bind(__webpack_require__, 36838, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 13453).then(__webpack_require__.t.bind(__webpack_require__, 13453, 17)),
        HTML: __webpack_require__.e(/* import() */ 7705).then(__webpack_require__.t.bind(__webpack_require__, 7705, 17)),
        LESS: __webpack_require__.e(/* import() */ 4159).then(__webpack_require__.t.bind(__webpack_require__, 4159, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 36620).then(__webpack_require__.t.bind(__webpack_require__, 36620, 17)),
        HTML: __webpack_require__.e(/* import() */ 98324).then(__webpack_require__.t.bind(__webpack_require__, 98324, 17)),
        LESS: __webpack_require__.e(/* import() */ 62965).then(__webpack_require__.t.bind(__webpack_require__, 62965, 17))
      };
    }

  }

  ExampleTuiCarouselComponent.ɵfac = function ExampleTuiCarouselComponent_Factory(t) {
    return new (t || ExampleTuiCarouselComponent)();
  };

  ExampleTuiCarouselComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCarouselComponent,
    selectors: [["example-carousel"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2626084410037085748$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__1 = goog.getMsg(" Import {$startTagCode}TuiCarouselModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2626084410037085748$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟83003332a17dbd00d33d00f27a668a2597948456␟2626084410037085748: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCarouselModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__3 = goog.getMsg("Add to the template:");
        i18n_2 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CAROUSEL_CAROUSEL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Carousel", "package", "KIT", "type", "components"], ["pageTab", ""], ["status", "warning", 1, "tui-space_bottom-4"], ["tuiLink", "", "href", "https://caniuse.com/intersectionobserver"], ["tuiLink", "", "href", "https://github.com/w3c/IntersectionObserver/tree/main/polyfill"], ["id", "single", "heading", "Single", 3, "content"], [3, "touchstart.passive.stop"], ["id", "multi", "heading", "Multiple", 3, "content"], ["id", "custom", "heading", "Custom", 3, "content"], ["id", "dialog", "heading", "Carousel inside dialog", 3, "content"], ["id", "alignment", "heading", "Vertical alignment", 3, "content"], [1, "carousel", 3, "draggable", "duration", "itemsCount", "index", "indexChange", "touchstart.passive.stop"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["documentationPropertyName", "draggable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "duration", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "itemsCount", "documentationPropertyType", "number", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "index", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["class", "plate", 4, "tuiItem"], [1, "plate"], ["tuiButton", "", "type", "button", "size", "s", 1, "button"], [1, "b-demo-steps"], i18n_0, ["filename", "myComponent.module.ts", 3, "code"], i18n_2, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCarouselComponent_ng_template_1_Template, 18, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCarouselComponent_ng_template_2_Template, 8, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCarouselComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, example_component/* TuiDocExampleComponent */.f, TuiCarouselExample1, TuiCarouselExample2, TuiCarouselExample3, TuiCarouselExample4, TuiCarouselExample5, demo_component/* TuiDocDemoComponent */.F, carousel_component/* TuiCarouselComponent */.V, carousel_directive/* TuiCarouselDirective */.E, repeat_times_directive/* TuiRepeatTimesDirective */.X, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, item_directive/* TuiItemDirective */.w, button_component/* TuiButtonComponent */.v, code_component/* TuiDocCodeComponent */.c],
    styles: [".carousel[_ngcontent-%COMP%]{margin:0 2.5rem}.plate[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);display:flex;flex-direction:column;align-items:flex-start;width:100%;height:7.5rem;padding:1.75rem;box-sizing:border-box;background:var(--tui-secondary)}.button[_ngcontent-%COMP%]{margin-top:.5rem}"],
    changeDetection: 0
  });
  return ExampleTuiCarouselComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/carousel/carousel.module.ts















let ExampleTuiCarouselModule = /*#__PURE__*/(() => {
  class ExampleTuiCarouselModule {}

  ExampleTuiCarouselModule.ɵfac = function ExampleTuiCarouselModule_Factory(t) {
    return new (t || ExampleTuiCarouselModule)();
  };

  ExampleTuiCarouselModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCarouselModule
  });
  ExampleTuiCarouselModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiCarouselModule, kit.TuiPaginationModule, core.TuiNotificationModule, core.TuiLinkModule, core.TuiButtonModule, kit.TuiIslandModule, addon_commerce.TuiMoneyModule, core.TuiLoaderModule, kit.TuiMarkerIconModule, core.TuiDialogModule, core.TuiModeModule, cdk.TuiRepeatTimesModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCarouselComponent))]]
  });
  return ExampleTuiCarouselModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCarouselModule, {
    declarations: [ExampleTuiCarouselComponent, TuiCarouselExample1, TuiCarouselExample2, TuiCarouselExample3, TuiCarouselExample4, TuiCarouselExample5],
    imports: [common/* CommonModule */.ez, kit.TuiCarouselModule, kit.TuiPaginationModule, core.TuiNotificationModule, core.TuiLinkModule, core.TuiButtonModule, kit.TuiIslandModule, addon_commerce.TuiMoneyModule, core.TuiLoaderModule, kit.TuiMarkerIconModule, core.TuiDialogModule, core.TuiModeModule, cdk.TuiRepeatTimesModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCarouselComponent]
  });
})();

/***/ })

}]);