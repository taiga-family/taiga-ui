(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/tree', ['exports', '@angular/cdk/collections', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/a11y'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.tree = {}), global.ng.cdk.collections, global.rxjs, global.rxjs.operators, global.ng.core, global.ng.cdk.bidi, global.ng.cdk.coercion, global.ng.cdk.a11y));
}(this, (function (exports, collections, rxjs, operators, core, bidi, coercion, a11y) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */
    var BaseTreeControl = /** @class */ (function () {
        function BaseTreeControl() {
            /** A selection model with multi-selection to track expansion status. */
            this.expansionModel = new collections.SelectionModel(true);
        }
        /** Toggles one single data node's expanded/collapsed state. */
        BaseTreeControl.prototype.toggle = function (dataNode) {
            this.expansionModel.toggle(dataNode);
        };
        /** Expands one single data node. */
        BaseTreeControl.prototype.expand = function (dataNode) {
            this.expansionModel.select(dataNode);
        };
        /** Collapses one single data node. */
        BaseTreeControl.prototype.collapse = function (dataNode) {
            this.expansionModel.deselect(dataNode);
        };
        /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
        BaseTreeControl.prototype.isExpanded = function (dataNode) {
            return this.expansionModel.isSelected(dataNode);
        };
        /** Toggles a subtree rooted at `node` recursively. */
        BaseTreeControl.prototype.toggleDescendants = function (dataNode) {
            this.expansionModel.isSelected(dataNode)
                ? this.collapseDescendants(dataNode)
                : this.expandDescendants(dataNode);
        };
        /** Collapse all dataNodes in the tree. */
        BaseTreeControl.prototype.collapseAll = function () {
            this.expansionModel.clear();
        };
        /** Expands a subtree rooted at given data node recursively. */
        BaseTreeControl.prototype.expandDescendants = function (dataNode) {
            var _a;
            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, __spread(this.getDescendants(dataNode)));
            (_a = this.expansionModel).select.apply(_a, __spread(toBeProcessed));
        };
        /** Collapses a subtree rooted at given data node recursively. */
        BaseTreeControl.prototype.collapseDescendants = function (dataNode) {
            var _a;
            var toBeProcessed = [dataNode];
            toBeProcessed.push.apply(toBeProcessed, __spread(this.getDescendants(dataNode)));
            (_a = this.expansionModel).deselect.apply(_a, __spread(toBeProcessed));
        };
        return BaseTreeControl;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */
    var FlatTreeControl = /** @class */ (function (_super) {
        __extends(FlatTreeControl, _super);
        /** Construct with flat tree data node functions getLevel and isExpandable. */
        function FlatTreeControl(getLevel, isExpandable) {
            var _this = _super.call(this) || this;
            _this.getLevel = getLevel;
            _this.isExpandable = isExpandable;
            return _this;
        }
        /**
         * Gets a list of the data node's subtree of descendent data nodes.
         *
         * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
         * with correct levels.
         */
        FlatTreeControl.prototype.getDescendants = function (dataNode) {
            var startIndex = this.dataNodes.indexOf(dataNode);
            var results = [];
            // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
            // The level of descendants of a tree node must be greater than the level of the given
            // tree node.
            // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
            // If we reach a node whose level is greater than the level of the tree node, we hit a
            // sibling of an ancestor.
            for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
                results.push(this.dataNodes[i]);
            }
            return results;
        };
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         */
        FlatTreeControl.prototype.expandAll = function () {
            var _a;
            (_a = this.expansionModel).select.apply(_a, __spread(this.dataNodes));
        };
        return FlatTreeControl;
    }(BaseTreeControl));

    /** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */
    var NestedTreeControl = /** @class */ (function (_super) {
        __extends(NestedTreeControl, _super);
        /** Construct with nested tree function getChildren. */
        function NestedTreeControl(getChildren) {
            var _this = _super.call(this) || this;
            _this.getChildren = getChildren;
            return _this;
        }
        /**
         * Expands all dataNodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
         * data nodes of the tree.
         */
        NestedTreeControl.prototype.expandAll = function () {
            var _a;
            var _this = this;
            this.expansionModel.clear();
            var allNodes = this.dataNodes.reduce(function (accumulator, dataNode) {
                return __spread(accumulator, _this.getDescendants(dataNode), [dataNode]);
            }, []);
            (_a = this.expansionModel).select.apply(_a, __spread(allNodes));
        };
        /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
        NestedTreeControl.prototype.getDescendants = function (dataNode) {
            var descendants = [];
            this._getDescendants(descendants, dataNode);
            // Remove the node itself
            return descendants.splice(1);
        };
        /** A helper function to get descendants recursively. */
        NestedTreeControl.prototype._getDescendants = function (descendants, dataNode) {
            var _this = this;
            descendants.push(dataNode);
            var childrenNodes = this.getChildren(dataNode);
            if (Array.isArray(childrenNodes)) {
                childrenNodes.forEach(function (child) { return _this._getDescendants(descendants, child); });
            }
            else if (rxjs.isObservable(childrenNodes)) {
                // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
                // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
                childrenNodes.pipe(operators.take(1), operators.filter(Boolean))
                    .subscribe(function (children) {
                    var e_1, _a;
                    try {
                        for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                            var child = children_1_1.value;
                            _this._getDescendants(descendants, child);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                });
            }
        };
        return NestedTreeControl;
    }(BaseTreeControl));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * @docs-private
     */
    var CDK_TREE_NODE_OUTLET_NODE = new core.InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */
    var CdkTreeNodeOutlet = /** @class */ (function () {
        function CdkTreeNodeOutlet(viewContainer, _node) {
            this.viewContainer = viewContainer;
            this._node = _node;
        }
        CdkTreeNodeOutlet.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkTreeNodeOutlet]'
                    },] }
        ];
        /** @nocollapse */
        CdkTreeNodeOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: core.Optional }] }
        ]; };
        return CdkTreeNodeOutlet;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Context provided to the tree node component. */
    var CdkTreeNodeOutletContext = /** @class */ (function () {
        function CdkTreeNodeOutletContext(data) {
            this.$implicit = data;
        }
        return CdkTreeNodeOutletContext;
    }());
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     */
    var CdkTreeNodeDef = /** @class */ (function () {
        /** @docs-private */
        function CdkTreeNodeDef(template) {
            this.template = template;
        }
        CdkTreeNodeDef.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkTreeNodeDef]',
                        inputs: [
                            'when: cdkTreeNodeDefWhen'
                        ],
                    },] }
        ];
        /** @nocollapse */
        CdkTreeNodeDef.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return CdkTreeNodeDef;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Returns an error to be thrown when there is no usable data.
     * @docs-private
     */
    function getTreeNoValidDataSourceError() {
        return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * @docs-private
     */
    function getTreeMultipleDefaultNodeDefsError() {
        return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * @docs-private
     */
    function getTreeMissingMatchingNodeDefError() {
        return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * @docs-private
     */
    function getTreeControlMissingError() {
        return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * @docs-private
     */
    function getTreeControlFunctionsMissingError() {
        return Error("Could not find functions for nested/flat tree in tree control.");
    }

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     */
    var CdkTree = /** @class */ (function () {
        function CdkTree(_differs, _changeDetectorRef) {
            this._differs = _differs;
            this._changeDetectorRef = _changeDetectorRef;
            /** Subject that emits when the component has been destroyed. */
            this._onDestroy = new rxjs.Subject();
            /** Level of nodes */
            this._levels = new Map();
            // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
            //     Remove the MAX_VALUE in viewChange
            /**
             * Stream containing the latest information on what rows are being displayed on screen.
             * Can be used by the data source to as a heuristic of what data should be provided.
             */
            this.viewChange = new rxjs.BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
        }
        Object.defineProperty(CdkTree.prototype, "dataSource", {
            /**
             * Provides a stream containing the latest data array to render. Influenced by the tree's
             * stream of view window (what dataNodes are currently on screen).
             * Data source can be an observable of data array, or a data array to render.
             */
            get: function () { return this._dataSource; },
            set: function (dataSource) {
                if (this._dataSource !== dataSource) {
                    this._switchDataSource(dataSource);
                }
            },
            enumerable: true,
            configurable: true
        });
        CdkTree.prototype.ngOnInit = function () {
            this._dataDiffer = this._differs.find([]).create(this.trackBy);
            if (!this.treeControl) {
                throw getTreeControlMissingError();
            }
        };
        CdkTree.prototype.ngOnDestroy = function () {
            this._nodeOutlet.viewContainer.clear();
            this.viewChange.complete();
            this._onDestroy.next();
            this._onDestroy.complete();
            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
                this.dataSource.disconnect(this);
            }
            if (this._dataSubscription) {
                this._dataSubscription.unsubscribe();
                this._dataSubscription = null;
            }
        };
        CdkTree.prototype.ngAfterContentChecked = function () {
            var defaultNodeDefs = this._nodeDefs.filter(function (def) { return !def.when; });
            if (defaultNodeDefs.length > 1) {
                throw getTreeMultipleDefaultNodeDefsError();
            }
            this._defaultNodeDef = defaultNodeDefs[0];
            if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
                this._observeRenderChanges();
            }
        };
        // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         */
        CdkTree.prototype._switchDataSource = function (dataSource) {
            if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
                this.dataSource.disconnect(this);
            }
            if (this._dataSubscription) {
                this._dataSubscription.unsubscribe();
                this._dataSubscription = null;
            }
            // Remove the all dataNodes if there is now no data source
            if (!dataSource) {
                this._nodeOutlet.viewContainer.clear();
            }
            this._dataSource = dataSource;
            if (this._nodeDefs) {
                this._observeRenderChanges();
            }
        };
        /** Set up a subscription for the data provided by the data source. */
        CdkTree.prototype._observeRenderChanges = function () {
            var _this = this;
            var dataStream;
            if (collections.isDataSource(this._dataSource)) {
                dataStream = this._dataSource.connect(this);
            }
            else if (rxjs.isObservable(this._dataSource)) {
                dataStream = this._dataSource;
            }
            else if (Array.isArray(this._dataSource)) {
                dataStream = rxjs.of(this._dataSource);
            }
            if (dataStream) {
                this._dataSubscription = dataStream.pipe(operators.takeUntil(this._onDestroy))
                    .subscribe(function (data) { return _this.renderNodeChanges(data); });
            }
            else {
                throw getTreeNoValidDataSourceError();
            }
        };
        /** Check for changes made in the data and render each change (node added/removed/moved). */
        CdkTree.prototype.renderNodeChanges = function (data, dataDiffer, viewContainer, parentData) {
            var _this = this;
            if (dataDiffer === void 0) { dataDiffer = this._dataDiffer; }
            if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
            var changes = dataDiffer.diff(data);
            if (!changes) {
                return;
            }
            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                if (item.previousIndex == null) {
                    _this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(adjustedPreviousIndex);
                    _this._levels.delete(item.item);
                }
                else {
                    var view = viewContainer.get(adjustedPreviousIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
            this._changeDetectorRef.detectChanges();
        };
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         */
        CdkTree.prototype._getNodeDef = function (data, i) {
            if (this._nodeDefs.length === 1) {
                return this._nodeDefs.first;
            }
            var nodeDef = this._nodeDefs.find(function (def) { return def.when && def.when(i, data); }) || this._defaultNodeDef;
            if (!nodeDef) {
                throw getTreeMissingMatchingNodeDefError();
            }
            return nodeDef;
        };
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         */
        CdkTree.prototype.insertNode = function (nodeData, index, viewContainer, parentData) {
            var node = this._getNodeDef(nodeData, index);
            // Node context that will be provided to created embedded view
            var context = new CdkTreeNodeOutletContext(nodeData);
            // If the tree is flat tree, then use the `getLevel` function in flat tree control
            // Otherwise, use the level of parent node.
            if (this.treeControl.getLevel) {
                context.level = this.treeControl.getLevel(nodeData);
            }
            else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
                context.level = this._levels.get(parentData) + 1;
            }
            else {
                context.level = 0;
            }
            this._levels.set(nodeData, context.level);
            // Use default tree nodeOutlet, or nested node's nodeOutlet
            var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
            container.createEmbeddedView(node.template, context, index);
            // Set the data to just created `CdkTreeNode`.
            // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
            //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
            if (CdkTreeNode.mostRecentTreeNode) {
                CdkTreeNode.mostRecentTreeNode.data = nodeData;
            }
        };
        CdkTree.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-tree',
                        exportAs: 'cdkTree',
                        template: "<ng-container cdkTreeNodeOutlet></ng-container>",
                        host: {
                            'class': 'cdk-tree',
                            'role': 'tree',
                        },
                        encapsulation: core.ViewEncapsulation.None,
                        // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                        // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                        // declared elsewhere, they are checked when their declaration points are checked.
                        // tslint:disable-next-line:validate-decorators
                        changeDetection: core.ChangeDetectionStrategy.Default
                    }] }
        ];
        /** @nocollapse */
        CdkTree.ctorParameters = function () { return [
            { type: core.IterableDiffers },
            { type: core.ChangeDetectorRef }
        ]; };
        CdkTree.propDecorators = {
            dataSource: [{ type: core.Input }],
            treeControl: [{ type: core.Input }],
            trackBy: [{ type: core.Input }],
            _nodeOutlet: [{ type: core.ViewChild, args: [CdkTreeNodeOutlet, { static: true },] }],
            _nodeDefs: [{ type: core.ContentChildren, args: [CdkTreeNodeDef, {
                            // We need to use `descendants: true`, because Ivy will no longer match
                            // indirect descendants if it's left as false.
                            descendants: true
                        },] }]
        };
        return CdkTree;
    }());
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     */
    var CdkTreeNode = /** @class */ (function () {
        function CdkTreeNode(_elementRef, _tree) {
            this._elementRef = _elementRef;
            this._tree = _tree;
            /** Subject that emits when the component has been destroyed. */
            this._destroyed = new rxjs.Subject();
            /** Emits when the node's data has changed. */
            this._dataChanges = new rxjs.Subject();
            /**
             * The role of the node should be 'group' if it's an internal node,
             * and 'treeitem' if it's a leaf node.
             */
            this.role = 'treeitem';
            CdkTreeNode.mostRecentTreeNode = this;
        }
        Object.defineProperty(CdkTreeNode.prototype, "data", {
            /** The tree node's data. */
            get: function () { return this._data; },
            set: function (value) {
                if (value !== this._data) {
                    this._data = value;
                    this._setRoleFromData();
                    this._dataChanges.next();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTreeNode.prototype, "isExpanded", {
            get: function () {
                return this._tree.treeControl.isExpanded(this._data);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTreeNode.prototype, "level", {
            get: function () {
                return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
            },
            enumerable: true,
            configurable: true
        });
        CdkTreeNode.prototype.ngOnDestroy = function () {
            // If this is the last tree node being destroyed,
            // clear out the reference to avoid leaking memory.
            if (CdkTreeNode.mostRecentTreeNode === this) {
                CdkTreeNode.mostRecentTreeNode = null;
            }
            this._dataChanges.complete();
            this._destroyed.next();
            this._destroyed.complete();
        };
        /** Focuses the menu item. Implements for FocusableOption. */
        CdkTreeNode.prototype.focus = function () {
            this._elementRef.nativeElement.focus();
        };
        CdkTreeNode.prototype._setRoleFromData = function () {
            var _this = this;
            if (this._tree.treeControl.isExpandable) {
                this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
            }
            else {
                if (!this._tree.treeControl.getChildren) {
                    throw getTreeControlFunctionsMissingError();
                }
                var childrenNodes = this._tree.treeControl.getChildren(this._data);
                if (Array.isArray(childrenNodes)) {
                    this._setRoleFromChildren(childrenNodes);
                }
                else if (rxjs.isObservable(childrenNodes)) {
                    childrenNodes.pipe(operators.takeUntil(this._destroyed))
                        .subscribe(function (children) { return _this._setRoleFromChildren(children); });
                }
            }
        };
        CdkTreeNode.prototype._setRoleFromChildren = function (children) {
            this.role = children && children.length ? 'group' : 'treeitem';
        };
        /**
         * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
         * in `CdkTree` and set the data to it.
         */
        CdkTreeNode.mostRecentTreeNode = null;
        CdkTreeNode.decorators = [
            { type: core.Directive, args: [{
                        selector: 'cdk-tree-node',
                        exportAs: 'cdkTreeNode',
                        host: {
                            '[attr.aria-expanded]': 'isExpanded',
                            '[attr.aria-level]': 'role === "treeitem" ? level : null',
                            '[attr.role]': 'role',
                            'class': 'cdk-tree-node',
                        },
                    },] }
        ];
        /** @nocollapse */
        CdkTreeNode.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: CdkTree }
        ]; };
        CdkTreeNode.propDecorators = {
            role: [{ type: core.Input }]
        };
        return CdkTreeNode;
    }());

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * The children of node will be automatically added to `cdkTreeNodeOutlet`.
     */
    var CdkNestedTreeNode = /** @class */ (function (_super) {
        __extends(CdkNestedTreeNode, _super);
        function CdkNestedTreeNode(_elementRef, _tree, _differs) {
            var _this = _super.call(this, _elementRef, _tree) || this;
            _this._elementRef = _elementRef;
            _this._tree = _tree;
            _this._differs = _differs;
            return _this;
        }
        CdkNestedTreeNode.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
            if (!this._tree.treeControl.getChildren) {
                throw getTreeControlFunctionsMissingError();
            }
            var childrenNodes = this._tree.treeControl.getChildren(this.data);
            if (Array.isArray(childrenNodes)) {
                this.updateChildrenNodes(childrenNodes);
            }
            else if (rxjs.isObservable(childrenNodes)) {
                childrenNodes.pipe(operators.takeUntil(this._destroyed))
                    .subscribe(function (result) { return _this.updateChildrenNodes(result); });
            }
            this.nodeOutlet.changes.pipe(operators.takeUntil(this._destroyed))
                .subscribe(function () { return _this.updateChildrenNodes(); });
        };
        CdkNestedTreeNode.prototype.ngOnDestroy = function () {
            this._clear();
            _super.prototype.ngOnDestroy.call(this);
        };
        /** Add children dataNodes to the NodeOutlet */
        CdkNestedTreeNode.prototype.updateChildrenNodes = function (children) {
            var outlet = this._getNodeOutlet();
            if (children) {
                this._children = children;
            }
            if (outlet && this._children) {
                var viewContainer = outlet.viewContainer;
                this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
            }
            else {
                // Reset the data differ if there's no children nodes displayed
                this._dataDiffer.diff([]);
            }
        };
        /** Clear the children dataNodes. */
        CdkNestedTreeNode.prototype._clear = function () {
            var outlet = this._getNodeOutlet();
            if (outlet) {
                outlet.viewContainer.clear();
                this._dataDiffer.diff([]);
            }
        };
        /** Gets the outlet for the current node. */
        CdkNestedTreeNode.prototype._getNodeOutlet = function () {
            var _this = this;
            var outlets = this.nodeOutlet;
            // Note that since we use `descendants: true` on the query, we have to ensure
            // that we don't pick up the outlet of a child node by accident.
            return outlets && outlets.find(function (outlet) { return !outlet._node || outlet._node === _this; });
        };
        CdkNestedTreeNode.decorators = [
            { type: core.Directive, args: [{
                        selector: 'cdk-nested-tree-node',
                        exportAs: 'cdkNestedTreeNode',
                        host: {
                            '[attr.aria-expanded]': 'isExpanded',
                            '[attr.role]': 'role',
                            'class': 'cdk-tree-node cdk-nested-tree-node',
                        },
                        providers: [
                            { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                            { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                        ]
                    },] }
        ];
        /** @nocollapse */
        CdkNestedTreeNode.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: CdkTree },
            { type: core.IterableDiffers }
        ]; };
        CdkNestedTreeNode.propDecorators = {
            nodeOutlet: [{ type: core.ContentChildren, args: [CdkTreeNodeOutlet, {
                            // We need to use `descendants: true`, because Ivy will no longer match
                            // indirect descendants if it's left as false.
                            descendants: true
                        },] }]
        };
        return CdkNestedTreeNode;
    }(CdkTreeNode));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Regex used to split a string on its CSS units. */
    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     */
    var CdkTreeNodePadding = /** @class */ (function () {
        function CdkTreeNodePadding(_treeNode, _tree, 
        /**
         * @deprecated _renderer parameter no longer being used. To be removed.
         * @breaking-change 11.0.0
         */
        _renderer, _element, _dir) {
            var _this = this;
            this._treeNode = _treeNode;
            this._tree = _tree;
            this._element = _element;
            this._dir = _dir;
            /** Subject that emits when the component has been destroyed. */
            this._destroyed = new rxjs.Subject();
            /** CSS units used for the indentation value. */
            this.indentUnits = 'px';
            this._indent = 40;
            this._setPadding();
            if (_dir) {
                _dir.change.pipe(operators.takeUntil(this._destroyed)).subscribe(function () { return _this._setPadding(true); });
            }
            // In Ivy the indentation binding might be set before the tree node's data has been added,
            // which means that we'll miss the first render. We have to subscribe to changes in the
            // data to ensure that everything is up to date.
            _treeNode._dataChanges.subscribe(function () { return _this._setPadding(); });
        }
        Object.defineProperty(CdkTreeNodePadding.prototype, "level", {
            /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
            get: function () { return this._level; },
            set: function (value) {
                // Set to null as the fallback value so that _setPadding can fall back to the node level if the
                // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
                // they set 0 explicitly.
                this._level = coercion.coerceNumberProperty(value, null);
                this._setPadding();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTreeNodePadding.prototype, "indent", {
            /**
             * The indent for each level. Can be a number or a CSS string.
             * Default number 40px from material design menu sub-menu spec.
             */
            get: function () { return this._indent; },
            set: function (indent) {
                var value = indent;
                var units = 'px';
                if (typeof indent === 'string') {
                    var parts = indent.split(cssUnitPattern);
                    value = parts[0];
                    units = parts[1] || units;
                }
                this.indentUnits = units;
                this._indent = coercion.coerceNumberProperty(value);
                this._setPadding();
            },
            enumerable: true,
            configurable: true
        });
        CdkTreeNodePadding.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
        CdkTreeNodePadding.prototype._paddingIndent = function () {
            var nodeLevel = (this._treeNode.data && this._tree.treeControl.getLevel)
                ? this._tree.treeControl.getLevel(this._treeNode.data)
                : null;
            var level = this._level == null ? nodeLevel : this._level;
            return typeof level === 'number' ? "" + level * this._indent + this.indentUnits : null;
        };
        CdkTreeNodePadding.prototype._setPadding = function (forceChange) {
            if (forceChange === void 0) { forceChange = false; }
            var padding = this._paddingIndent();
            if (padding !== this._currentPadding || forceChange) {
                var element = this._element.nativeElement;
                var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
                var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
                element.style[paddingProp] = padding || '';
                element.style[resetProp] = '';
                this._currentPadding = padding;
            }
        };
        CdkTreeNodePadding.decorators = [
            { type: core.Directive, args: [{
                        selector: '[cdkTreeNodePadding]',
                    },] }
        ];
        /** @nocollapse */
        CdkTreeNodePadding.ctorParameters = function () { return [
            { type: CdkTreeNode },
            { type: CdkTree },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
        ]; };
        CdkTreeNodePadding.propDecorators = {
            level: [{ type: core.Input, args: ['cdkTreeNodePadding',] }],
            indent: [{ type: core.Input, args: ['cdkTreeNodePaddingIndent',] }]
        };
        return CdkTreeNodePadding;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Node toggle to expand/collapse the node.
     */
    var CdkTreeNodeToggle = /** @class */ (function () {
        function CdkTreeNodeToggle(_tree, _treeNode) {
            this._tree = _tree;
            this._treeNode = _treeNode;
            this._recursive = false;
        }
        Object.defineProperty(CdkTreeNodeToggle.prototype, "recursive", {
            /** Whether expand/collapse the node recursively. */
            get: function () { return this._recursive; },
            set: function (value) { this._recursive = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete
        CdkTreeNodeToggle.prototype._toggle = function (event) {
            this.recursive
                ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
                : this._tree.treeControl.toggle(this._treeNode.data);
            event.stopPropagation();
        };
        CdkTreeNodeToggle.decorators = [
            { type: core.Directive, args: [{ selector: '[cdkTreeNodeToggle]' },] }
        ];
        /** @nocollapse */
        CdkTreeNodeToggle.ctorParameters = function () { return [
            { type: CdkTree },
            { type: CdkTreeNode }
        ]; };
        CdkTreeNodeToggle.propDecorators = {
            recursive: [{ type: core.Input, args: ['cdkTreeNodeToggleRecursive',] }],
            _toggle: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return CdkTreeNodeToggle;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [
        CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet,
    ];
    var CdkTreeModule = /** @class */ (function () {
        function CdkTreeModule() {
        }
        CdkTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: EXPORTED_DECLARATIONS,
                        declarations: EXPORTED_DECLARATIONS,
                        providers: [a11y.FocusMonitor, CdkTreeNodeDef]
                    },] }
        ];
        return CdkTreeModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseTreeControl = BaseTreeControl;
    exports.CDK_TREE_NODE_OUTLET_NODE = CDK_TREE_NODE_OUTLET_NODE;
    exports.CdkNestedTreeNode = CdkNestedTreeNode;
    exports.CdkTree = CdkTree;
    exports.CdkTreeModule = CdkTreeModule;
    exports.CdkTreeNode = CdkTreeNode;
    exports.CdkTreeNodeDef = CdkTreeNodeDef;
    exports.CdkTreeNodeOutlet = CdkTreeNodeOutlet;
    exports.CdkTreeNodeOutletContext = CdkTreeNodeOutletContext;
    exports.CdkTreeNodePadding = CdkTreeNodePadding;
    exports.CdkTreeNodeToggle = CdkTreeNodeToggle;
    exports.FlatTreeControl = FlatTreeControl;
    exports.NestedTreeControl = NestedTreeControl;
    exports.getTreeControlFunctionsMissingError = getTreeControlFunctionsMissingError;
    exports.getTreeControlMissingError = getTreeControlMissingError;
    exports.getTreeMissingMatchingNodeDefError = getTreeMissingMatchingNodeDefError;
    exports.getTreeMultipleDefaultNodeDefsError = getTreeMultipleDefaultNodeDefsError;
    exports.getTreeNoValidDataSourceError = getTreeNoValidDataSourceError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-tree.umd.js.map
