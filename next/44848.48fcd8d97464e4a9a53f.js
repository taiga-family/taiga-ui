"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44848],{

/***/ 44848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDialogModule": () => (/* binding */ ExampleTuiDialogModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/1/index.ts




let TuiDialogExampleComponent1 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent1 {
    constructor(dialogService) {
      this.dialogService = dialogService;
    }

    showDialog() {
      this.dialogService.open(`This is a plain string dialog`, {
        label: `Heading`,
        size: `s`
      }).subscribe();
    }

    showDialogWithCustomButton() {
      this.dialogService.open(`Good, Anakin, Good!`, {
        label: `Star wars. Episode III`,
        size: `s`,
        data: {
          button: `Do it!`
        }
      }).subscribe();
    }

  }

  TuiDialogExampleComponent1.ɵfac = function TuiDialogExampleComponent1_Factory(t) {
    return new (t || TuiDialogExampleComponent1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  TuiDialogExampleComponent1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent1,
    selectors: [["tui-dialog-example-1"]],
    decls: 4,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "click"]],
    template: function TuiDialogExampleComponent1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent1_Template_button_click_0_listener() {
          return ctx.showDialog();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent1_Template_button_click_2_listener() {
          return ctx.showDialogWithCustomButton();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show (custom button text)\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDialogExampleComponent1;
})();
// EXTERNAL MODULE: ./projects/core/components/dialog/dialog.directive.ts
var dialog_directive = __webpack_require__(56423);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/cdk/directives/auto-focus/autofocus.directive.ts
var autofocus_directive = __webpack_require__(20986);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/6/index.ts









function TuiDialogExampleComponent6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("ngSubmit", function TuiDialogExampleComponent6_ng_template_2_Template_form_ngSubmit_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r3);
      const observer_r1 = restoredCtx.$implicit;
      return observer_r1.complete();
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵtext */._uU(2, "This abstracts away service and subscription");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 3);
    fesm2015_core/* ɵɵtext */._uU(4, " Some value ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 4);
    fesm2015_core/* ɵɵtext */._uU(7, " Ok ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r0.exampleForm);
  }
}

const _c0 = function () {
  return {
    label: "Declarative directive",
    size: "s"
  };
};

let TuiDialogExampleComponent6 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent6 {
    constructor() {
      this.exampleForm = new fesm2015_forms/* FormGroup */.cw({
        exampleControl: new fesm2015_forms/* FormControl */.NI(``)
      });
      this.open = false;
    }

    showDialog() {
      this.open = true;
    }

  }

  TuiDialogExampleComponent6.ɵfac = function TuiDialogExampleComponent6_Factory(t) {
    return new (t || TuiDialogExampleComponent6)();
  };

  TuiDialogExampleComponent6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent6,
    selectors: [["tui-dialog-example-6"]],
    decls: 3,
    vars: 3,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], [3, "tuiDialogOptions", "tuiDialog", "tuiDialogChange"], [3, "formGroup", "ngSubmit"], ["tuiAutoFocus", "", "formControlName", "exampleControl"], ["tuiButton", "", "type", "submit"]],
    template: function TuiDialogExampleComponent6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent6_Template_button_click_0_listener() {
          return ctx.showDialog();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiDialogExampleComponent6_ng_template_2_Template, 8, 1, "ng-template", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiDialogChange", function TuiDialogExampleComponent6_Template_ng_template_tuiDialogChange_2_listener($event) {
          return ctx.open = $event;
        });
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiDialogOptions", fesm2015_core/* ɵɵpureFunction0 */.DdM(2, _c0))("tuiDialog", ctx.open);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, dialog_directive/* TuiDialogDirective */.i, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, autofocus_directive/* TuiAutoFocusDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDialogExampleComponent6;
})();
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/slider/slider.component.ts
var slider_component = __webpack_require__(47044);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/2/dialog-example/dialog-example.component.ts


















function DialogExampleComponent_tui_data_list_wrapper_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 9);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

function DialogExampleComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵtext */._uU(2, "This one is a template dialog");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let DialogExampleComponent = /*#__PURE__*/(() => {
  class DialogExampleComponent {
    constructor(dialogService, context) {
      this.dialogService = dialogService;
      this.context = context;
      this.value = null;
      this.name = ``;
      this.items = [10, 50, 100];
    }

    get hasValue() {
      return this.value !== null;
    }

    get data() {
      return this.context.data;
    }

    submit() {
      if (this.value !== null) {
        this.context.completeWith(this.value);
      }
    }

    showDialog(content) {
      this.dialogService.open(content, {
        dismissible: true
      }).subscribe();
    }

  }

  DialogExampleComponent.ɵfac = function DialogExampleComponent_Factory(t) {
    return new (t || DialogExampleComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
  };

  DialogExampleComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: DialogExampleComponent,
    selectors: [["dialog-example"]],
    decls: 16,
    vars: 7,
    consts: [[1, "text"], [3, "value"], ["tuiTextfieldSize", "m", "tuiAutoFocus", "", 3, "ngModel", "ngModelChange"], ["tuiTextfieldSize", "m", 1, "tui-space_top-3", "tui-space_bottom-5", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], ["type", "range", "tuiSlider", "", 1, "tui-space_bottom-5", 3, "ngModel", "max"], ["tuiButton", "", "type", "button", "size", "m", 3, "disabled", "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [3, "items"], [1, "dialog"]],
    template: function DialogExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Your balance: ");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function DialogExampleComponent_Template_tui_input_ngModelChange_3_listener($event) {
          return ctx.name = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Type a name\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-select", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function DialogExampleComponent_Template_tui_select_ngModelChange_5_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Select a sum ");
        fesm2015_core/* ɵɵtemplate */.YNc(7, DialogExampleComponent_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(8, "input", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function DialogExampleComponent_Template_button_click_9_listener() {
          return ctx.submit();
        });
        fesm2015_core/* ɵɵtext */._uU(10, " Submit\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "button", 7);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function DialogExampleComponent_Template_button_click_12_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r3);

          const _r1 = fesm2015_core/* ɵɵreference */.MAs(15);

          return ctx.showDialog(_r1);
        });
        fesm2015_core/* ɵɵtext */._uU(13, " Show one more dialog ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(14, DialogExampleComponent_ng_template_14_Template, 3, 0, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.data);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.name);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", 5)("max", 10);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", !ctx.hasValue);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_size_directive/* TuiTextfieldSizeDirective */.s, autofocus_directive/* TuiAutoFocusDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, button_component/* TuiButtonComponent */.v, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: ["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);margin:0 0 1.5rem}.text[_ngcontent-%COMP%]{margin:0 0 .75rem}"],
    changeDetection: 0
  });
  return DialogExampleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/2/index.ts







let TuiDialogExampleComponent2 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent2 {
    constructor(dialogService, injector) {
      this.dialogService = dialogService;
      this.injector = injector;
      this.dialog = this.dialogService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(DialogExampleComponent, this.injector), {
        data: 237,
        dismissible: true,
        label: `Heading`
      });
    }

    showDialog() {
      this.dialog.subscribe({
        next: data => {
          console.info(`Dialog emitted data = ${data}`);
        },
        complete: () => {
          console.info(`Dialog closed`);
        }
      });
    }

  }

  TuiDialogExampleComponent2.ɵfac = function TuiDialogExampleComponent2_Factory(t) {
    return new (t || TuiDialogExampleComponent2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  TuiDialogExampleComponent2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent2,
    selectors: [["tui-dialog-example-2"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiDialogExampleComponent2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent2_Template_button_click_0_listener() {
          return ctx.showDialog();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDialogExampleComponent2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/3/index.ts






function TuiDialogExampleComponent3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵtext */._uU(3, " Your balance: ");
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent3_ng_template_5_Template_button_click_5_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.withdraw();
    });
    fesm2015_core/* ɵɵtext */._uU(6, " Withdraw\u00A0 ");
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-money", 0);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent3_ng_template_5_Template_button_click_8_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const observer_r2 = restoredCtx.$implicit;
      return observer_r2.complete();
    });
    fesm2015_core/* ɵɵtext */._uU(9, " Cancel ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.money);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 100);
  }
}

let TuiDialogExampleComponent3 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent3 {
    constructor(dialogService) {
      this.dialogService = dialogService;
      this.money = 1000;
    }

    showDialog(content) {
      this.dialogService.open(content).subscribe();
    }

    withdraw() {
      this.money -= 100;
    }

  }

  TuiDialogExampleComponent3.ɵfac = function TuiDialogExampleComponent3_Factory(t) {
    return new (t || TuiDialogExampleComponent3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  TuiDialogExampleComponent3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent3,
    selectors: [["tui-dialog-example-3"]],
    decls: 7,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1550533956626487430$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_3_INDEX_TS__1 = goog.getMsg("You can show a dialog with template");
        i18n_0 = MSG_EXTERNAL_1550533956626487430$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_3_INDEX_TS__1;
      } else {
        i18n_0 = $localize`:␟23fb64e2b61c88e5ae324ddaaffdeb93531310a7␟1550533956626487430:You can show a dialog with template`;
      }

      return [[3, "value"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], i18n_0, ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"]];
    },
    template: function TuiDialogExampleComponent3_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, " Your balance: ");
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent3_Template_button_click_3_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r6);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(6);

          return ctx.showDialog(_r0);
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiDialogExampleComponent3_ng_template_5_Template, 10, 2, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.money);
      }
    },
    directives: [money_component/* TuiMoneyComponent */.o, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDialogExampleComponent3;
})();
// EXTERNAL MODULE: ./projects/cdk/directives/prevent-default/prevent-default.directive.ts
var prevent_default_directive = __webpack_require__(13176);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/elastic-sticky/elastic-sticky.directive.ts
var elastic_sticky_directive = __webpack_require__(98599);
// EXTERNAL MODULE: ./projects/kit/components/marker-icon/marker-icon.component.ts
var marker_icon_component = __webpack_require__(86187);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/4/index.ts












function TuiDialogExampleComponent4_ng_template_2_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent4_ng_template_2_button_0_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r5.onFilterClick();
    });
    fesm2015_core/* ɵɵi18n */.SDv(1, 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiDialogExampleComponent4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiDialogExampleComponent4_ng_template_2_button_0_Template, 2, 0, "button", 4);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx_r1.filters);
  }
}

function TuiDialogExampleComponent4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelement */._UZ(0, "div", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "header", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiElasticSticky", function TuiDialogExampleComponent4_ng_template_4_Template_header_tuiElasticSticky_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.onElastic($event);
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "section", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "label", 10);
    fesm2015_core/* ɵɵtext */._uU(4, "8 March, 23:51");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-marker-icon", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p", 13);
    fesm2015_core/* ɵɵtext */._uU(8, "Card payment");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "h3", 14);
    fesm2015_core/* ɵɵtext */._uU(10, "Sushi");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-money", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "blockquote");
    fesm2015_core/* ɵɵi18nStart */.tHW(13, 16);
    fesm2015_core/* ɵɵelement */._UZ(14, "h1");
    fesm2015_core/* ɵɵelement */._UZ(15, "p");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "blockquote");
    fesm2015_core/* ɵɵi18nStart */.tHW(17, 17);
    fesm2015_core/* ɵɵelement */._UZ(18, "h1");
    fesm2015_core/* ɵɵelement */._UZ(19, "p");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("transform", ctx_r3.transform)("width", ctx_r3.width);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 300);
  }
}

let TuiDialogExampleComponent4 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent4 {
    constructor(dialogService, portalService) {
      this.dialogService = dialogService;
      this.portalService = portalService;
      this.filters = false;
      this.scale = 1;
    }

    get transform() {
      return `scale(${this.scale})`;
    }

    get width() {
      return `calc((100% + 4rem) * ${1 / this.scale})`;
    }

    onElastic(value) {
      this.scale = (0,cdk.tuiClamp)(value, 0.5, 1);
    }

    onFilterClick() {
      this.filters = true;
      this.dialogService.open(`Dialog with filters`).subscribe({
        complete: () => {
          this.filters = false;
        }
      });
    }

    showDialog(content, button) {
      const templateRef = this.portalService.addTemplate(button);
      this.dialogService.open(content).subscribe({
        complete: () => {
          this.portalService.removeTemplate(templateRef);
        }
      });
    }

  }

  TuiDialogExampleComponent4.ɵfac = function TuiDialogExampleComponent4_Factory(t) {
    return new (t || TuiDialogExampleComponent4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDropdownPortalService));
  };

  TuiDialogExampleComponent4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent4,
    selectors: [["tui-dialog-example-4"]],
    decls: 6,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1964361128745074985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" Show long mobile dialog with filters\n");
        i18n_0 = MSG_EXTERNAL_1964361128745074985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟f4bec00b634ea1d412c80233b5032a210ec28a75␟1964361128745074985: Show long mobile dialog with filters
`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2849823341943584228$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS___3 = goog.getMsg(" Filters ");
        i18n_2 = MSG_EXTERNAL_2849823341943584228$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS___3;
      } else {
        i18n_2 = $localize`:␟185931f794b6387d51a965bcda45410d51c7e887␟2849823341943584228: Filters `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2559247086012281277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__5 = goog.getMsg("{$startHeadingLevel1}Additional information{$closeHeadingLevel1}{$startParagraph} In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. {$closeParagraph}", {
          "startHeadingLevel1": "\uFFFD#14\uFFFD",
          "closeHeadingLevel1": "\uFFFD/#14\uFFFD",
          "startParagraph": "\uFFFD#15\uFFFD",
          "closeParagraph": "\uFFFD/#15\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2559247086012281277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__5;
      } else {
        i18n_4 = $localize`:␟e018cd0265da73f04dac9fe3a648c5808b47a77e␟2559247086012281277:${"\uFFFD#14\uFFFD"}:START_HEADING_LEVEL1:Additional information${"\uFFFD/#14\uFFFD"}:CLOSE_HEADING_LEVEL1:${"\uFFFD#15\uFFFD"}:START_PARAGRAPH: In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. ${"\uFFFD/#15\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2559247086012281277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__7 = goog.getMsg("{$startHeadingLevel1}Additional information{$closeHeadingLevel1}{$startParagraph} In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. {$closeParagraph}", {
          "startHeadingLevel1": "\uFFFD#18\uFFFD",
          "closeHeadingLevel1": "\uFFFD/#18\uFFFD",
          "startParagraph": "\uFFFD#19\uFFFD",
          "closeParagraph": "\uFFFD/#19\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2559247086012281277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_EXAMPLES_4_INDEX_TS__7;
      } else {
        i18n_6 = $localize`:␟e018cd0265da73f04dac9fe3a648c5808b47a77e␟2559247086012281277:${"\uFFFD#18\uFFFD"}:START_HEADING_LEVEL1:Additional information${"\uFFFD/#18\uFFFD"}:CLOSE_HEADING_LEVEL1:${"\uFFFD#19\uFFFD"}:START_PARAGRAPH: In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. ${"\uFFFD/#19\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      return [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", "tui-space_bottom-2", 3, "click"], i18n_0, ["button", ""], ["long", ""], ["tuiButton", "", "type", "button", "tuiPreventDefault", "touchmove", "class", "portal", 3, "click", 4, "ngIf"], ["tuiButton", "", "type", "button", "tuiPreventDefault", "touchmove", 1, "portal", 3, "click"], i18n_2, [1, "background"], [1, "header", 3, "tuiElasticSticky"], [1, "logo"], [1, "date"], ["src", "tuiIconChevronDownLarge", 1, "icon"], [1, "wrapper"], [1, "description"], [1, "title"], ["decimal", "always", 1, "money", 3, "value"], i18n_4, i18n_6];
    },
    template: function TuiDialogExampleComponent4_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent4_Template_button_click_0_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r9);

          const _r2 = fesm2015_core/* ɵɵreference */.MAs(5);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

          return ctx.showDialog(_r2, _r0);
        });
        fesm2015_core/* ɵɵi18n */.SDv(1, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiDialogExampleComponent4_ng_template_2_Template, 1, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDialogExampleComponent4_ng_template_4_Template, 20, 5, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, common/* NgIf */.O5, prevent_default_directive/* TuiPreventDefaultDirective */.A, elastic_sticky_directive/* TuiElasticStickyDirective */.X, marker_icon_component/* TuiMarkerIconComponent */.B, money_component/* TuiMoneyComponent */.o],
    styles: ["[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif}.portal[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);position:fixed;bottom:1.25rem;-webkit-animation:tuiFadeIn var(--tui-duration) var(--tui-duration);animation:tuiFadeIn var(--tui-duration) var(--tui-duration);-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;width:calc(100% + 4rem);margin-top:-2rem;margin-left:-2rem;text-align:center;word-wrap:break-word;background:var(--tui-support-20);border-radius:1rem 1rem 0 0;transform-origin:top left}.background[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:-1rem;height:2rem;width:calc(100% + 4rem);margin:-2rem 0 -2rem -2rem;background:var(--tui-support-20);border-radius:1rem 1rem 0 0}.wrapper[_ngcontent-%COMP%]{background:var(--tui-base-02);padding:3.125rem 0 2rem}.logo[_ngcontent-%COMP%]{position:relative;height:5.5rem;color:var(--tui-base-01)}.date[_ngcontent-%COMP%]{display:block;font-size:1.0625rem;line-height:1.125rem;padding:.75rem 0}.icon[data-size=m][_ngcontent-%COMP%]{position:relative;margin-top:.25rem;width:5rem;height:5rem;box-shadow:0 0 0 2px var(--tui-base-02);color:var(--tui-base-02);background:var(--tui-support-20)}.description[_ngcontent-%COMP%]{font-size:1.0625rem;line-height:1.125rem;margin:.5rem 0 0;color:#9299a2}.title[_ngcontent-%COMP%]{font-weight:bold;font-size:1.0625rem;line-height:1.25rem;margin:1.5rem 0 .25rem}.money[_ngcontent-%COMP%]{font-size:2.125rem;line-height:2.5rem}"],
    changeDetection: 0
  });
  return TuiDialogExampleComponent4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/5/index.ts





function TuiDialogExampleComponent5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵtext */._uU(0, " Take a look ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent5_ng_template_4_Template_button_click_2_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const observer_r4 = restoredCtx.$implicit;
      return observer_r4.complete();
    });
    fesm2015_core/* ɵɵtext */._uU(3, " Very cool! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiDialogExampleComponent5_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 5);
    fesm2015_core/* ɵɵelement */._UZ(1, "img", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiDialogExampleComponent5 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent5 {
    constructor(dialogService) {
      this.dialogService = dialogService;
    }

    onClick(content, header, size) {
      this.dialogService.open(content, {
        label: `What a cool library set`,
        header,
        size
      }).subscribe();
    }

  }

  TuiDialogExampleComponent5.ɵfac = function TuiDialogExampleComponent5_Factory(t) {
    return new (t || TuiDialogExampleComponent5)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  TuiDialogExampleComponent5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent5,
    selectors: [["tui-dialog-example-5"]],
    decls: 8,
    vars: 0,
    consts: [["tuiButton", "", "size", "m", 1, "tui-space_right-2", "tui-space_bottom-2", 3, "click"], ["tuiButton", "", "size", "m", 3, "click"], ["content", ""], ["header", ""], [1, "buttons"], [1, "header"], ["src", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", "alt", "Cool"]],
    template: function TuiDialogExampleComponent5_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent5_Template_button_click_0_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r7);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

          const _r2 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.onClick(_r0, _r2, "m");
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent5_Template_button_click_2_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r7);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

          const _r2 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.onClick(_r0, _r2, "fullscreen");
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show fullscreen\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDialogExampleComponent5_ng_template_4_Template, 4, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDialogExampleComponent5_ng_template_6_Template, 2, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    styles: [".header[_ngcontent-%COMP%]{display:flex;width:100%;height:12.5rem;align-items:center;justify-content:center;background:#ffdd2d}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.5rem}tui-root._mobile[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-direction:column}"],
    changeDetection: 0
  });
  return TuiDialogExampleComponent5;
})();
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.component.ts
var primitive_textfield_component = __webpack_require__(63060);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.directive.ts
var primitive_textfield_directive = __webpack_require__(62733);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/7/search-example/search-dialog-example.component.ts





let SearchDialogExampleComponent = /*#__PURE__*/(() => {
  class SearchDialogExampleComponent {
    constructor(context) {
      this.context = context;
    }

    close() {
      this.context.completeWith(false);
    }

  }

  SearchDialogExampleComponent.ɵfac = function SearchDialogExampleComponent_Factory(t) {
    return new (t || SearchDialogExampleComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(tinkoff_ng_polymorpheus/* POLYMORPHEUS_CONTEXT */.yf));
  };

  SearchDialogExampleComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: SearchDialogExampleComponent,
    selectors: [["search-dialog-example"]],
    decls: 5,
    vars: 0,
    consts: [[1, "search-content"], [1, "search-title"], ["tuiAutoFocus", ""]],
    template: function SearchDialogExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Search");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-primitive-textfield", 2);
        fesm2015_core/* ɵɵtext */._uU(4, "What do you want to find?");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, autofocus_directive/* TuiAutoFocusDirective */.k],
    styles: ["[_nghost-%COMP%]   .search-content[_ngcontent-%COMP%]{padding:2rem 1.5rem}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .search-content[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .search-content[_ngcontent-%COMP%]{padding:0}.search-title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:0 0 1.25rem}"],
    changeDetection: 0
  });
  return SearchDialogExampleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/7/index.ts







let TuiDialogExampleComponent7 = /*#__PURE__*/(() => {
  class TuiDialogExampleComponent7 {
    constructor(dialogService, injector) {
      this.dialogService = dialogService;
      this.injector = injector;
    }

    showDialog() {
      this.dialogService.open(new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(SearchDialogExampleComponent, this.injector), {
        size: `page`,
        closeable: true,
        dismissible: true
      }).subscribe();
    }

  }

  TuiDialogExampleComponent7.ɵfac = function TuiDialogExampleComponent7_Factory(t) {
    return new (t || TuiDialogExampleComponent7)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* Injector */.zs3));
  };

  TuiDialogExampleComponent7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogExampleComponent7,
    selectors: [["tui-dialog-example-7"]],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiDialogExampleComponent7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogExampleComponent7_Template_button_click_0_listener() {
          return ctx.showDialog();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDialogExampleComponent7;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion.component.ts
var accordion_component = __webpack_require__(36710);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item.component.ts
var accordion_item_component = __webpack_require__(23178);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-content.directive.ts
var accordion_item_content_directive = __webpack_require__(7406);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/dialog.component.ts


























function ExampleTuiDialogComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 5);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-notification", 6);
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵelement */._UZ(8, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-notification", 9);
    fesm2015_core/* ɵɵtext */._uU(12, " Do not forget to add ");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "strong");
    fesm2015_core/* ɵɵtext */._uU(15, "TuiDialogModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(16, " into your app.module to use dialogs (See also \"Setup\" for details) ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-dialog-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-dialog-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-doc-example", 12);
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-dialog-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-dialog-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-dialog-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "tui-doc-example", 15);
    fesm2015_core/* ɵɵelement */._UZ(28, "tui-dialog-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-doc-example", 16);
    fesm2015_core/* ɵɵelement */._UZ(30, "tui-dialog-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r0.dialogsCloseToken);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_3_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(1, 37);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_3_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 34, 1);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(1, 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDialogComponent_ng_template_2_ng_template_3_h2_2_Template, 2, 0, "h2", 29);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 30);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵi18n */.SDv(11, 31);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "i");
    fesm2015_core/* ɵɵi18n */.SDv(14, 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-accordion", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-accordion-item");
    fesm2015_core/* ɵɵi18nStart */.tHW(17, 34);
    fesm2015_core/* ɵɵtemplate */.YNc(18, ExampleTuiDialogComponent_ng_template_2_ng_template_3_ng_template_18_Template, 1, 0, "ng-template", 35);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "button", 36);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_19_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r20);
      const observer_r13 = restoredCtx.$implicit;
      return observer_r13.complete();
    });
    fesm2015_core/* ɵɵtext */._uU(20, " Close ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "button", 36);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_21_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r20);
      const observer_r13 = restoredCtx.$implicit;
      return observer_r13.next("Hi");
    });
    fesm2015_core/* ɵɵtext */._uU(22, " Say \"Hi\" ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "button", 36);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template_button_click_23_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r20);
      const completeWith_r16 = restoredCtx.completeWith;
      return completeWith_r16("Hi and bye!");
    });
    fesm2015_core/* ɵɵtext */._uU(24, " Say \"Hi and bye!\" ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const size_r14 = ctx.size;
    const data_r15 = ctx.data;
    fesm2015_core/* ɵɵclassProp */.ekj("big", size_r14 === "xl");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", size_r14 === "xl");
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵi18nExp */.pQV(data_r15);
    fesm2015_core/* ɵɵi18nApply */.QtT(11);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 38);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 39);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 40);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 41);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 42);
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 43);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiDialogComponent_ng_template_2_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 44);
  }
}

function ExampleTuiDialogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiDialogComponent_ng_template_2_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);

      const _r4 = fesm2015_core/* ɵɵreference */.MAs(4);

      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.showDialog(_r4);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Show ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDialogComponent_ng_template_2_ng_template_3_Template, 25, 4, "ng-template", null, 18, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 19);
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-doc-code", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelement */._UZ(17, "code");
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(20, ExampleTuiDialogComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_20_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.closeable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(21, ExampleTuiDialogComponent_ng_template_2_ng_template_21_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_21_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.dismissible = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(22, ExampleTuiDialogComponent_ng_template_2_ng_template_22_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_22_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.data = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(23, ExampleTuiDialogComponent_ng_template_2_ng_template_23_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵtemplate */.YNc(24, ExampleTuiDialogComponent_ng_template_2_ng_template_24_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_24_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.label = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(25, ExampleTuiDialogComponent_ng_template_2_ng_template_25_Template, 2, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_25_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.required = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(26, ExampleTuiDialogComponent_ng_template_2_ng_template_26_Template, 1, 0, "ng-template", 27);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDialogComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_26_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r30 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r30.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.method);
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.closeable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.dismissible);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.data);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.label);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.required);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 45);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 46);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 47);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 48);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 49);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(14, 50);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelement */._UZ(17, "code");
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵelement */._UZ(20, "code");
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-doc-code", 51);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(24, 52);
    fesm2015_core/* ɵɵelement */._UZ(25, "a", 53);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(28, 54);
    fesm2015_core/* ɵɵelement */._UZ(29, "code");
    fesm2015_core/* ɵɵelement */._UZ(30, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(31, "tui-doc-code", 55);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(34, 56);
    fesm2015_core/* ɵɵelement */._UZ(35, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(36, "tui-doc-code", 55);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(39, 57);
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "code");
    fesm2015_core/* ɵɵelement */._UZ(41, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(42, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(43, 58);
    fesm2015_core/* ɵɵelementStart */.TgZ(44, "code");
    fesm2015_core/* ɵɵelement */._UZ(45, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(46, "tui-doc-code", 47);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleServiceUsage);
    fesm2015_core/* ɵɵadvance */.xp6(11);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleImportModuleComponent);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleCustomDialog);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleLazyModule);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleDialogClosesOnBackToken);
  }
}

function ExampleTuiDialogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 59);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 60);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 61);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 62);
    fesm2015_core/* ɵɵelement */._UZ(10, "a", 5);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let ExampleTuiDialogComponent = /*#__PURE__*/(() => {
  class ExampleTuiDialogComponent {
    constructor(alertService, dialogService) {
      this.alertService = alertService;
      this.dialogService = dialogService;
      this.method = __webpack_require__.e(/* import() */ 35795).then(__webpack_require__.t.bind(__webpack_require__, 35795, 17));
      this.dialogsCloseToken = __webpack_require__.e(/* import() */ 82155).then(__webpack_require__.t.bind(__webpack_require__, 82155, 17));
      this.exampleDialogClosesOnBackToken = __webpack_require__.e(/* import() */ 16072).then(__webpack_require__.t.bind(__webpack_require__, 16072, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 27177).then(__webpack_require__.t.bind(__webpack_require__, 27177, 17)),
        HTML: __webpack_require__.e(/* import() */ 50016).then(__webpack_require__.t.bind(__webpack_require__, 50016, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 60737).then(__webpack_require__.t.bind(__webpack_require__, 60737, 17)),
        HTML: __webpack_require__.e(/* import() */ 420).then(__webpack_require__.t.bind(__webpack_require__, 420, 17)),
        'dialog-example/dialog-example.module.ts': __webpack_require__.e(/* import() */ 26136).then(__webpack_require__.t.bind(__webpack_require__, 26136, 17)),
        'dialog-example/dialog-example.component.ts': __webpack_require__.e(/* import() */ 10523).then(__webpack_require__.t.bind(__webpack_require__, 14438, 17)),
        'dialog-example/dialog-example.style.less': __webpack_require__.e(/* import() */ 45502).then(__webpack_require__.t.bind(__webpack_require__, 45502, 17)),
        'dialog-example/dialog-example.template.html': __webpack_require__.e(/* import() */ 52065).then(__webpack_require__.t.bind(__webpack_require__, 52065, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 13110).then(__webpack_require__.t.bind(__webpack_require__, 13110, 17)),
        HTML: __webpack_require__.e(/* import() */ 61402).then(__webpack_require__.t.bind(__webpack_require__, 98146, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 81191).then(__webpack_require__.t.bind(__webpack_require__, 81191, 17)),
        HTML: __webpack_require__.e(/* import() */ 18279).then(__webpack_require__.t.bind(__webpack_require__, 18279, 17)),
        LESS: __webpack_require__.e(/* import() */ 56225).then(__webpack_require__.t.bind(__webpack_require__, 56225, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 93487).then(__webpack_require__.t.bind(__webpack_require__, 93487, 17)),
        HTML: __webpack_require__.e(/* import() */ 28008).then(__webpack_require__.t.bind(__webpack_require__, 28008, 17)),
        LESS: __webpack_require__.e(/* import() */ 57363).then(__webpack_require__.t.bind(__webpack_require__, 57363, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 15792).then(__webpack_require__.t.bind(__webpack_require__, 15792, 17)),
        HTML: __webpack_require__.e(/* import() */ 44671).then(__webpack_require__.t.bind(__webpack_require__, 44671, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 64257).then(__webpack_require__.t.bind(__webpack_require__, 64257, 17)),
        HTML: __webpack_require__.e(/* import() */ 33349).then(__webpack_require__.t.bind(__webpack_require__, 33349, 17)),
        'search-example/search-dialog-example.component.ts': __webpack_require__.e(/* import() */ 49576).then(__webpack_require__.t.bind(__webpack_require__, 42798, 17)),
        'search-example/search-dialog-example.component.html': __webpack_require__.e(/* import() */ 19016).then(__webpack_require__.t.bind(__webpack_require__, 19016, 17)),
        'search-example/search-dialog-example.component.less': __webpack_require__.e(/* import() */ 56143).then(__webpack_require__.t.bind(__webpack_require__, 56143, 17)),
        'search-dialog.module.ts': __webpack_require__.e(/* import() */ 14491).then(__webpack_require__.t.bind(__webpack_require__, 14491, 17))
      };
      this.exampleImportModuleComponent = __webpack_require__.e(/* import() */ 56179).then(__webpack_require__.t.bind(__webpack_require__, 56179, 17));
      this.exampleServiceUsage = __webpack_require__.e(/* import() */ 95994).then(__webpack_require__.t.bind(__webpack_require__, 95994, 17));
      this.exampleCustomDialog = __webpack_require__.e(/* import() */ 4850).then(__webpack_require__.t.bind(__webpack_require__, 4850, 17));
      this.exampleLazyModule = __webpack_require__.e(/* import() */ 62147).then(__webpack_require__.t.bind(__webpack_require__, 62147, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 90506).then(__webpack_require__.t.bind(__webpack_require__, 90506, 17));
      this.data = 100;
      this.closeable = true;
      this.dismissible = true;
      this.required = false;
      this.sizeVariants = [`s`, `m`, `l`, `fullscreen`, `page`, `auto`];
      this.size = this.sizeVariants[1];
      this.label = ``;
    }

    showDialog(content) {
      const {
        data,
        label,
        required,
        closeable,
        dismissible,
        size
      } = this;
      this.dialogService.open(content, {
        data,
        label,
        required,
        closeable,
        dismissible,
        size
      }).pipe((0,switchMap/* switchMap */.w)(response => this.alertService.open(String(response)))).subscribe();
    }

  }

  ExampleTuiDialogComponent.ɵfac = function ExampleTuiDialogComponent_Factory(t) {
    return new (t || ExampleTuiDialogComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  ExampleTuiDialogComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDialogComponent,
    selectors: [["example-tui-dialog"]],
    decls: 5,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7877694283409984279$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS_1 = goog.getMsg("Your own dialogs");
        i18n_0 = MSG_EXTERNAL_7877694283409984279$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟1d50bf7c320a9243978918c70e727901261fd0c4␟7877694283409984279:Your own dialogs`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1247184373144257028$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__3 = goog.getMsg("Optional built-in implementation of Taiga UI modals");
        i18n_2 = MSG_EXTERNAL_1247184373144257028$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ce7723a223bebc4b2a6ddd84f1c1990a0cfd6709␟1247184373144257028:Optional built-in implementation of Taiga UI modals`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1797714382154117764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__5 = goog.getMsg(" If you want custom dialogs see {$startLink} this link {$closeLink} on creating your own implementation ", {
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_1797714382154117764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟648a8dd8a0eb167c9f9e5945bf084d8a66310819␟1797714382154117764: If you want custom dialogs see ${"\uFFFD#4\uFFFD"}:START_LINK: this link ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: on creating your own implementation `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5345819773685575486$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__7 = goog.getMsg(" Use {$startTagCode}{$startTagStrong}TUI_DIALOGS_CLOSE{$closeTagStrong}{$closeTagCode} token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout: {$startParagraph}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$closeParagraph}", {
          "startTagCode": "\uFFFD#7\uFFFD",
          "startTagStrong": "\uFFFD#8\uFFFD",
          "closeTagStrong": "\uFFFD/#8\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD",
          "startParagraph": "\uFFFD#9\uFFFD",
          "startTagTuiDocCode": "\uFFFD#10\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#10\uFFFD",
          "closeParagraph": "\uFFFD/#9\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_5345819773685575486$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟c6a7e22d706f226be2fea24b843c900848f03d2e␟5345819773685575486: Use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:${"\uFFFD#8\uFFFD"}:START_TAG_STRONG:TUI_DIALOGS_CLOSE${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout: ${"\uFFFD#9\uFFFD"}:START_PARAGRAPH:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD/#9\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1771579351294536177$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__9 = goog.getMsg("Dialog from string");
        i18n_8 = MSG_EXTERNAL_1771579351294536177$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a686062f2725289cb3627d70b3d0094970cd9dca␟1771579351294536177:Dialog from string`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3618801107271860538$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__11 = goog.getMsg("Dialog with directive");
        i18n_10 = MSG_EXTERNAL_3618801107271860538$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟608d29bba6c32a7b5dfa73928b02f183600ee73e␟3618801107271860538:Dialog with directive`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3606618943323087151$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__13 = goog.getMsg("Component dialog");
        i18n_12 = MSG_EXTERNAL_3606618943323087151$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟3949e338becfd28a82052b00bc979abb08552cfc␟3606618943323087151:Component dialog`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4940716035428343351$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__15 = goog.getMsg("Dialog from template");
        i18n_14 = MSG_EXTERNAL_4940716035428343351$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟4b0fe3a803dfe4cf166a537875203806bf4b4f0f␟4940716035428343351:Dialog from template`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1307707756568638130$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__17 = goog.getMsg("Mobile dialog");
        i18n_16 = MSG_EXTERNAL_1307707756568638130$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟b4b51beef39318587b1321b9952db1549cc9d388␟1307707756568638130:Mobile dialog`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4115953377354902178$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__19 = goog.getMsg("Dialog with header");
        i18n_18 = MSG_EXTERNAL_4115953377354902178$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟0f9419e1509da5d33b55e3fb92bec7282a6fdffd␟4115953377354902178:Dialog with header`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_643875148834197847$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__21 = goog.getMsg("Fullscreen mobile dialog with autofocus");
        i18n_20 = MSG_EXTERNAL_643875148834197847$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟eb4186807f6779368d1fe61e90940d0d746e3744␟643875148834197847:Fullscreen mobile dialog with autofocus`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5645451818099140036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__23 = goog.getMsg("{$startParagraph} To show a dialog, use method {$startTagTuiDocCode}{$closeTagTuiDocCode}{$closeParagraph} of {$startTagCode}TuiDialogService{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} input data type. In this sample, input data has type {$startTagCode}number{$closeTagCode} and output data has type {$startTagCode}string{$closeTagCode} . {$startParagraph} You can also just unsubscribe from {$startTagCode}Observable{$closeTagCode} to close a dialog (this observable is returned from {$startTagCode}open{$closeTagCode} method). You can save a subscription for that or use {$startTagCode}takeUntil{$closeTagCode} like tools from {$startTagCode}RxJs{$closeTagCode}{$closeParagraph}", {
          "startParagraph": "[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]",
          "startTagTuiDocCode": "\uFFFD#8\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#8\uFFFD",
          "closeParagraph": "[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]",
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"
        });
        i18n_22 = MSG_EXTERNAL_5645451818099140036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟12afe59c2a449fd23a24b67889fbda031f6e47da␟5645451818099140036:${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_PARAGRAPH: To show a dialog, use method ${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_PARAGRAPH: of ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:TuiDialogService${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: input data type. In this sample, input data has type ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:number${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: and output data has type ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:string${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#7\uFFFD|\uFFFD#14\uFFFD]"}:START_PARAGRAPH: You can also just unsubscribe from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: to close a dialog (this observable is returned from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:takeUntil${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE: like tools from ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_CODE:RxJs${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_22 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_22);
      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1416152749492899734$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___25 = goog.getMsg(" I am an example of dialog ");
        i18n_24 = MSG_EXTERNAL_1416152749492899734$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟4c7aeceae808db46171e4f873177bf293696bd0e␟1416152749492899734: I am an example of dialog `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_256323569582258112$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___27 = goog.getMsg(" Dialog has {$startTagCode}Observer{$closeTagCode} in its context to call {$startTagCode}next{$closeTagCode} , {$startTagCode}complete{$closeTagCode} or {$startTagCode}error{$closeTagCode} of stream. There is also a {$startTagCode}completeWith{$closeTagCode} method to pass data and close dialog with one action ", {
          "startTagCode": "[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]",
          "closeTagCode": "[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"
        });
        i18n_26 = MSG_EXTERNAL_256323569582258112$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟79844ab27e228d1300d66e21a191b521f2e607f5␟256323569582258112: Dialog has ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:Observer${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: in its context to call ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:next${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:complete${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:error${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: of stream. There is also a ${"[\uFFFD#5\uFFFD|\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:completeWith${"[\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: method to pass data and close dialog with one action `;
      }

      i18n_26 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_26);
      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6058086608431441514$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___29 = goog.getMsg("Input data: {$interpolation}.", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_6058086608431441514$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟254e4a9a1e95849ce0b0aac6883316bd59d2f30c␟6058086608431441514:Input data: ${"\uFFFD0\uFFFD"}:INTERPOLATION:.`;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6532097318971912659$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___31 = goog.getMsg(" There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside ");
        i18n_30 = MSG_EXTERNAL_6532097318971912659$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟2539761ea1e35160b56af3781a06a3437da7745c␟6532097318971912659: There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside `;
      }

      let i18n_33;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_83119307066036689$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____34 = goog.getMsg(" Template can be customized ");
        i18n_33 = MSG_EXTERNAL_83119307066036689$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____34;
      } else {
        i18n_33 = $localize`:␟32ebb8be9392652a777e6c79a3bea6c57b80c130␟83119307066036689: Template can be customized `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4782742146343455471$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____35 = goog.getMsg(" Dynamic height change {$startTagNgTemplate} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! {$closeTagNgTemplate}", {
          "startTagNgTemplate": "\uFFFD*18:1\uFFFD",
          "closeTagNgTemplate": "\uFFFD/*18:1\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_4782742146343455471$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS____35;
      } else {
        i18n_32 = $localize`:␟75f1bd62d07962d3838742466ea49bb4fbc49b90␟4782742146343455471: Dynamic height change ${"\uFFFD*18:1\uFFFD"}:START_TAG_NG_TEMPLATE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! ${"\uFFFD/*18:1\uFFFD"}:CLOSE_TAG_NG_TEMPLATE:`;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3736431394797625973$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___37 = goog.getMsg(" Show a cross to close dialog ");
        i18n_36 = MSG_EXTERNAL_3736431394797625973$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___37;
      } else {
        i18n_36 = $localize`:␟a1b20ff999c9640a82965d77fd4d207567b34502␟3736431394797625973: Show a cross to close dialog `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6819182888436584573$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___39 = goog.getMsg(" Dialog can be canceled with Escape key or with a click outside ");
        i18n_38 = MSG_EXTERNAL_6819182888436584573$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___39;
      } else {
        i18n_38 = $localize`:␟52766d5606f8949d3106268067f8a9df902852ae␟6819182888436584573: Dialog can be canceled with Escape key or with a click outside `;
      }

      let i18n_40;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6585835507882773263$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___41 = goog.getMsg(" Input data for dialog, type <I> ");
        i18n_40 = MSG_EXTERNAL_6585835507882773263$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___41;
      } else {
        i18n_40 = $localize`:␟fed37126f54f6f719380faf1f1e6b749c6536376␟6585835507882773263: Input data for dialog, type <I> `;
      }

      let i18n_42;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8741377272090946252$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___43 = goog.getMsg(" Content above a heading ");
        i18n_42 = MSG_EXTERNAL_8741377272090946252$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___43;
      } else {
        i18n_42 = $localize`:␟6bcf9d4cfe9aeb7aa105a2ce2235e956f45c5689␟8741377272090946252: Content above a heading `;
      }

      let i18n_44;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4730648600142301155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___45 = goog.getMsg(" Heading of dialog ");
        i18n_44 = MSG_EXTERNAL_4730648600142301155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___45;
      } else {
        i18n_44 = $localize`:␟804205d2472c83819d09d2fa3dcc4ef51fc62dad␟4730648600142301155: Heading of dialog `;
      }

      let i18n_46;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8954617186696208261$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___47 = goog.getMsg(" Cross click, overlay click or Escape click emits an error into {$startTagCode}Observable{$closeTagCode} (you can catch it with \"catch\" operator or onError handler) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_46 = MSG_EXTERNAL_8954617186696208261$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___47;
      } else {
        i18n_46 = $localize`:␟8a22f2d973fc300f72c09e07cb0fbc6d7cdcd42a␟8954617186696208261: Cross click, overlay click or Escape click emits an error into ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:Observable${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: (you can catch it with "catch" operator or onError handler) `;
      }

      let i18n_48;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___49 = goog.getMsg(" Size ");
        i18n_48 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS___49;
      } else {
        i18n_48 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_50;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3227202460516574859$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__51 = goog.getMsg(" Add {$startTagCode}TuiDialogModule{$closeTagCode} into your app.module ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_50 = MSG_EXTERNAL_3227202460516574859$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__51;
      } else {
        i18n_50 = $localize`:␟f07c69869a3ce18f47b01935b1a8ead0e7410f4c␟3227202460516574859: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDialogModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
      }

      let i18n_52;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_404924514778011937$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__53 = goog.getMsg(" Use {$startTagCode}open{$closeTagCode} method to show a dialog, subscribe to an {$startTagCode}Observable{$closeTagCode} : ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_52 = MSG_EXTERNAL_404924514778011937$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__53;
      } else {
        i18n_52 = $localize`:␟2ed34ad97769579b0a2cd2a73d5884333610b62f␟404924514778011937: Use ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: method to show a dialog, subscribe to an ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: : `;
      }

      i18n_52 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_52);
      let i18n_54;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7493627506876302037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__55 = goog.getMsg(" If you want to use your own component as a dialog content, use {$startTagCode}POLYMORPHEUS_CONTEXT{$closeTagCode} in it. Dialog will provide with this token some useful options: {$startTagCode}$implicit{$closeTagCode} with {$startTagCode}Observer<O>{$closeTagCode} and {$startTagCode}completeWith{$closeTagCode} hook to call {$startTagCode}next{$closeTagCode} and {$startTagCode}complete{$closeTagCode} in one action. Do not forget to add your dialog component into {$startTagCode}entryComponents{$closeTagCode} of your module where you use dialog ", {
          "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]",
          "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"
        });
        i18n_54 = MSG_EXTERNAL_7493627506876302037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__55;
      } else {
        i18n_54 = $localize`:␟a9de9542b123113af26aaf3c2c29d42caab041d2␟7493627506876302037: If you want to use your own component as a dialog content, use ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: in it. Dialog will provide with this token some useful options: ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:Observer<O>${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:completeWith${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: hook to call ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:next${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:complete${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: in one action. Do not forget to add your dialog component into ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#17\uFFFD|\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:entryComponents${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: of your module where you use dialog `;
      }

      i18n_54 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_54);
      let i18n_56;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4053510454814781699$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__57 = goog.getMsg(" You can also use a {$startLink} template {$closeLink}", {
          "startLink": "\uFFFD#25\uFFFD",
          "closeLink": "\uFFFD/#25\uFFFD"
        });
        i18n_56 = MSG_EXTERNAL_4053510454814781699$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__57;
      } else {
        i18n_56 = $localize`:␟8e1f35a1ec9a7effa8833227870e9b990d96e959␟4053510454814781699: You can also use a ${"\uFFFD#25\uFFFD"}:START_LINK: template ${"\uFFFD/#25\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_58;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7366196043250081255$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__59 = goog.getMsg(" Use {$startTagCode}Observer{$closeTagCode} from {$startTagCode}$implicit{$closeTagCode} field of context to close a dialog or get some data ", {
          "startTagCode": "[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]",
          "closeTagCode": "[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"
        });
        i18n_58 = MSG_EXTERNAL_7366196043250081255$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__59;
      } else {
        i18n_58 = $localize`:␟91ee042985c1174de60304c55f094df69b69fc0c␟7366196043250081255: Use ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:Observer${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#29\uFFFD|\uFFFD#30\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#29\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_TAG_CODE: field of context to close a dialog or get some data `;
      }

      i18n_58 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_58);
      let i18n_60;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4116027893149592500$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__61 = goog.getMsg(" If you use dialog components in lazy loading modules, do not forget to pass into {$startTagCode}new PolymorpheusComponent Injector{$closeTagCode} of component where you open a dialog ", {
          "startTagCode": "\uFFFD#35\uFFFD",
          "closeTagCode": "\uFFFD/#35\uFFFD"
        });
        i18n_60 = MSG_EXTERNAL_4116027893149592500$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__61;
      } else {
        i18n_60 = $localize`:␟46878c30a93e93fdcd415742dbfc5eb3c1c83797␟4116027893149592500: If you use dialog components in lazy loading modules, do not forget to pass into ${"\uFFFD#35\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\uFFFD/#35\uFFFD"}:CLOSE_TAG_CODE: of component where you open a dialog `;
      }

      let i18n_62;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4210644035876782944$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__63 = goog.getMsg(" Dialogs have experimental feature with closing them on browser backward navigation. It was achieved through manipulation of {$startTagCode}{$startTagStrong}window.history{$closeTagStrong}{$closeTagCode} . ", {
          "startTagCode": "\uFFFD#40\uFFFD",
          "startTagStrong": "\uFFFD#41\uFFFD",
          "closeTagStrong": "\uFFFD/#41\uFFFD",
          "closeTagCode": "\uFFFD/#40\uFFFD"
        });
        i18n_62 = MSG_EXTERNAL_4210644035876782944$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__63;
      } else {
        i18n_62 = $localize`:␟b8215110c06020b19cfe79c37eaa93ec737c78be␟4210644035876782944: Dialogs have experimental feature with closing them on browser backward navigation. It was achieved through manipulation of ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:${"\uFFFD#41\uFFFD"}:START_TAG_STRONG:window.history${"\uFFFD/#41\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE: . `;
      }

      let i18n_64;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7894941606914093222$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__65 = goog.getMsg(" The feature is disabled by default because it can cause troubles in some cases. To enable this feature for your app use {$startTagCode}{$startTagStrong}TUI_DIALOG_CLOSES_ON_BACK{$closeTagStrong}{$closeTagCode} token. ", {
          "startTagCode": "\uFFFD#44\uFFFD",
          "startTagStrong": "\uFFFD#45\uFFFD",
          "closeTagStrong": "\uFFFD/#45\uFFFD",
          "closeTagCode": "\uFFFD/#44\uFFFD"
        });
        i18n_64 = MSG_EXTERNAL_7894941606914093222$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__65;
      } else {
        i18n_64 = $localize`:␟54b45b781929dc1b95e06d15119dc6743e2fc719␟7894941606914093222: The feature is disabled by default because it can cause troubles in some cases. To enable this feature for your app use ${"\uFFFD#44\uFFFD"}:START_TAG_CODE:${"\uFFFD#45\uFFFD"}:START_TAG_STRONG:TUI_DIALOG_CLOSES_ON_BACK${"\uFFFD/#45\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#44\uFFFD"}:CLOSE_TAG_CODE: token. `;
      }

      let i18n_66;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6239344883531610814$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__67 = goog.getMsg(" You can create your own dialogs. For example, special dialogs for mobile apps or with very customizable appearance. ");
        i18n_66 = MSG_EXTERNAL_6239344883531610814$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__67;
      } else {
        i18n_66 = $localize`:␟23901f02d1c1eb074d8b3cec720c020c0aacbb08␟6239344883531610814: You can create your own dialogs. For example, special dialogs for mobile apps or with very customizable appearance. `;
      }

      let i18n_68;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7955073863786570375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__69 = goog.getMsg(" Then you need to provide a stream of your dialogs into multi token {$startTagCode}TUI_DIALOGS{$closeTagCode} . ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_68 = MSG_EXTERNAL_7955073863786570375$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__69;
      } else {
        i18n_68 = $localize`:␟bf9690a0d452859245ec41e0530f5addfe3c6625␟7955073863786570375: Then you need to provide a stream of your dialogs into multi token ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TUI_DIALOGS${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: . `;
      }

      let i18n_70;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2979572952468566428$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__71 = goog.getMsg(" You can also use {$startTagCode}AbstractTuiDialogService{$closeTagCode} to create this stream of dialogs. ", {
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD"
        });
        i18n_70 = MSG_EXTERNAL_2979572952468566428$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__71;
      } else {
        i18n_70 = $localize`:␟9c30564df6be32ac49a076485006448a5b6634af␟2979572952468566428: You can also use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:AbstractTuiDialogService${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: to create this stream of dialogs. `;
      }

      let i18n_72;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5856247484231506150$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__73 = goog.getMsg(" See example of custom dialog {$startLink} here {$closeLink} . ", {
          "startLink": "\uFFFD#10\uFFFD",
          "closeLink": "\uFFFD/#10\uFFFD"
        });
        i18n_72 = MSG_EXTERNAL_5856247484231506150$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DIALOG_DIALOG_COMPONENT_TS__73;
      } else {
        i18n_72 = $localize`:␟00c0fe5a892a9249c1851574b1edd06a1c3f85b5␟5856247484231506150: See example of custom dialog ${"\uFFFD#10\uFFFD"}:START_LINK: here ${"\uFFFD/#10\uFFFD"}:CLOSE_LINK: . `;
      }

      return [["header", "Dialog", "package", "CORE"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, i18n_4, ["tuiLink", "", "routerLink", "/dialogs"], [1, "tui-space_vertical-4"], i18n_6, [3, "code"], ["status", "warning", 1, "tui-space_vertical-4"], ["id", "string", "heading", i18n_8, 3, "content"], ["id", "directive", "heading", i18n_10, 3, "content"], ["id", "data", "heading", i18n_12, "description", "Using two-way data transfer", 3, "content"], ["id", "template", "heading", i18n_14, 3, "content"], ["id", "mobile", "heading", i18n_16, 3, "content"], ["id", "header", "heading", i18n_18, 3, "content"], ["id", "mobile-fullscreen", "heading", i18n_20, 3, "content"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [1, "b-full-width"], i18n_22, ["documentationPropertyName", "closeable", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "dismissible", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "data", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "header", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "label", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "required", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyType", "TuiDialogSize", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_24, [4, "ngIf"], i18n_26, i18n_28, i18n_30, [1, "container"], i18n_32, ["tuiAccordionItemContent", ""], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_top-2", "tui-space_right-1", 3, "click"], i18n_33, i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46, i18n_48, [1, "b-demo-steps"], i18n_50, ["filename", "app.module.ts", 3, "code"], i18n_52, ["filename", "myComponent.component.ts", 3, "code"], i18n_54, ["filename", "myComponent.module.ts", 3, "code"], i18n_56, ["routerLink", "/dialogs", "fragment", "example-template", "tuiLink", ""], i18n_58, ["filename", "myDialog.component.ts", 3, "code"], i18n_60, i18n_62, i18n_64, i18n_66, i18n_68, i18n_70, i18n_72];
    },
    template: function ExampleTuiDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDialogComponent_ng_template_1_Template, 31, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDialogComponent_ng_template_2_Template, 27, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDialogComponent_ng_template_3_Template, 47, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiDialogComponent_ng_template_4_Template, 11, 0, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, notification_component/* TuiNotificationComponent */.L, code_component/* TuiDocCodeComponent */.c, example_component/* TuiDocExampleComponent */.f, TuiDialogExampleComponent1, TuiDialogExampleComponent6, TuiDialogExampleComponent2, TuiDialogExampleComponent3, TuiDialogExampleComponent4, TuiDialogExampleComponent5, TuiDialogExampleComponent7, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, common/* NgIf */.O5, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d],
    styles: [".big[_ngcontent-%COMP%]{font-size:3.125rem}"],
    changeDetection: 0
  });
  return ExampleTuiDialogComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/2/dialog-example/dialog-example.module.ts








let DialogExampleModule = /*#__PURE__*/(() => {
  class DialogExampleModule {}

  DialogExampleModule.ɵfac = function DialogExampleModule_Factory(t) {
    return new (t || DialogExampleModule)();
  };

  DialogExampleModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: DialogExampleModule
  });
  DialogExampleModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiButtonModule, kit.TuiSelectModule, kit.TuiInputModule, addon_commerce.TuiMoneyModule, core.TuiTextfieldControllerModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, kit.TuiSliderModule, cdk.TuiAutoFocusModule]]
  });
  return DialogExampleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(DialogExampleModule, {
    declarations: [DialogExampleComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiButtonModule, kit.TuiSelectModule, kit.TuiInputModule, addon_commerce.TuiMoneyModule, core.TuiTextfieldControllerModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, kit.TuiSliderModule, cdk.TuiAutoFocusModule],
    exports: [DialogExampleComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/examples/7/search-example/search-dialog.module.ts





let SearchDialogExampleModule = /*#__PURE__*/(() => {
  class SearchDialogExampleModule {}

  SearchDialogExampleModule.ɵfac = function SearchDialogExampleModule_Factory(t) {
    return new (t || SearchDialogExampleModule)();
  };

  SearchDialogExampleModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: SearchDialogExampleModule
  });
  SearchDialogExampleModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiPrimitiveTextfieldModule, cdk.TuiAutoFocusModule, core.TuiButtonModule]]
  });
  return SearchDialogExampleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(SearchDialogExampleModule, {
    declarations: [SearchDialogExampleComponent],
    imports: [common/* CommonModule */.ez, core.TuiPrimitiveTextfieldModule, cdk.TuiAutoFocusModule, core.TuiButtonModule],
    exports: [SearchDialogExampleComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/dialog/dialog.module.ts






















let ExampleTuiDialogModule = /*#__PURE__*/(() => {
  class ExampleTuiDialogModule {}

  ExampleTuiDialogModule.ɵfac = function ExampleTuiDialogModule_Factory(t) {
    return new (t || ExampleTuiDialogModule)();
  };

  ExampleTuiDialogModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDialogModule
  });
  ExampleTuiDialogModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiDialogModule, kit.TuiAccordionModule, core.TuiButtonModule, addon_commerce.TuiMoneyModule, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiHintModule, core.TuiLinkModule, kit.TuiMarkerIconModule, cdk.TuiPreventDefaultModule, core.TuiNotificationModule, addon_mobile.TuiElasticStickyModule, cdk.TuiAutoFocusModule, public_api/* TuiAddonDocModule */.fV, DialogExampleModule, SearchDialogExampleModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDialogComponent))]]
  });
  return ExampleTuiDialogModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDialogModule, {
    declarations: [ExampleTuiDialogComponent, TuiDialogExampleComponent1, TuiDialogExampleComponent2, TuiDialogExampleComponent3, TuiDialogExampleComponent4, TuiDialogExampleComponent5, TuiDialogExampleComponent6, TuiDialogExampleComponent7],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiDialogModule, kit.TuiAccordionModule, core.TuiButtonModule, addon_commerce.TuiMoneyModule, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiHintModule, core.TuiLinkModule, kit.TuiMarkerIconModule, cdk.TuiPreventDefaultModule, core.TuiNotificationModule, addon_mobile.TuiElasticStickyModule, cdk.TuiAutoFocusModule, public_api/* TuiAddonDocModule */.fV, DialogExampleModule, SearchDialogExampleModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiDialogComponent]
  });
})();

/***/ })

}]);