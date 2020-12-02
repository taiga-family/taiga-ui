/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Injector } from '../di/injector';
import { InjectFlags } from '../di/interface/injector';
import { ComponentFactory, ComponentRef } from '../linker/component_factory';
import { ComponentFactoryBoundToModule, ComponentFactoryResolver } from '../linker/component_factory_resolver';
import { ElementRef } from '../linker/element_ref';
import { NgModuleRef } from '../linker/ng_module_factory';
import { TemplateRef } from '../linker/template_ref';
import { stringify } from '../util/stringify';
import { VERSION } from '../version';
import { callNgModuleLifecycle, initNgModule, resolveNgModuleDep } from './ng_module';
import { asElementData, asProviderData, asTextData, Services } from './types';
import { markParentViewsForCheck, resolveDefinition, rootRenderNodes, tokenKey, viewParentEl } from './util';
import { attachEmbeddedView, detachEmbeddedView, moveEmbeddedView, renderDetachView } from './view_attach';
var EMPTY_CONTEXT = {};
// Attention: this function is called as top level function.
// Putting any logic in here will destroy closure tree shaking!
export function createComponentFactory(selector, componentType, viewDefFactory, inputs, outputs, ngContentSelectors) {
    return new ComponentFactory_(selector, componentType, viewDefFactory, inputs, outputs, ngContentSelectors);
}
export function getComponentViewDefinitionFactory(componentFactory) {
    return componentFactory.viewDefFactory;
}
var ComponentFactory_ = /** @class */ (function (_super) {
    __extends(ComponentFactory_, _super);
    function ComponentFactory_(selector, componentType, viewDefFactory, _inputs, _outputs, ngContentSelectors) {
        var _this = 
        // Attention: this ctor is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        _super.call(this) || this;
        _this.selector = selector;
        _this.componentType = componentType;
        _this._inputs = _inputs;
        _this._outputs = _outputs;
        _this.ngContentSelectors = ngContentSelectors;
        _this.viewDefFactory = viewDefFactory;
        return _this;
    }
    Object.defineProperty(ComponentFactory_.prototype, "inputs", {
        get: function () {
            var inputsArr = [];
            var inputs = this._inputs;
            for (var propName in inputs) {
                var templateName = inputs[propName];
                inputsArr.push({ propName: propName, templateName: templateName });
            }
            return inputsArr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentFactory_.prototype, "outputs", {
        get: function () {
            var outputsArr = [];
            for (var propName in this._outputs) {
                var templateName = this._outputs[propName];
                outputsArr.push({ propName: propName, templateName: templateName });
            }
            return outputsArr;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new component.
     */
    ComponentFactory_.prototype.create = function (injector, projectableNodes, rootSelectorOrNode, ngModule) {
        if (!ngModule) {
            throw new Error('ngModule should be provided');
        }
        var viewDef = resolveDefinition(this.viewDefFactory);
        var componentNodeIndex = viewDef.nodes[0].element.componentProvider.nodeIndex;
        var view = Services.createRootView(injector, projectableNodes || [], rootSelectorOrNode, viewDef, ngModule, EMPTY_CONTEXT);
        var component = asProviderData(view, componentNodeIndex).instance;
        if (rootSelectorOrNode) {
            view.renderer.setAttribute(asElementData(view, 0).renderElement, 'ng-version', VERSION.full);
        }
        return new ComponentRef_(view, new ViewRef_(view), component);
    };
    return ComponentFactory_;
}(ComponentFactory));
var ComponentRef_ = /** @class */ (function (_super) {
    __extends(ComponentRef_, _super);
    function ComponentRef_(_view, _viewRef, _component) {
        var _this = _super.call(this) || this;
        _this._view = _view;
        _this._viewRef = _viewRef;
        _this._component = _component;
        _this._elDef = _this._view.def.nodes[0];
        _this.hostView = _viewRef;
        _this.changeDetectorRef = _viewRef;
        _this.instance = _component;
        return _this;
    }
    Object.defineProperty(ComponentRef_.prototype, "location", {
        get: function () {
            return new ElementRef(asElementData(this._view, this._elDef.nodeIndex).renderElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "injector", {
        get: function () {
            return new Injector_(this._view, this._elDef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "componentType", {
        get: function () {
            return this._component.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ComponentRef_.prototype.destroy = function () {
        this._viewRef.destroy();
    };
    ComponentRef_.prototype.onDestroy = function (callback) {
        this._viewRef.onDestroy(callback);
    };
    return ComponentRef_;
}(ComponentRef));
export function createViewContainerData(view, elDef, elData) {
    return new ViewContainerRef_(view, elDef, elData);
}
var ViewContainerRef_ = /** @class */ (function () {
    function ViewContainerRef_(_view, _elDef, _data) {
        this._view = _view;
        this._elDef = _elDef;
        this._data = _data;
        /**
         * @internal
         */
        this._embeddedViews = [];
    }
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
        get: function () {
            return new ElementRef(this._data.renderElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
        get: function () {
            return new Injector_(this._view, this._elDef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
        /** @deprecated No replacement */
        get: function () {
            var view = this._view;
            var elDef = this._elDef.parent;
            while (!elDef && view) {
                elDef = viewParentEl(view);
                view = view.parent;
            }
            return view ? new Injector_(view, elDef) : new Injector_(this._view, null);
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerRef_.prototype.clear = function () {
        var len = this._embeddedViews.length;
        for (var i = len - 1; i >= 0; i--) {
            var view = detachEmbeddedView(this._data, i);
            Services.destroyView(view);
        }
    };
    ViewContainerRef_.prototype.get = function (index) {
        var view = this._embeddedViews[index];
        if (view) {
            var ref = new ViewRef_(view);
            ref.attachToViewContainerRef(this);
            return ref;
        }
        return null;
    };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
        get: function () {
            return this._embeddedViews.length;
        },
        enumerable: true,
        configurable: true
    });
    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
        var viewRef = templateRef.createEmbeddedView(context || {});
        this.insert(viewRef, index);
        return viewRef;
    };
    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes, ngModuleRef) {
        var contextInjector = injector || this.parentInjector;
        if (!ngModuleRef && !(componentFactory instanceof ComponentFactoryBoundToModule)) {
            ngModuleRef = contextInjector.get(NgModuleRef);
        }
        var componentRef = componentFactory.create(contextInjector, projectableNodes, undefined, ngModuleRef);
        this.insert(componentRef.hostView, index);
        return componentRef;
    };
    ViewContainerRef_.prototype.insert = function (viewRef, index) {
        if (viewRef.destroyed) {
            throw new Error('Cannot insert a destroyed View in a ViewContainer!');
        }
        var viewRef_ = viewRef;
        var viewData = viewRef_._view;
        attachEmbeddedView(this._view, this._data, index, viewData);
        viewRef_.attachToViewContainerRef(this);
        return viewRef;
    };
    ViewContainerRef_.prototype.move = function (viewRef, currentIndex) {
        if (viewRef.destroyed) {
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
        }
        var previousIndex = this._embeddedViews.indexOf(viewRef._view);
        moveEmbeddedView(this._data, previousIndex, currentIndex);
        return viewRef;
    };
    ViewContainerRef_.prototype.indexOf = function (viewRef) {
        return this._embeddedViews.indexOf(viewRef._view);
    };
    ViewContainerRef_.prototype.remove = function (index) {
        var viewData = detachEmbeddedView(this._data, index);
        if (viewData) {
            Services.destroyView(viewData);
        }
    };
    ViewContainerRef_.prototype.detach = function (index) {
        var view = detachEmbeddedView(this._data, index);
        return view ? new ViewRef_(view) : null;
    };
    return ViewContainerRef_;
}());
export function createChangeDetectorRef(view) {
    return new ViewRef_(view);
}
var ViewRef_ = /** @class */ (function () {
    function ViewRef_(_view) {
        this._view = _view;
        this._viewContainerRef = null;
        this._appRef = null;
    }
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
        get: function () {
            return rootRenderNodes(this._view);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "context", {
        get: function () {
            return this._view.context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
        get: function () {
            return (this._view.state & 128 /* Destroyed */) !== 0;
        },
        enumerable: true,
        configurable: true
    });
    ViewRef_.prototype.markForCheck = function () {
        markParentViewsForCheck(this._view);
    };
    ViewRef_.prototype.detach = function () {
        this._view.state &= ~4 /* Attached */;
    };
    ViewRef_.prototype.detectChanges = function () {
        var fs = this._view.root.rendererFactory;
        if (fs.begin) {
            fs.begin();
        }
        try {
            Services.checkAndUpdateView(this._view);
        }
        finally {
            if (fs.end) {
                fs.end();
            }
        }
    };
    ViewRef_.prototype.checkNoChanges = function () {
        Services.checkNoChangesView(this._view);
    };
    ViewRef_.prototype.reattach = function () {
        this._view.state |= 4 /* Attached */;
    };
    ViewRef_.prototype.onDestroy = function (callback) {
        if (!this._view.disposables) {
            this._view.disposables = [];
        }
        this._view.disposables.push(callback);
    };
    ViewRef_.prototype.destroy = function () {
        if (this._appRef) {
            this._appRef.detachView(this);
        }
        else if (this._viewContainerRef) {
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this));
        }
        Services.destroyView(this._view);
    };
    ViewRef_.prototype.detachFromAppRef = function () {
        this._appRef = null;
        renderDetachView(this._view);
        Services.dirtyParentQueries(this._view);
    };
    ViewRef_.prototype.attachToAppRef = function (appRef) {
        if (this._viewContainerRef) {
            throw new Error('This view is already attached to a ViewContainer!');
        }
        this._appRef = appRef;
    };
    ViewRef_.prototype.attachToViewContainerRef = function (vcRef) {
        if (this._appRef) {
            throw new Error('This view is already attached directly to the ApplicationRef!');
        }
        this._viewContainerRef = vcRef;
    };
    return ViewRef_;
}());
export { ViewRef_ };
export function createTemplateData(view, def) {
    return new TemplateRef_(view, def);
}
var TemplateRef_ = /** @class */ (function (_super) {
    __extends(TemplateRef_, _super);
    function TemplateRef_(_parentView, _def) {
        var _this = _super.call(this) || this;
        _this._parentView = _parentView;
        _this._def = _def;
        return _this;
    }
    TemplateRef_.prototype.createEmbeddedView = function (context) {
        return new ViewRef_(Services.createEmbeddedView(this._parentView, this._def, this._def.element.template, context));
    };
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
        get: function () {
            return new ElementRef(asElementData(this._parentView, this._def.nodeIndex).renderElement);
        },
        enumerable: true,
        configurable: true
    });
    return TemplateRef_;
}(TemplateRef));
export function createInjector(view, elDef) {
    return new Injector_(view, elDef);
}
var Injector_ = /** @class */ (function () {
    function Injector_(view, elDef) {
        this.view = view;
        this.elDef = elDef;
    }
    Injector_.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
        var allowPrivateServices = this.elDef ? (this.elDef.flags & 33554432 /* ComponentView */) !== 0 : false;
        return Services.resolveDep(this.view, this.elDef, allowPrivateServices, { flags: 0 /* None */, token: token, tokenKey: tokenKey(token) }, notFoundValue);
    };
    return Injector_;
}());
export function nodeValue(view, index) {
    var def = view.def.nodes[index];
    if (def.flags & 1 /* TypeElement */) {
        var elData = asElementData(view, def.nodeIndex);
        return def.element.template ? elData.template : elData.renderElement;
    }
    else if (def.flags & 2 /* TypeText */) {
        return asTextData(view, def.nodeIndex).renderText;
    }
    else if (def.flags & (20224 /* CatProvider */ | 16 /* TypePipe */)) {
        return asProviderData(view, def.nodeIndex).instance;
    }
    throw new Error("Illegal state: read nodeValue for node index " + index);
}
export function createNgModuleRef(moduleType, parent, bootstrapComponents, def) {
    return new NgModuleRef_(moduleType, parent, bootstrapComponents, def);
}
var NgModuleRef_ = /** @class */ (function () {
    function NgModuleRef_(_moduleType, _parent, _bootstrapComponents, _def) {
        this._moduleType = _moduleType;
        this._parent = _parent;
        this._bootstrapComponents = _bootstrapComponents;
        this._def = _def;
        this._destroyListeners = [];
        this._destroyed = false;
        this.injector = this;
        initNgModule(this);
    }
    NgModuleRef_.prototype.get = function (token, notFoundValue, injectFlags) {
        if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
        if (injectFlags === void 0) { injectFlags = InjectFlags.Default; }
        var flags = 0 /* None */;
        if (injectFlags & InjectFlags.SkipSelf) {
            flags |= 1 /* SkipSelf */;
        }
        else if (injectFlags & InjectFlags.Self) {
            flags |= 4 /* Self */;
        }
        return resolveNgModuleDep(this, { token: token, tokenKey: tokenKey(token), flags: flags }, notFoundValue);
    };
    Object.defineProperty(NgModuleRef_.prototype, "instance", {
        get: function () {
            return this.get(this._moduleType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleRef_.prototype, "componentFactoryResolver", {
        get: function () {
            return this.get(ComponentFactoryResolver);
        },
        enumerable: true,
        configurable: true
    });
    NgModuleRef_.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
        }
        this._destroyed = true;
        callNgModuleLifecycle(this, 131072 /* OnDestroy */);
        this._destroyListeners.forEach(function (listener) { return listener(); });
    };
    NgModuleRef_.prototype.onDestroy = function (callback) {
        this._destroyListeners.push(callback);
    };
    return NgModuleRef_;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvcmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBSUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFFLHdCQUF3QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0csT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBc0IsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR25ELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUErRSxRQUFRLEVBQThFLE1BQU0sU0FBUyxDQUFDO0FBQ3RPLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQWtCLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDM0gsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpHLElBQU0sYUFBYSxHQUFHLEVBQUUs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QWtCLENBQ3JCLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHNCQUFJLGtDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQXdCO2FBQTVCO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUJBQWlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQ0FBOEIsQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQXFCLENBQUMsSUFBSSx5QkFBc0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxRQUFvQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFuREQsSUFtREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXBwbGljYXRpb25SZWZ9IGZyb20gJy4uL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtJbmplY3RGbGFnc30gZnJvbSAnLi4vZGkvaW50ZXJmYWNlL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRSZWZ9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5pbXBvcnQge0NvbXBvbmVudEZhY3RvcnlCb3VuZFRvTW9kdWxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeV9yZXNvbHZlcic7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJy4uL2xpbmtlci9lbGVtZW50X3JlZic7XG5pbXBvcnQge0ludGVybmFsTmdNb2R1bGVSZWYsIE5nTW9kdWxlUmVmfSBmcm9tICcuLi9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZn0gZnJvbSAnLi4vbGlua2VyL3RlbXBsYXRlX3JlZic7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJy4uL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnO1xuaW1wb3J0IHtFbWJlZGRlZFZpZXdSZWYsIEludGVybmFsVmlld1JlZiwgVmlld1JlZn0gZnJvbSAnLi4vbGlua2VyL3ZpZXdfcmVmJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi91dGlsL3N0cmluZ2lmeSc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4uL3ZlcnNpb24nO1xuXG5pbXBvcnQge2NhbGxOZ01vZHVsZUxpZmVjeWNsZSwgaW5pdE5nTW9kdWxlLCByZXNvbHZlTmdNb2R1bGVEZXB9IGZyb20gJy4vbmdfbW9kdWxlJztcbmltcG9ydCB7YXNFbGVtZW50RGF0YSwgYXNQcm92aWRlckRhdGEsIGFzVGV4dERhdGEsIERlcEZsYWdzLCBFbGVtZW50RGF0YSwgTmdNb2R1bGVEYXRhLCBOZ01vZHVsZURlZmluaXRpb24sIE5vZGVEZWYsIE5vZGVGbGFncywgU2VydmljZXMsIFRlbXBsYXRlRGF0YSwgVmlld0NvbnRhaW5lckRhdGEsIFZpZXdEYXRhLCBWaWV3RGVmaW5pdGlvbkZhY3RvcnksIFZpZXdTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge21hcmtQYXJlbnRWaWV3c0ZvckNoZWNrLCByZXNvbHZlRGVmaW5pdGlvbiwgcm9vdFJlbmRlck5vZGVzLCBzcGxpdE5hbWVzcGFjZSwgdG9rZW5LZXksIHZpZXdQYXJlbnRFbH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7YXR0YWNoRW1iZWRkZWRWaWV3LCBkZXRhY2hFbWJlZGRlZFZpZXcsIG1vdmVFbWJlZGRlZFZpZXcsIHJlbmRlckRldGFjaFZpZXd9IGZyb20gJy4vdmlld19hdHRhY2gnO1xuXG5jb25zdCBFTVBUWV9DT05URVhUID0ge307XG5cbi8vIEF0dGVudGlvbjogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYXMgdG9wIGxldmVsIGZ1bmN0aW9uLlxuLy8gUHV0dGluZyBhbnkgbG9naWMgaW4gaGVyZSB3aWxsIGRlc3Ryb3kgY2xvc3VyZSB0cmVlIHNoYWtpbmchXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50RmFjdG9yeShcbiAgICBzZWxlY3Rvcjogc3RyaW5nLCBjb21wb25lbnRUeXBlOiBUeXBlPGFueT4sIHZpZXdEZWZGYWN0b3J5OiBWaWV3RGVmaW5pdGlvbkZhY3RvcnksXG4gICAgaW5wdXRzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmd9fG51bGwsIG91dHB1dHM6IHtbcHJvcE5hbWU6IHN0cmluZ106IHN0cmluZ30sXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXSk6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB7XG4gIHJldHVybiBuZXcgQ29tcG9uZW50RmFjdG9yeV8oXG4gICAgICBzZWxlY3RvciwgY29tcG9uZW50VHlwZSwgdmlld0RlZkZhY3RvcnksIGlucHV0cywgb3V0cHV0cywgbmdDb250ZW50U2VsZWN0b3JzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudFZpZXdEZWZpbml0aW9uRmFjdG9yeShjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PGFueT4pOlxuICAgIFZpZXdEZWZpbml0aW9uRmFjdG9yeSB7XG4gIHJldHVybiAoY29tcG9uZW50RmFjdG9yeSBhcyBDb21wb25lbnRGYWN0b3J5Xykudmlld0RlZkZhY3Rvcnk7XG59XG5cbmNsYXNzIENvbXBvbmVudEZhY3RvcnlfIGV4dGVuZHMgQ29tcG9uZW50RmFjdG9yeTxhbnk+IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmlld0RlZkZhY3Rvcnk6IFZpZXdEZWZpbml0aW9uRmFjdG9yeTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzZWxlY3Rvcjogc3RyaW5nLCBwdWJsaWMgY29tcG9uZW50VHlwZTogVHlwZTxhbnk+LFxuICAgICAgdmlld0RlZkZhY3Rvcnk6IFZpZXdEZWZpbml0aW9uRmFjdG9yeSwgcHJpdmF0ZSBfaW5wdXRzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmd9fG51bGwsXG4gICAgICBwcml2YXRlIF9vdXRwdXRzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmd9LCBwdWJsaWMgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXSkge1xuICAgIC8vIEF0dGVudGlvbjogdGhpcyBjdG9yIGlzIGNhbGxlZCBhcyB0b3AgbGV2ZWwgZnVuY3Rpb24uXG4gICAgLy8gUHV0dGluZyBhbnkgbG9naWMgaW4gaGVyZSB3aWxsIGRlc3Ryb3kgY2xvc3VyZSB0cmVlIHNoYWtpbmchXG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZpZXdEZWZGYWN0b3J5ID0gdmlld0RlZkZhY3Rvcnk7XG4gIH1cblxuICBnZXQgaW5wdXRzKCkge1xuICAgIGNvbnN0IGlucHV0c0Fycjoge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5faW5wdXRzITtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBpbnB1dHMpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGlucHV0c1twcm9wTmFtZV07XG4gICAgICBpbnB1dHNBcnIucHVzaCh7cHJvcE5hbWUsIHRlbXBsYXRlTmFtZX0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXRzQXJyO1xuICB9XG5cbiAgZ2V0IG91dHB1dHMoKSB7XG4gICAgY29uc3Qgb3V0cHV0c0Fycjoge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdID0gW107XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdGhpcy5fb3V0cHV0cykge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGhpcy5fb3V0cHV0c1twcm9wTmFtZV07XG4gICAgICBvdXRwdXRzQXJyLnB1c2goe3Byb3BOYW1lLCB0ZW1wbGF0ZU5hbWV9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dHNBcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb21wb25lbnQuXG4gICAqL1xuICBjcmVhdGUoXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdLCByb290U2VsZWN0b3JPck5vZGU/OiBzdHJpbmd8YW55LFxuICAgICAgbmdNb2R1bGU/OiBOZ01vZHVsZVJlZjxhbnk+KTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGlmICghbmdNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmdNb2R1bGUgc2hvdWxkIGJlIHByb3ZpZGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdEZWYgPSByZXNvbHZlRGVmaW5pdGlvbih0aGlzLnZpZXdEZWZGYWN0b3J5KTtcbiAgICBjb25zdCBjb21wb25lbnROb2RlSW5kZXggPSB2aWV3RGVmLm5vZGVzWzBdLmVsZW1lbnQhLmNvbXBvbmVudFByb3ZpZGVyIS5ub2RlSW5kZXg7XG4gICAgY29uc3QgdmlldyA9IFNlcnZpY2VzLmNyZWF0ZVJvb3RWaWV3KFxuICAgICAgICBpbmplY3RvciwgcHJvamVjdGFibGVOb2RlcyB8fCBbXSwgcm9vdFNlbGVjdG9yT3JOb2RlLCB2aWV3RGVmLCBuZ01vZHVsZSwgRU1QVFlfQ09OVEVYVCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gYXNQcm92aWRlckRhdGEodmlldywgY29tcG9uZW50Tm9kZUluZGV4KS5pbnN0YW5jZTtcbiAgICBpZiAocm9vdFNlbGVjdG9yT3JOb2RlKSB7XG4gICAgICB2aWV3LnJlbmRlcmVyLnNldEF0dHJpYnV0ZShhc0VsZW1lbnREYXRhKHZpZXcsIDApLnJlbmRlckVsZW1lbnQsICduZy12ZXJzaW9uJywgVkVSU0lPTi5mdWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbXBvbmVudFJlZl8odmlldywgbmV3IFZpZXdSZWZfKHZpZXcpLCBjb21wb25lbnQpO1xuICB9XG59XG5cbmNsYXNzIENvbXBvbmVudFJlZl8gZXh0ZW5kcyBDb21wb25lbnRSZWY8YW55PiB7XG4gIHB1YmxpYyByZWFkb25seSBob3N0VmlldzogVmlld1JlZjtcbiAgcHVibGljIHJlYWRvbmx5IGluc3RhbmNlOiBhbnk7XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gIHByaXZhdGUgX2VsRGVmOiBOb2RlRGVmO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3OiBWaWV3RGF0YSwgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZiwgcHJpdmF0ZSBfY29tcG9uZW50OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VsRGVmID0gdGhpcy5fdmlldy5kZWYubm9kZXNbMF07XG4gICAgdGhpcy5ob3N0VmlldyA9IF92aWV3UmVmO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgPSBfdmlld1JlZjtcbiAgICB0aGlzLmluc3RhbmNlID0gX2NvbXBvbmVudDtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50UmVmKGFzRWxlbWVudERhdGEodGhpcy5fdmlldywgdGhpcy5fZWxEZWYubm9kZUluZGV4KS5yZW5kZXJFbGVtZW50KTtcbiAgfVxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3Ige1xuICAgIHJldHVybiBuZXcgSW5qZWN0b3JfKHRoaXMuX3ZpZXcsIHRoaXMuX2VsRGVmKTtcbiAgfVxuICBnZXQgY29tcG9uZW50VHlwZSgpOiBUeXBlPGFueT4ge1xuICAgIHJldHVybiA8YW55PnRoaXMuX2NvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gIH1cbiAgb25EZXN0cm95KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdSZWYub25EZXN0cm95KGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlld0NvbnRhaW5lckRhdGEoXG4gICAgdmlldzogVmlld0RhdGEsIGVsRGVmOiBOb2RlRGVmLCBlbERhdGE6IEVsZW1lbnREYXRhKTogVmlld0NvbnRhaW5lckRhdGEge1xuICByZXR1cm4gbmV3IFZpZXdDb250YWluZXJSZWZfKHZpZXcsIGVsRGVmLCBlbERhdGEpO1xufVxuXG5jbGFzcyBWaWV3Q29udGFpbmVyUmVmXyBpbXBsZW1lbnRzIFZpZXdDb250YWluZXJEYXRhIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX2VtYmVkZGVkVmlld3M6IFZpZXdEYXRhW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlldzogVmlld0RhdGEsIHByaXZhdGUgX2VsRGVmOiBOb2RlRGVmLCBwcml2YXRlIF9kYXRhOiBFbGVtZW50RGF0YSkge31cblxuICBnZXQgZWxlbWVudCgpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnRSZWYodGhpcy5fZGF0YS5yZW5kZXJFbGVtZW50KTtcbiAgfVxuXG4gIGdldCBpbmplY3RvcigpOiBJbmplY3RvciB7XG4gICAgcmV0dXJuIG5ldyBJbmplY3Rvcl8odGhpcy5fdmlldywgdGhpcy5fZWxEZWYpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIE5vIHJlcGxhY2VtZW50ICovXG4gIGdldCBwYXJlbnRJbmplY3RvcigpOiBJbmplY3RvciB7XG4gICAgbGV0IHZpZXcgPSB0aGlzLl92aWV3O1xuICAgIGxldCBlbERlZiA9IHRoaXMuX2VsRGVmLnBhcmVudDtcbiAgICB3aGlsZSAoIWVsRGVmICYmIHZpZXcpIHtcbiAgICAgIGVsRGVmID0gdmlld1BhcmVudEVsKHZpZXcpO1xuICAgICAgdmlldyA9IHZpZXcucGFyZW50ITtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldyA/IG5ldyBJbmplY3Rvcl8odmlldywgZWxEZWYpIDogbmV3IEluamVjdG9yXyh0aGlzLl92aWV3LCBudWxsKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMuX2VtYmVkZGVkVmlld3MubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgdmlldyA9IGRldGFjaEVtYmVkZGVkVmlldyh0aGlzLl9kYXRhLCBpKSE7XG4gICAgICBTZXJ2aWNlcy5kZXN0cm95Vmlldyh2aWV3KTtcbiAgICB9XG4gIH1cblxuICBnZXQoaW5kZXg6IG51bWJlcik6IFZpZXdSZWZ8bnVsbCB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX2VtYmVkZGVkVmlld3NbaW5kZXhdO1xuICAgIGlmICh2aWV3KSB7XG4gICAgICBjb25zdCByZWYgPSBuZXcgVmlld1JlZl8odmlldyk7XG4gICAgICByZWYuYXR0YWNoVG9WaWV3Q29udGFpbmVyUmVmKHRoaXMpO1xuICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYmVkZGVkVmlld3MubGVuZ3RoO1xuICB9XG5cbiAgY3JlYXRlRW1iZWRkZWRWaWV3PEM+KHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxDPiwgY29udGV4dD86IEMsIGluZGV4PzogbnVtYmVyKTpcbiAgICAgIEVtYmVkZGVkVmlld1JlZjxDPiB7XG4gICAgY29uc3Qgdmlld1JlZiA9IHRlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IDxhbnk+e30pO1xuICAgIHRoaXMuaW5zZXJ0KHZpZXdSZWYsIGluZGV4KTtcbiAgICByZXR1cm4gdmlld1JlZjtcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudDxDPihcbiAgICAgIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Qz4sIGluZGV4PzogbnVtYmVyLCBpbmplY3Rvcj86IEluamVjdG9yLFxuICAgICAgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW10sIG5nTW9kdWxlUmVmPzogTmdNb2R1bGVSZWY8YW55Pik6IENvbXBvbmVudFJlZjxDPiB7XG4gICAgY29uc3QgY29udGV4dEluamVjdG9yID0gaW5qZWN0b3IgfHwgdGhpcy5wYXJlbnRJbmplY3RvcjtcbiAgICBpZiAoIW5nTW9kdWxlUmVmICYmICEoY29tcG9uZW50RmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnlCb3VuZFRvTW9kdWxlKSkge1xuICAgICAgbmdNb2R1bGVSZWYgPSBjb250ZXh0SW5qZWN0b3IuZ2V0KE5nTW9kdWxlUmVmKTtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50UmVmID1cbiAgICAgICAgY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoY29udGV4dEluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzLCB1bmRlZmluZWQsIG5nTW9kdWxlUmVmKTtcbiAgICB0aGlzLmluc2VydChjb21wb25lbnRSZWYuaG9zdFZpZXcsIGluZGV4KTtcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgaW5zZXJ0KHZpZXdSZWY6IFZpZXdSZWYsIGluZGV4PzogbnVtYmVyKTogVmlld1JlZiB7XG4gICAgaWYgKHZpZXdSZWYuZGVzdHJveWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnNlcnQgYSBkZXN0cm95ZWQgVmlldyBpbiBhIFZpZXdDb250YWluZXIhJyk7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdSZWZfID0gPFZpZXdSZWZfPnZpZXdSZWY7XG4gICAgY29uc3Qgdmlld0RhdGEgPSB2aWV3UmVmXy5fdmlldztcbiAgICBhdHRhY2hFbWJlZGRlZFZpZXcodGhpcy5fdmlldywgdGhpcy5fZGF0YSwgaW5kZXgsIHZpZXdEYXRhKTtcbiAgICB2aWV3UmVmXy5hdHRhY2hUb1ZpZXdDb250YWluZXJSZWYodGhpcyk7XG4gICAgcmV0dXJuIHZpZXdSZWY7XG4gIH1cblxuICBtb3ZlKHZpZXdSZWY6IFZpZXdSZWZfLCBjdXJyZW50SW5kZXg6IG51bWJlcik6IFZpZXdSZWYge1xuICAgIGlmICh2aWV3UmVmLmRlc3Ryb3llZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbW92ZSBhIGRlc3Ryb3llZCBWaWV3IGluIGEgVmlld0NvbnRhaW5lciEnKTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuX2VtYmVkZGVkVmlld3MuaW5kZXhPZih2aWV3UmVmLl92aWV3KTtcbiAgICBtb3ZlRW1iZWRkZWRWaWV3KHRoaXMuX2RhdGEsIHByZXZpb3VzSW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgcmV0dXJuIHZpZXdSZWY7XG4gIH1cblxuICBpbmRleE9mKHZpZXdSZWY6IFZpZXdSZWYpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbWJlZGRlZFZpZXdzLmluZGV4T2YoKDxWaWV3UmVmXz52aWV3UmVmKS5fdmlldyk7XG4gIH1cblxuICByZW1vdmUoaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2aWV3RGF0YSA9IGRldGFjaEVtYmVkZGVkVmlldyh0aGlzLl9kYXRhLCBpbmRleCk7XG4gICAgaWYgKHZpZXdEYXRhKSB7XG4gICAgICBTZXJ2aWNlcy5kZXN0cm95Vmlldyh2aWV3RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKGluZGV4PzogbnVtYmVyKTogVmlld1JlZnxudWxsIHtcbiAgICBjb25zdCB2aWV3ID0gZGV0YWNoRW1iZWRkZWRWaWV3KHRoaXMuX2RhdGEsIGluZGV4KTtcbiAgICByZXR1cm4gdmlldyA/IG5ldyBWaWV3UmVmXyh2aWV3KSA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYW5nZURldGVjdG9yUmVmKHZpZXc6IFZpZXdEYXRhKTogQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICByZXR1cm4gbmV3IFZpZXdSZWZfKHZpZXcpO1xufVxuXG5leHBvcnQgY2xhc3MgVmlld1JlZl8gaW1wbGVtZW50cyBFbWJlZGRlZFZpZXdSZWY8YW55PiwgSW50ZXJuYWxWaWV3UmVmIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdmlldzogVmlld0RhdGE7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZ8bnVsbDtcbiAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZnxudWxsO1xuXG4gIGNvbnN0cnVjdG9yKF92aWV3OiBWaWV3RGF0YSkge1xuICAgIHRoaXMuX3ZpZXcgPSBfdmlldztcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLl9hcHBSZWYgPSBudWxsO1xuICB9XG5cbiAgZ2V0IHJvb3ROb2RlcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHJvb3RSZW5kZXJOb2Rlcyh0aGlzLl92aWV3KTtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LmNvbnRleHQ7XG4gIH1cblxuICBnZXQgZGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fdmlldy5zdGF0ZSAmIFZpZXdTdGF0ZS5EZXN0cm95ZWQpICE9PSAwO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIG1hcmtQYXJlbnRWaWV3c0ZvckNoZWNrKHRoaXMuX3ZpZXcpO1xuICB9XG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3LnN0YXRlICY9IH5WaWV3U3RhdGUuQXR0YWNoZWQ7XG4gIH1cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCBmcyA9IHRoaXMuX3ZpZXcucm9vdC5yZW5kZXJlckZhY3Rvcnk7XG4gICAgaWYgKGZzLmJlZ2luKSB7XG4gICAgICBmcy5iZWdpbigpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgU2VydmljZXMuY2hlY2tBbmRVcGRhdGVWaWV3KHRoaXMuX3ZpZXcpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZnMuZW5kKSB7XG4gICAgICAgIGZzLmVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGVja05vQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBTZXJ2aWNlcy5jaGVja05vQ2hhbmdlc1ZpZXcodGhpcy5fdmlldyk7XG4gIH1cblxuICByZWF0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3LnN0YXRlIHw9IFZpZXdTdGF0ZS5BdHRhY2hlZDtcbiAgfVxuICBvbkRlc3Ryb3koY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl92aWV3LmRpc3Bvc2FibGVzKSB7XG4gICAgICB0aGlzLl92aWV3LmRpc3Bvc2FibGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuX3ZpZXcuZGlzcG9zYWJsZXMucHVzaCg8YW55PmNhbGxiYWNrKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2FwcFJlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcykpO1xuICAgIH1cbiAgICBTZXJ2aWNlcy5kZXN0cm95Vmlldyh0aGlzLl92aWV3KTtcbiAgfVxuXG4gIGRldGFjaEZyb21BcHBSZWYoKSB7XG4gICAgdGhpcy5fYXBwUmVmID0gbnVsbDtcbiAgICByZW5kZXJEZXRhY2hWaWV3KHRoaXMuX3ZpZXcpO1xuICAgIFNlcnZpY2VzLmRpcnR5UGFyZW50UXVlcmllcyh0aGlzLl92aWV3KTtcbiAgfVxuXG4gIGF0dGFjaFRvQXBwUmVmKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHZpZXcgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBhIFZpZXdDb250YWluZXIhJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwcFJlZiA9IGFwcFJlZjtcbiAgfVxuXG4gIGF0dGFjaFRvVmlld0NvbnRhaW5lclJlZih2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIGlmICh0aGlzLl9hcHBSZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyB2aWV3IGlzIGFscmVhZHkgYXR0YWNoZWQgZGlyZWN0bHkgdG8gdGhlIEFwcGxpY2F0aW9uUmVmIScpO1xuICAgIH1cbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gdmNSZWY7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlRGF0YSh2aWV3OiBWaWV3RGF0YSwgZGVmOiBOb2RlRGVmKTogVGVtcGxhdGVEYXRhIHtcbiAgcmV0dXJuIG5ldyBUZW1wbGF0ZVJlZl8odmlldywgZGVmKTtcbn1cblxuY2xhc3MgVGVtcGxhdGVSZWZfIGV4dGVuZHMgVGVtcGxhdGVSZWY8YW55PiBpbXBsZW1lbnRzIFRlbXBsYXRlRGF0YSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfcHJvamVjdGVkVmlld3MhOiBWaWV3RGF0YVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhcmVudFZpZXc6IFZpZXdEYXRhLCBwcml2YXRlIF9kZWY6IE5vZGVEZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQ6IGFueSk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFZpZXdSZWZfKFNlcnZpY2VzLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgdGhpcy5fcGFyZW50VmlldywgdGhpcy5fZGVmLCB0aGlzLl9kZWYuZWxlbWVudCEudGVtcGxhdGUgISwgY29udGV4dCkpO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50UmVmKGFzRWxlbWVudERhdGEodGhpcy5fcGFyZW50VmlldywgdGhpcy5fZGVmLm5vZGVJbmRleCkucmVuZGVyRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluamVjdG9yKHZpZXc6IFZpZXdEYXRhLCBlbERlZjogTm9kZURlZik6IEluamVjdG9yIHtcbiAgcmV0dXJuIG5ldyBJbmplY3Rvcl8odmlldywgZWxEZWYpO1xufVxuXG5jbGFzcyBJbmplY3Rvcl8gaW1wbGVtZW50cyBJbmplY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlldzogVmlld0RhdGEsIHByaXZhdGUgZWxEZWY6IE5vZGVEZWZ8bnVsbCkge31cbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU6IGFueSA9IEluamVjdG9yLlRIUk9XX0lGX05PVF9GT1VORCk6IGFueSB7XG4gICAgY29uc3QgYWxsb3dQcml2YXRlU2VydmljZXMgPVxuICAgICAgICB0aGlzLmVsRGVmID8gKHRoaXMuZWxEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuQ29tcG9uZW50VmlldykgIT09IDAgOiBmYWxzZTtcbiAgICByZXR1cm4gU2VydmljZXMucmVzb2x2ZURlcChcbiAgICAgICAgdGhpcy52aWV3LCB0aGlzLmVsRGVmLCBhbGxvd1ByaXZhdGVTZXJ2aWNlcyxcbiAgICAgICAge2ZsYWdzOiBEZXBGbGFncy5Ob25lLCB0b2tlbiwgdG9rZW5LZXk6IHRva2VuS2V5KHRva2VuKX0sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlVmFsdWUodmlldzogVmlld0RhdGEsIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICBjb25zdCBkZWYgPSB2aWV3LmRlZi5ub2Rlc1tpbmRleF07XG4gIGlmIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZUVsZW1lbnQpIHtcbiAgICBjb25zdCBlbERhdGEgPSBhc0VsZW1lbnREYXRhKHZpZXcsIGRlZi5ub2RlSW5kZXgpO1xuICAgIHJldHVybiBkZWYuZWxlbWVudCEudGVtcGxhdGUgPyBlbERhdGEudGVtcGxhdGUgOiBlbERhdGEucmVuZGVyRWxlbWVudDtcbiAgfSBlbHNlIGlmIChkZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuVHlwZVRleHQpIHtcbiAgICByZXR1cm4gYXNUZXh0RGF0YSh2aWV3LCBkZWYubm9kZUluZGV4KS5yZW5kZXJUZXh0O1xuICB9IGVsc2UgaWYgKGRlZi5mbGFncyAmIChOb2RlRmxhZ3MuQ2F0UHJvdmlkZXIgfCBOb2RlRmxhZ3MuVHlwZVBpcGUpKSB7XG4gICAgcmV0dXJuIGFzUHJvdmlkZXJEYXRhKHZpZXcsIGRlZi5ub2RlSW5kZXgpLmluc3RhbmNlO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBzdGF0ZTogcmVhZCBub2RlVmFsdWUgZm9yIG5vZGUgaW5kZXggJHtpbmRleH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5nTW9kdWxlUmVmKFxuICAgIG1vZHVsZVR5cGU6IFR5cGU8YW55PiwgcGFyZW50OiBJbmplY3RvciwgYm9vdHN0cmFwQ29tcG9uZW50czogVHlwZTxhbnk+W10sXG4gICAgZGVmOiBOZ01vZHVsZURlZmluaXRpb24pOiBOZ01vZHVsZVJlZjxhbnk+IHtcbiAgcmV0dXJuIG5ldyBOZ01vZHVsZVJlZl8obW9kdWxlVHlwZSwgcGFyZW50LCBib290c3RyYXBDb21wb25lbnRzLCBkZWYpO1xufVxuXG5jbGFzcyBOZ01vZHVsZVJlZl8gaW1wbGVtZW50cyBOZ01vZHVsZURhdGEsIEludGVybmFsTmdNb2R1bGVSZWY8YW55PiB7XG4gIHByaXZhdGUgX2Rlc3Ryb3lMaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiogQGludGVybmFsICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfcHJvdmlkZXJzITogYW55W107XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9tb2R1bGVzITogYW55W107XG5cbiAgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yID0gdGhpcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX21vZHVsZVR5cGU6IFR5cGU8YW55PiwgcHVibGljIF9wYXJlbnQ6IEluamVjdG9yLFxuICAgICAgcHVibGljIF9ib290c3RyYXBDb21wb25lbnRzOiBUeXBlPGFueT5bXSwgcHVibGljIF9kZWY6IE5nTW9kdWxlRGVmaW5pdGlvbikge1xuICAgIGluaXROZ01vZHVsZSh0aGlzKTtcbiAgfVxuXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlOiBhbnkgPSBJbmplY3Rvci5USFJPV19JRl9OT1RfRk9VTkQsXG4gICAgICBpbmplY3RGbGFnczogSW5qZWN0RmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0KTogYW55IHtcbiAgICBsZXQgZmxhZ3MgPSBEZXBGbGFncy5Ob25lO1xuICAgIGlmIChpbmplY3RGbGFncyAmIEluamVjdEZsYWdzLlNraXBTZWxmKSB7XG4gICAgICBmbGFncyB8PSBEZXBGbGFncy5Ta2lwU2VsZjtcbiAgICB9IGVsc2UgaWYgKGluamVjdEZsYWdzICYgSW5qZWN0RmxhZ3MuU2VsZikge1xuICAgICAgZmxhZ3MgfD0gRGVwRmxhZ3MuU2VsZjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVOZ01vZHVsZURlcChcbiAgICAgICAgdGhpcywge3Rva2VuOiB0b2tlbiwgdG9rZW5LZXk6IHRva2VuS2V5KHRva2VuKSwgZmxhZ3M6IGZsYWdzfSwgbm90Rm91bmRWYWx1ZSk7XG4gIH1cblxuICBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuX21vZHVsZVR5cGUpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgbmcgbW9kdWxlICR7c3RyaW5naWZ5KHRoaXMuaW5zdGFuY2UuY29uc3RydWN0b3IpfSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZC5gKTtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBjYWxsTmdNb2R1bGVMaWZlY3ljbGUodGhpcywgTm9kZUZsYWdzLk9uRGVzdHJveSk7XG4gICAgdGhpcy5fZGVzdHJveUxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH1cblxuICBvbkRlc3Ryb3koY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95TGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG4iXX0=