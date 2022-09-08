"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[99596],{

/***/ 99596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMediaModule": () => (/* binding */ ExampleTuiMediaModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/media/media.directive.ts
var media_directive = __webpack_require__(1632);
// EXTERNAL MODULE: ./projects/cdk/directives/high-dpi/high-dpi.directive.ts
var high_dpi_directive = __webpack_require__(17678);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/media/examples/1/index.ts




function TuiMediaExample1_source_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "source", 3);
  }
}

let TuiMediaExample1 = /*#__PURE__*/(() => {
  class TuiMediaExample1 {
    constructor() {
      this.currentTime = 0;
      this.volume = 1;
      this.paused = true;
    }

  }

  TuiMediaExample1.ɵfac = function TuiMediaExample1_Factory(t) {
    return new (t || TuiMediaExample1)();
  };

  TuiMediaExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMediaExample1,
    selectors: [["tui-media-example-1"]],
    decls: 9,
    vars: 6,
    consts: [["tuiMedia", "", "controls", "", "width", "320", 1, "video", 3, "currentTime", "paused", "volume", "currentTimeChange", "pausedChange", "volumeChange"], ["src", "/assets/media/bbb_dpi.ogv", "type", "video/ogg", 4, "tuiHighDpi"], ["src", "/assets/media/bbb.mp4", "type", "video/mp4"], ["src", "/assets/media/bbb_dpi.ogv", "type", "video/ogg"]],
    template: function TuiMediaExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "video", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("currentTimeChange", function TuiMediaExample1_Template_video_currentTimeChange_0_listener($event) {
          return ctx.currentTime = $event;
        })("pausedChange", function TuiMediaExample1_Template_video_pausedChange_0_listener($event) {
          return ctx.paused = $event;
        })("volumeChange", function TuiMediaExample1_Template_video_volumeChange_0_listener($event) {
          return ctx.volume = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiMediaExample1_source_1_Template, 1, 0, "source", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "source", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("currentTime", ctx.currentTime)("paused", ctx.paused)("volume", ctx.volume);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("currentTime: ", ctx.currentTime, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("volume: ", ctx.volume, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("paused: ", ctx.paused, "");
      }
    },
    directives: [media_directive/* TuiMediaDirective */.N, high_dpi_directive/* TuiHighDpiDirective */.J],
    styles: ["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:1.5rem}"],
    changeDetection: 0
  });
  return TuiMediaExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/slider/slider.component.ts
var slider_component = __webpack_require__(47044);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/media/examples/2/index.ts







let TuiMediaExample2 = /*#__PURE__*/(() => {
  class TuiMediaExample2 {
    constructor() {
      this.currentTime = 0;
      this.paused = true;
    }

    get icon() {
      return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;
    }

    getTime(time) {
      const integer = Math.round(time || 0);
      const seconds = integer % cdk.SECONDS_IN_MINUTE;
      const minutes = (integer - seconds) / cdk.SECONDS_IN_MINUTE;
      const secondsString = String(seconds);
      const minutesString = String(minutes);
      const paddedSeconds = secondsString.length === 1 ? `0${secondsString}` : secondsString;
      const paddedMinutes = minutesString.length === 1 ? `0${minutesString}` : minutesString;
      return `${paddedMinutes}:${paddedSeconds}`;
    }

    toggleState() {
      this.paused = !this.paused;
    }

  }

  TuiMediaExample2.ɵfac = function TuiMediaExample2_Factory(t) {
    return new (t || TuiMediaExample2)();
  };

  TuiMediaExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMediaExample2,
    selectors: [["tui-media-example-2"]],
    decls: 13,
    vars: 9,
    consts: [[1, "player"], ["tuiMedia", "", "width", "320", 1, "video", 3, "currentTime", "paused", "currentTimeChange", "pausedChange", "click"], ["video", ""], ["src", "/assets/media/bbb.mp4", "type", "video/mp4"], ["tuiMode", "onDark", 1, "controls"], ["tuiIconButton", "", "type", "button", "title", "Play/Pause", "size", "s", "shape", "rounded", "appearance", "flat", 3, "icon", "click"], ["tuiSlider", "", "type", "range", "step", "any", 1, "slider", 3, "max", "ngModel", "ngModelChange"], [1, "time"]],
    template: function TuiMediaExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "video", 1, 2);
        fesm2015_core/* ɵɵlistener */.NdJ("currentTimeChange", function TuiMediaExample2_Template_video_currentTimeChange_1_listener($event) {
          return ctx.currentTime = $event;
        })("pausedChange", function TuiMediaExample2_Template_video_pausedChange_1_listener($event) {
          return ctx.paused = $event;
        })("click", function TuiMediaExample2_Template_video_click_1_listener() {
          return ctx.toggleState();
        });
        fesm2015_core/* ɵɵelement */._UZ(3, "source", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMediaExample2_Template_button_click_5_listener() {
          return ctx.toggleState();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "input", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiMediaExample2_Template_input_ngModelChange_6_listener($event) {
          return ctx.currentTime = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "time");
        fesm2015_core/* ɵɵtext */._uU(9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(10, " / ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "time");
        fesm2015_core/* ɵɵtext */._uU(12);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("currentTime", ctx.currentTime)("paused", ctx.paused);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", ctx.icon);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", _r0.duration)("ngModel", ctx.currentTime);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵattribute */.uIk("datetime", ctx.getTime(ctx.currentTime));
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.getTime(ctx.currentTime), " ");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵattribute */.uIk("datetime", ctx.getTime(_r0.duration));
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.getTime(_r0.duration), " ");
      }
    },
    directives: [media_directive/* TuiMediaDirective */.N, mode_directive/* TuiModeDirective */.w, button_component/* TuiButtonComponent */.v, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: ["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-base-01);background:linear-gradient(to bottom,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1;margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;margin-left:.75rem;font-size:.8125rem}"],
    changeDetection: 0
  });
  return TuiMediaExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/media/examples/3/index.ts






let TuiMediaExample3 = /*#__PURE__*/(() => {
  class TuiMediaExample3 {
    constructor() {
      this.currentTime = 0;
      this.paused = true;
    }

    get icon() {
      return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;
    }

    toggleState() {
      this.paused = !this.paused;
    }

  }

  TuiMediaExample3.ɵfac = function TuiMediaExample3_Factory(t) {
    return new (t || TuiMediaExample3)();
  };

  TuiMediaExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMediaExample3,
    selectors: [["tui-media-example-3"]],
    decls: 9,
    vars: 5,
    consts: [[1, "tui-player"], ["tuiMedia", "", "src", "assets/media/strays.mp3", 3, "currentTime", "paused", "currentTimeChange", "pausedChange"], ["audio", ""], ["tuiIconButton", "", "type", "button", "shape", "rounded", "appearance", "secondary", "title", "Play/Pause", 3, "icon", "click"], ["tuiLink", "", "href", "https://waterplea.bandcamp.com/"], ["tuiSlider", "", "type", "range", "step", "any", 1, "slider", 3, "max", "ngModel", "ngModelChange"]],
    template: function TuiMediaExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "audio", 1, 2);
        fesm2015_core/* ɵɵlistener */.NdJ("currentTimeChange", function TuiMediaExample3_Template_audio_currentTimeChange_1_listener($event) {
          return ctx.currentTime = $event;
        })("pausedChange", function TuiMediaExample3_Template_audio_pausedChange_1_listener($event) {
          return ctx.paused = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMediaExample3_Template_button_click_3_listener() {
          return ctx.toggleState();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Waterplea ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " \u2014 Strays ");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "input", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiMediaExample3_Template_input_ngModelChange_8_listener($event) {
          return ctx.currentTime = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("currentTime", ctx.currentTime)("paused", ctx.paused);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", ctx.icon);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("max", _r0.duration)("ngModel", ctx.currentTime);
      }
    },
    directives: [media_directive/* TuiMediaDirective */.N, button_component/* TuiButtonComponent */.v, link_component/* TuiLinkComponent */.V, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".tui-player{display:flex;width:20rem;border-radius:6.25rem;background:var(--tui-secondary);--tui-primary: var(--tui-link);--tui-primary-hover: var(--tui-link-hover);--tui-primary-active: var(--tui-link-hover)}.tui-player>div{flex:1;margin:.375rem 1.75rem 0 .375rem}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMediaExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/media/media.component.ts












function ExampleTuiMediaComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-media-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-media-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-media-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiMediaComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiMediaComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiMediaComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiMediaComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiMediaComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "audio", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("pausedChange", function ExampleTuiMediaComponent_ng_template_2_Template_audio_pausedChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.paused = $event;
    })("currentTimeChange", function ExampleTuiMediaComponent_ng_template_2_Template_audio_currentTimeChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.currentTime = $event;
    })("volumeChange", function ExampleTuiMediaComponent_ng_template_2_Template_audio_volumeChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.volume = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMediaComponent_ng_template_2_ng_template_2_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.currentTime = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMediaComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.paused = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiMediaComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.playbackRate = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiMediaComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMediaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.volume = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("playbackRate", ctx_r1.playbackRate)("paused", ctx_r1.paused)("currentTime", ctx_r1.currentTime)("volume", ctx_r1.volume);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.currentTime);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.paused);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.playbackRate);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.volumeVariants)("documentationPropertyValue", ctx_r1.volume);
  }
}

function ExampleTuiMediaComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 19);
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

let ExampleTuiMediaComponent = /*#__PURE__*/(() => {
  class ExampleTuiMediaComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 41662).then(__webpack_require__.t.bind(__webpack_require__, 41662, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 26712).then(__webpack_require__.t.bind(__webpack_require__, 26712, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 23856).then(__webpack_require__.t.bind(__webpack_require__, 23856, 17)),
        HTML: __webpack_require__.e(/* import() */ 71713).then(__webpack_require__.t.bind(__webpack_require__, 71713, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 48365).then(__webpack_require__.t.bind(__webpack_require__, 48365, 17)),
        HTML: __webpack_require__.e(/* import() */ 74607).then(__webpack_require__.t.bind(__webpack_require__, 74607, 17)),
        LESS: __webpack_require__.e(/* import() */ 42161).then(__webpack_require__.t.bind(__webpack_require__, 42161, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 12258).then(__webpack_require__.t.bind(__webpack_require__, 33767, 17)),
        HTML: __webpack_require__.e(/* import() */ 26349).then(__webpack_require__.t.bind(__webpack_require__, 26349, 17)),
        LESS: __webpack_require__.e(/* import() */ 95604).then(__webpack_require__.t.bind(__webpack_require__, 95604, 17))
      };
      this.volumeVariants = [1, 0.5, 0.25, 0];
      this.playbackRate = 1;
      this.currentTime = 0;
      this.volume = this.volumeVariants[0];
      this.paused = true;
    }

  }

  ExampleTuiMediaComponent.ɵfac = function ExampleTuiMediaComponent_Factory(t) {
    return new (t || ExampleTuiMediaComponent)();
  };

  ExampleTuiMediaComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMediaComponent,
    selectors: [["example-tui-media"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3250391385569692601$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS_1 = goog.getMsg("Media");
        i18n_0 = MSG_EXTERNAL_3250391385569692601$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟8a27a855a00b08d2ca981207638ea9097032412b␟3250391385569692601:Media`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_72364305241305412$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__3 = goog.getMsg("Directive for declarative work with HTML5 video and audio");
        i18n_2 = MSG_EXTERNAL_72364305241305412$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟5c7e436081ab7b7e75134ad0f3f5732344199ff2␟72364305241305412:Directive for declarative work with HTML5 video and audio`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8073419804355870473$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__5 = goog.getMsg("Native controls");
        i18n_4 = MSG_EXTERNAL_8073419804355870473$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟d0326b072d54c553e428c3b40cecb689f4e7adce␟8073419804355870473:Native controls`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6549265851868599441$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__7 = goog.getMsg("Video");
        i18n_6 = MSG_EXTERNAL_6549265851868599441$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟2d1ea268a6a9f483dbc2cbfe19bf4256a57a6af4␟6549265851868599441:Video`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_347407180135731058$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__9 = goog.getMsg("Audio");
        i18n_8 = MSG_EXTERNAL_347407180135731058$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟f0baeb8b69d120073b6d60d34785889b0c3232c8␟347407180135731058:Audio`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3780515939858026328$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___11 = goog.getMsg(" Current time ");
        i18n_10 = MSG_EXTERNAL_3780515939858026328$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟69f9d26d1f4b33afc3d5b0833e9d3c849c2c1707␟3780515939858026328: Current time `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_256940080640657353$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___13 = goog.getMsg(" Paused state ");
        i18n_12 = MSG_EXTERNAL_256940080640657353$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟9dcd2128593c62256dd3464320ec1885f5b4e168␟256940080640657353: Paused state `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2465791192649345432$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___15 = goog.getMsg(" Playback speed ");
        i18n_14 = MSG_EXTERNAL_2465791192649345432$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟2537ae0f1e8aab6c5fecda1acda4958a53a7ca40␟2465791192649345432: Playback speed `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4429171508194850919$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___17 = goog.getMsg(" Volume ");
        i18n_16 = MSG_EXTERNAL_4429171508194850919$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟140fa9b9d19e3ff4049b0fe947f1f599a498d2ca␟4429171508194850919: Volume `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4130706201499310656$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiMediaModule{$closeTagCode} into your component module: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_4130706201499310656$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟d7cf4a0ab0cf4835b61647afeed7ad7d789a0e94␟4130706201499310656: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMediaModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component module: `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MEDIA_MEDIA_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], i18n_2, ["id", "native", "heading", i18n_4, 3, "content"], ["id", "video", "heading", i18n_6, 3, "content"], ["id", "audio", "heading", i18n_8, 3, "content"], ["tuiMedia", "", "controls", "", "src", "assets/media/strays.mp3", 3, "playbackRate", "paused", "currentTime", "volume", "pausedChange", "currentTimeChange", "volumeChange"], ["documentationPropertyName", "currentTime", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "paused", "documentationPropertyType", "boolean", "documentationPropertyMode", "input-output", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "playbackRate", "documentationPropertyType", "number", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "volume", "documentationPropertyType", "number", "documentationPropertyMode", "input-output", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMediaComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMediaComponent_ng_template_2_Template, 6, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMediaComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMediaExample1, TuiMediaExample2, TuiMediaExample3, media_directive/* TuiMediaDirective */.N, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiMediaComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/media/media.module.ts













let ExampleTuiMediaModule = /*#__PURE__*/(() => {
  class ExampleTuiMediaModule {}

  ExampleTuiMediaModule.ɵfac = function ExampleTuiMediaModule_Factory(t) {
    return new (t || ExampleTuiMediaModule)();
  };

  ExampleTuiMediaModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMediaModule
  });
  ExampleTuiMediaModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, cdk.TuiMediaModule, cdk.TuiHighDpiModule, core.TuiLinkModule, core.TuiButtonModule, kit.TuiSliderModule, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMediaComponent))]]
  });
  return ExampleTuiMediaModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMediaModule, {
    declarations: [ExampleTuiMediaComponent, TuiMediaExample1, TuiMediaExample2, TuiMediaExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, cdk.TuiMediaModule, cdk.TuiHighDpiModule, core.TuiLinkModule, core.TuiButtonModule, kit.TuiSliderModule, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiMediaComponent]
  });
})();

/***/ })

}]);