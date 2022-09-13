"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[25035],{

/***/ 25035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPdfViewerModule": () => (/* binding */ ExampleTuiPdfViewerModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2015/platform-browser.js
var platform_browser = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/examples/1/index.ts








function TuiPdfViewerExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(1, " Download ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const content_r2 = ctx.content;
    fesm2015_core/* ɵɵproperty */.Q6J("href", content_r2, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

let TuiPdfViewerExample1 = /*#__PURE__*/(() => {
  class TuiPdfViewerExample1 {
    constructor(sanitizer, pdfService) {
      this.sanitizer = sanitizer;
      this.pdfService = pdfService;
    }

    show(actions) {
      this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`), {
        label: `Taiga UI`,
        actions
      }).subscribe();
    }

  }

  TuiPdfViewerExample1.ɵfac = function TuiPdfViewerExample1_Factory(t) {
    return new (t || TuiPdfViewerExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7), fesm2015_core/* ɵɵdirectiveInject */.Y36(kit.TuiPdfViewerService));
  };

  TuiPdfViewerExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPdfViewerExample1,
    selectors: [["tui-pdf-viewer-example-1"]],
    decls: 6,
    vars: 0,
    consts: [[1, "tui-space_bottom-3"], ["tuiButton", "", 3, "click"], ["actions", ""], ["tuiButton", "", "shape", "rounded", "size", "s", "download", "", 3, "href"]],
    template: function TuiPdfViewerExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-notification", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPdfViewerExample1_Template_button_click_2_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r3);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

          return ctx.show(_r0);
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Taiga\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiPdfViewerExample1_ng_template_4_Template, 2, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [notification_component/* TuiNotificationComponent */.L, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPdfViewerExample1;
})();
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/examples/2/actions-content.component.ts





function ActionsContent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ActionsContent_button_0_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r3);
      const button_r1 = restoredCtx.$implicit;
      const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
      return button_r1.onClick(ctx_r2.context);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const button_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", button_r1.text, " ");
  }
}

let ActionsContent = /*#__PURE__*/(() => {
  class ActionsContent {
    constructor(context) {
      this.context = context;
    }

  }

  ActionsContent.ɵfac = function ActionsContent_Factory(t) {
    return new (t || ActionsContent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
  };

  ActionsContent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ActionsContent,
    selectors: [["ng-component"]],
    decls: 1,
    vars: 1,
    consts: [["tuiButton", "", "size", "s", "shape", "rounded", "class", "tui-space_left-3", 3, "click", 4, "ngFor", "ngForOf"], ["tuiButton", "", "size", "s", "shape", "rounded", 1, "tui-space_left-3", 3, "click"]],
    template: function ActionsContent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, ActionsContent_button_0_Template, 2, 1, "button", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.context.data);
      }
    },
    directives: [common/* NgForOf */.sg, button_component/* TuiButtonComponent */.v],
    encapsulation: 2
  });
  return ActionsContent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts








function PdfContent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "iframe", 2);
  }

  if (rf & 2) {
    const src_r3 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("src", src_r3, fesm2015_core/* ɵɵsanitizeResourceUrl */.uOi);
  }
}

function PdfContent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader", 3);
  }
}

let PdfContent = /*#__PURE__*/(() => {
  class PdfContent {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.src$ = (0,timer/* timer */.H)(3000).pipe((0,mapTo/* mapTo */.h)(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`)));
    }

  }

  PdfContent.ɵfac = function PdfContent_Factory(t) {
    return new (t || PdfContent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7));
  };

  PdfContent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: PdfContent,
    selectors: [["ng-component"]],
    decls: 4,
    vars: 4,
    consts: [[3, "src", 4, "ngIf", "ngIfElse"], ["loading", ""], [3, "src"], ["size", "xl"]],
    template: function PdfContent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, PdfContent_iframe_0_Template, 1, 1, "iframe", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(2, PdfContent_ng_template_2_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx.src$))("ngIfElse", _r1);
      }
    },
    directives: [common/* NgIf */.O5, loader_component/* TuiLoaderComponent */.k],
    pipes: [common/* AsyncPipe */.Ov],
    styles: ["[_nghost-%COMP%]{display:flex;height:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]
  });
  return PdfContent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/examples/2/index.ts










let TuiPdfViewerExample2 = /*#__PURE__*/(() => {
  class TuiPdfViewerExample2 {
    constructor(alertService, pdfService) {
      this.alertService = alertService;
      this.pdfService = pdfService;
    }

    show() {
      const options = {
        label: `Taiga UI`,
        actions: new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(ActionsContent),
        data: [{
          text: `Sign`,
          onClick: context => context.completeWith(`Document signed`)
        }, {
          text: `Deny`,
          onClick: context => context.completeWith(`Document denied`)
        }]
      };
      this.pdfService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(PdfContent), options).pipe((0,switchMap/* switchMap */.w)(response => this.alertService.open(response))).subscribe();
    }

  }

  TuiPdfViewerExample2.ɵfac = function TuiPdfViewerExample2_Factory(t) {
    return new (t || TuiPdfViewerExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(kit.TuiPdfViewerService));
  };

  TuiPdfViewerExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPdfViewerExample2,
    selectors: [["tui-pdf-viewer-example-2"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", 3, "click"]],
    template: function TuiPdfViewerExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPdfViewerExample2_Template_button_click_0_listener() {
          return ctx.show();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Taiga\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPdfViewerExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/pdf-viewer/pdf-viewer.directive.ts
var pdf_viewer_directive = __webpack_require__(52504);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/examples/3/index.ts




function TuiPdfViewerExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "iframe", 2);
  }
}

let TuiPdfViewerExample3 = /*#__PURE__*/(() => {
  class TuiPdfViewerExample3 {
    constructor() {
      this.open = false;
    }

  }

  TuiPdfViewerExample3.ɵfac = function TuiPdfViewerExample3_Factory(t) {
    return new (t || TuiPdfViewerExample3)();
  };

  TuiPdfViewerExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPdfViewerExample3,
    selectors: [["tui-pdf-viewer-example-3"]],
    decls: 3,
    vars: 1,
    consts: [["tuiButton", "", 3, "click"], [3, "tuiPdfViewer", "tuiPdfViewerChange"], ["src", "assets/media/taiga.pdf", 1, "iframe"]],
    template: function TuiPdfViewerExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPdfViewerExample3_Template_button_click_0_listener() {
          return ctx.open = true;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Taiga\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiPdfViewerExample3_ng_template_2_Template, 1, 0, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiPdfViewerChange", function TuiPdfViewerExample3_Template_ng_template_tuiPdfViewerChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiPdfViewer", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, pdf_viewer_directive/* TuiPdfViewerDirective */.E],
    styles: [".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],
    changeDetection: 0
  });
  return TuiPdfViewerExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/pdf-viewer.component.ts










function ExampleTuiPdfViewerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, "Custom dialog to preview PDF");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-notification", 3);
    fesm2015_core/* ɵɵtext */._uU(3, " Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
    fesm2015_core/* ɵɵtext */._uU(5, "TUI_IS_MOBILE");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " token to provide suitable alternative behavior ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-pdf-viewer-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-pdf-viewer-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-pdf-viewer-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiPdfViewerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " Import ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiPdfViewerModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " to your main app module: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵtext */._uU(8, " Show preview with a service: ");
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleService);
  }
}

let ExampleTuiPdfViewerComponent = /*#__PURE__*/(() => {
  class ExampleTuiPdfViewerComponent {
    constructor() {
      this.exampleService = __webpack_require__.e(/* import() */ 4914).then(__webpack_require__.t.bind(__webpack_require__, 4914, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 16272).then(__webpack_require__.t.bind(__webpack_require__, 16272, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 56782).then(__webpack_require__.t.bind(__webpack_require__, 56782, 17)),
        HTML: __webpack_require__.e(/* import() */ 57953).then(__webpack_require__.t.bind(__webpack_require__, 57953, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 67871).then(__webpack_require__.t.bind(__webpack_require__, 67871, 17)),
        HTML: __webpack_require__.e(/* import() */ 63178).then(__webpack_require__.t.bind(__webpack_require__, 63178, 17)),
        'actions-content.component.ts': __webpack_require__.e(/* import() */ 19387).then(__webpack_require__.t.bind(__webpack_require__, 19387, 17)),
        'pdf-content.component.ts': __webpack_require__.e(/* import() */ 28770).then(__webpack_require__.t.bind(__webpack_require__, 28770, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 51079).then(__webpack_require__.t.bind(__webpack_require__, 51079, 17)),
        HTML: __webpack_require__.e(/* import() */ 44676).then(__webpack_require__.t.bind(__webpack_require__, 44676, 17)),
        LESS: __webpack_require__.e(/* import() */ 50396).then(__webpack_require__.t.bind(__webpack_require__, 50396, 17))
      };
    }

  }

  ExampleTuiPdfViewerComponent.ɵfac = function ExampleTuiPdfViewerComponent_Factory(t) {
    return new (t || ExampleTuiPdfViewerComponent)();
  };

  ExampleTuiPdfViewerComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPdfViewerComponent,
    selectors: [["example-tui-pdf-viewer"]],
    decls: 3,
    vars: 0,
    consts: [["header", "PdfViewer", "package", "KIT"], ["pageTab", ""], ["pageTab", "Setup"], ["status", "warning"], ["id", "base", "heading", "Basic", 3, "content"], ["id", "component", "heading", "Component", 3, "content"], ["id", "directive", "heading", "Directive", 3, "content"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]],
    template: function ExampleTuiPdfViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPdfViewerComponent_ng_template_1_Template, 13, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPdfViewerComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiPdfViewerExample1, TuiPdfViewerExample2, TuiPdfViewerExample3, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPdfViewerComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pdf-viewer/pdf-viewer.module.ts













let ExampleTuiPdfViewerModule = /*#__PURE__*/(() => {
  class ExampleTuiPdfViewerModule {}

  ExampleTuiPdfViewerModule.ɵfac = function ExampleTuiPdfViewerModule_Factory(t) {
    return new (t || ExampleTuiPdfViewerModule)();
  };

  ExampleTuiPdfViewerModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPdfViewerModule
  });
  ExampleTuiPdfViewerModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiPdfViewerModule, core.TuiLoaderModule, core.TuiButtonModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPdfViewerComponent))]]
  });
  return ExampleTuiPdfViewerModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPdfViewerModule, {
    declarations: [ExampleTuiPdfViewerComponent, PdfContent, ActionsContent, TuiPdfViewerExample1, TuiPdfViewerExample2, TuiPdfViewerExample3],
    imports: [common/* CommonModule */.ez, kit.TuiPdfViewerModule, core.TuiLoaderModule, core.TuiButtonModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPdfViewerComponent]
  });
})();

/***/ })

}]);