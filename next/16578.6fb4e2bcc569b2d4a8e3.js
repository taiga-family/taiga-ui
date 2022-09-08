"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[16578],{

/***/ 16578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleMathModule": () => (/* binding */ ExampleMathModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/examples/1/index.ts






let TuiMathExample1 = /*#__PURE__*/(() => {
  class TuiMathExample1 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(1.005),
        precision: new fesm2015_forms/* FormControl */.NI(2)
      });
    }

    get rounded() {
      const {
        value,
        precision
      } = this.parametersForm.value;
      return (0,cdk/* tuiRound */.FGw)(value !== null && value !== void 0 ? value : 1.005, precision !== null && precision !== void 0 ? precision : 2);
    }

    get floored() {
      const {
        value,
        precision
      } = this.parametersForm.value;
      return (0,cdk/* tuiFloor */.OTC)(value !== null && value !== void 0 ? value : 1.005, precision !== null && precision !== void 0 ? precision : 2);
    }

    get ceiled() {
      const {
        value,
        precision
      } = this.parametersForm.value;
      return (0,cdk/* tuiCeil */.BrH)(value !== null && value !== void 0 ? value : 1.005, precision !== null && precision !== void 0 ? precision : 2);
    }

  }

  TuiMathExample1.ɵfac = function TuiMathExample1_Factory(t) {
    return new (t || TuiMathExample1)();
  };

  TuiMathExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMathExample1,
    selectors: [["tui-math-example-1"]],
    decls: 12,
    vars: 5,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2", 3, "precision"], ["formControlName", "precision", 1, "tui-space_top-2"]],
    template: function TuiMathExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "p");
        core/* ɵɵtext */._uU(1);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "p");
        core/* ɵɵtext */._uU(3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "p");
        core/* ɵɵtext */._uU(5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "form", 0);
        core/* ɵɵelementStart */.TgZ(7, "div", 1);
        core/* ɵɵelementStart */.TgZ(8, "tui-input-number", 2);
        core/* ɵɵtext */._uU(9, " value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "tui-input-number", 3);
        core/* ɵɵtext */._uU(11, " precision ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.rounded, " = round(value, precision);");
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.floored, " = floor(value, precision);");
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.ceiled, " = ceil(value, precision);");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("precision", 3);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMathExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/examples/2/index.ts






let TuiMathExample2 = /*#__PURE__*/(() => {
  class TuiMathExample2 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(13),
        fromInclude: new fesm2015_forms/* FormControl */.NI(5),
        toExclude: new fesm2015_forms/* FormControl */.NI(42)
      });
    }

    get ranged() {
      const {
        value,
        fromInclude,
        toExclude
      } = this.parametersForm.value;
      return (0,cdk/* tuiInRange */.wfT)(value !== null && value !== void 0 ? value : 13, fromInclude !== null && fromInclude !== void 0 ? fromInclude : 5, toExclude !== null && toExclude !== void 0 ? toExclude : 42);
    }

  }

  TuiMathExample2.ɵfac = function TuiMathExample2_Factory(t) {
    return new (t || TuiMathExample2)();
  };

  TuiMathExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMathExample2,
    selectors: [["tui-math-example-2"]],
    decls: 9,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "fromInclude", 1, "tui-space_top-2"], ["formControlName", "toExclude", 1, "tui-space_top-2"]],
    template: function TuiMathExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtext */._uU(0);
        core/* ɵɵelementStart */.TgZ(1, "form", 0);
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 2);
        core/* ɵɵtext */._uU(4, " value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "tui-input-number", 3);
        core/* ɵɵtext */._uU(6, " fromInclude ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "tui-input-number", 4);
        core/* ɵɵtext */._uU(8, " toExclude ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵtextInterpolate1 */.hij("", ctx.ranged, " = inRange(value, fromInclude, toExclude); ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMathExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/examples/3/index.ts






let TuiMathExample3 = /*#__PURE__*/(() => {
  class TuiMathExample3 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(0),
        min: new fesm2015_forms/* FormControl */.NI(5),
        max: new fesm2015_forms/* FormControl */.NI(42)
      });
    }

    get normalized() {
      const {
        value,
        min,
        max
      } = this.parametersForm.value;
      return (0,cdk/* tuiNormalizeToIntNumber */.G1V)(value !== null && value !== void 0 ? value : 0, min !== null && min !== void 0 ? min : 5, max !== null && max !== void 0 ? max : 42);
    }

  }

  TuiMathExample3.ɵfac = function TuiMathExample3_Factory(t) {
    return new (t || TuiMathExample3)();
  };

  TuiMathExample3.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMathExample3,
    selectors: [["tui-math-example-3"]],
    decls: 9,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "min", 1, "tui-space_top-2"], ["formControlName", "max", 1, "tui-space_top-2"]],
    template: function TuiMathExample3_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtext */._uU(0);
        core/* ɵɵelementStart */.TgZ(1, "form", 0);
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 2);
        core/* ɵɵtext */._uU(4, " value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "tui-input-number", 3);
        core/* ɵɵtext */._uU(6, " min ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "tui-input-number", 4);
        core/* ɵɵtext */._uU(8, " max ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵtextInterpolate1 */.hij("", ctx.normalized, " = normalizeToIntNumber(value, min, max); ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMathExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/examples/4/index.ts






let TuiMathExample4 = /*#__PURE__*/(() => {
  class TuiMathExample4 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(3),
        quantum: new fesm2015_forms/* FormControl */.NI(2)
      });
    }

    get quantized() {
      const {
        value,
        quantum
      } = this.parametersForm.value;
      return (0,cdk/* tuiQuantize */.Mz4)(value !== null && value !== void 0 ? value : 3, quantum !== null && quantum !== void 0 ? quantum : 2);
    }

  }

  TuiMathExample4.ɵfac = function TuiMathExample4_Factory(t) {
    return new (t || TuiMathExample4)();
  };

  TuiMathExample4.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMathExample4,
    selectors: [["tui-math-example-4"]],
    decls: 7,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "quantum", 1, "tui-space_top-2"]],
    template: function TuiMathExample4_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtext */._uU(0);
        core/* ɵɵelementStart */.TgZ(1, "form", 0);
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 2);
        core/* ɵɵtext */._uU(4, " value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "tui-input-number", 3);
        core/* ɵɵtext */._uU(6, " quantum ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵtextInterpolate1 */.hij("", ctx.quantized, " = quantize(value, quantum); ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMathExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/examples/5/index.ts






let TuiMathExample5 = /*#__PURE__*/(() => {
  class TuiMathExample5 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(0),
        min: new fesm2015_forms/* FormControl */.NI(5),
        max: new fesm2015_forms/* FormControl */.NI(42)
      });
    }

    get clamped() {
      const {
        value,
        min,
        max
      } = this.parametersForm.value;
      return (0,cdk/* tuiClamp */.Kiv)(value !== null && value !== void 0 ? value : 0, min !== null && min !== void 0 ? min : 5, max !== null && max !== void 0 ? max : 42);
    }

  }

  TuiMathExample5.ɵfac = function TuiMathExample5_Factory(t) {
    return new (t || TuiMathExample5)();
  };

  TuiMathExample5.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMathExample5,
    selectors: [["tui-math-example-5"]],
    decls: 9,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "min", 1, "tui-space_top-2"], ["formControlName", "max", 1, "tui-space_top-2"]],
    template: function TuiMathExample5_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtext */._uU(0);
        core/* ɵɵelementStart */.TgZ(1, "form", 0);
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 2);
        core/* ɵɵtext */._uU(4, " value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "tui-input-number", 3);
        core/* ɵɵtext */._uU(6, " min ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "tui-input-number", 4);
        core/* ɵɵtext */._uU(8, " max ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵtextInterpolate1 */.hij("", ctx.clamped, " = clamp(value, min, max); ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMathExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/math.component.ts











function ExampleMathComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-math-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(5, "tui-math-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 6);
    core/* ɵɵelement */._UZ(7, "tui-math-example-3");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    core/* ɵɵelement */._UZ(9, "tui-math-example-4");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    core/* ɵɵelement */._UZ(11, "tui-math-example-5");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleMathComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 9);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18n */.SDv(3, 10);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "tui-doc-code", 11);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.importComponentExample);
  }
}

let ExampleMathComponent = /*#__PURE__*/(() => {
  class ExampleMathComponent {
    constructor() {
      this.importComponentExample = __webpack_require__.e(/* import() */ 85334).then(__webpack_require__.t.bind(__webpack_require__, 85334, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 46189).then(__webpack_require__.t.bind(__webpack_require__, 46189, 17)),
        HTML: __webpack_require__.e(/* import() */ 74089).then(__webpack_require__.t.bind(__webpack_require__, 74089, 17)),
        LESS: __webpack_require__.e(/* import() */ 7411).then(__webpack_require__.t.bind(__webpack_require__, 7411, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 42395).then(__webpack_require__.t.bind(__webpack_require__, 42395, 17)),
        HTML: __webpack_require__.e(/* import() */ 20016).then(__webpack_require__.t.bind(__webpack_require__, 20016, 17)),
        LESS: __webpack_require__.e(/* import() */ 66757).then(__webpack_require__.t.bind(__webpack_require__, 66757, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 6696).then(__webpack_require__.t.bind(__webpack_require__, 6696, 17)),
        HTML: __webpack_require__.e(/* import() */ 14652).then(__webpack_require__.t.bind(__webpack_require__, 14652, 17)),
        LESS: __webpack_require__.e(/* import() */ 17637).then(__webpack_require__.t.bind(__webpack_require__, 17637, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 8018).then(__webpack_require__.t.bind(__webpack_require__, 8018, 17)),
        HTML: __webpack_require__.e(/* import() */ 32410).then(__webpack_require__.t.bind(__webpack_require__, 32410, 17)),
        LESS: __webpack_require__.e(/* import() */ 44971).then(__webpack_require__.t.bind(__webpack_require__, 44971, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 63624).then(__webpack_require__.t.bind(__webpack_require__, 42829, 17)),
        HTML: __webpack_require__.e(/* import() */ 72032).then(__webpack_require__.t.bind(__webpack_require__, 72032, 17)),
        LESS: __webpack_require__.e(/* import() */ 41220).then(__webpack_require__.t.bind(__webpack_require__, 41220, 17))
      };
    }

  }

  ExampleMathComponent.ɵfac = function ExampleMathComponent_Factory(t) {
    return new (t || ExampleMathComponent)();
  };

  ExampleMathComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleMathComponent,
    selectors: [["example-math"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5686247209877234159$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS_1 = goog.getMsg("Math utils");
        i18n_0 = MSG_EXTERNAL_5686247209877234159$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟eef2307cf678cdf74d7144079256b7fc344c4950␟5686247209877234159:Math utils`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5211598598885509667$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__5 = goog.getMsg("A set of utils to calculate math");
        i18n_4 = MSG_EXTERNAL_5211598598885509667$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟dd7f17d22638f1551ac688f17563777ddf34163b␟5211598598885509667:A set of utils to calculate math`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3234087131078550251$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__7 = goog.getMsg("round, floor and ceil with fixed common problems of the native implementation");
        i18n_6 = MSG_EXTERNAL_3234087131078550251$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟49e3fcef24f18647990d6a9fa1ba78c9f3b862ff␟3234087131078550251:round, floor and ceil with fixed common problems of the native implementation`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_984110598713888465$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__9 = goog.getMsg("Checks if the value is in range");
        i18n_8 = MSG_EXTERNAL_984110598713888465$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟5fcae35432bf500967c987df7ee13cfd897f95ca␟984110598713888465:Checks if the value is in range`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6385777968328902844$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__11 = goog.getMsg("Normalizes any number to an integer within inclusive range");
        i18n_10 = MSG_EXTERNAL_6385777968328902844$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟5756cf697456ca17c1bfcfce7ab2da2a2976bbcb␟6385777968328902844:Normalizes any number to an integer within inclusive range`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7695262008739590886$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__13 = goog.getMsg("Rounds a number to the closest value in a fixed discrete series");
        i18n_12 = MSG_EXTERNAL_7695262008739590886$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟1fa93f4bf5540e71f14d1c49c60f0aa77cccd7d9␟7695262008739590886:Rounds a number to the closest value in a fixed discrete series`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2743889011977351178$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__15 = goog.getMsg("Clamps a value between two inclusive limits");
        i18n_14 = MSG_EXTERNAL_2743889011977351178$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟3788fc82353479c593b85fecef9b30b97b44c431␟2743889011977351178:Clamps a value between two inclusive limits`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__17 = goog.getMsg("Import into component and use:");
        i18n_16 = MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_MATH_MATH_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/utils/math"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "round", "heading", "round", "description", i18n_6, 3, "content"], ["id", "inRange", "heading", "inRange", "description", i18n_8, 3, "content"], ["id", "normalizeToIntNumber", "heading", "normalizeToIntNumber", "description", i18n_10, 3, "content"], ["id", "quantize", "heading", "quantize", "description", i18n_12, 3, "content"], ["id", "clamp", "heading", "clamp", "description", i18n_14, 3, "content"], [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleMathComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleMathComponent_ng_template_1_Template, 12, 5, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleMathComponent_ng_template_2_Template, 5, 1, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMathExample1, TuiMathExample2, TuiMathExample3, TuiMathExample4, TuiMathExample5, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleMathComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/math/math.module.ts













let ExampleMathModule = /*#__PURE__*/(() => {
  class ExampleMathModule {}

  ExampleMathModule.ɵfac = function ExampleMathModule_Factory(t) {
    return new (t || ExampleMathModule)();
  };

  ExampleMathModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleMathModule
  });
  ExampleMathModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleMathComponent))]]
  });
  return ExampleMathModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleMathModule, {
    declarations: [ExampleMathComponent, TuiMathExample1, TuiMathExample2, TuiMathExample3, TuiMathExample4, TuiMathExample5],
    imports: [common/* CommonModule */.ez, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleMathComponent]
  });
})();

/***/ })

}]);