"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[93794],{

/***/ 95582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputPhoneModule": () => (/* binding */ ExampleTuiInputPhoneModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.component.ts
var input_phone_component = __webpack_require__(78750);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.directive.ts
var input_phone_directive = __webpack_require__(45303);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone/examples/1/index.ts








let TuiInputPhoneExample1 = /*#__PURE__*/(() => {
  class TuiInputPhoneExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`+77777777777`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

    setValue() {
      this.testForm.get(`testValue`).setValue(`+79926775676`);
    }

  }

  TuiInputPhoneExample1.ɵfac = function TuiInputPhoneExample1_Factory(t) {
    return new (t || TuiInputPhoneExample1)();
  };

  TuiInputPhoneExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPhoneExample1,
    selectors: [["tui-input-phone-example-1"]],
    decls: 9,
    vars: 4,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"], ["tuiTextfield", "", "autocomplete", "tel"], [1, "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiInputPhoneExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-phone", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Type a phone number ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "pre", 3);
        fesm2015_core/* ɵɵtext */._uU(5);
        fesm2015_core/* ɵɵpipe */.ALo(6, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputPhoneExample1_Template_button_click_7_listener() {
          return ctx.setValue();
        });
        fesm2015_core/* ɵɵtext */._uU(8, " Set value from outside: +79926775676\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Form value: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 2, ctx.testForm.value), "");
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, button_component/* TuiButtonComponent */.v],
    pipes: [common/* JsonPipe */.Ts],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputPhoneExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone/examples/2/index.ts






let TuiInputPhoneExample2 = /*#__PURE__*/(() => {
  class TuiInputPhoneExample2 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.minLength */.kI.minLength(12));
    }

  }

  TuiInputPhoneExample2.ɵfac = function TuiInputPhoneExample2_Factory(t) {
    return new (t || TuiInputPhoneExample2)();
  };

  TuiInputPhoneExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPhoneExample2,
    selectors: [["tui-input-phone-example-2"]],
    decls: 5,
    vars: 4,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputPhoneExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-phone", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Type phone number\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "pre");
        fesm2015_core/* ɵɵtext */._uU(3);
        fesm2015_core/* ɵɵpipe */.ALo(4, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Form value: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 2, ctx.control.value), "");
      }
    },
    directives: [input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    pipes: [common/* JsonPipe */.Ts],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputPhoneExample2;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/merge.js
var merge = __webpack_require__(66682);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(9112);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/tap.js
var tap = __webpack_require__(68307);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/share.js + 1 modules
var share = __webpack_require__(18819);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts
var let_directive = __webpack_require__(40939);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone/examples/3/index.ts

















function TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_tui_data_list_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_tui_data_list_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw(4);
      return ctx_r8.onClick(item_r7);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "span");
    fesm2015_core/* ɵɵtext */._uU(4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "span", 9);
    fesm2015_core/* ɵɵtext */._uU(6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r7.phone)("disabled", item_r7.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", item_r7.avatarUrl || null)("text", item_r7.firstName);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵtextInterpolate2 */.AsE("", item_r7.firstName, " ", item_r7.lastName, "");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r7.phone);
  }
}

function TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_tui_data_list_1_button_1_Template, 7, 7, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2).tuiLet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", items_r3);
  }
}

function TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_tui_data_list_1_Template, 2, 1, "tui-data-list", 4);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiInputPhoneExample3_tui_input_phone_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-phone", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputPhoneExample3_tui_input_phone_0_Template_tui_input_phone_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.value = $event;
    })("searchChange", function TuiInputPhoneExample3_tui_input_phone_0_Template_tui_input_phone_searchChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.onSearch($event);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputPhoneExample3_tui_input_phone_0_ng_container_3_Template, 2, 0, "ng-container", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r3 = ctx.tuiLet;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCustomContent", _r1)("allowText", true)("ngModel", ctx_r0.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 5, ctx_r0.placeholder$), " ");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", items_r3 == null ? null : items_r3.length);
  }
}

function TuiInputPhoneExample3_ng_template_2_tui_avatar_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 11);
  }

  if (rf & 2) {
    const user_r15 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("avatarUrl", user_r15.avatarUrl || null)("text", user_r15.firstName);
  }
}

function TuiInputPhoneExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiInputPhoneExample3_ng_template_2_tui_avatar_0_Template, 1, 3, "tui-avatar", 10);
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx_r2.user$));
  }
}

class User {
  constructor(firstName, lastName, phone, avatarUrl = null, disabled = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.avatarUrl = avatarUrl;
    this.disabled = disabled;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const DATA = [new User(`Roman`, `Sedov`, `+75678901234`, `http://marsibarsi.me/images/1x1small.jpg`), new User(`Alex`, `Inkin`, `+75678901234`, utils/* assets */.L`/images/avatar.jpg`)];
class TuiInputPhoneExample3 {
  constructor() {
    this.search$ = new Subject/* Subject */.xQ();
    this.selected$ = new Subject/* Subject */.xQ();
    this.value = ``;
    this.user$ = (0,merge/* merge */.T)(this.selected$, this.search$.pipe((0,switchMap/* switchMap */.w)(value => this.request(value).pipe((0,map/* map */.U)(response => this.isFullMatch(response, value) ? response[0] : null))))).pipe((0,tap/* tap */.b)(user => {
      if (user) {
        this.value = user.phone;
      }
    }));
    this.items$ = this.search$.pipe((0,startWith/* startWith */.O)(``), (0,switchMap/* switchMap */.w)(value => this.request(value).pipe((0,map/* map */.U)(response => this.isFullMatch(response, value) ? [] : response))));
    this.placeholder$ = (0,combineLatest/* combineLatest */.aj)(this.user$, this.search$).pipe((0,map/* map */.U)(([user, search]) => user || this.getPlaceholder(search)), (0,startWith/* startWith */.O)(`Phone number or name`));
  }

  onSearch(search) {
    this.search$.next(search);
  }

  onClick(user) {
    this.selected$.next(user);
  } // Request imitation


  request(query) {
    return (0,of.of)(DATA.filter(item => (0,cdk.TUI_DEFAULT_MATCHER)(item, query) || (0,cdk.TUI_DEFAULT_MATCHER)(item.phone, query))).pipe((0,share/* share */.B)());
  }

  getPlaceholder(search) {
    if (!search) {
      return `Phone number or name`;
    }

    if (search.startsWith(`+`)) {
      return `Phone number`;
    }

    return `Name`;
  }

  isFullMatch(response, value) {
    return response.length === 1 && (String(response[0]) === value || response[0].phone === value);
  }

}

TuiInputPhoneExample3.ɵfac = function TuiInputPhoneExample3_Factory(t) {
  return new (t || TuiInputPhoneExample3)();
};

TuiInputPhoneExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiInputPhoneExample3,
  selectors: [["tui-input-phone-example-3"]],
  decls: 6,
  vars: 4,
  consts: [["class", "b-form", 3, "tuiTextfieldCustomContent", "allowText", "ngModel", "ngModelChange", "searchChange", 4, "tuiLet"], ["avatar", ""], [1, "b-form", 3, "tuiTextfieldCustomContent", "allowText", "ngModel", "ngModelChange", "searchChange"], [4, "ngIf"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", "disabled", "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "disabled", "click"], ["size", "s", 1, "tui-space_right-3", 3, "avatarUrl", "text"], [1, "user"], [1, "phone"], ["size", "s", 3, "rounded", "avatarUrl", "text", 4, "ngIf"], ["size", "s", 3, "rounded", "avatarUrl", "text"]],
  template: function TuiInputPhoneExample3_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵtemplate */.YNc(0, TuiInputPhoneExample3_tui_input_phone_0_Template, 4, 7, "tui-input-phone", 0);
      fesm2015_core/* ɵɵpipe */.ALo(1, "async");
      fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputPhoneExample3_ng_template_2_Template, 2, 3, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
      fesm2015_core/* ɵɵtext */._uU(5);
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx.items$));
      fesm2015_core/* ɵɵadvance */.xp6(5);
      fesm2015_core/* ɵɵtextInterpolate1 */.hij("Value: ", ctx.value, "");
    }
  },
  directives: [let_directive/* TuiLetDirective */.L, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgIf */.O5, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, avatar_component/* TuiAvatarComponent */.J],
  pipes: [common/* AsyncPipe */.Ov],
  styles: [".user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);display:block;color:var(--tui-text-03)}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiInputPhoneExample3.prototype, "request", null);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone/input-phone.component.ts




























function ExampleTuiInputPhoneComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(5, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵtext */._uU(7, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(8, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-input-phone-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-input-phone-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-input-phone-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-phone", 13);
    fesm2015_core/* ɵɵtext */._uU(1, " Type a phone number ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldCustomContent", ctx_r3.customContent)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("countryCode", ctx_r3.countryCode)("phoneMaskAfterCountryCode", ctx_r3.phoneMaskAfterCountryCode)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiInputPhoneComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPhoneComponent_ng_template_2_ng_template_1_Template, 2, 21, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPhoneComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputPhoneComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.countryCode = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputPhoneComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.phoneMaskAfterCountryCode = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputPhoneComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation", 12);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.countryCodes)("documentationPropertyValue", ctx_r1.countryCode);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.phoneMasksAfterCountryCode)("documentationPropertyValue", ctx_r1.phoneMaskAfterCountryCode);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiInputPhoneComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 19);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 21);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiInputPhoneComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputPhoneComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 2207).then(__webpack_require__.t.bind(__webpack_require__, 2207, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 81627).then(__webpack_require__.t.bind(__webpack_require__, 81627, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 43560).then(__webpack_require__.t.bind(__webpack_require__, 43560, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 95894).then(__webpack_require__.t.bind(__webpack_require__, 95894, 17)),
        HTML: __webpack_require__.e(/* import() */ 30508).then(__webpack_require__.t.bind(__webpack_require__, 30508, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 81831).then(__webpack_require__.t.bind(__webpack_require__, 81831, 17)),
        HTML: __webpack_require__.e(/* import() */ 9604).then(__webpack_require__.t.bind(__webpack_require__, 9604, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 893).then(__webpack_require__.t.bind(__webpack_require__, 893, 17)),
        HTML: __webpack_require__.e(/* import() */ 77707).then(__webpack_require__.t.bind(__webpack_require__, 77707, 17)),
        LESS: __webpack_require__.e(/* import() */ 96912).then(__webpack_require__.t.bind(__webpack_require__, 96912, 17))
      };
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.minLength */.kI.minLength(12)]);
      this.countryCodes = [`+7`, `+850`, `+1`, `+52`];
      this.countryCode = this.countryCodes[0];
      this.phoneMasksAfterCountryCode = [`(###) ###-##-##`, `(####)+____:-#############`, `### ###-####`];
      this.phoneMaskAfterCountryCode = this.phoneMasksAfterCountryCode[0];
    }

  }

  ExampleTuiInputPhoneComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputPhoneComponent_BaseFactory;
    return function ExampleTuiInputPhoneComponent_Factory(t) {
      return (ɵExampleTuiInputPhoneComponent_BaseFactory || (ɵExampleTuiInputPhoneComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputPhoneComponent)))(t || ExampleTuiInputPhoneComponent);
    };
  }();

  ExampleTuiInputPhoneComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputPhoneComponent,
    selectors: [["example-tui-input-phone"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputPhoneComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4265916685645891270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputPhone{$closeTagCode} allows to input a phone number ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_4265916685645891270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟cdedf35da9f1fe59a6967a31fca86bb5223deb5e␟4265916685645891270:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputPhone${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to input a phone number `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_577318767938750368$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__5 = goog.getMsg("With length validator");
        i18n_4 = MSG_EXTERNAL_577318767938750368$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟3d7fa81ead9d15f29cb4d813100cad4c816553cd␟577318767938750368:With length validator`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7072553736290807084$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__7 = goog.getMsg("With autocomplete");
        i18n_6 = MSG_EXTERNAL_7072553736290807084$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟f7801e64b274854b74c1e808598fc1ddd2f44e16␟7072553736290807084:With autocomplete`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3923198094532276941$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__9 = goog.getMsg("By number and by name");
        i18n_8 = MSG_EXTERNAL_3923198094532276941$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟7a074c8c6837e68463062476f13f9646e4b3ffb8␟3923198094532276941:By number and by name`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___11 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2828194013486797327$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___13 = goog.getMsg(" Country code ");
        i18n_12 = MSG_EXTERNAL_2828194013486797327$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3398053793685015135$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___15 = goog.getMsg(" Text mask after country code. You can use {$startTagCode}#{$closeTagCode} , {$startTagCode}-{$closeTagCode} and spaces as a template sumbol ", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"
        });
        i18n_14 = MSG_EXTERNAL_3398053793685015135$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟68665a783e62d750ebd0261d482afd5e9717751a␟3398053793685015135: Text mask after country code. You can use ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:#${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:-${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: and spaces as a template sumbol `;
      }

      i18n_14 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_14);
      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8882017065969020678$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___17 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside ");
        i18n_16 = MSG_EXTERNAL_8882017065969020678$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟8a6a5ce2ceea7d3a5c99fc7c3eeac0e54d7ecaf2␟8882017065969020678: Textfield value to subscribe on input or setting it from the outside `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4215209632386988101$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__19 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputPhoneModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_4215209632386988101$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟3066c1bc71219464813f85b21117fcdb078ebfd8␟4215209632386988101: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputPhoneModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__21 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_20 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_20 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_20);
      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INPUT_PHONE_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputPhone", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "validated", "heading", i18n_4, 3, "content"], ["id", "autocomplete", "heading", i18n_6, "description", i18n_8, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "countryCode", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "phoneMaskAfterCountryCode", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string"], [3, "dropdown"], [3, "formControl", "focusable", "readOnly", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "countryCode", "phoneMaskAfterCountryCode", "pseudoInvalid", "pseudoFocus", "pseudoHover", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.component.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputPhoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPhoneComponent_ng_template_1_Template, 17, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputPhoneComponent_ng_template_2_Template, 8, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPhoneComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputPhoneExample1, TuiInputPhoneExample2, TuiInputPhoneExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, hint_options_directive/* TuiHintOptionsDirective */.b, code_component/* TuiDocCodeComponent */.c],
    styles: [".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;margin:-.625rem 0}.avatar[_ngcontent-%COMP%]{margin-left:.75rem}.name[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{margin:0}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return ExampleTuiInputPhoneComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone/input-phone.module.ts















let ExampleTuiInputPhoneModule = /*#__PURE__*/(() => {
  class ExampleTuiInputPhoneModule {}

  ExampleTuiInputPhoneModule.ɵfac = function ExampleTuiInputPhoneModule_Factory(t) {
    return new (t || ExampleTuiInputPhoneModule)();
  };

  ExampleTuiInputPhoneModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputPhoneModule
  });
  ExampleTuiInputPhoneModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiLetModule, core.TuiDataListModule, core.TuiButtonModule, core.TuiSvgModule, kit.TuiAvatarModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, kit.TuiInputPhoneModule, core.TuiLinkModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputPhoneComponent))]]
  });
  return ExampleTuiInputPhoneModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputPhoneModule, {
    declarations: [ExampleTuiInputPhoneComponent, TuiInputPhoneExample1, TuiInputPhoneExample2, TuiInputPhoneExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiLetModule, core.TuiDataListModule, core.TuiButtonModule, core.TuiSvgModule, kit.TuiAvatarModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, kit.TuiInputPhoneModule, core.TuiLinkModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputPhoneComponent]
  });
})();

/***/ })

}]);