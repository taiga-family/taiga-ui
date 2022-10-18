"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89757],{

/***/ 89757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiEditorModule": () => (/* binding */ ExampleTuiEditorModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-editor/index.ts + 12 modules
var addon_editor = __webpack_require__(70224);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-editor/components/editor/editor.component.ts
var editor_component = __webpack_require__(69303);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/1/smiles-tool/smiles-tool.component.ts









function ExampleSmilesToolComponent_ng_template_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleSmilesToolComponent_ng_template_3_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const smile_r5 = restoredCtx.$implicit;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r6.insertSmile(smile_r5);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const smile_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("innerHTML", smile_r5, fesm2015_core/* ɵɵsanitizeHtml */.oJD);
  }
}

function ExampleSmilesToolComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleSmilesToolComponent_ng_template_3_button_1_Template, 1, 1, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const activeZone_r3 = ctx.$implicit;
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.smiles);
  }
}

let ExampleSmilesToolComponent = /*#__PURE__*/(() => {
  class ExampleSmilesToolComponent {
    constructor(editor) {
      this.editor = editor;
      /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */

      this.smiles = [`&#129409;`, `&#9200;`, `&#9749;`, `&#9989;`, `&#10060;`, `&#10071;`, `&#10133;`, `&#128064;`, `&#128070;`, `&#128076;`, `&#128522;`, `&#128640;`];
    }

    insertSmile(smile) {
      this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${smile}</p>`).insertContent(` `).run();
    }

  }

  ExampleSmilesToolComponent.ɵfac = function ExampleSmilesToolComponent_Factory(t) {
    return new (t || ExampleSmilesToolComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_editor.TuiTiptapEditorService));
  };

  ExampleSmilesToolComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleSmilesToolComponent,
    selectors: [["smiles-tool"]],
    decls: 5,
    vars: 3,
    consts: [["tuiDropdownAlign", "left", 1, "t-wrapper", 3, "content"], ["dropdown", ""], ["tuiIconButton", "", "type", "button", "size", "s", "icon", "tuiIconStarLarge", "appearance", "icon", "automation-id", "smiles-tool__button", 1, "tool-button", 3, "pseudoActive", "focusable"], ["smileDropdown", ""], [1, "smiles", 3, "tuiActiveZoneParent"], ["class", "smile", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], [1, "smile", 3, "innerHTML", "click"]],
    template: function ExampleSmilesToolComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0, 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "button", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleSmilesToolComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r1);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudoActive", _r0.open)("focusable", _r0.open);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, active_zone_directive/* TuiActiveZoneDirective */.e, common/* NgForOf */.sg],
    styles: [".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"]
  });
  return ExampleSmilesToolComponent;
})();
// EXTERNAL MODULE: ./projects/cdk/directives/item/item.directive.ts
var item_directive = __webpack_require__(82707);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/1/index.ts








let TuiEditorExample1 = /*#__PURE__*/(() => {
  class TuiEditorExample1 {
    constructor() {
      this.builtInTools = [addon_editor.TuiEditorTool.Undo];
      this.control = new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  TuiEditorExample1.ɵfac = function TuiEditorExample1_Factory(t) {
    return new (t || TuiEditorExample1)();
  };

  TuiEditorExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample1,
    selectors: [["tui-editor-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      useValue: [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), __webpack_require__.e(/* import() */ 80615).then(__webpack_require__.bind(__webpack_require__, 80615)).then(({
        EmojiExtension
      }) => EmojiExtension)]
    }])],
    decls: 7,
    vars: 2,
    consts: [[1, "editor", 3, "formControl", "tools"], ["ngProjectAs", "tools", 5, ["tools"]], ["tuiItem", ""], [1, "hint"], ["src", "tuiIconArrowLeft"]],
    template: function TuiEditorExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Smiles are custom tool. Try it. ");
        fesm2015_core/* ɵɵelementContainerStart */.ynx(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "smiles-tool", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "span", 3);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " click it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementContainerEnd */.BQk();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, ExampleSmilesToolComponent, item_directive/* TuiItemDirective */.w, svg_component/* TuiSvgComponent */.P],
    styles: [".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],
    changeDetection: 0
  });
  return TuiEditorExample1;
})();
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/http.js
var http = __webpack_require__(58497);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./projects/addon-editor/components/editor-socket/editor-socket.component.ts
var editor_socket_component = __webpack_require__(20179);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/2/index.ts












let TuiEditorExample2 = /*#__PURE__*/(() => {
  class TuiEditorExample2 {
    constructor(imageLoader, http, destroy$) {
      this.imageLoader = imageLoader;
      this.http = http;
      this.builtInTools = [addon_editor.TuiEditorTool.Undo, addon_editor.TuiEditorTool.Img];
      this.base64Image$ = this.http.get(`assets/images/lumberjack.png`, {
        responseType: `blob`
      }).pipe((0,switchMap/* switchMap */.w)(file => this.imageLoader(file)));
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.base64Image$.pipe((0,takeUntil/* takeUntil */.R)(destroy$)).subscribe(src => {
        this.control.patchValue(`<img data-type="image-editor" src="${src}" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`);
      });
    }

  }

  TuiEditorExample2.ɵfac = function TuiEditorExample2_Factory(t) {
    return new (t || TuiEditorExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_editor.TUI_IMAGE_LOADER), fesm2015_core/* ɵɵdirectiveInject */.Y36(http/* HttpClient */.eN), fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService));
  };

  TuiEditorExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample2,
    selectors: [["tui-editor-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      deps: [fesm2015_core/* Injector */.zs3],
      useFactory: injector => [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 25039)).then(({
        createImageEditorExtension
      }) => createImageEditorExtension(injector))]
    }])],
    decls: 4,
    vars: 3,
    consts: [[1, "editor", 3, "formControl", "tools"], [3, "content"]],
    template: function TuiEditorExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h4");
        fesm2015_core/* ɵɵtext */._uU(2, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-editor-socket", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D],
    styles: [".editor[_ngcontent-%COMP%]{min-height:30rem}"],
    changeDetection: 0
  });
  return TuiEditorExample2;
})();
// EXTERNAL MODULE: ./projects/addon-editor/directives/image-preview/image-preview.directive.ts
var image_preview_directive = __webpack_require__(60153);
// EXTERNAL MODULE: ./projects/addon-preview/index.ts + 8 modules
var addon_preview = __webpack_require__(46001);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/preview.component.ts
var preview_component = __webpack_require__(10643);
// EXTERNAL MODULE: ./projects/addon-preview/components/preview/preview-action/preview-action.directive.ts
var preview_action_directive = __webpack_require__(4498);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/3/image-preview/image-preview.component.ts







const _c0 = ["previewImages"];

function ImagePreviewExampleComponent_ng_template_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "img", 4);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("src", ctx_r3.image.src, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
  }
}

function ImagePreviewExampleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-preview", 1);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ImagePreviewExampleComponent_ng_template_0_img_1_Template, 1, 1, "img", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ImagePreviewExampleComponent_ng_template_0_Template_button_click_2_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const dialog_r2 = restoredCtx.$implicit;
      return dialog_r2.complete();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("rotatable", true);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.image);
  }
}

let ImagePreviewExampleComponent = /*#__PURE__*/(() => {
  class ImagePreviewExampleComponent {
    constructor(dialogService) {
      this.dialogService = dialogService;
    }

    showImage(image) {
      this.image = image;
      this.dialogService.open(this.template || ``).subscribe();
    }

  }

  ImagePreviewExampleComponent.ɵfac = function ImagePreviewExampleComponent_Factory(t) {
    return new (t || ImagePreviewExampleComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_preview.TuiPreviewDialogService));
  };

  ImagePreviewExampleComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ImagePreviewExampleComponent,
    selectors: [["image-preview-example"]],
    viewQuery: function ImagePreviewExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.template = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["previewImages", ""], [3, "rotatable"], ["loading", "lazy", "alt", "", "class", "t-image-preview", 3, "src", 4, "ngIf"], ["tuiIconButton", "", "tuiPreviewAction", "", "icon", "tuiIconCloseLarge", "title", "Close", 3, "click"], ["loading", "lazy", "alt", "", 1, "t-image-preview", 3, "src"]],
    template: function ImagePreviewExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, ImagePreviewExampleComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [preview_component/* TuiPreviewComponent */.m, common/* NgIf */.O5, button_component/* TuiButtonComponent */.v, preview_action_directive/* TuiPreviewActionDirective */.v],
    styles: [".t-image-preview[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return ImagePreviewExampleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/3/index.ts










let TuiEditorExample3 = /*#__PURE__*/(() => {
  class TuiEditorExample3 {
    constructor() {
      this.builtInTools = [addon_editor.TuiEditorTool.Undo, addon_editor.TuiEditorTool.Img];
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.control.patchValue(`<p>Small image</p><img data-type="image-editor" src="assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="assets/images/big-wallpaper.jpg" width="500">`);
    }

  }

  TuiEditorExample3.ɵfac = function TuiEditorExample3_Factory(t) {
    return new (t || TuiEditorExample3)();
  };

  TuiEditorExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample3,
    selectors: [["tui-editor-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      deps: [fesm2015_core/* Injector */.zs3],
      useFactory: injector => [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 25039)).then(({
        createImageEditorExtension
      }) => createImageEditorExtension(injector))]
    }])],
    decls: 6,
    vars: 3,
    consts: [[1, "editor", 3, "formControl", "tools"], [3, "content", "imagePreview"], ["preview", ""]],
    template: function TuiEditorExample3_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelement */._UZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h4");
        fesm2015_core/* ɵɵtext */._uU(2, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-editor-socket", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("imagePreview", function TuiEditorExample3_Template_tui_editor_socket_imagePreview_3_listener($event) {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r1);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

          return _r0.showImage($event);
        });
        fesm2015_core/* ɵɵelement */._UZ(4, "image-preview-example", null, 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D, image_preview_directive/* TuiEditorImagePreviewDirective */.Z, ImagePreviewExampleComponent],
    styles: [".editor[_ngcontent-%COMP%]{min-height:30rem}"],
    changeDetection: 0
  });
  return TuiEditorExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/4/index.ts






let TuiEditorExample4 = /*#__PURE__*/(() => {
  class TuiEditorExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI( // Legacy HTML markup from DB
      `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  TuiEditorExample4.ɵfac = function TuiEditorExample4_Factory(t) {
    return new (t || TuiEditorExample4)();
  };

  TuiEditorExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample4,
    selectors: [["tui-editor-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      useValue: addon_editor.defaultEditorExtensions
    }, {
      provide: addon_editor.TUI_EDITOR_CONTENT_PROCESSOR,
      useValue: addon_editor.tuiLegacyEditorConverter
    }])],
    decls: 9,
    vars: 3,
    consts: [[1, "editor", 3, "formControl"], [1, "socket", 3, "content"]],
    template: function TuiEditorExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Placeholder\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "h4");
        fesm2015_core/* ɵɵtext */._uU(3, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-editor-socket", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "h4");
        fesm2015_core/* ɵɵtext */._uU(6, "Text:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D],
    styles: [".editor[_ngcontent-%COMP%]{min-height:20rem}.socket[_ngcontent-%COMP%]{white-space:pre-wrap}"],
    changeDetection: 0
  });
  return TuiEditorExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/5/index.ts







let TuiEditorExample5 = /*#__PURE__*/(() => {
  class TuiEditorExample5 {
    constructor() {
      this.builtInTools = [addon_editor.TuiEditorTool.Undo, addon_editor.TuiEditorTool.Group];
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.control.patchValue(`<div data-type="group"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another draggable paragraph.</p></div><div data-type="group"><p>Let’s finish with a boring paragraph.</p></div>`);
    }

  }

  TuiEditorExample5.ɵfac = function TuiEditorExample5_Factory(t) {
    return new (t || TuiEditorExample5)();
  };

  TuiEditorExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample5,
    selectors: [["tui-editor-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      useValue: [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), __webpack_require__.e(/* import() */ 84101).then(__webpack_require__.bind(__webpack_require__, 84101)).then(({
        Placeholder
      }) => Placeholder.configure({
        emptyNodeClass: `t-editor-placeholder`,
        placeholder: `Type '/' for command`,
        includeChildren: true
      })), Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 54920)).then(({
        createGroupExtension
      }) => createGroupExtension({
        nested: false,
        createOnEnter: true
      }))]
    }])],
    decls: 8,
    vars: 4,
    consts: [[1, "notion-editor", 3, "formControl", "tools"], [3, "content"]],
    template: function TuiEditorExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h4");
        fesm2015_core/* ɵɵtext */._uU(2, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-editor-socket", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "h4");
        fesm2015_core/* ɵɵtext */._uU(5, "Text:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiEditorExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/6/index.ts







let TuiEditorExample6 = /*#__PURE__*/(() => {
  class TuiEditorExample6 {
    constructor() {
      this.builtInTools = [addon_editor.TuiEditorTool.Undo, addon_editor.TuiEditorTool.Group];
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.control.patchValue(`<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>`);
    }

  }

  TuiEditorExample6.ɵfac = function TuiEditorExample6_Factory(t) {
    return new (t || TuiEditorExample6)();
  };

  TuiEditorExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample6,
    selectors: [["tui-editor-example-6"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      useValue: [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 54920)).then(({
        createGroupExtension
      }) => createGroupExtension({
        draggable: false,
        // @note: you can override css styles with your own classes
        groupNodeClass: `group`,
        groupPointerNodeClass: `` // anyway element doesn't exists if `draggable` is false

      }))]
    }])],
    decls: 8,
    vars: 4,
    consts: [[1, "editor", 3, "formControl", "tools"], [3, "content"]],
    template: function TuiEditorExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h4");
        fesm2015_core/* ɵɵtext */._uU(2, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-editor-socket", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "h4");
        fesm2015_core/* ɵɵtext */._uU(5, "Text:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D],
    styles: [".editor[_ngcontent-%COMP%]{min-height:30rem}.editor[_ngcontent-%COMP%]     .group{position:relative;display:flex;flex-direction:column;padding:.5rem;margin:.5rem 0;border-radius:.5rem;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 10px 20px rgba(0,0,0,.1)}"],
    changeDetection: 0
  });
  return TuiEditorExample6;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js
var fromEvent = __webpack_require__(22759);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/7/image-loader.ts


function imageLoader(service) {
  return file => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return (0,fromEvent/* fromEvent */.R)(fileReader, `load`).pipe((0,map/* map */.U)(() => String(fileReader.result))).pipe((0,switchMap/* switchMap */.w)(base64 => service.save(base64)));
  };
}
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/from.js + 6 modules
var from = __webpack_require__(94402);
// EXTERNAL MODULE: ./projects/demo/src/environments/environment.ts
var environment = __webpack_require__(53585);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/7/imgbb.service.ts





let ImgbbService = /*#__PURE__*/(() => {
  class ImgbbService {
    static createBody(base64) {
      const formData = new FormData();
      formData.append(`image`, base64.split(`,`).pop() || ``);
      return new URLSearchParams(formData);
    }

    save(base64) {
      const {
        host,
        apiKey,
        expiration
      } = environment/* environment.imgbb */.N.imgbb;
      return (0,from/* from */.D)(fetch(`${host}/1/upload?key=${apiKey}&expiration=${expiration}`, {
        method: `POST`,
        body: ImgbbService.createBody(base64),
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`
        }
      }).then(response => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
        return response.json();
      }))).pipe((0,map/* map */.U)(response => response.data.url));
    }

  }

  ImgbbService.ɵfac = function ImgbbService_Factory(t) {
    return new (t || ImgbbService)();
  };

  ImgbbService.ɵprov = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjectable */.Yz7({
    token: ImgbbService,
    factory: ImgbbService.ɵfac,
    providedIn: `root`
  });
  return ImgbbService;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/7/index.ts










let TuiEditorExample7 = /*#__PURE__*/(() => {
  class TuiEditorExample7 {
    constructor() {
      this.builtInTools = [addon_editor.TuiEditorTool.Undo, addon_editor.TuiEditorTool.Img];
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.control.patchValue(`<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`);
    }

  }

  TuiEditorExample7.ɵfac = function TuiEditorExample7_Factory(t) {
    return new (t || TuiEditorExample7)();
  };

  TuiEditorExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiEditorExample7,
    selectors: [["tui-editor-example-7"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      deps: [fesm2015_core/* Injector */.zs3],
      useFactory: injector => [Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 80726)).then(({
        StarterKit
      }) => StarterKit), Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 25039)).then(({
        createImageEditorExtension
      }) => createImageEditorExtension(injector))]
    }, {
      provide: addon_editor.TUI_EDITOR_MIN_IMAGE_WIDTH,
      useValue: 150
    }, {
      provide: addon_editor.TUI_EDITOR_MAX_IMAGE_WIDTH,
      useValue: 400
    }, {
      provide: addon_editor.TUI_IMAGE_LOADER,
      useFactory: imageLoader,
      deps: [ImgbbService]
    }])],
    decls: 8,
    vars: 4,
    consts: [[1, "editor", 3, "formControl", "tools"], [3, "content"]],
    template: function TuiEditorExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-editor", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h4");
        fesm2015_core/* ɵɵtext */._uU(2, "HTML:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-editor-socket", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "h4");
        fesm2015_core/* ɵɵtext */._uU(5, "Text:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tools", ctx.builtInTools);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.control.value || "");
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D],
    styles: [".editor[_ngcontent-%COMP%]{min-height:30rem}"],
    changeDetection: 0
  });
  return TuiEditorExample7;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/editor.component.ts



























function ExampleEditorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 5);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 6);
    fesm2015_core/* ɵɵi18n */.SDv(5, 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 8);
    fesm2015_core/* ɵɵtext */._uU(7, " You can create your own tool: ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "ul", 9);
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(11, "a", 12);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "li", 11);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-editor-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-editor-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(21, "tui-editor-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "tui-doc-example", 15);
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-editor-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "tui-doc-example", 16);
    fesm2015_core/* ɵɵelement */._UZ(25, "tui-editor-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "tui-doc-example", 17);
    fesm2015_core/* ɵɵelement */._UZ(27, "tui-editor-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "tui-doc-example", 18);
    fesm2015_core/* ɵɵelement */._UZ(29, "tui-editor-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7);
  }
}

function ExampleEditorComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleEditorComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleEditorComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleEditorComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleEditorComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleEditorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-editor", 19);
    fesm2015_core/* ɵɵtext */._uU(2, " Start typing ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "h4");
    fesm2015_core/* ɵɵtext */._uU(4, "HTML:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-editor-socket", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "h4");
    fesm2015_core/* ɵɵtext */._uU(7, "Text:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵtext */._uU(9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleEditorComponent_ng_template_2_ng_template_11_Template, 2, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleEditorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleEditorComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleEditorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.control.setValue($event);
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleEditorComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleEditorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.exampleText = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleEditorComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleEditorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.maxHeight = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleEditorComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleEditorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.tools = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("max-height", ctx_r1.maxHeight, "px");
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r1.control)("focusable", ctx_r1.focusable)("exampleText", ctx_r1.exampleText)("readOnly", ctx_r1.readOnly)("tools", ctx_r1.tools)("pseudoInvalid", ctx_r1.pseudoInvalid)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.control.value);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r1.control.value);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.control.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.exampleText);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.maxHeight);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.toolsVariants)("documentationPropertyValue", ctx_r1.tools);
  }
}

function ExampleEditorComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵi18n */.SDv(8, 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 35);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18n */.SDv(12, 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-doc-code", 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.provideExtensions);
  }
}

function ExampleEditorComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(1, 38);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(2, " You can configure some editor's params via DI-token ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TUI_EDITOR_OPTIONS");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " . ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "strong");
    fesm2015_core/* ɵɵtext */._uU(8, "Usage:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 39);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "strong");
    fesm2015_core/* ɵɵtext */._uU(12, "Description of the available configurations:");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "dl");
    fesm2015_core/* ɵɵi18nStart */.tHW(14, 40);
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "dt");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "dd", 41);
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "p");
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵelement */._UZ(20, "strong");
    fesm2015_core/* ɵɵelement */._UZ(21, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "dt");
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "dd", 41);
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "p");
    fesm2015_core/* ɵɵelement */._UZ(26, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r3.exampleEditorOptionsToken);
  }
}

let ExampleEditorComponent = /*#__PURE__*/(() => {
  class ExampleEditorComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 15253).then(__webpack_require__.t.bind(__webpack_require__, 15253, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 15892).then(__webpack_require__.t.bind(__webpack_require__, 15892, 17));
      this.provideExtensions = __webpack_require__.e(/* import() */ 91961).then(__webpack_require__.t.bind(__webpack_require__, 91961, 17));
      this.exampleEditorOptionsToken = __webpack_require__.e(/* import() */ 42729).then(__webpack_require__.t.bind(__webpack_require__, 42729, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 9989).then(__webpack_require__.t.bind(__webpack_require__, 9989, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 67977).then(__webpack_require__.t.bind(__webpack_require__, 67977, 17)),
        LESS: __webpack_require__.e(/* import() */ 7994).then(__webpack_require__.t.bind(__webpack_require__, 7994, 17)),
        'smiles-tool/emoji.extension.ts': __webpack_require__.e(/* import() */ 45342).then(__webpack_require__.t.bind(__webpack_require__, 45342, 17)),
        'smiles-tool/smiles-tool.component.ts': __webpack_require__.e(/* import() */ 51918).then(__webpack_require__.t.bind(__webpack_require__, 51918, 17)),
        'smiles-tool/smiles-tool.template.html': __webpack_require__.e(/* import() */ 16371).then(__webpack_require__.t.bind(__webpack_require__, 16371, 17)),
        'smiles-tool/smiles-tool.styles.less': __webpack_require__.e(/* import() */ 24118).then(__webpack_require__.t.bind(__webpack_require__, 24118, 17)),
        'smiles-tool/smiles-tool.module.ts': __webpack_require__.e(/* import() */ 79702).then(__webpack_require__.t.bind(__webpack_require__, 79702, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 67867).then(__webpack_require__.t.bind(__webpack_require__, 67867, 17)),
        HTML: __webpack_require__.e(/* import() */ 39423).then(__webpack_require__.t.bind(__webpack_require__, 39423, 17)),
        LESS: __webpack_require__.e(/* import() */ 89346).then(__webpack_require__.t.bind(__webpack_require__, 89346, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 65431).then(__webpack_require__.t.bind(__webpack_require__, 65431, 17)),
        HTML: __webpack_require__.e(/* import() */ 56451).then(__webpack_require__.t.bind(__webpack_require__, 56451, 17)),
        LESS: __webpack_require__.e(/* import() */ 34410).then(__webpack_require__.t.bind(__webpack_require__, 34410, 17)),
        'image-preview/image-preview.component.ts': __webpack_require__.e(/* import() */ 193).then(__webpack_require__.t.bind(__webpack_require__, 193, 17)),
        'image-preview/image-preview.module.ts': __webpack_require__.e(/* import() */ 37034).then(__webpack_require__.t.bind(__webpack_require__, 37034, 17)),
        'image-preview/image-preview.style.less': __webpack_require__.e(/* import() */ 60108).then(__webpack_require__.t.bind(__webpack_require__, 60108, 17)),
        'image-preview.template.html': __webpack_require__.e(/* import() */ 3841).then(__webpack_require__.t.bind(__webpack_require__, 3841, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 7138).then(__webpack_require__.t.bind(__webpack_require__, 7138, 17)),
        HTML: __webpack_require__.e(/* import() */ 96748).then(__webpack_require__.t.bind(__webpack_require__, 96748, 17)),
        LESS: __webpack_require__.e(/* import() */ 32831).then(__webpack_require__.t.bind(__webpack_require__, 32831, 17)),
        'legacy-editor.ts': __webpack_require__.e(/* import() */ 58337).then(__webpack_require__.t.bind(__webpack_require__, 58337, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 66840).then(__webpack_require__.t.bind(__webpack_require__, 66840, 17)),
        HTML: __webpack_require__.e(/* import() */ 94973).then(__webpack_require__.t.bind(__webpack_require__, 94973, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 58783).then(__webpack_require__.t.bind(__webpack_require__, 58783, 17)),
        HTML: __webpack_require__.e(/* import() */ 75788).then(__webpack_require__.t.bind(__webpack_require__, 75788, 17)),
        LESS: __webpack_require__.e(/* import() */ 26828).then(__webpack_require__.t.bind(__webpack_require__, 26828, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 61659).then(__webpack_require__.t.bind(__webpack_require__, 61659, 17)),
        HTML: __webpack_require__.e(/* import() */ 90785).then(__webpack_require__.t.bind(__webpack_require__, 90785, 17)),
        LESS: __webpack_require__.e(/* import() */ 79099).then(__webpack_require__.t.bind(__webpack_require__, 79099, 17)),
        './image-loader.ts': __webpack_require__.e(/* import() */ 11050).then(__webpack_require__.t.bind(__webpack_require__, 11050, 17)),
        './imgbb.service.ts': __webpack_require__.e(/* import() */ 26818).then(__webpack_require__.t.bind(__webpack_require__, 26818, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.toolsVariants = [addon_editor.defaultEditorTools, [addon_editor.TuiEditorTool.Bold, addon_editor.TuiEditorTool.Italic, addon_editor.TuiEditorTool.Strikethrough, addon_editor.TuiEditorTool.HR]];
      this.tools = this.toolsVariants[0];
    }

  }

  ExampleEditorComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleEditorComponent_BaseFactory;
    return function ExampleEditorComponent_Factory(t) {
      return (ɵExampleEditorComponent_BaseFactory || (ɵExampleEditorComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleEditorComponent)))(t || ExampleEditorComponent);
    };
  }();

  ExampleEditorComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleEditorComponent,
    selectors: [["example-tui-editor"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleEditorComponent)
    }, {
      provide: addon_editor.TUI_EDITOR_EXTENSIONS,
      useValue: addon_editor.defaultEditorExtensions
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 5,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6878290531283347707$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__1 = goog.getMsg(" Rich Text Editor based on {$startLink} TipTap Editor {$closeLink} for using with Angular forms. For safety reasons use a {$startLink_1} sanitizer {$closeLink} with this component. ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink_1": "\uFFFD#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6878290531283347707$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟7384ac6e9673eac2ca0755fd1c7a8f4cd617d393␟6878290531283347707: Rich Text Editor based on ${"\uFFFD#2\uFFFD"}:START_LINK: TipTap Editor ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\uFFFD#3\uFFFD"}:START_LINK_1: sanitizer ${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_LINK: with this component. `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3861813736526108182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__3 = goog.getMsg(" This component is experimental. Use it with caution. Expect breaking changes ");
        i18n_2 = MSG_EXTERNAL_3861813736526108182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟afe4d6e2ec039466b1c6bbd77c7ed59d2bbf5032␟3861813736526108182: This component is experimental. Use it with caution. Expect breaking changes `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8668316348766652939$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__5 = goog.getMsg("Custom tool");
        i18n_4 = MSG_EXTERNAL_8668316348766652939$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟eb45fe7dc22c363f63b6d6fadfbc3f59a27aecff␟8668316348766652939:Custom tool`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7771894138659657979$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__7 = goog.getMsg("{$startListItem} Create component with tool button (which can get access to {$startLink} original TipTap editor API {$closeLink} via {$startTagCode}TuiTiptapEditorService{$closeTagCode} from {$startTagCode}@taiga-ui/addon-editor{$closeTagCode} ). {$closeListItem}{$startListItem} Pass the component as content projection (with {$startTagCode}ngProjectAs=\"tools\"{$closeTagCode} ) to {$startTagCode}<tui-editor>{$closeTagCode} . {$closeListItem}", {
          "startListItem": "[\uFFFD#10\uFFFD|\uFFFD#14\uFFFD]",
          "startLink": "\uFFFD#11\uFFFD",
          "closeLink": "\uFFFD/#11\uFFFD",
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]",
          "closeListItem": "[\uFFFD/#10\uFFFD|\uFFFD/#14\uFFFD]"
        });
        i18n_6 = MSG_EXTERNAL_7771894138659657979$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟80d0aad7cf71915f6aae574bd227ebd7389fef84␟7771894138659657979:${"[\uFFFD#10\uFFFD|\uFFFD#14\uFFFD]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\uFFFD#11\uFFFD"}:START_LINK: original TipTap editor API ${"\uFFFD/#11\uFFFD"}:CLOSE_LINK: via ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:TuiTiptapEditorService${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#10\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#10\uFFFD|\uFFFD#14\uFFFD]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:ngProjectAs="tools"${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) to ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:<tui-editor>${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD/#10\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3990837998974463308$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__9 = goog.getMsg("Resizable image");
        i18n_8 = MSG_EXTERNAL_3990837998974463308$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟f6e53c7abc5122d1541fe5cfa4dc5220ac8efb0c␟3990837998974463308:Resizable image`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2473520866467645409$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__11 = goog.getMsg("Preview for images");
        i18n_10 = MSG_EXTERNAL_2473520866467645409$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟86b5f3ccdbd16599aa8d4bbb4863c89ad9765727␟2473520866467645409:Preview for images`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2859238356795781221$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__13 = goog.getMsg("Custom processing content");
        i18n_12 = MSG_EXTERNAL_2859238356795781221$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟31d92508c2a108ef09514c1b3a18449130892445␟2859238356795781221:Custom processing content`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8116090618226965501$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__15 = goog.getMsg("Draggable groups the looks like in Notion");
        i18n_14 = MSG_EXTERNAL_8116090618226965501$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟6ad3244077a72df80081e9add4295ed2fea7544f␟8116090618226965501:Draggable groups the looks like in Notion`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4148315862675822682$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__17 = goog.getMsg("Simple create nested groups");
        i18n_16 = MSG_EXTERNAL_4148315862675822682$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟4a95d96176a733e60eb883df1c62627dab7f2148␟4148315862675822682:Simple create nested groups`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3767163507419562069$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__19 = goog.getMsg("Uploading images to hosting");
        i18n_18 = MSG_EXTERNAL_3767163507419562069$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟bd608cde6ee5724a15ebb3be9804114cbd1782f8␟3767163507419562069:Uploading images to hosting`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___21 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7940519464117146012$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___23 = goog.getMsg(" Example pass HTML code ");
        i18n_22 = MSG_EXTERNAL_7940519464117146012$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟f687e715de245f498c0a37306e79b12200de4a82␟7940519464117146012: Example pass HTML code `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8752995704195016078$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___25 = goog.getMsg(" Example text shown on empty focused input ");
        i18n_24 = MSG_EXTERNAL_8752995704195016078$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5814961118656625966$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___27 = goog.getMsg(" Value of CSS-property \"max-height\" ");
        i18n_26 = MSG_EXTERNAL_5814961118656625966$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟c03a591db7952f8ac1b7f340e01d44bdc69b622d␟5814961118656625966: Value of CSS-property "max-height" `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2877889858952730048$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___29 = goog.getMsg(" Allowed edit tools ");
        i18n_28 = MSG_EXTERNAL_2877889858952730048$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1340683940823692236$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__31 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiEditorModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_30 = MSG_EXTERNAL_1340683940823692236$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiEditorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__33 = goog.getMsg("Add to the template:");
        i18n_32 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5735999802171173508$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__35 = goog.getMsg("Provide the required extensions or use the default ones:");
        i18n_34 = MSG_EXTERNAL_5735999802171173508$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟97c5c1e54acb7f33324912552bd6d76d1e201310␟5735999802171173508:Provide the required extensions or use the default ones:`;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8578885722748078515$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__37 = goog.getMsg("TUI_EDITOR_OPTIONS");
        i18n_36 = MSG_EXTERNAL_8578885722748078515$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟efaa49ce895f1db3267f161305f62fa8bd4c8e7b␟8578885722748078515:TUI_EDITOR_OPTIONS`;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4694114107272609448$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__39 = goog.getMsg("{$startTagDt}{$startTagCode}colors{$closeTagCode}{$closeTagDt}{$startTagDd} map of colors in toolbar's dropdowns with color-selection. {$startParagraph} It accepts {$startTagCode}ReadonlyMap<string, string>{$closeTagCode} : the {$startTagStrong}key{$closeTagStrong} is the name of the color (used only for hint and accessibility), the {$startTagStrong}value{$closeTagStrong} \u2013 HTML color code. {$closeParagraph}{$closeTagDd}{$startTagDt}{$startTagCode}blankColor{$closeTagCode}{$closeTagDt}{$startTagDd} Null color. It is used in situations when there is no color selected. {$startParagraph} it accepts {$startTagCode}string{$closeTagCode} (HTML color code). {$closeParagraph}{$closeTagDd}", {
          "startTagDt": "[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]",
          "startTagCode": "[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]",
          "closeTagCode": "[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]",
          "closeTagDt": "[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]",
          "startTagDd": "[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]",
          "startParagraph": "[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]",
          "startTagStrong": "[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]",
          "closeTagStrong": "[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]",
          "closeParagraph": "[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]",
          "closeTagDd": "[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]"
        });
        i18n_38 = MSG_EXTERNAL_4694114107272609448$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_EDITOR_EDITOR_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟5371228197c6562593d60fad333c3a5184d01859␟4694114107272609448:${"[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_DT:${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:colors${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_DT:${"[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]"}:START_TAG_DD: map of colors in toolbar's dropdowns with color-selection. ${"[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]"}:START_PARAGRAPH: It accepts ${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:ReadonlyMap<string, string>${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE: : the ${"[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_STRONG:key${"[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_STRONG: is the name of the color (used only for hint and accessibility), the ${"[\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_STRONG:value${"[\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_STRONG: – HTML color code. ${"[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#15\uFFFD|\uFFFD#22\uFFFD]"}:START_TAG_DT:${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:blankColor${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#15\uFFFD|\uFFFD/#22\uFFFD]"}:CLOSE_TAG_DT:${"[\uFFFD#17\uFFFD|\uFFFD#24\uFFFD]"}:START_TAG_DD: Null color. It is used in situations when there is no color selected. ${"[\uFFFD#18\uFFFD|\uFFFD#25\uFFFD]"}:START_PARAGRAPH: it accepts ${"[\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#23\uFFFD|\uFFFD#26\uFFFD]"}:START_TAG_CODE:string${"[\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD]"}:CLOSE_TAG_CODE: (HTML color code). ${"[\uFFFD/#18\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD/#17\uFFFD|\uFFFD/#24\uFFFD]"}:CLOSE_TAG_DD:`;
      }

      i18n_38 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_38);
      return [["header", "Editor", "package", "ADDON-EDITOR", "type", "components"], ["pageTab", ""], ["pageTab", "DI tokens"], i18n_0, ["tuiLink", "", "href", "https://www.tiptap.dev/"], ["tuiLink", "", "routerLink", "/icon-set", "fragment", "sanitizer"], ["status", "warning", 1, "tui-space_top-4"], i18n_2, ["id", "custom-tool", "heading", i18n_4, 3, "content"], [1, "tui-list", "tui-space_bottom-6"], i18n_6, [1, "tui-list__item"], ["tuiLink", "", "target", "_blank", "href", "https://tiptap.dev/api/introduction"], ["id", "resizable-image", "heading", i18n_8, 3, "content"], ["id", "preview-image", "heading", i18n_10, 3, "content"], ["id", "custom-processing", "heading", i18n_12, 3, "content"], ["id", "draggable-groups", "heading", i18n_14, 3, "content"], ["id", "nested-groups", "heading", i18n_16, 3, "content"], ["id", "upload-images", "heading", i18n_18, 3, "content"], [3, "formControl", "focusable", "exampleText", "readOnly", "tools", "pseudoInvalid", "pseudoFocus", "pseudoHover"], [1, "tui-example", 3, "content"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "ngModel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "exampleText", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "style.max-height.px", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tools", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<TuiEditorTool>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, [1, "b-demo-steps"], i18n_30, ["filename", "myComponent.module.ts", 3, "code"], i18n_32, ["filename", "myComponent.template.html", 3, "code"], i18n_34, ["filename", "myComponent.component.ts", 3, "code"], i18n_36, [3, "code"], i18n_38, [1, "tui-space_bottom-5"]];
    },
    template: function ExampleEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleEditorComponent_ng_template_1_Template, 30, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleEditorComponent_ng_template_2_Template, 16, 18, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleEditorComponent_ng_template_3_Template, 14, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleEditorComponent_ng_template_4_Template, 27, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiEditorExample1, TuiEditorExample2, TuiEditorExample3, TuiEditorExample4, TuiEditorExample5, TuiEditorExample6, TuiEditorExample7, demo_component/* TuiDocDemoComponent */.F, editor_component/* TuiEditorComponent */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, editor_socket_component/* TuiEditorSocketComponent */.D, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".tui-editor-socket code:not(.hljs):not([class*=\"language-\"]):not(.exception){box-shadow:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleEditorComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/1/smiles-tool/smiles-tool.module.ts





let ExampleSmilesToolModule = /*#__PURE__*/(() => {
  class ExampleSmilesToolModule {}

  ExampleSmilesToolModule.ɵfac = function ExampleSmilesToolModule_Factory(t) {
    return new (t || ExampleSmilesToolModule)();
  };

  ExampleSmilesToolModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleSmilesToolModule
  });
  ExampleSmilesToolModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiButtonModule, core.TuiHostedDropdownModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule]]
  });
  return ExampleSmilesToolModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleSmilesToolModule, {
    declarations: [ExampleSmilesToolComponent],
    imports: [common/* CommonModule */.ez, core.TuiButtonModule, core.TuiHostedDropdownModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule],
    exports: [ExampleSmilesToolComponent]
  });
})();
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/examples/3/image-preview/image-preview.module.ts







let ImagePreviewExampleModule = /*#__PURE__*/(() => {
  class ImagePreviewExampleModule {}

  ImagePreviewExampleModule.ɵfac = function ImagePreviewExampleModule_Factory(t) {
    return new (t || ImagePreviewExampleModule)();
  };

  ImagePreviewExampleModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ImagePreviewExampleModule
  });
  ImagePreviewExampleModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_preview.TuiPreviewModule, core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, addon_editor.TuiEditorImagePreviewModule], addon_editor.TuiEditorImagePreviewModule, addon_editor.TuiEditorImagePreviewModule]
  });
  return ImagePreviewExampleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ImagePreviewExampleModule, {
    declarations: [ImagePreviewExampleComponent],
    imports: [common/* CommonModule */.ez, addon_preview.TuiPreviewModule, core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, addon_editor.TuiEditorImagePreviewModule],
    exports: [addon_editor.TuiEditorImagePreviewModule, addon_editor.TuiEditorImagePreviewModule, ImagePreviewExampleComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/editor/editor.module.ts



















let ExampleTuiEditorModule = /*#__PURE__*/(() => {
  class ExampleTuiEditorModule {}

  ExampleTuiEditorModule.ɵfac = function ExampleTuiEditorModule_Factory(t) {
    return new (t || ExampleTuiEditorModule)();
  };

  ExampleTuiEditorModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiEditorModule
  });
  ExampleTuiEditorModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, addon_editor.TuiEditorModule, addon_editor.TuiEditorSocketModule, core.TuiNotificationModule, core.TuiButtonModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiSvgModule, ExampleSmilesToolModule, ImagePreviewExampleModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleEditorComponent))]]
  });
  return ExampleTuiEditorModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiEditorModule, {
    declarations: [ExampleEditorComponent, TuiEditorExample1, TuiEditorExample2, TuiEditorExample3, TuiEditorExample4, TuiEditorExample6, TuiEditorExample5, TuiEditorExample7],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, addon_editor.TuiEditorModule, addon_editor.TuiEditorSocketModule, core.TuiNotificationModule, core.TuiButtonModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiSvgModule, ExampleSmilesToolModule, ImagePreviewExampleModule, router/* RouterModule */.Bz],
    exports: [ExampleEditorComponent]
  });
})();

/***/ })

}]);