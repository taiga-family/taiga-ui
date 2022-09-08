"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[23458],{

/***/ 23458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSheetModule": () => (/* binding */ ExampleTuiSheetModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js
var ng_web_apis_intersection_observer = __webpack_require__(11693);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 20 modules
var addon_commerce = __webpack_require__(55970);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 33 modules
var addon_mobile = __webpack_require__(36518);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/empty.js
var empty = __webpack_require__(59193);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/first.js
var first = __webpack_require__(28049);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subscriber.js
var Subscriber = __webpack_require__(77393);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/operators/retry.js

function retry(count = -1) {
  return source => source.lift(new RetryOperator(count, source));
}

class RetryOperator {
  constructor(count, source) {
    this.count = count;
    this.source = source;
  }

  call(subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  }

}

class RetrySubscriber extends Subscriber/* Subscriber */.L {
  constructor(destination, count, source) {
    super(destination);
    this.count = count;
    this.source = source;
  }

  error(err) {
    if (!this.isStopped) {
      const {
        source,
        count
      } = this;

      if (count === 0) {
        return super.error(err);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  }

} //# sourceMappingURL=retry.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/1/index.ts








let TuiSheetExample1 = /*#__PURE__*/(() => {
  class TuiSheetExample1 {
    constructor(destroy$, service) {
      this.stream$ = new Subject/* Subject */.xQ();
      this.stream$.pipe((0,switchMap/* switchMap */.w)((_, i) => i % 2 ? empty/* EMPTY */.E : service.open(`Simple sheet`, {
        overlay: true
      }).pipe((0,first/* first */.P)())), retry(), (0,takeUntil/* takeUntil */.R)(destroy$)).subscribe();
    }

  }

  TuiSheetExample1.ɵfac = function TuiSheetExample1_Factory(t) {
    return new (t || TuiSheetExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk/* TuiDestroyService */.a31), fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_mobile/* TuiSheetService */.KQ));
  };

  TuiSheetExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample1,
    selectors: [["tui-sheet-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk/* TuiDestroyService */.a31])],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", 3, "click"]],
    template: function TuiSheetExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample1_Template_button_click_0_listener() {
          return ctx.stream$.next();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSheetExample1;
})();
// EXTERNAL MODULE: ./projects/addon-mobile/components/sheet/sheet.directive.ts
var sheet_directive = __webpack_require__(77888);
// EXTERNAL MODULE: ./projects/addon-mobile/components/sheet/components/sheet-heading/sheet-heading.component.ts
var sheet_heading_component = __webpack_require__(59113);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/2/index.ts





function TuiSheetExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 2);
    fesm2015_core/* ɵɵtext */._uU(1, "Alexander Inkin");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "a", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiSheetExample2 = /*#__PURE__*/(() => {
  class TuiSheetExample2 {
    constructor() {
      this.open = false;
      this.options = {
        overlay: true,
        image: `assets/images/avatar.jpg`
      };
    }

    toggle() {
      this.open = !this.open;
    }

  }

  TuiSheetExample2.ɵfac = function TuiSheetExample2_Factory(t) {
    return new (t || TuiSheetExample2)();
  };

  TuiSheetExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample2,
    selectors: [["tui-sheet-example-2"]],
    decls: 3,
    vars: 2,
    consts: [["tuiButton", "", 3, "click"], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], ["tuiSheetHeading", ""], [1, "tui-space_top-4"], ["tuiIconButton", "", "size", "m", "appearance", "secondary", "icon", "tuiIconMailLarge", "title", "Email", "href", "mailto:alexander@inkin.ru", 1, "tui-space_right-2"], ["tuiIconButton", "", "size", "m", "appearance", "secondary", "icon", "tuiIconCallTransferLarge", "title", "Telegram", "href", "https://t.me/waterplea", 1, "tui-space_right-2"], ["tuiIconButton", "", "size", "m", "appearance", "secondary", "icon", "tuiIconMusicLarge", "title", "Music", "href", "https://waterplea.bandcamp.com/"]],
    template: function TuiSheetExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample2_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSheetExample2_ng_template_2_Template, 6, 0, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function TuiSheetExample2_Template_ng_template_tuiSheetChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx.options)("tuiSheet", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, sheet_heading_component/* TuiSheetHeadingComponent */.ui],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSheetExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/3/index.ts







function TuiSheetExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 3);
    fesm2015_core/* ɵɵtext */._uU(2, "And the Holy Grail");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 5);
    fesm2015_core/* ɵɵtext */._uU(5, " Buy ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-money", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 7);
    fesm2015_core/* ɵɵtext */._uU(8, " Rent ");
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-money", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(11, " Add to Watch List ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "h3", 9);
    fesm2015_core/* ɵɵtext */._uU(13, "Cast:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵtext */._uU(15, "John Cleese");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
    fesm2015_core/* ɵɵtext */._uU(17, "Eric Idle");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "p");
    fesm2015_core/* ɵɵtext */._uU(19, "Michael Palin");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
    fesm2015_core/* ɵɵtext */._uU(21, "Graham Chapman");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "p");
    fesm2015_core/* ɵɵtext */._uU(23, "Terry Gilliam");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "p");
    fesm2015_core/* ɵɵtext */._uU(25, "Terry Jones");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "p");
    fesm2015_core/* ɵɵtext */._uU(27, "Carol Cleveland");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(28, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "h3");
    fesm2015_core/* ɵɵtext */._uU(30, "Directed by:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "p");
    fesm2015_core/* ɵɵtext */._uU(32, "Terry Gilliam");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "p");
    fesm2015_core/* ɵɵtext */._uU(34, "Terry Jones");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(35, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(36, "h3");
    fesm2015_core/* ɵɵtext */._uU(37, "Produced by:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "p");
    fesm2015_core/* ɵɵtext */._uU(39, "Mark Forstater");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "p");
    fesm2015_core/* ɵɵtext */._uU(41, "Michael White");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(42, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "h3");
    fesm2015_core/* ɵɵtext */._uU(44, "Written by:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(45, "p");
    fesm2015_core/* ɵɵtext */._uU(46, "John Cleese");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(47, "p");
    fesm2015_core/* ɵɵtext */._uU(48, "Eric Idle");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(49, "p");
    fesm2015_core/* ɵɵtext */._uU(50, "Michael Palin");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "p");
    fesm2015_core/* ɵɵtext */._uU(52, "Graham Chapman");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(53, "p");
    fesm2015_core/* ɵɵtext */._uU(54, "Terry Gilliam");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(55, "p");
    fesm2015_core/* ɵɵtext */._uU(56, "Terry Jones");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(57, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(58, "h3");
    fesm2015_core/* ɵɵtext */._uU(59, "Budget:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(60, "p");
    fesm2015_core/* ɵɵelement */._UZ(61, "tui-money", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(62, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(63, "h3");
    fesm2015_core/* ɵɵtext */._uU(64, "Box office:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(65, "p");
    fesm2015_core/* ɵɵelement */._UZ(66, "tui-money", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(67, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(68, "h3");
    fesm2015_core/* ɵɵtext */._uU(69, "Release date");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(70, "p");
    fesm2015_core/* ɵɵtext */._uU(71, "April 3, 1975");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(72, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(73, "h3");
    fesm2015_core/* ɵɵtext */._uU(74, "Running time");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(75, "p");
    fesm2015_core/* ɵɵtext */._uU(76, "92 minutes");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(77, "footer", 11);
    fesm2015_core/* ɵɵtext */._uU(78, "\u00A9 EMI Films");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 12.99);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 4.99);
    fesm2015_core/* ɵɵadvance */.xp6(52);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 400000);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 5000000);
  }
}

let TuiSheetExample3 = /*#__PURE__*/(() => {
  class TuiSheetExample3 {
    constructor() {
      this.open = false;
      this.options = {
        stops: [`calc(5rem + 74vw)`, `calc(9rem + 74vw)`],
        image: `https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg`
      };
    }

    toggle() {
      this.open = !this.open;
    }

  }

  TuiSheetExample3.ɵfac = function TuiSheetExample3_Factory(t) {
    return new (t || TuiSheetExample3)();
  };

  TuiSheetExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample3,
    selectors: [["tui-sheet-example-3"]],
    decls: 3,
    vars: 2,
    consts: [["tuiButton", "", 3, "click"], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], ["tuiSheetHeading", ""], ["tuiLabel", "Monty Python"], [1, "buttons"], ["tuiButton", "", "size", "m", "appearance", "secondary", 1, "tui-space_right-2"], ["currency", "USD", 1, "tui-space_left-1", 3, "value"], ["tuiButton", "", "size", "m", "appearance", "secondary"], ["tuiButton", "", "size", "m", 1, "action"], [1, "cast"], ["currency", "USD", 3, "value"], [1, "footer"]],
    template: function TuiSheetExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample3_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSheetExample3_ng_template_2_Template, 79, 4, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function TuiSheetExample3_Template_ng_template_tuiSheetChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx.options)("tuiSheet", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, sheet_heading_component/* TuiSheetHeadingComponent */.ui, label_component/* TuiLabelComponent */.A, money_component/* TuiMoneyComponent */.o],
    styles: [".buttons[_ngcontent-%COMP%]{display:flex;margin:.3rem 0 1rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}.action[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(100% - 4rem);width:100%;display:block;z-index:1}.cast[_ngcontent-%COMP%]{margin-top:-2rem}.footer[_ngcontent-%COMP%]{margin:0 -1rem -1rem;padding:1rem 1rem 5rem;background:var(--tui-base-02)}"],
    changeDetection: 0
  });
  return TuiSheetExample3;
})();
// EXTERNAL MODULE: ./projects/addon-mobile/directives/elastic-sticky/elastic-sticky.directive.ts
var elastic_sticky_directive = __webpack_require__(98599);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/4/index.ts







function TuiSheetExample4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiElasticSticky", function TuiSheetExample4_ng_template_2_Template_h2_tuiElasticSticky_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r1.onElastic($event);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "img", 3);
    fesm2015_core/* ɵɵtext */._uU(2, " Web APIs for Angular ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, "Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular.");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "h3");
    fesm2015_core/* ɵɵtext */._uU(6, "Our libraries");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "a", 4);
    fesm2015_core/* ɵɵtext */._uU(9, " Common ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 5);
    fesm2015_core/* ɵɵtext */._uU(12, " Universal ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "a", 6);
    fesm2015_core/* ɵɵtext */._uU(15, " Audio ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "a", 7);
    fesm2015_core/* ɵɵtext */._uU(18, " Canvas ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "a", 8);
    fesm2015_core/* ɵɵtext */._uU(21, " Geolocation ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "a", 9);
    fesm2015_core/* ɵɵtext */._uU(24, " Intersection Observer ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "a", 10);
    fesm2015_core/* ɵɵtext */._uU(27, " MIDI ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "a", 11);
    fesm2015_core/* ɵɵtext */._uU(30, " Mutation Observer ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "a", 12);
    fesm2015_core/* ɵɵtext */._uU(33, " Payment Request ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "a", 13);
    fesm2015_core/* ɵɵtext */._uU(36, " Permissions ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "a", 14);
    fesm2015_core/* ɵɵtext */._uU(39, " Resize Observer ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "a", 15);
    fesm2015_core/* ɵɵtext */._uU(42, " Speech ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(44, "a", 16);
    fesm2015_core/* ɵɵtext */._uU(45, " Storage ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(46, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(47, "a", 17);
    fesm2015_core/* ɵɵtext */._uU(48, " Workers ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(49, "h3");
    fesm2015_core/* ɵɵtext */._uU(50, "Sponsor");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(52, "a", 18);
    fesm2015_core/* ɵɵtext */._uU(53, " Open Collective ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("opacity", ctx_r0.elastic * ctx_r0.elastic * ctx_r0.elastic)("transform", ctx_r0.transform);
  }
}

let TuiSheetExample4 = /*#__PURE__*/(() => {
  class TuiSheetExample4 {
    constructor() {
      this.open = false;
      this.elastic = 1;
      this.options = {
        stops: [`12rem`]
      };
    }

    get transform() {
      return `scale(${this.elastic * this.elastic})`;
    }

    toggle() {
      this.elastic = 1;
      this.open = !this.open;
    }

    onElastic(elastic) {
      this.elastic = elastic;
    }

  }

  TuiSheetExample4.ɵfac = function TuiSheetExample4_Factory(t) {
    return new (t || TuiSheetExample4)();
  };

  TuiSheetExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample4,
    selectors: [["tui-sheet-example-4"]],
    decls: 3,
    vars: 2,
    consts: [["tuiButton", "", 3, "click"], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], ["tuiSheetHeading", "", 1, "heading", 3, "tuiElasticSticky"], ["src", "assets/images/angular.svg", "alt", "Angular logo", 1, "image"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/common"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/universal"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/audio"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/canvas"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/geolocation"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/intersection-observer"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/midi"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/mutation-observer"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/payment-request"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/permissions"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/resize-observer"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/speech"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/storage"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/workers"], ["tuiLink", "", "href", "https://opencollective.com/ng-web-apis"]],
    template: function TuiSheetExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample4_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSheetExample4_ng_template_2_Template, 54, 4, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function TuiSheetExample4_Template_ng_template_tuiSheetChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx.options)("tuiSheet", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, sheet_heading_component/* TuiSheetHeadingComponent */.ui, elastic_sticky_directive/* TuiElasticStickyDirective */.X, link_component/* TuiLinkComponent */.V],
    styles: [".heading[_ngcontent-%COMP%]{height:12rem;top:-8rem;display:flex;align-items:flex-end;flex-direction:row-reverse;justify-content:space-between;background:var(--tui-support-03)}.image[_ngcontent-%COMP%]{position:absolute;height:8rem;width:100%;top:1rem;left:0;transform-origin:bottom;pointer-events:none}"],
    changeDetection: 0
  });
  return TuiSheetExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/5/index.ts






function TuiSheetExample5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 4);
    fesm2015_core/* ɵɵtext */._uU(2, " Planet Earth ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 5);
    fesm2015_core/* ɵɵelement */._UZ(4, "img", 6);
    fesm2015_core/* ɵɵpipe */.ALo(5, "async");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵtext */._uU(7, " Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const scroll$_r1 = ctx.scroll$;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵstyleProp */.Udp("transform", ctx_r0.getTransform(fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 2, scroll$_r1)));
  }
}

const FRAMES = 166;
let TuiSheetExample5 = /*#__PURE__*/(() => {
  class TuiSheetExample5 {
    constructor() {
      this.open = false;
      this.options = {
        overlay: true,
        stops: [`4.5rem`]
      };
    }

    toggle() {
      this.open = !this.open;
    }

    getTransform(y) {
      const frame = Math.round((y || 0) / 2);
      const looped = frame % FRAMES;
      const percent = 100 / FRAMES * looped;
      return `translate3d(0, -${percent}%, 0)`;
    }

  }

  TuiSheetExample5.ɵfac = function TuiSheetExample5_Factory(t) {
    return new (t || TuiSheetExample5)();
  };

  TuiSheetExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample5,
    selectors: [["tui-sheet-example-5"]],
    decls: 4,
    vars: 2,
    consts: [["tuiButton", "", 3, "click"], ["src", "assets/images/earth.jpg", "alt", "", 1, "preload"], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], [1, "wrapper"], ["tuiSheetHeading", "", 1, "heading"], [1, "earth"], ["src", "assets/images/earth.jpg", "alt", "", 1, "image"]],
    template: function TuiSheetExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample5_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "img", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSheetExample5_ng_template_3_Template, 8, 4, "ng-template", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function TuiSheetExample5_Template_ng_template_tuiSheetChange_3_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx.options)("tuiSheet", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, sheet_heading_component/* TuiSheetHeadingComponent */.ui],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".wrapper[_ngcontent-%COMP%]{color:#fff;background:#000;box-shadow:0 5rem 0 1rem #000}.heading[_ngcontent-%COMP%]{background:inherit}.preload[_ngcontent-%COMP%]{position:absolute;height:1px;width:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);-webkit-clip-path:inset(0);clip-path:inset(0)}.earth[_ngcontent-%COMP%]{position:relative;width:50%;height:50%;margin:1rem auto;overflow:hidden}.image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"],
    changeDetection: 0
  });
  return TuiSheetExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/examples/6/index.ts








function TuiSheetExample6_ng_template_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "img", 6, 7);
    fesm2015_core/* ɵɵlistener */.NdJ("waIntersectionObservee", function TuiSheetExample6_ng_template_2_img_4_Template_img_waIntersectionObservee_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);

      const _r3 = fesm2015_core/* ɵɵreference */.MAs(1);

      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r4.onIntersection($event, _r3);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("src", image_r2, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function TuiSheetExample6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "label", 4);
    fesm2015_core/* ɵɵtext */._uU(3, "And the Holy Grail");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiSheetExample6_ng_template_2_img_4_Template, 2, 1, "img", 5);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.images);
  }
}

let TuiSheetExample6 = /*#__PURE__*/(() => {
  class TuiSheetExample6 {
    constructor() {
      this.open = false;
      this.options = {
        overlay: true,
        stops: [`5rem`]
      };
      this.images = [`https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg`, `https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg`, `https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`, `https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg`, `https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`];
    }

    toggle() {
      this.open = !this.open;
    }

    onIntersection([{
      isIntersecting
    }], {
      classList
    }) {
      classList.toggle(`_visible`, isIntersecting);
    }

  }

  TuiSheetExample6.ɵfac = function TuiSheetExample6_Factory(t) {
    return new (t || TuiSheetExample6)();
  };

  TuiSheetExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSheetExample6,
    selectors: [["tui-sheet-example-6"]],
    decls: 3,
    vars: 2,
    consts: [["tuiButton", "", 3, "click"], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], ["waIntersectionObserver", ""], ["tuiSheetHeading", ""], ["tuiLabel", "Monty Python"], ["alt", "", "class", "image", 3, "src", "waIntersectionObservee", 4, "ngFor", "ngForOf"], ["alt", "", 1, "image", 3, "src", "waIntersectionObservee"], ["img", ""]],
    template: function TuiSheetExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSheetExample6_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show/Hide\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSheetExample6_ng_template_2_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function TuiSheetExample6_Template_ng_template_tuiSheetChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx.options)("tuiSheet", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, ng_web_apis_intersection_observer/* IntersectionObserverDirective */.Z7, sheet_heading_component/* TuiSheetHeadingComponent */.ui, label_component/* TuiLabelComponent */.A, common/* NgForOf */.sg, ng_web_apis_intersection_observer/* IntersectionObserveeDirective */.AY],
    styles: [".image[_ngcontent-%COMP%]{transition-property:transform,opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:100%;display:block;margin:1rem 0;transform:translate(-5rem);opacity:0}.image._visible[_ngcontent-%COMP%]{transform:none;opacity:1}"],
    changeDetection: 0
  });
  return TuiSheetExample6;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/sheet.component.ts























const _c0 = ["template"];

function ExampleTuiSheetComponent_ng_template_1_tui_notification_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 2, 1);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-notification", 6);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSheetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 2);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSheetComponent_ng_template_1_tui_notification_1_Template, 2, 0, "tui-notification", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-sheet-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-sheet-example-2");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-notification", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-sheet-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-sheet-example-4");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-notification", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "a", 9);
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-sheet-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-sheet-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.isMobile);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 22);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "h2");
    fesm2015_core/* ɵɵtext */._uU(3, "Karl Gambolputty");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtext */._uU(0, " Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\u00FCrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\u00F6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\u00FCrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\u00F6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiSheetComponent_ng_template_2_ng_template_5_Template_button_click_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r14.toggle();
    });
    fesm2015_core/* ɵɵtext */._uU(3, " Close ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSheetComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiSheetComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiSheetComponent_ng_template_2_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.toggle();
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Toggle ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSheetComponent_ng_template_2_ng_template_3_Template, 4, 1, "ng-template", null, 13, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiSheetComponent_ng_template_2_ng_template_5_Template, 4, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiSheetChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_tuiSheetChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.open = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiSheetComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.closeable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiSheetComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiSheetComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.image = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiSheetComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.imageSlide = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiSheetComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.stops = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiSheetComponent_ng_template_2_ng_template_12_Template, 2, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.initial = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiSheetComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSheetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.overlay = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiSheetOptions", ctx_r1.options)("tuiSheet", ctx_r1.open);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.closeable);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.imageVariants)("documentationPropertyValue", ctx_r1.image);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.imageSlide);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.stopsVariants)("documentationPropertyValue", ctx_r1.stops);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.initial);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.overlay);
  }
}

function ExampleTuiSheetComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 31);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 32);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 34);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 35);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵi18n */.SDv(13, 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiSheetComponent = /*#__PURE__*/(() => {
  class ExampleTuiSheetComponent {
    constructor(isMobile) {
      this.isMobile = isMobile;
      this.templateRef = ``;
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 27980).then(__webpack_require__.t.bind(__webpack_require__, 27980, 17)),
        HTML: __webpack_require__.e(/* import() */ 14065).then(__webpack_require__.t.bind(__webpack_require__, 14065, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 56393).then(__webpack_require__.t.bind(__webpack_require__, 56393, 17)),
        HTML: __webpack_require__.e(/* import() */ 80701).then(__webpack_require__.t.bind(__webpack_require__, 80701, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 20075).then(__webpack_require__.t.bind(__webpack_require__, 20075, 17)),
        HTML: __webpack_require__.e(/* import() */ 12601).then(__webpack_require__.t.bind(__webpack_require__, 12601, 17)),
        LESS: __webpack_require__.e(/* import() */ 46823).then(__webpack_require__.t.bind(__webpack_require__, 46823, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 13242).then(__webpack_require__.t.bind(__webpack_require__, 13242, 17)),
        HTML: __webpack_require__.e(/* import() */ 18247).then(__webpack_require__.t.bind(__webpack_require__, 18247, 17)),
        LESS: __webpack_require__.e(/* import() */ 14582).then(__webpack_require__.t.bind(__webpack_require__, 14582, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 86695).then(__webpack_require__.t.bind(__webpack_require__, 86695, 17)),
        HTML: __webpack_require__.e(/* import() */ 35781).then(__webpack_require__.t.bind(__webpack_require__, 35781, 17)),
        LESS: __webpack_require__.e(/* import() */ 95952).then(__webpack_require__.t.bind(__webpack_require__, 95952, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 78946).then(__webpack_require__.t.bind(__webpack_require__, 78946, 17)),
        HTML: __webpack_require__.e(/* import() */ 19116).then(__webpack_require__.t.bind(__webpack_require__, 19116, 17)),
        LESS: __webpack_require__.e(/* import() */ 80217).then(__webpack_require__.t.bind(__webpack_require__, 80217, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 37086).then(__webpack_require__.t.bind(__webpack_require__, 37086, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44694).then(__webpack_require__.t.bind(__webpack_require__, 44694, 17));
      this.closeable = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.closeable */.JX.closeable;
      this.image = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.image */.JX.image;
      this.imageSlide = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.imageSlide */.JX.imageSlide;
      this.initial = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.initial */.JX.initial;
      this.overlay = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.overlay */.JX.overlay;
      this.stops = addon_mobile/* TUI_SHEET_DEFAULT_OPTIONS.stops */.JX.stops;
      this.open = false;
      this.imageVariants = [this.image, `/assets/images/avatar.jpg`, `Template`];
      this.stopsVariants = [this.stops, [`100px`], [`10rem`, `20rem`]];
    }

    get computedImage() {
      return this.image === `Template` ? this.templateRef : this.image;
    }

    get options() {
      return {
        closeable: this.closeable,
        image: this.computedImage,
        imageSlide: this.imageSlide,
        stops: this.stops,
        initial: this.initial,
        overlay: this.overlay
      };
    }

    toggle() {
      this.open = !this.open;
    }

  }

  ExampleTuiSheetComponent.ɵfac = function ExampleTuiSheetComponent_Factory(t) {
    return new (t || ExampleTuiSheetComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk/* TUI_IS_MOBILE */.fLQ));
  };

  ExampleTuiSheetComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSheetComponent,
    selectors: [["example-sheet"]],
    viewQuery: function ExampleTuiSheetComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.templateRef = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_367530706575500574$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__3 = goog.getMsg("String");
        i18n_2 = MSG_EXTERNAL_367530706575500574$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟7b320cfede5dfb62207fd258205dec29002ded0b␟367530706575500574:String`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6201638315245239510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__7 = goog.getMsg("Advanced");
        i18n_6 = MSG_EXTERNAL_6201638315245239510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟bc2e854e111ecf2bd7db170da5e3c2ed08181d88␟6201638315245239510:Advanced`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4224425564565570136$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__9 = goog.getMsg("Elastic sticky");
        i18n_8 = MSG_EXTERNAL_4224425564565570136$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟878055125cb8179b9acca778e8058e4c37d7931c␟4224425564565570136:Elastic sticky`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_410395238023660102$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__11 = goog.getMsg("Scroll");
        i18n_10 = MSG_EXTERNAL_410395238023660102$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟c4f3865ea4353ffabaa13269d848a15589c33294␟410395238023660102:Scroll`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6340245878091220905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__13 = goog.getMsg("IntersectionObserver");
        i18n_12 = MSG_EXTERNAL_6340245878091220905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟12fcf30268b4593c4ea4460d54ce762d89865908␟6340245878091220905:IntersectionObserver`;
      }

      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544235089504012978$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___14 = goog.getMsg(" A mobile draggable sheet popup {$startTagTuiNotification} This component only works on mobile devices. Enable emulation in DevTools {$closeTagTuiNotification}{$startTagTuiDocExample}{$startTagTuiSheetExample_1}{$closeTagTuiSheetExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiSheetExample_2}{$closeTagTuiSheetExample_2}{$startTagTuiNotification_1} Note {$startTagCode}SheetHeading{$closeTagCode} component that styles the heading and adds close button if sheet is closeable. {$closeTagTuiNotification}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiSheetExample_3}{$closeTagTuiSheetExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiSheetExample_4}{$closeTagTuiSheetExample_4}{$startTagTuiNotification_1} Using {$startLink}{$startTagCode}ElasticSticky{$closeTagCode}{$closeLink} directive. {$closeTagTuiNotification}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiSheetExample_5}{$closeTagTuiSheetExample_5}{$closeTagTuiDocExample}{$startTagTuiDocExample_5}{$startTagTuiSheetExample_6}{$closeTagTuiSheetExample_6}{$closeTagTuiDocExample}", {
          "startTagTuiNotification": "\uFFFD*1:1\uFFFD\uFFFD#1:1\uFFFD",
          "closeTagTuiNotification": "[\uFFFD/#1:1\uFFFD\uFFFD/*1:1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#12\uFFFD]",
          "startTagTuiDocExample": "\uFFFD#2\uFFFD",
          "startTagTuiSheetExample_1": "\uFFFD#3\uFFFD",
          "closeTagTuiSheetExample_1": "\uFFFD/#3\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#4\uFFFD",
          "startTagTuiSheetExample_2": "\uFFFD#5\uFFFD",
          "closeTagTuiSheetExample_2": "\uFFFD/#5\uFFFD",
          "startTagTuiNotification_1": "[\uFFFD#6\uFFFD|\uFFFD#12\uFFFD]",
          "startTagCode": "[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]",
          "startTagTuiDocExample_2": "\uFFFD#8\uFFFD",
          "startTagTuiSheetExample_3": "\uFFFD#9\uFFFD",
          "closeTagTuiSheetExample_3": "\uFFFD/#9\uFFFD",
          "startTagTuiDocExample_3": "\uFFFD#10\uFFFD",
          "startTagTuiSheetExample_4": "\uFFFD#11\uFFFD",
          "closeTagTuiSheetExample_4": "\uFFFD/#11\uFFFD",
          "startLink": "\uFFFD#13\uFFFD",
          "closeLink": "\uFFFD/#13\uFFFD",
          "startTagTuiDocExample_4": "\uFFFD#15\uFFFD",
          "startTagTuiSheetExample_5": "\uFFFD#16\uFFFD",
          "closeTagTuiSheetExample_5": "\uFFFD/#16\uFFFD",
          "startTagTuiDocExample_5": "\uFFFD#17\uFFFD",
          "startTagTuiSheetExample_6": "\uFFFD#18\uFFFD",
          "closeTagTuiSheetExample_6": "\uFFFD/#18\uFFFD"
        });
        i18n_1 = MSG_EXTERNAL_544235089504012978$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___14;
      } else {
        i18n_1 = $localize`:␟17df46c279c3811bee96b6af37e46e760d333ae8␟544235089504012978: A mobile draggable sheet popup ${"\uFFFD*1:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_TUI_NOTIFICATION: This component only works on mobile devices. Enable emulation in DevTools ${"[\uFFFD/#1:1\uFFFD\uFFFD/*1:1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_1:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_2:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_2:${"[\uFFFD#6\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_TUI_NOTIFICATION_1: Note ${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:SheetHeading${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: component that styles the heading and adds close button if sheet is closeable. ${"[\uFFFD/#1:1\uFFFD\uFFFD/*1:1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#9\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_3:${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_3:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_4:${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_4:${"[\uFFFD#6\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_TUI_NOTIFICATION_1: Using ${"\uFFFD#13\uFFFD"}:START_LINK:${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:ElasticSticky${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#13\uFFFD"}:CLOSE_LINK: directive. ${"[\uFFFD/#1:1\uFFFD\uFFFD/*1:1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#15\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#16\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_5:${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_5:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#17\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\uFFFD#18\uFFFD"}:START_TAG_TUI_SHEET_EXAMPLE_6:${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_6:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_1 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_1);
      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_789026922885983016$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___16 = goog.getMsg(" Whether or not a sheet can be closed by user. ");
        i18n_15 = MSG_EXTERNAL_789026922885983016$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟b39d63fa1b474671b52726de98d807fac8efdd14␟789026922885983016: Whether or not a sheet can be closed by user. `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1564494239753492654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___18 = goog.getMsg(" Optional data to be passed to the sheet. ");
        i18n_17 = MSG_EXTERNAL_1564494239753492654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___18;
      } else {
        i18n_17 = $localize`:␟248c35c478eb41deba7c1d911749b794c6c93a03␟1564494239753492654: Optional data to be passed to the sheet. `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_209822900321825176$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___20 = goog.getMsg(" A content to show above the sheet. ");
        i18n_19 = MSG_EXTERNAL_209822900321825176$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___20;
      } else {
        i18n_19 = $localize`:␟3bc21c6c63ea366375de22b440d0456ca472fe47␟209822900321825176: A content to show above the sheet. `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3583507394866888478$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___22 = goog.getMsg(" Should image slide as the sheet is dragged. ");
        i18n_21 = MSG_EXTERNAL_3583507394866888478$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___22;
      } else {
        i18n_21 = $localize`:␟5ad027d74e7ea30ad40e20e74d20867cadcdda33␟3583507394866888478: Should image slide as the sheet is dragged. `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3215748703455516929$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___24 = goog.getMsg(" An array of stop points in any units for the sheet. ");
        i18n_23 = MSG_EXTERNAL_3215748703455516929$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___24;
      } else {
        i18n_23 = $localize`:␟7e1f605b14271a9c2835c1625c805803c1fb4e0f␟3215748703455516929: An array of stop points in any units for the sheet. `;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4013392256564511269$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___26 = goog.getMsg(" Initial stop index to open on. Indices exceeding {$startTagCode}stops{$closeTagCode} are treated as stop on image then stop on top of the sheet's content. ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_25 = MSG_EXTERNAL_4013392256564511269$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___26;
      } else {
        i18n_25 = $localize`:␟669747bf72f03b8c3febb2d4fd6092243df752fd␟4013392256564511269: Initial stop index to open on. Indices exceeding ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:stops${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: are treated as stop on image then stop on top of the sheet's content. `;
      }

      let i18n_27;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9103217685047430070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___28 = goog.getMsg(" Show overlay under the sheet. ");
        i18n_27 = MSG_EXTERNAL_9103217685047430070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS___28;
      } else {
        i18n_27 = $localize`:␟b3bd625e4722dd3bf642785886aaf10746acf0ad␟9103217685047430070: Show overlay under the sheet. `;
      }

      let i18n_29;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2103370040640569894$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__30 = goog.getMsg(" Import {$startTagCode}TuiSheetModule{$closeTagCode} into main module of your app ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_29 = MSG_EXTERNAL_2103370040640569894$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__30;
      } else {
        i18n_29 = $localize`:␟2bc15979415c542520702c4ca36c2ef49ee5b960␟2103370040640569894: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSheetModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into main module of your app `;
      }

      let i18n_31;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5411998498342604928$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__32 = goog.getMsg(" Add {$startTagCode}tui-sheets-host{$closeTagCode} to the main template like this: ", {
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_31 = MSG_EXTERNAL_5411998498342604928$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__32;
      } else {
        i18n_31 = $localize`:␟7b57d41c144bff421e69fdaf640fd91f25ad7ca8␟5411998498342604928: Add ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:tui-sheets-host${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: to the main template like this: `;
      }

      let i18n_33;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4154707475615926903$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__34 = goog.getMsg("Use directive or service as shown in examples.");
        i18n_33 = MSG_EXTERNAL_4154707475615926903$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SHEET_SHEET_COMPONENT_TS__34;
      } else {
        i18n_33 = $localize`:␟64e1b80a8fc848d8e0d252f5168f92c64af4d1ca␟4154707475615926903:Use directive or service as shown in examples.`;
      }

      return [["header", "Sheet", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], i18n_1, ["class", "tui-space_top-4", 4, "ngIf"], ["id", "string", "heading", i18n_2, 3, "content"], ["id", "basic", "heading", i18n_4, 3, "content"], [1, "tui-space_top-4"], ["id", "advanced", "heading", i18n_6, 3, "content"], ["id", "elastic", "heading", i18n_8, 3, "content"], ["tuiLink", "", "routerLink", "directives/elastic-sticky"], ["id", "scroll", "heading", i18n_10, "description", "Modifying content using scroll stream from the context", 3, "content"], ["id", "intersection", "heading", i18n_12, "description", "Modifying content with IntersectionObserver", 3, "content"], ["tuiButton", "", 3, "click"], ["template", ""], [3, "tuiSheetOptions", "tuiSheet", "tuiSheetChange"], ["documentationPropertyName", "closeable", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "data", "documentationPropertyType", "I"], ["documentationPropertyName", "image", "documentationPropertyType", "PolymorpheusContent<TuiSheetOptions<I>>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "imageSlide", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "stops", "documentationPropertyType", "string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "initial", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "overlay", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "top"], ["text", "Karl Gambolputty", "size", "l", 3, "rounded"], i18n_15, i18n_17, i18n_19, i18n_21, i18n_23, i18n_25, i18n_27, [1, "b-demo-steps"], i18n_29, ["filename", "myComponent.module.ts", 3, "code"], i18n_31, ["filename", "myComponent.template.html", 3, "code"], i18n_33];
    },
    template: function ExampleTuiSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSheetComponent_ng_template_1_Template, 19, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSheetComponent_ng_template_2_Template, 14, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSheetComponent_ng_template_3_Template, 14, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, common/* NgIf */.O5, example_component/* TuiDocExampleComponent */.f, TuiSheetExample1, TuiSheetExample2, notification_component/* TuiNotificationComponent */.L, TuiSheetExample3, TuiSheetExample4, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, TuiSheetExample5, TuiSheetExample6, demo_component/* TuiDocDemoComponent */.F, button_component/* TuiButtonComponent */.v, sheet_directive/* TuiSheetDirective */.o, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, avatar_component/* TuiAvatarComponent */.J, code_component/* TuiDocCodeComponent */.c],
    styles: [".top[_ngcontent-%COMP%]{background:var(--tui-accent);padding:1rem;display:flex;flex-direction:column;align-items:center}"],
    changeDetection: 0
  });
  return ExampleTuiSheetComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/sheet/sheet.module.ts

















let ExampleTuiSheetModule = /*#__PURE__*/(() => {
  class ExampleTuiSheetModule {}

  ExampleTuiSheetModule.ɵfac = function ExampleTuiSheetModule_Factory(t) {
    return new (t || ExampleTuiSheetModule)();
  };

  ExampleTuiSheetModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSheetModule
  });
  ExampleTuiSheetModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core/* TuiButtonModule */.fNO, core/* TuiLabelModule */.U8r, addon_commerce/* TuiMoneyModule */.DC, kit/* TuiAvatarModule */.JmR, core/* TuiNotificationModule */.HiG, core/* TuiLinkModule */.jzK, addon_mobile/* TuiElasticStickyModule */.TL, addon_mobile/* TuiSheetModule */.M$, ng_web_apis_intersection_observer/* IntersectionObserverModule */.$v, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSheetComponent))]]
  });
  return ExampleTuiSheetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSheetModule, {
    declarations: [ExampleTuiSheetComponent, TuiSheetExample1, TuiSheetExample2, TuiSheetExample3, TuiSheetExample4, TuiSheetExample5, TuiSheetExample6],
    imports: [common/* CommonModule */.ez, core/* TuiButtonModule */.fNO, core/* TuiLabelModule */.U8r, addon_commerce/* TuiMoneyModule */.DC, kit/* TuiAvatarModule */.JmR, core/* TuiNotificationModule */.HiG, core/* TuiLinkModule */.jzK, addon_mobile/* TuiElasticStickyModule */.TL, addon_mobile/* TuiSheetModule */.M$, ng_web_apis_intersection_observer/* IntersectionObserverModule */.$v, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiSheetComponent]
  });
})();

/***/ })

}]);