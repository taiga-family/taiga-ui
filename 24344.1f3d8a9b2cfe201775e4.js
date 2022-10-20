"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[24344],{

/***/ 24344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPreviewModule": () => (/* binding */ ExampleTuiPreviewModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-preview/index.ts + 8 modules
var addon_preview = __webpack_require__(46001);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/preview.component.ts
var preview_component = __webpack_require__(10643);
// EXTERNAL MODULE: ./projects/cdk/directives/swipe/swipe.directive.ts
var swipe_directive = __webpack_require__(99021);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/title/preview-title.component.ts
var preview_title_component = __webpack_require__(49116);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/pagination/preview-pagination.component.ts
var preview_pagination_component = __webpack_require__(48882);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/preview-action/preview-action.directive.ts
var preview_action_directive = __webpack_require__(4498);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/preview/examples/1/index.ts













const _c0 = ["preview"];
const _c1 = ["contentSample"];

function TuiPreviewExample1_ng_template_4_img_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "img", 10);
  }

  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    fesm2015_core/* ɵɵproperty */.Q6J("src", src_r6, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function TuiPreviewExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-preview", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiSwipe", function TuiPreviewExample1_ng_template_4_Template_tui_preview_tuiSwipe_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.onSwipe($event);
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-preview-title");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-preview-pagination", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiPreviewExample1_ng_template_4_Template_tui_preview_pagination_indexChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.index = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample1_ng_template_4_Template_button_click_4_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.delete();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample1_ng_template_4_Template_button_click_5_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.download();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample1_ng_template_4_Template_button_click_6_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const preview_r4 = restoredCtx.$implicit;
      return preview_r4.complete();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(7, TuiPreviewExample1_ng_template_4_img_7_Template, 1, 1, "img", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("rotatable", true);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r1.title);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("length", ctx_r1.length)("index", ctx_r1.index);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("polymorpheusOutlet", ctx_r1.previewContent);
  }
}

function TuiPreviewExample1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h1");
    fesm2015_core/* ɵɵtext */._uU(2, "Important document");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, "Hello everyone! This is some important document in A4 format, although it is made using html");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵtext */._uU(6, " This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "img", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiPreviewExample1 = /*#__PURE__*/(() => {
  class TuiPreviewExample1 {
    constructor(previewService, alertService) {
      this.previewService = previewService;
      this.alertService = alertService;
      this.index = 0;
      this.length = 2;
    }

    get title() {
      return this.index === 0 ? `Transaction cert.jpg` : `My face.jpg`;
    }

    get previewContent() {
      return this.index === 0 && this.contentSample ? this.contentSample : `http://marsibarsi.me/images/1x1small.jpg`;
    }

    show() {
      this.previewService.open(this.preview || ``).subscribe({
        complete: () => console.info(`complete`)
      });
    }

    download() {
      this.alertService.open(`Downloading...`).subscribe();
    }

    delete() {
      this.alertService.open(`Deleting...`).subscribe();
    }

    onSwipe(swipe) {
      if (swipe.direction === `left`) {
        this.index = (0,cdk.tuiClamp)(this.index + 1, 0, this.length - 1);
      }

      if (swipe.direction === `right`) {
        this.index = (0,cdk.tuiClamp)(this.index - 1, 0, this.length - 1);
      }
    }

  }

  TuiPreviewExample1.ɵfac = function TuiPreviewExample1_Factory(t) {
    return new (t || TuiPreviewExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_preview.TuiPreviewDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiPreviewExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPreviewExample1,
    selectors: [["tui-preview-example-1"]],
    viewQuery: function TuiPreviewExample1_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
        fesm2015_core/* ɵɵviewQuery */.Gf(_c1, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.preview = _t.first);
        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.contentSample = _t.first);
      }
    },
    decls: 8,
    vars: 0,
    consts: [[1, "tui-space_bottom-2"], ["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], ["contentSample", ""], [3, "rotatable", "tuiSwipe"], [3, "length", "index", "indexChange"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconTrash", "title", "Delete", 3, "click"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconDownload", "title", "Download", 3, "click"], ["tuiPreviewAction", "", "tuiIconButton", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], ["alt", "", 3, "src", 4, "polymorpheusOutlet"], ["alt", "", 3, "src"], [1, "content"], ["src", "https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg", 1, "polymorpheus"]],
    template: function TuiPreviewExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵtext */._uU(1, "With all features");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample1_Template_button_click_2_listener() {
          return ctx.show();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show preview\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiPreviewExample1_ng_template_4_Template, 8, 5, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiPreviewExample1_ng_template_6_Template, 8, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, preview_component/* TuiPreviewComponent */.m, swipe_directive/* TuiSwipeDirective */.W, preview_title_component/* TuiPreviewTitleComponent */.S, preview_pagination_component/* TuiPreviewPaginationComponent */.i, preview_action_directive/* TuiPreviewActionDirective */.v, tinkoff_ng_polymorpheus/* PolymorpheusOutletDirective */.Li],
    styles: [".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],
    changeDetection: 0
  });
  return TuiPreviewExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/preview/examples/2/index.ts






const _2_c0 = ["preview"];

function TuiPreviewExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-preview", 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "iframe", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample2_ng_template_2_Template_button_click_2_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const preview_r2 = restoredCtx.$implicit;
      return preview_r2.complete();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("rotatable", false)("zoomable", false);
  }
}

let TuiPreviewExample2 = /*#__PURE__*/(() => {
  class TuiPreviewExample2 {
    constructor(previewDialogService) {
      this.previewDialogService = previewDialogService;
    }

    show() {
      this.previewDialogService.open(this.preview || ``).subscribe();
    }

  }

  TuiPreviewExample2.ɵfac = function TuiPreviewExample2_Factory(t) {
    return new (t || TuiPreviewExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_preview.TuiPreviewDialogService));
  };

  TuiPreviewExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPreviewExample2,
    selectors: [["tui-preview-example-2"]],
    viewQuery: function TuiPreviewExample2_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_2_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.preview = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: [["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], [3, "rotatable", "zoomable"], ["src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "content"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"]],
    template: function TuiPreviewExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample2_Template_button_click_0_listener() {
          return ctx.show();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show simple preview\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiPreviewExample2_ng_template_2_Template, 3, 2, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, preview_component/* TuiPreviewComponent */.m, preview_action_directive/* TuiPreviewActionDirective */.v],
    styles: [".content[_ngcontent-%COMP%]{width:80%;height:80%}"],
    changeDetection: 0
  });
  return TuiPreviewExample2;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__(45435);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/preview/examples/3/index.ts














const _3_c0 = ["preview"];

function TuiPreviewExample3_ng_template_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 9);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div");
    fesm2015_core/* ɵɵtext */._uU(4, "Preview unavailable");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiPreviewExample3_ng_template_2_img_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "img", 11);
  }

  if (rf & 2) {
    const src_r6 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("src", src_r6, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function TuiPreviewExample3_ng_template_2_tui_loader_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader", 12);
  }
}

function TuiPreviewExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-preview", 2);
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵpipe */.ALo(3, "async");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-preview-title");
    fesm2015_core/* ɵɵtext */._uU(5);
    fesm2015_core/* ɵɵpipe */.ALo(6, "async");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-preview-pagination", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("indexChange", function TuiPreviewExample3_ng_template_2_Template_tui_preview_pagination_indexChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.index$$.next($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample3_ng_template_2_Template_button_click_8_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.download();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample3_ng_template_2_Template_button_click_9_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const preview_r2 = restoredCtx.$implicit;
      return preview_r2.complete();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(10, TuiPreviewExample3_ng_template_2_ng_container_10_Template, 5, 0, "ng-container", 6);
    fesm2015_core/* ɵɵpipe */.ALo(11, "async");
    fesm2015_core/* ɵɵtemplate */.YNc(12, TuiPreviewExample3_ng_template_2_img_12_Template, 1, 1, "img", 7);
    fesm2015_core/* ɵɵpipe */.ALo(13, "async");
    fesm2015_core/* ɵɵtemplate */.YNc(14, TuiPreviewExample3_ng_template_2_tui_loader_14_Template, 1, 0, "tui-loader", 8);
    fesm2015_core/* ɵɵpipe */.ALo(15, "async");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("rotatable", !fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 8, ctx_r1.contentUnavailable$))("zoomable", !fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 10, ctx_r1.contentUnavailable$) && !fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 12, ctx_r1.loading$));
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 14, ctx_r1.title$));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("length", ctx_r1.items.length)("index", ctx_r1.index$$.value);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 16, ctx_r1.contentUnavailable$));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(13, 18, ctx_r1.imageSrc$));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(15, 20, ctx_r1.loading$));
  }
}

let TuiPreviewExample3 = /*#__PURE__*/(() => {
  class TuiPreviewExample3 {
    constructor(previewDialogService) {
      this.previewDialogService = previewDialogService;
      this.items = [{
        title: `some table.xlsx`,
        hasPreview: false
      }, {
        title: `Content #2`,
        hasPreview: true
      }];
      this.index$$ = new BehaviorSubject/* BehaviorSubject */.X(0);
      this.item$ = this.index$$.pipe((0,map/* map */.U)(index => this.items[index]), (0,filter/* filter */.h)(cdk.tuiIsPresent));
      this.title$ = this.item$.pipe((0,map/* map */.U)(item => item.title));
      this.contentUnavailable$ = this.item$.pipe((0,map/* map */.U)(item => !item.hasPreview));
      this.imageSrc$ = this.item$.pipe((0,switchMap/* switchMap */.w)(item => item.hasPreview ? this.emulateBackendRequest().pipe((0,startWith/* startWith */.O)(``)) : (0,of.of)(null)));
      this.loading$ = this.imageSrc$.pipe((0,map/* map */.U)(src => src === ``));
    }

    show() {
      this.previewDialogService.open(this.preview || ``).subscribe();
    }

    download() {
      console.info(`downloading...`);
    }

    emulateBackendRequest() {
      return (0,timer/* timer */.H)(1500).pipe((0,mapTo/* mapTo */.h)(`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`));
    }

  }

  TuiPreviewExample3.ɵfac = function TuiPreviewExample3_Factory(t) {
    return new (t || TuiPreviewExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_preview.TuiPreviewDialogService));
  };

  TuiPreviewExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPreviewExample3,
    selectors: [["tui-preview-example-3"]],
    viewQuery: function TuiPreviewExample3_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_3_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.preview = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: [["tuiButton", "", "size", "m", "type", "button", 1, "tui-space_bottom-4", 3, "click"], ["preview", ""], [3, "rotatable", "zoomable"], [3, "length", "index", "indexChange"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconDownload", "title", "Download", 3, "click"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], [4, "ngIf"], ["width", "512", "height", "512", 3, "src", 4, "ngIf"], ["size", "xl", "class", "t-loader", 4, "ngIf"], [1, "t-container"], ["src", "tuiIconFileLarge", 1, "t-icon"], ["width", "512", "height", "512", 3, "src"], ["size", "xl", 1, "t-loader"]],
    template: function TuiPreviewExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPreviewExample3_Template_button_click_0_listener() {
          return ctx.show();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show preview\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiPreviewExample3_ng_template_2_Template, 16, 22, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, preview_component/* TuiPreviewComponent */.m, preview_title_component/* TuiPreviewTitleComponent */.S, preview_pagination_component/* TuiPreviewPaginationComponent */.i, preview_action_directive/* TuiPreviewActionDirective */.v, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P, loader_component/* TuiLoaderComponent */.k],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],
    changeDetection: 0
  });
  return TuiPreviewExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/preview/preview.component.ts










function ExampleTuiPreviewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵtext */._uU(3, "As a document you can provide any content like images,");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(5, " The component automatically adjusts to the mobile device ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-preview-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-preview-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-preview-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiPreviewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " Add ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiPreviewModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " to main module: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵtext */._uU(8, " Create a template with tui-preview ");
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵtext */._uU(11, " Open the component from the ");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "code");
    fesm2015_core/* ɵɵtext */._uU(13, "TuiPreviewDialogService");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(14, " as in the example ");
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleComponent);
  }
}

let ExampleTuiPreviewComponent = /*#__PURE__*/(() => {
  class ExampleTuiPreviewComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 97010).then(__webpack_require__.t.bind(__webpack_require__, 97010, 17));
      this.exampleComponent = __webpack_require__.e(/* import() */ 41888).then(__webpack_require__.t.bind(__webpack_require__, 41888, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 34336).then(__webpack_require__.t.bind(__webpack_require__, 34336, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 88642).then(__webpack_require__.t.bind(__webpack_require__, 88642, 17)),
        LESS: __webpack_require__.e(/* import() */ 84691).then(__webpack_require__.t.bind(__webpack_require__, 84691, 17)),
        HTML: __webpack_require__.e(/* import() */ 1246).then(__webpack_require__.t.bind(__webpack_require__, 1246, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 79812).then(__webpack_require__.t.bind(__webpack_require__, 79812, 17)),
        LESS: __webpack_require__.e(/* import() */ 18404).then(__webpack_require__.t.bind(__webpack_require__, 18404, 17)),
        HTML: __webpack_require__.e(/* import() */ 84963).then(__webpack_require__.t.bind(__webpack_require__, 84963, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 42835).then(__webpack_require__.t.bind(__webpack_require__, 42835, 17)),
        LESS: __webpack_require__.e(/* import() */ 74852).then(__webpack_require__.t.bind(__webpack_require__, 74852, 17)),
        HTML: __webpack_require__.e(/* import() */ 79826).then(__webpack_require__.t.bind(__webpack_require__, 79826, 17))
      };
    }

  }

  ExampleTuiPreviewComponent.ɵfac = function ExampleTuiPreviewComponent_Factory(t) {
    return new (t || ExampleTuiPreviewComponent)();
  };

  ExampleTuiPreviewComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPreviewComponent,
    selectors: [["example-preview"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_182658249076803093$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__1 = goog.getMsg(" Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) ");
        i18n_0 = MSG_EXTERNAL_182658249076803093$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟241d5e97fd9620093591d9a0221c0450353983f1␟182658249076803093: Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_921011384987579529$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__3 = goog.getMsg("Full preview");
        i18n_2 = MSG_EXTERNAL_921011384987579529$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟02f0674c5a9d1755c787e6879af0feb3146e4851␟921011384987579529:Full preview`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6145238317927282087$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__5 = goog.getMsg("Simple mode");
        i18n_4 = MSG_EXTERNAL_6145238317927282087$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟af8d845c1070b259e6a6c86f73b63f8ed2a66aeb␟6145238317927282087:Simple mode`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2673400971030039835$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__7 = goog.getMsg("With loading and unavailable image");
        i18n_6 = MSG_EXTERNAL_2673400971030039835$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PREVIEW_PREVIEW_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟9a68584192ab89eb9c03195bc31cf2bf541d66b9␟2673400971030039835:With loading and unavailable image`;
      }

      return [["header", "Preview", "package", "ADDON-PREVIEW"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, [1, "tui-space_bottom-4"], ["id", "default", "heading", i18n_2, 3, "content"], ["id", "simple", "heading", i18n_4, 3, "content"], ["id", "loading", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "some.component.html", 3, "code"], ["filename", "some.component.ts", 3, "code"]];
    },
    template: function ExampleTuiPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPreviewComponent_ng_template_1_Template, 12, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPreviewComponent_ng_template_2_Template, 16, 3, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiPreviewExample1, TuiPreviewExample2, TuiPreviewExample3, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPreviewComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/preview/preview.module.ts













let ExampleTuiPreviewModule = /*#__PURE__*/(() => {
  class ExampleTuiPreviewModule {}

  ExampleTuiPreviewModule.ɵfac = function ExampleTuiPreviewModule_Factory(t) {
    return new (t || ExampleTuiPreviewModule)();
  };

  ExampleTuiPreviewModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPreviewModule
  });
  ExampleTuiPreviewModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiButtonModule, addon_preview.TuiPreviewModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, core.TuiSvgModule, core.TuiLoaderModule, cdk.TuiSwipeModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPreviewComponent))]]
  });
  return ExampleTuiPreviewModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPreviewModule, {
    declarations: [ExampleTuiPreviewComponent, TuiPreviewExample1, TuiPreviewExample2, TuiPreviewExample3],
    imports: [common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiButtonModule, addon_preview.TuiPreviewModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, core.TuiSvgModule, core.TuiLoaderModule, cdk.TuiSwipeModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiPreviewComponent]
  });
})();

/***/ })

}]);