"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51300],{

/***/ 51300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTreeModule": () => (/* binding */ ExampleTuiTreeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/tree/directives/tree-item-controller.directive.ts
var tree_item_controller_directive = __webpack_require__(84239);
// EXTERNAL MODULE: ./projects/kit/components/tree/components/tree-item/tree-item.component.ts
var tree_item_component = __webpack_require__(23046);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/1/index.ts



let TuiTreeExample1 = /*#__PURE__*/(() => {
  class TuiTreeExample1 {}

  TuiTreeExample1.ɵfac = function TuiTreeExample1_Factory(t) {
    return new (t || TuiTreeExample1)();
  };

  TuiTreeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample1,
    selectors: [["tui-tree-example-1"]],
    decls: 17,
    vars: 1,
    consts: [[3, "tuiTreeController"]],
    template: function TuiTreeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementContainerStart */.ynx(0, 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(2, " Fruits ");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(4, " Apples ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(6, "Granny Smith");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(8, "Red Delicious");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(10, "Oranges");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(12, " Animals ");
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(14, "Cats");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-tree-item");
        fesm2015_core/* ɵɵtext */._uU(16, "Dogs");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementContainerEnd */.BQk();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", true);
      }
    },
    directives: [tree_item_controller_directive/* TuiTreeItemControllerDirective */.o, tree_item_component/* TuiTreeItemComponent */.R],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTreeExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/tree/components/tree/tree.component.ts
var tree_component = __webpack_require__(93759);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/2/index.ts


let TuiTreeExample2 = /*#__PURE__*/(() => {
  class TuiTreeExample2 {
    constructor() {
      this.data = [`Top level 1`, [`Second level item`, [`Third level 1`, `Third level 2`, `Third level 3`]], `Top level 2`, `Top level 3`, [`Second 1`, `Second 2`]];
    }

  }

  TuiTreeExample2.ɵfac = function TuiTreeExample2_Factory(t) {
    return new (t || TuiTreeExample2)();
  };

  TuiTreeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample2,
    selectors: [["tui-tree-example-2"]],
    decls: 1,
    vars: 1,
    consts: [[3, "value"]],
    template: function TuiTreeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tree", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.data);
      }
    },
    directives: [tree_component/* TuiTreeComponent */.Y],
    styles: ["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],
    changeDetection: 0
  });
  return TuiTreeExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/tree/directives/tree-children.directive.ts
var tree_children_directive = __webpack_require__(97247);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/3/index.ts








function TuiTreeExample3_ng_template_1_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 4);
  }

  if (rf & 2) {
    const value_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("src", value_r2.icon);
  }
}

function TuiTreeExample3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample3_ng_template_1_tui_svg_1_Template, 1, 1, "tui-svg", 3);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const node_r3 = ctx.node;
    fesm2015_core/* ɵɵstyleProp */.Udp("opacity", 1 / node_r3.level);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", value_r2.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", value_r2.text, " ");
  }
}

let TuiTreeExample3 = /*#__PURE__*/(() => {
  class TuiTreeExample3 {
    constructor() {
      this.data = {
        text: `Topmost`,
        children: [{
          text: `Top level 1`,
          icon: `tuiIconHeart`,
          children: [{
            text: `Another item`,
            children: [{
              text: `Next level 1`,
              icon: `tuiIconHeart`
            }, {
              text: `Next level 2`,
              icon: `tuiIconHeart`
            }, {
              text: `Next level 3`
            }]
          }]
        }, {
          text: `Top level 2`
        }, {
          text: `Top level 3`,
          children: [{
            text: `Test 1`
          }, {
            text: `Test 2`,
            icon: `tuiIconHeart`
          }]
        }]
      };

      this.handler = item => item.children || cdk/* EMPTY_ARRAY */.LZ8;
    }

  }

  TuiTreeExample3.ɵfac = function TuiTreeExample3_Factory(t) {
    return new (t || TuiTreeExample3)();
  };

  TuiTreeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample3,
    selectors: [["tui-tree-example-3"]],
    decls: 3,
    vars: 4,
    consts: [[3, "tuiTreeController", "value", "content", "childrenHandler"], ["content", ""], [1, "wrapper"], [3, "src", 4, "ngIf"], [3, "src"]],
    template: function TuiTreeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tree", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample3_ng_template_1_Template, 3, 4, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", true)("value", ctx.data)("content", _r0)("childrenHandler", ctx.handler);
      }
    },
    directives: [tree_component/* TuiTreeComponent */.Y, tree_children_directive/* TuiTreeChildrenDirective */.n, tree_item_controller_directive/* TuiTreeItemControllerDirective */.o, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],
    changeDetection: 0
  });
  return TuiTreeExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/tree/directives/tree-controller.directive.ts
var tree_controller_directive = __webpack_require__(63624);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/4/index.ts







function TuiTreeExample4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2.text, "\n");
  }
}

let TuiTreeExample4 = /*#__PURE__*/(() => {
  class TuiTreeExample4 {
    constructor() {
      this.data = {
        text: `Topmost`,
        children: [{
          text: `Top level 1`,
          children: [{
            text: `Another item`,
            children: [{
              text: `Next level 1`
            }, {
              text: `Next level 2`
            }, {
              text: `Next level 3`
            }]
          }]
        }, {
          text: `Top level 2`
        }, {
          text: `Top level 3`,
          children: [{
            text: `Test 1`
          }, {
            text: `Test 2`
          }]
        }]
      };
      this.map = new Map();

      this.handler = item => item.children || cdk/* EMPTY_ARRAY */.LZ8;
    }

    toggleTopmost() {
      this.map.set(this.data, !this.map.get(this.data));
    }

    toggleLevel() {
      this.map.set(this.data.children[0], !this.map.get(this.data.children[0]));
    }

  }

  TuiTreeExample4.ɵfac = function TuiTreeExample4_Factory(t) {
    return new (t || TuiTreeExample4)();
  };

  TuiTreeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample4,
    selectors: [["tui-tree-example-4"]],
    decls: 8,
    vars: 5,
    consts: [[3, "tuiTreeController", "map", "value", "content", "childrenHandler"], ["content", ""], ["tuiButton", "", "size", "s", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "size", "s", 3, "click"]],
    template: function TuiTreeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-tree", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample4_ng_template_1_Template, 1, 1, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTreeExample4_Template_button_click_4_listener() {
          return ctx.toggleTopmost();
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Toggle Topmost ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTreeExample4_Template_button_click_6_listener() {
          return ctx.toggleLevel();
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Toggle Top level 1 ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", false)("map", ctx.map)("value", ctx.data)("content", _r0)("childrenHandler", ctx.handler);
      }
    },
    directives: [tree_component/* TuiTreeComponent */.Y, tree_children_directive/* TuiTreeChildrenDirective */.n, tree_controller_directive/* TuiTreeControllerDirective */.m, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTreeExample4;
})();
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/5/content.ts




let FoldersComponent = /*#__PURE__*/(() => {
  class FoldersComponent extends kit/* TuiTreeItemContentComponent */.m9P {
    get icon() {
      return this.isExpandable ? `tuiIconFolderLarge` : `tuiIconFileLarge`;
    }

  }

  FoldersComponent.ɵfac = /*@__PURE__*/function () {
    let ɵFoldersComponent_BaseFactory;
    return function FoldersComponent_Factory(t) {
      return (ɵFoldersComponent_BaseFactory || (ɵFoldersComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(FoldersComponent)))(t || FoldersComponent);
    };
  }();

  FoldersComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: FoldersComponent,
    selectors: [["folders"]],
    hostBindings: function FoldersComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵlistener */.NdJ("click", function FoldersComponent_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 2,
    vars: 2,
    consts: [[1, "tui-space_right-2", 3, "src"], [3, "ngTemplateOutlet"]],
    template: function FoldersComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 0);
        fesm2015_core/* ɵɵelementContainer */.GkF(1, 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("src", ctx.icon);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx.context.template);
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P, common/* NgTemplateOutlet */.tP],
    styles: ["[_nghost-%COMP%]{transition-property:background;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:\"\";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-svg[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}"]
  });
  return FoldersComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/5/index.ts










function TuiTreeExample5_tui_tree_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-tree", 2);
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(2);

    fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", true)("value", item_r3)("content", _r1)("childrenHandler", ctx_r0.handler);
  }
}

function TuiTreeExample5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r4.text, "\n");
  }
}

let TuiTreeExample5 = /*#__PURE__*/(() => {
  class TuiTreeExample5 {
    constructor() {
      this.data = {
        text: `Topmost`,
        children: [{
          text: `Top level 1`,
          children: [{
            text: `Another item`,
            children: [{
              text: `Next level 1`
            }, {
              text: `Next level 2`
            }, {
              text: `Next level 3`
            }]
          }]
        }, {
          text: `Top level 2`
        }, {
          text: `Top level 3`,
          children: [{
            text: `Test 1`
          }, {
            text: `Test 2`
          }]
        }]
      };

      this.handler = item => item.children || cdk/* EMPTY_ARRAY */.LZ8;
    }

  }

  TuiTreeExample5.ɵfac = function TuiTreeExample5_Factory(t) {
    return new (t || TuiTreeExample5)();
  };

  TuiTreeExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample5,
    selectors: [["tui-tree-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit/* TUI_TREE_CONTENT */.bFK,
      useValue: new tinkoff_ng_polymorpheus/* PolymorpheusComponent */.Al(FoldersComponent)
    }])],
    decls: 3,
    vars: 1,
    consts: [[3, "tuiTreeController", "value", "content", "childrenHandler", 4, "ngFor", "ngForOf"], ["content", ""], [3, "tuiTreeController", "value", "content", "childrenHandler"]],
    template: function TuiTreeExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiTreeExample5_tui_tree_0_Template, 1, 4, "tui-tree", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample5_ng_template_1_Template, 1, 1, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.data.children);
      }
    },
    directives: [common/* NgForOf */.sg, tree_component/* TuiTreeComponent */.Y, tree_children_directive/* TuiTreeChildrenDirective */.n, tree_item_controller_directive/* TuiTreeItemControllerDirective */.o],
    styles: ["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],
    changeDetection: 0
  });
  return TuiTreeExample5;
})();
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
// EXTERNAL MODULE: ./projects/cdk/pipes/mapper/mapper.pipe.ts
var mapper_pipe = __webpack_require__(35271);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/6/index.ts










function TuiTreeExample6_tui_tree_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-tree", 2);
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(2);

    fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", true)("value", item_r3)("content", _r1)("childrenHandler", ctx_r0.handler);
  }
}

function TuiTreeExample6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-checkbox-labeled", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTreeExample6_ng_template_1_Template_tui_checkbox_labeled_ngModelChange_0_listener($event) {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.onChecked(item_r4, $event);
    });
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiMapper");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", fesm2015_core/* ɵɵpipeBind3 */.Dn7(1, 2, item_r4, ctx_r2.getValue, ctx_r2.map));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r4.text, " ");
  }
}

let TuiTreeExample6 = /*#__PURE__*/(() => {
  class TuiTreeExample6 {
    constructor() {
      this.map = new Map();
      this.data = {
        text: `Topmost`,
        children: [{
          text: `Top level 1`,
          children: [{
            text: `Another item`,
            children: [{
              text: `Next level 1`
            }, {
              text: `Next level 2`
            }, {
              text: `Next level 3`
            }]
          }]
        }, {
          text: `Top level 2`
        }, {
          text: `Top level 3`,
          children: [{
            text: `Test 1`
          }, {
            text: `Test 2`
          }]
        }]
      };

      this.handler = item => item.children || cdk/* EMPTY_ARRAY */.LZ8;

      this.getValue = (item, map) => {
        const flat = flatten(item);
        const result = !!map.get(flat[0]);

        for (let i = 0; i < flat.length; i++) {
          if (result !== !!map.get(flat[i])) {
            return null;
          }
        }

        return result;
      };
    }

    onChecked(node, value) {
      flatten(node).forEach(item => this.map.set(item, value));
      this.map = new Map(this.map.entries());
    }

  }

  TuiTreeExample6.ɵfac = function TuiTreeExample6_Factory(t) {
    return new (t || TuiTreeExample6)();
  };

  TuiTreeExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample6,
    selectors: [["tui-tree-example-6"]],
    decls: 3,
    vars: 1,
    consts: [[3, "tuiTreeController", "value", "content", "childrenHandler", 4, "ngFor", "ngForOf"], ["content", ""], [3, "tuiTreeController", "value", "content", "childrenHandler"], [1, "tui-space_vertical-2", "tui-space_left-1", 3, "ngModel", "ngModelChange"]],
    template: function TuiTreeExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiTreeExample6_tui_tree_0_Template, 1, 4, "tui-tree", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample6_ng_template_1_Template, 3, 6, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.data.children);
      }
    },
    directives: [common/* NgForOf */.sg, tree_component/* TuiTreeComponent */.Y, tree_children_directive/* TuiTreeChildrenDirective */.n, tree_item_controller_directive/* TuiTreeItemControllerDirective */.o, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    pipes: [mapper_pipe/* TuiMapperPipe */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTreeExample6;
})();

function flatten(item) {
  return item.children ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], []) : [item];
}
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/7/service.ts



let TreeLoader = /*#__PURE__*/(() => {
  class TreeLoader {
    loadChildren({
      text
    }) {
      return (0,timer/* timer */.H)(3000).pipe((0,mapTo/* mapTo */.h)([{
        text: `${text} 1`,
        children: Math.random() > 0.5
      }, {
        text: `${text} 2`,
        children: Math.random() > 0.5
      }, {
        text: `${text} 3`,
        children: Math.random() > 0.5
      }]));
    }

    hasChildren({
      children
    }) {
      return !!children;
    }

  }

  TreeLoader.ɵfac = function TreeLoader_Factory(t) {
    return new (t || TreeLoader)();
  };

  TreeLoader.ɵprov = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjectable */.Yz7({
    token: TreeLoader,
    factory: TreeLoader.ɵfac
  });
  return TreeLoader;
})();
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/examples/7/index.ts










function TuiTreeExample7_ng_template_2_tui_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader", 4);
  }
}

function TuiTreeExample7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const item_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r2.text);
  }
}

function TuiTreeExample7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiTreeExample7_ng_template_2_tui_loader_0_Template, 1, 0, "tui-loader", 2);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTreeExample7_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;

    const _r4 = fesm2015_core/* ɵɵreference */.MAs(2);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", item_r2 === ctx_r1.loading)("ngIfElse", _r4);
  }
}

let TuiTreeExample7 = /*#__PURE__*/(() => {
  class TuiTreeExample7 {
    constructor(loading, service) {
      this.loading = loading;
      this.service = service;
      this.map = new Map();

      this.childrenHandler = item => this.service.getChildren(item);
    }

    onToggled(item) {
      this.service.loadChildren(item);
    }

  }

  TuiTreeExample7.ɵfac = function TuiTreeExample7_Factory(t) {
    return new (t || TuiTreeExample7)(fesm2015_core/* ɵɵdirectiveInject */.Y36(kit/* TUI_TREE_LOADING */.f8o), fesm2015_core/* ɵɵdirectiveInject */.Y36(kit/* TuiTreeService */.EV7));
  };

  TuiTreeExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTreeExample7,
    selectors: [["tui-tree-example-7"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([kit/* TuiTreeService */.EV7, {
      provide: kit/* TUI_TREE_START */.U5J,
      useValue: {
        text: `Topmost`
      }
    }, {
      provide: kit/* TUI_TREE_LOADER */.xny,
      useClass: TreeLoader
    }])],
    decls: 4,
    vars: 7,
    consts: [[3, "tuiTreeController", "map", "value", "childrenHandler", "content", "toggled"], ["content", ""], ["class", "loader", 4, "ngIf", "ngIfElse"], ["text", ""], [1, "loader"]],
    template: function TuiTreeExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-tree", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("toggled", function TuiTreeExample7_Template_tui_tree_toggled_0_listener($event) {
          return ctx.onToggled($event);
        });
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTreeExample7_ng_template_2_Template, 3, 2, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTreeController", false)("map", ctx.map)("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 5, ctx.service.data$))("childrenHandler", ctx.childrenHandler)("content", _r0);
      }
    },
    directives: [tree_component/* TuiTreeComponent */.Y, tree_children_directive/* TuiTreeChildrenDirective */.n, tree_controller_directive/* TuiTreeControllerDirective */.m, common/* NgIf */.O5, loader_component/* TuiLoaderComponent */.k],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],
    changeDetection: 0
  });
  return TuiTreeExample7;
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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/tree.component.ts

















function ExampleTuiTreeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-tree-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-tree-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-tree-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-tree-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-tree-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-tree-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-tree-example-7");
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

function ExampleTuiTreeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Directive used to enable opening/closing of nodes with children. ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "Boolean");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " input is the default state. ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {}

function ExampleTuiTreeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {}

function ExampleTuiTreeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {}

function ExampleTuiTreeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Directive used to enable opening/closing of nodes with children. ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "Boolean");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " input is the default state. ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " A map used with controller directive for manual programmatic toggling. ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Provide your own component used internally to display node content (see ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 21);
    fesm2015_core/* ɵɵtext */._uU(2, " this example ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " ) ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Provide your own open/closed controlling mechanism ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Provide your own tracker for value/node pairs (so you can match ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "TreeItem");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " instances to their corresponding ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
    fesm2015_core/* ɵɵtext */._uU(5, "data: T");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " when using ");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵtext */._uU(8, "Tree");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(9, " component with custom open/closed controller) ");
  }
}

function ExampleTuiTreeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTreeComponent_ng_template_2_ng_template_1_Template, 4, 0, "ng-template", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTreeComponent_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiTreeComponent_ng_template_2_ng_template_4_Template, 0, 0, "ng-template", 14);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTreeComponent_ng_template_2_ng_template_5_Template, 0, 0, "ng-template", 15);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTreeComponent_ng_template_2_ng_template_6_Template, 4, 0, "ng-template", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTreeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation", 17);
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiTreeComponent_ng_template_2_ng_template_9_Template, 4, 0, "ng-template", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiTreeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiTreeComponent_ng_template_2_ng_template_11_Template, 10, 0, "ng-template", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
  }
}

function ExampleTuiTreeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 26);
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

let ExampleTuiTreeComponent = /*#__PURE__*/(() => {
  class ExampleTuiTreeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 148).then(__webpack_require__.t.bind(__webpack_require__, 148, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 27696).then(__webpack_require__.t.bind(__webpack_require__, 27696, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 79720).then(__webpack_require__.t.bind(__webpack_require__, 79720, 17)),
        HTML: __webpack_require__.e(/* import() */ 93017).then(__webpack_require__.t.bind(__webpack_require__, 93017, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 12878).then(__webpack_require__.t.bind(__webpack_require__, 12878, 17)),
        HTML: __webpack_require__.e(/* import() */ 90894).then(__webpack_require__.t.bind(__webpack_require__, 90894, 17)),
        LESS: __webpack_require__.e(/* import() */ 4918).then(__webpack_require__.t.bind(__webpack_require__, 4918, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 64387).then(__webpack_require__.t.bind(__webpack_require__, 64387, 17)),
        HTML: __webpack_require__.e(/* import() */ 39585).then(__webpack_require__.t.bind(__webpack_require__, 39585, 17)),
        LESS: __webpack_require__.e(/* import() */ 82776).then(__webpack_require__.t.bind(__webpack_require__, 82776, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 29166).then(__webpack_require__.t.bind(__webpack_require__, 29166, 17)),
        HTML: __webpack_require__.e(/* import() */ 93606).then(__webpack_require__.t.bind(__webpack_require__, 93606, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 29902).then(__webpack_require__.t.bind(__webpack_require__, 29902, 17)),
        HTML: __webpack_require__.e(/* import() */ 45433).then(__webpack_require__.t.bind(__webpack_require__, 45433, 17)),
        LESS: __webpack_require__.e(/* import() */ 21457).then(__webpack_require__.t.bind(__webpack_require__, 21457, 17)),
        'content.ts': __webpack_require__.e(/* import() */ 90422).then(__webpack_require__.t.bind(__webpack_require__, 90422, 17)),
        'content.less': __webpack_require__.e(/* import() */ 90351).then(__webpack_require__.t.bind(__webpack_require__, 90351, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 15661).then(__webpack_require__.t.bind(__webpack_require__, 15661, 17)),
        HTML: __webpack_require__.e(/* import() */ 45946).then(__webpack_require__.t.bind(__webpack_require__, 45946, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 67978).then(__webpack_require__.t.bind(__webpack_require__, 67978, 17)),
        HTML: __webpack_require__.e(/* import() */ 21825).then(__webpack_require__.t.bind(__webpack_require__, 21825, 17)),
        LESS: __webpack_require__.e(/* import() */ 5690).then(__webpack_require__.t.bind(__webpack_require__, 5690, 17)),
        'service.ts': __webpack_require__.e(/* import() */ 97485).then(__webpack_require__.t.bind(__webpack_require__, 97485, 17))
      };
    }

  }

  ExampleTuiTreeComponent.ɵfac = function ExampleTuiTreeComponent_Factory(t) {
    return new (t || ExampleTuiTreeComponent)();
  };

  ExampleTuiTreeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTreeComponent,
    selectors: [["example-tree"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7525510331693117035$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__1 = goog.getMsg("Component to display tree-like data structure");
        i18n_0 = MSG_EXTERNAL_7525510331693117035$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟149371ee21e2bfea977655b73a5d24d2f79cf9c8␟7525510331693117035:Component to display tree-like data structure`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2233560223291461480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__3 = goog.getMsg("Manual");
        i18n_2 = MSG_EXTERNAL_2233560223291461480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟9d0ac9c23563b10fafabeedbf739e933b054d1c8␟2233560223291461480:Manual`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_427843987492660980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__5 = goog.getMsg("Array");
        i18n_4 = MSG_EXTERNAL_427843987492660980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5f507ba5cd0e7796cb0e2e09d95b267384069287␟427843987492660980:Array`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5610425955750546094$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__7 = goog.getMsg("Template");
        i18n_6 = MSG_EXTERNAL_5610425955750546094$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟467bff8643ae9525e0477374f132a6b19bedbfd5␟5610425955750546094:Template`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_959005572385202816$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__9 = goog.getMsg("Programmatic control");
        i18n_8 = MSG_EXTERNAL_959005572385202816$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟ce39c4f4b594097cb27118d8439de3dadb3d6fbb␟959005572385202816:Programmatic control`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__11 = goog.getMsg("Custom");
        i18n_10 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_289341251890660084$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__13 = goog.getMsg("Checkbox");
        i18n_12 = MSG_EXTERNAL_289341251890660084$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟4550f610fd0713a3f3ac61109ee77ba83124ac8e␟289341251890660084:Checkbox`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8275800366978668046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__15 = goog.getMsg("Asynchronous");
        i18n_14 = MSG_EXTERNAL_8275800366978668046$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟b2f9aee0adc67cfacfc0d888ba57440260cd29e5␟8275800366978668046:Asynchronous`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5790081766230251440$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiTreeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5790081766230251440$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟6e79a7191ed5e61990905539aa327e48d2514354␟5790081766230251440: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTreeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TREE_TREE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Tree", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "manual", "heading", i18n_2, 3, "content"], ["id", "array", "heading", i18n_4, 3, "content"], ["id", "template", "heading", i18n_6, 3, "content"], ["id", "programmatic", "heading", i18n_8, 3, "content"], ["id", "custom", "heading", i18n_10, 3, "content"], ["id", "checkbox", "heading", i18n_12, 3, "content"], ["id", "async", "heading", i18n_14, 3, "content"], ["heading", "TreeItem", 3, "showValues"], ["documentationPropertyName", "tuiTreeController", "documentationPropertyType", "boolean", "documentationPropertyMode", "input"], ["heading", "Tree", 3, "showValues"], ["documentationPropertyName", "childrenHandler", "documentationPropertyType", "TuiHandler<T, readonly T[]>", "documentationPropertyMode", "input"], ["documentationPropertyName", "content", "documentationPropertyType", "PolymorpheusContent<TuiTreeContext>", "documentationPropertyMode", "input"], ["documentationPropertyName", "data", "documentationPropertyType", "T", "documentationPropertyMode", "input"], ["documentationPropertyName", "map", "documentationPropertyType", "Map<T, boolean>", "documentationPropertyMode", "input"], ["heading", "Tokens", 3, "showValues"], ["documentationPropertyName", "TUI_TREE_CONTENT", "documentationPropertyType", "PolymorpheusContent<TuiTreeItemContext>"], ["documentationPropertyName", "TUI_TREE_CONTROLLER", "documentationPropertyType", "TuiTreeController"], ["documentationPropertyName", "TUI_TREE_ACCESSOR", "documentationPropertyType", "TuiTreeAccessor<T>"], ["tuiLink", "", "routerLink", "/components/tree", "fragment", "custom"], [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTreeComponent_ng_template_1_Template, 16, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTreeComponent_ng_template_2_Template, 12, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTreeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTreeExample1, TuiTreeExample2, TuiTreeExample3, TuiTreeExample4, TuiTreeExample5, TuiTreeExample6, TuiTreeExample7, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTreeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tree/tree.module.ts


















let ExampleTuiTreeModule = /*#__PURE__*/(() => {
  class ExampleTuiTreeModule {}

  ExampleTuiTreeModule.ɵfac = function ExampleTuiTreeModule_Factory(t) {
    return new (t || ExampleTuiTreeModule)();
  };

  ExampleTuiTreeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTreeModule
  });
  ExampleTuiTreeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit/* TuiTreeModule */.F3b, core/* TuiSvgModule */.EIu, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, kit/* TuiCheckboxLabeledModule */.sxu, cdk/* TuiMapperPipeModule */.I1h, core/* TuiLoaderModule */.dSp, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTreeComponent))]]
  });
  return ExampleTuiTreeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTreeModule, {
    declarations: [ExampleTuiTreeComponent, FoldersComponent, TuiTreeExample1, TuiTreeExample2, TuiTreeExample3, TuiTreeExample4, TuiTreeExample5, TuiTreeExample6, TuiTreeExample7],
    imports: [kit/* TuiTreeModule */.F3b, core/* TuiSvgModule */.EIu, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, kit/* TuiCheckboxLabeledModule */.sxu, cdk/* TuiMapperPipeModule */.I1h, core/* TuiLoaderModule */.dSp, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTreeComponent]
  });
})();

/***/ })

}]);