/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/jit/directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getCompilerFacade } from '../../compiler/compiler_facade';
import { resolveForwardRef } from '../../di/forward_ref';
import { getReflect, reflectDependencies } from '../../di/jit/util';
import { componentNeedsResolution, maybeQueueResolutionOfComponentResources } from '../../metadata/resource_loading';
import { ViewEncapsulation } from '../../metadata/view';
import { initNgDevMode } from '../../util/ng_dev_mode';
import { getComponentDef, getDirectiveDef } from '../definition';
import { EMPTY_ARRAY, EMPTY_OBJ } from '../empty';
import { NG_COMP_DEF, NG_DIR_DEF, NG_FACTORY_DEF } from '../fields';
import { stringifyForError } from '../util/misc_utils';
import { angularCoreEnv } from './environment';
import { getJitOptions } from './jit_options';
import { flushModuleScopingQueueAsMuchAsPossible, patchComponentDefWithScope, transitiveScopesFor } from './module';
/**
 * Compile an Angular component according to its decorator metadata, and patch the resulting
 * component def (ɵcmp) onto the component type.
 *
 * Compilation may be asynchronous (due to the need to resolve URLs for the component template or
 * other resources, for example). In the event that compilation is not immediate, `compileComponent`
 * will enqueue resource resolution into a global queue and will fail to return the `ɵcmp`
 * until the global queue has been resolved with a call to `resolveComponentResources`.
 * @param {?} type
 * @param {?} metadata
 * @return {?}
 */
export function compileComponent(type, metadata) {
    // Initialize ngDevMode. This must be the first statement in compileComponent.
    // See the `initNgDevMode` docstring for more information.
    (typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode();
    /** @type {?} */
    let ngComponentDef = null;
    // Metadata may have resources which need to be resolved.
    maybeQueueResolutionOfComponentResources(type, metadata);
    // Note that we're using the same function as `Directive`, because that's only subset of metadata
    // that we need to create the ngFactoryDef. We're avoiding using the component metadata
    // because we'd have to resolve the asynchronous templates.
    addDirectiveFactoryDef(type, metadata);
    Object.defineProperty(type, NG_COMP_DEF, {
        get: (/**
         * @return {?}
         */
        () => {
            if (ngComponentDef === null) {
                /** @type {?} */
                const compiler = getCompilerFacade();
                if (componentNeedsResolution(metadata)) {
                    /** @type {?} */
                    const error = [`Component '${type.name}' is not resolved:`];
                    if (metadata.templateUrl) {
                        error.push(` - templateUrl: ${metadata.templateUrl}`);
                    }
                    if (metadata.styleUrls && metadata.styleUrls.length) {
                        error.push(` - styleUrls: ${JSON.stringify(metadata.styleUrls)}`);
                    }
                    error.push(`Did you run and wait for 'resolveComponentResources()'?`);
                    throw new Error(error.join('\n'));
                }
                // This const was called `jitOptions` previously but had to be renamed to `options` because
                // of a bug with Terser that caused optimized JIT builds to throw a `ReferenceError`.
                // This bug was investigated in https://github.com/angular/angular-cli/issues/17264.
                // We should not rename it back until https://github.com/terser/terser/issues/615 is fixed.
                /** @type {?} */
                const options = getJitOptions();
                /** @type {?} */
                let preserveWhitespaces = metadata.preserveWhitespaces;
                if (preserveWhitespaces === undefined) {
                    if (options !== null && options.preserveWhitespaces !== undefined) {
                        preserveWhitespaces = options.preserveWhitespaces;
                    }
                    else {
                        preserveWhitespaces = false;
                    }
                }
                /** @type {?} */
                let encapsulation = metadata.encapsulation;
                if (encapsulation === undefined) {
                    if (options !== null && options.defaultEncapsulation !== undefined) {
                        encapsulation = options.defaultEncapsulation;
                    }
                    else {
                        encapsulation = ViewEncapsulation.Emulated;
                    }
                }
                /** @type {?} */
                const templateUrl = metadata.templateUrl || `ng:///${type.name}/template.html`;
                /** @type {?} */
                const meta = Object.assign(Object.assign({}, directiveMetadata(type, metadata)), { typeSourceSpan: compiler.createParseSourceSpan('Component', type.name, templateUrl), template: metadata.template || '', preserveWhitespaces, styles: metadata.styles || EMPTY_ARRAY, animations: metadata.animations, directives: [], changeDetection: metadata.changeDetection, pipes: new Map(), encapsulation, interpolation: metadata.interpolation, viewProviders: metadata.viewProviders || null });
                if (meta.usesInheritance) {
                    addDirectiveDefToUndecoratedParents(type);
                }
                ngComponentDef = compiler.compileComponent(angularCoreEnv, templateUrl, meta);
                // When NgModule decorator executed, we enqueued the module definition such that
                // it would only dequeue and add itself as module scope to all of its declarations,
                // but only if  if all of its declarations had resolved. This call runs the check
                // to see if any modules that are in the queue can be dequeued and add scope to
                // their declarations.
                flushModuleScopingQueueAsMuchAsPossible();
                // If component compilation is async, then the @NgModule annotation which declares the
                // component may execute and set an ngSelectorScope property on the component type. This
                // allows the component to patch itself with directiveDefs from the module after it
                // finishes compiling.
                if (hasSelectorScope(type)) {
                    /** @type {?} */
                    const scopes = transitiveScopesFor(type.ngSelectorScope);
                    patchComponentDefWithScope(ngComponentDef, scopes);
                }
            }
            return ngComponentDef;
        }),
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
}
/**
 * @template T
 * @param {?} component
 * @return {?}
 */
function hasSelectorScope(component) {
    return ((/** @type {?} */ (component))).ngSelectorScope !== undefined;
}
/**
 * Compile an Angular directive according to its decorator metadata, and patch the resulting
 * directive def onto the component type.
 *
 * In the event that compilation is not immediate, `compileDirective` will return a `Promise` which
 * will resolve when compilation completes and the directive becomes usable.
 * @param {?} type
 * @param {?} directive
 * @return {?}
 */
export function compileDirective(type, directive) {
    /** @type {?} */
    let ngDirectiveDef = null;
    addDirectiveFactoryDef(type, directive || {});
    Object.defineProperty(type, NG_DIR_DEF, {
        get: (/**
         * @return {?}
         */
        () => {
            if (ngDirectiveDef === null) {
                // `directive` can be null in the case of abstract directives as a base class
                // that use `@Directive()` with no selector. In that case, pass empty object to the
                // `directiveMetadata` function instead of null.
                /** @type {?} */
                const meta = getDirectiveMetadata(type, directive || {});
                ngDirectiveDef =
                    getCompilerFacade().compileDirective(angularCoreEnv, meta.sourceMapUrl, meta.metadata);
            }
            return ngDirectiveDef;
        }),
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
}
/**
 * @param {?} type
 * @param {?} metadata
 * @return {?}
 */
function getDirectiveMetadata(type, metadata) {
    /** @type {?} */
    const name = type && type.name;
    /** @type {?} */
    const sourceMapUrl = `ng:///${name}/ɵdir.js`;
    /** @type {?} */
    const compiler = getCompilerFacade();
    /** @type {?} */
    const facade = directiveMetadata((/** @type {?} */ (type)), metadata);
    facade.typeSourceSpan = compiler.createParseSourceSpan('Directive', name, sourceMapUrl);
    if (facade.usesInheritance) {
        addDirectiveDefToUndecoratedParents(type);
    }
    return { metadata: facade, sourceMapUrl };
}
/**
 * @param {?} type
 * @param {?} metadata
 * @return {?}
 */
function addDirectiveFactoryDef(type, metadata) {
    /** @type {?} */
    let ngFactoryDef = null;
    Object.defineProperty(type, NG_FACTORY_DEF, {
        get: (/**
         * @return {?}
         */
        () => {
            if (ngFactoryDef === null) {
                /** @type {?} */
                const meta = getDirectiveMetadata(type, metadata);
                /** @type {?} */
                const compiler = getCompilerFacade();
                ngFactoryDef = compiler.compileFactory(angularCoreEnv, `ng:///${type.name}/ɵfac.js`, Object.assign(Object.assign({}, meta.metadata), { injectFn: 'directiveInject', target: compiler.R3FactoryTarget.Directive }));
            }
            return ngFactoryDef;
        }),
        // Make the property configurable in dev mode to allow overriding in tests
        configurable: !!ngDevMode,
    });
}
/**
 * @param {?} type
 * @return {?}
 */
export function extendsDirectlyFromObject(type) {
    return Object.getPrototypeOf(type.prototype) === Object.prototype;
}
/**
 * Extract the `R3DirectiveMetadata` for a particular directive (either a `Directive` or a
 * `Component`).
 * @param {?} type
 * @param {?} metadata
 * @return {?}
 */
export function directiveMetadata(type, metadata) {
    // Reflect inputs and outputs.
    /** @type {?} */
    const reflect = getReflect();
    /** @type {?} */
    const propMetadata = reflect.ownPropMetadata(type);
    return {
        name: type.name,
        type: type,
        typeArgumentCount: 0,
        selector: metadata.selector !== undefined ? metadata.selector : null,
        deps: reflectDependencies(type),
        host: metadata.host || EMPTY_OBJ,
        propMetadata: propMetadata,
        inputs: metadata.inputs || EMPTY_ARRAY,
        outputs: metadata.outputs || EMPTY_ARRAY,
        queries: extractQueriesMetadata(type, propMetadata, isContentQuery),
        lifecycle: { usesOnChanges: reflect.hasLifecycleHook(type, 'ngOnChanges') },
        typeSourceSpan: (/** @type {?} */ (null)),
        usesInheritance: !extendsDirectlyFromObject(type),
        exportAs: extractExportAs(metadata.exportAs),
        providers: metadata.providers || null,
        viewQueries: extractQueriesMetadata(type, propMetadata, isViewQuery)
    };
}
/**
 * Adds a directive definition to all parent classes of a type that don't have an Angular decorator.
 * @param {?} type
 * @return {?}
 */
function addDirectiveDefToUndecoratedParents(type) {
    /** @type {?} */
    const objPrototype = Object.prototype;
    /** @type {?} */
    let parent = Object.getPrototypeOf(type.prototype).constructor;
    // Go up the prototype until we hit `Object`.
    while (parent && parent !== objPrototype) {
        // Since inheritance works if the class was annotated already, we only need to add
        // the def if there are no annotations and the def hasn't been created already.
        if (!getDirectiveDef(parent) && !getComponentDef(parent) &&
            shouldAddAbstractDirective(parent)) {
            compileDirective(parent, null);
        }
        parent = Object.getPrototypeOf(parent);
    }
}
/**
 * @param {?} selector
 * @return {?}
 */
function convertToR3QueryPredicate(selector) {
    return typeof selector === 'string' ? splitByComma(selector) : resolveForwardRef(selector);
}
/**
 * @param {?} propertyName
 * @param {?} ann
 * @return {?}
 */
export function convertToR3QueryMetadata(propertyName, ann) {
    return {
        propertyName: propertyName,
        predicate: convertToR3QueryPredicate(ann.selector),
        descendants: ann.descendants,
        first: ann.first,
        read: ann.read ? ann.read : null,
        static: !!ann.static
    };
}
/**
 * @param {?} type
 * @param {?} propMetadata
 * @param {?} isQueryAnn
 * @return {?}
 */
function extractQueriesMetadata(type, propMetadata, isQueryAnn) {
    /** @type {?} */
    const queriesMeta = [];
    for (const field in propMetadata) {
        if (propMetadata.hasOwnProperty(field)) {
            /** @type {?} */
            const annotations = propMetadata[field];
            annotations.forEach((/**
             * @param {?} ann
             * @return {?}
             */
            ann => {
                if (isQueryAnn(ann)) {
                    if (!ann.selector) {
                        throw new Error(`Can't construct a query for the property "${field}" of ` +
                            `"${stringifyForError(type)}" since the query selector wasn't defined.`);
                    }
                    if (annotations.some(isInputAnnotation)) {
                        throw new Error(`Cannot combine @Input decorators with query decorators`);
                    }
                    queriesMeta.push(convertToR3QueryMetadata(field, ann));
                }
            }));
        }
    }
    return queriesMeta;
}
/**
 * @param {?} exportAs
 * @return {?}
 */
function extractExportAs(exportAs) {
    return exportAs === undefined ? null : splitByComma(exportAs);
}
/**
 * @param {?} value
 * @return {?}
 */
function isContentQuery(value) {
    /** @type {?} */
    const name = value.ngMetadataName;
    return name === 'ContentChild' || name === 'ContentChildren';
}
/**
 * @param {?} value
 * @return {?}
 */
function isViewQuery(value) {
    /** @type {?} */
    const name = value.ngMetadataName;
    return name === 'ViewChild' || name === 'ViewChildren';
}
/**
 * @param {?} value
 * @return {?}
 */
function isInputAnnotation(value) {
    return value.ngMetadataName === 'Input';
}
/**
 * @param {?} value
 * @return {?}
 */
function splitByComma(value) {
    return value.split(',').map((/**
     * @param {?} piece
     * @return {?}
     */
    piece => piece.trim()));
}
/** @type {?} */
const LIFECYCLE_HOOKS = [
    'ngOnChanges', 'ngOnInit', 'ngOnDestroy', 'ngDoCheck', 'ngAfterViewInit', 'ngAfterViewChecked',
    'ngAfterContentInit', 'ngAfterContentChecked'
];
/**
 * @param {?} type
 * @return {?}
 */
function shouldAddAbstractDirective(type) {
    /** @type {?} */
    const reflect = getReflect();
    if (LIFECYCLE_HOOKS.some((/**
     * @param {?} hookName
     * @return {?}
     */
    hookName => reflect.hasLifecycleHook(type, hookName)))) {
        return true;
    }
    /** @type {?} */
    const propMetadata = reflect.propMetadata(type);
    for (const field in propMetadata) {
        /** @type {?} */
        const annotations = propMetadata[field];
        for (let i = 0; i < annotations.length; i++) {
            /** @type {?} */
            const current = annotations[i];
            /** @type {?} */
            const metadataName = current.ngMetadataName;
            if (isInputAnnotation(current) || isContentQuery(current) || isViewQuery(current) ||
                metadataName === 'Output' || metadataName === 'HostBinding' ||
                metadataName === 'HostListener') {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9qaXQvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBNEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFJbEUsT0FBTyxFQUFDLHdCQUF3QixFQUFFLHdDQUF3QyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbkgsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFDLHVDQUF1QyxFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYWxILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFlLEVBQUUsUUFBbUI7SUFDbkUsOEVBQThFO0lBQzlFLDBEQUEwRDtJQUMxRCxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQzs7UUFFL0QsY0FBYyxHQUFRLElBQUk7SUFFOUIseURBQXlEO0lBQ3pELHdDQUF3QyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV6RCxpR0FBaUc7SUFDakcsdUZBQXVGO0lBQ3ZGLDJEQUEyRDtJQUMzRCxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1FBQ3ZDLEdBQUc7OztRQUFFLEdBQUcsRUFBRTtZQUNSLElBQUksY0FBYyxLQUFLLElBQUksRUFBRTs7c0JBQ3JCLFFBQVEsR0FBRyxpQkFBaUIsRUFBRTtnQkFFcEMsSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsRUFBRTs7MEJBQ2hDLEtBQUssR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUM7b0JBQzNELElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7cUJBQ3ZEO29CQUNELElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNuRTtvQkFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNuQzs7Ozs7O3NCQU1LLE9BQU8sR0FBRyxhQUFhLEVBQUU7O29CQUMzQixtQkFBbUIsR0FBRyxRQUFRLENBQUMsbUJBQW1CO2dCQUN0RCxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtvQkFDckMsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7d0JBQ2pFLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztxQkFDbkQ7eUJBQU07d0JBQ0wsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO3FCQUM3QjtpQkFDRjs7b0JBQ0csYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhO2dCQUMxQyxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsb0JBQW9CLEtBQUssU0FBUyxFQUFFO3dCQUNsRSxhQUFhLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDO3FCQUM5Qzt5QkFBTTt3QkFDTCxhQUFhLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO3FCQUM1QztpQkFDRjs7c0JBRUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7O3NCQUN4RSxJQUFJLG1DQUNMLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FDcEMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsRUFDbkYsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUNqQyxtQkFBbUIsRUFDbkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksV0FBVyxFQUN0QyxVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFDL0IsVUFBVSxFQUFFLEVBQUUsRUFDZCxlQUFlLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFDekMsS0FBSyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFDckMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLElBQUksSUFBSSxHQUM5QztnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMzQztnQkFFRCxjQUFjLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTlFLGdGQUFnRjtnQkFDaEYsbUZBQW1GO2dCQUNuRixpRkFBaUY7Z0JBQ2pGLCtFQUErRTtnQkFDL0Usc0JBQXNCO2dCQUN0Qix1Q0FBdUMsRUFBRSxDQUFDO2dCQUUxQyxzRkFBc0Y7Z0JBQ3RGLHdGQUF3RjtnQkFDeEYsbUZBQW1GO2dCQUNuRixzQkFBc0I7Z0JBQ3RCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7OzBCQUNwQixNQUFNLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDeEQsMEJBQTBCLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNwRDthQUNGO1lBQ0QsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQyxDQUFBOztRQUVELFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7QUFFRCxTQUFTLGdCQUFnQixDQUFJLFNBQWtCO0lBRTdDLE9BQU8sQ0FBQyxtQkFBQSxTQUFTLEVBQTJCLENBQUMsQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDO0FBQzlFLENBQUM7Ozs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWUsRUFBRSxTQUF5Qjs7UUFDckUsY0FBYyxHQUFRLElBQUk7SUFFOUIsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUU5QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7UUFDdEMsR0FBRzs7O1FBQUUsR0FBRyxFQUFFO1lBQ1IsSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFOzs7OztzQkFJckIsSUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDO2dCQUN4RCxjQUFjO29CQUNWLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQyxDQUFBOztRQUVELFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLElBQWUsRUFBRSxRQUFtQjs7VUFDMUQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSTs7VUFDeEIsWUFBWSxHQUFHLFNBQVMsSUFBSSxVQUFVOztVQUN0QyxRQUFRLEdBQUcsaUJBQWlCLEVBQUU7O1VBQzlCLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxtQkFBQSxJQUFJLEVBQXNCLEVBQUUsUUFBUSxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEYsSUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQzFCLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNDO0lBQ0QsT0FBTyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxJQUFlLEVBQUUsUUFBNkI7O1FBQ3hFLFlBQVksR0FBUSxJQUFJO0lBRTVCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtRQUMxQyxHQUFHOzs7UUFBRSxHQUFHLEVBQUU7WUFDUixJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7O3NCQUNuQixJQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7c0JBQzNDLFFBQVEsR0FBRyxpQkFBaUIsRUFBRTtnQkFDcEMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLFNBQVMsSUFBSSxDQUFDLElBQUksVUFBVSxrQ0FDOUUsSUFBSSxDQUFDLFFBQVEsS0FDaEIsUUFBUSxFQUFFLGlCQUFpQixFQUMzQixNQUFNLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQzFDLENBQUM7YUFDSjtZQUNELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQTs7UUFFRCxZQUFZLEVBQUUsQ0FBQyxDQUFDLFNBQVM7S0FDMUIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsSUFBZTtJQUN2RCxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDcEUsQ0FBQzs7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBZSxFQUFFLFFBQW1COzs7VUFFOUQsT0FBTyxHQUFHLFVBQVUsRUFBRTs7VUFDdEIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBRWxELE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3BFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksU0FBUztRQUNoQyxZQUFZLEVBQUUsWUFBWTtRQUMxQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxXQUFXO1FBQ3RDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFJLFdBQVc7UUFDeEMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1FBQ25FLFNBQVMsRUFBRSxFQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxFQUFDO1FBQ3pFLGNBQWMsRUFBRSxtQkFBQSxJQUFJLEVBQUM7UUFDckIsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDO1FBQ2pELFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJO1FBQ3JDLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztLQUNyRSxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBS0QsU0FBUyxtQ0FBbUMsQ0FBQyxJQUFlOztVQUNwRCxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVM7O1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXO0lBRTlELDZDQUE2QztJQUM3QyxPQUFPLE1BQU0sSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFO1FBQ3hDLGtGQUFrRjtRQUNsRiwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDcEQsMEJBQTBCLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDOzs7OztBQUVELFNBQVMseUJBQXlCLENBQUMsUUFBYTtJQUM5QyxPQUFPLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3RixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsWUFBb0IsRUFBRSxHQUFVO0lBQ3ZFLE9BQU87UUFDTCxZQUFZLEVBQUUsWUFBWTtRQUMxQixTQUFTLEVBQUUseUJBQXlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNsRCxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7UUFDNUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ2hCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ2hDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU07S0FDckIsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFDRCxTQUFTLHNCQUFzQixDQUMzQixJQUFlLEVBQUUsWUFBb0MsRUFDckQsVUFBc0M7O1VBQ2xDLFdBQVcsR0FBNEIsRUFBRTtJQUMvQyxLQUFLLE1BQU0sS0FBSyxJQUFJLFlBQVksRUFBRTtRQUNoQyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNoQyxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN2QyxXQUFXLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQ1gsNkNBQTZDLEtBQUssT0FBTzs0QkFDekQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQztxQkFDOUU7b0JBQ0QsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7d0JBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztxQkFDM0U7b0JBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDOzs7OztBQUVELFNBQVMsZUFBZSxDQUFDLFFBQTBCO0lBQ2pELE9BQU8sUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEUsQ0FBQzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFVOztVQUMxQixJQUFJLEdBQUcsS0FBSyxDQUFDLGNBQWM7SUFDakMsT0FBTyxJQUFJLEtBQUssY0FBYyxJQUFJLElBQUksS0FBSyxpQkFBaUIsQ0FBQztBQUMvRCxDQUFDOzs7OztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVU7O1VBQ3ZCLElBQUksR0FBRyxLQUFLLENBQUMsY0FBYztJQUNqQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLGNBQWMsQ0FBQztBQUN6RCxDQUFDOzs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBVTtJQUNuQyxPQUFPLEtBQUssQ0FBQyxjQUFjLEtBQUssT0FBTyxDQUFDO0FBQzFDLENBQUM7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYTtJQUNqQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztJQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7QUFDckQsQ0FBQzs7TUFFSyxlQUFlLEdBQUc7SUFDdEIsYUFBYSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQjtJQUM5RixvQkFBb0IsRUFBRSx1QkFBdUI7Q0FDOUM7Ozs7O0FBRUQsU0FBUywwQkFBMEIsQ0FBQyxJQUFlOztVQUMzQyxPQUFPLEdBQUcsVUFBVSxFQUFFO0lBRTVCLElBQUksZUFBZSxDQUFDLElBQUk7Ozs7SUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUMsRUFBRTtRQUM5RSxPQUFPLElBQUksQ0FBQztLQUNiOztVQUVLLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUUvQyxLQUFLLE1BQU0sS0FBSyxJQUFJLFlBQVksRUFBRTs7Y0FDMUIsV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNyQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3hCLFlBQVksR0FBRyxPQUFPLENBQUMsY0FBYztZQUUzQyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUM3RSxZQUFZLEtBQUssUUFBUSxJQUFJLFlBQVksS0FBSyxhQUFhO2dCQUMzRCxZQUFZLEtBQUssY0FBYyxFQUFFO2dCQUNuQyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRDb21waWxlckZhY2FkZSwgUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZX0gZnJvbSAnLi4vLi4vY29tcGlsZXIvY29tcGlsZXJfZmFjYWRlJztcbmltcG9ydCB7UjNDb21wb25lbnRNZXRhZGF0YUZhY2FkZSwgUjNRdWVyeU1ldGFkYXRhRmFjYWRlfSBmcm9tICcuLi8uLi9jb21waWxlci9jb21waWxlcl9mYWNhZGVfaW50ZXJmYWNlJztcbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4uLy4uL2RpL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7Z2V0UmVmbGVjdCwgcmVmbGVjdERlcGVuZGVuY2llc30gZnJvbSAnLi4vLi4vZGkvaml0L3V0aWwnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge1F1ZXJ5fSBmcm9tICcuLi8uLi9tZXRhZGF0YS9kaSc7XG5pbXBvcnQge0NvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvZGlyZWN0aXZlcyc7XG5pbXBvcnQge2NvbXBvbmVudE5lZWRzUmVzb2x1dGlvbiwgbWF5YmVRdWV1ZVJlc29sdXRpb25PZkNvbXBvbmVudFJlc291cmNlc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvcmVzb3VyY2VfbG9hZGluZyc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi8uLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7aW5pdE5nRGV2TW9kZX0gZnJvbSAnLi4vLi4vdXRpbC9uZ19kZXZfbW9kZSc7XG5pbXBvcnQge2dldENvbXBvbmVudERlZiwgZ2V0RGlyZWN0aXZlRGVmfSBmcm9tICcuLi9kZWZpbml0aW9uJztcbmltcG9ydCB7RU1QVFlfQVJSQVksIEVNUFRZX09CSn0gZnJvbSAnLi4vZW1wdHknO1xuaW1wb3J0IHtOR19DT01QX0RFRiwgTkdfRElSX0RFRiwgTkdfRkFDVE9SWV9ERUZ9IGZyb20gJy4uL2ZpZWxkcyc7XG5pbXBvcnQge0NvbXBvbmVudFR5cGV9IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge3N0cmluZ2lmeUZvckVycm9yfSBmcm9tICcuLi91dGlsL21pc2NfdXRpbHMnO1xuXG5pbXBvcnQge2FuZ3VsYXJDb3JlRW52fSBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCB7Z2V0Sml0T3B0aW9uc30gZnJvbSAnLi9qaXRfb3B0aW9ucyc7XG5pbXBvcnQge2ZsdXNoTW9kdWxlU2NvcGluZ1F1ZXVlQXNNdWNoQXNQb3NzaWJsZSwgcGF0Y2hDb21wb25lbnREZWZXaXRoU2NvcGUsIHRyYW5zaXRpdmVTY29wZXNGb3J9IGZyb20gJy4vbW9kdWxlJztcblxuXG5cbi8qKlxuICogQ29tcGlsZSBhbiBBbmd1bGFyIGNvbXBvbmVudCBhY2NvcmRpbmcgdG8gaXRzIGRlY29yYXRvciBtZXRhZGF0YSwgYW5kIHBhdGNoIHRoZSByZXN1bHRpbmdcbiAqIGNvbXBvbmVudCBkZWYgKMm1Y21wKSBvbnRvIHRoZSBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBDb21waWxhdGlvbiBtYXkgYmUgYXN5bmNocm9ub3VzIChkdWUgdG8gdGhlIG5lZWQgdG8gcmVzb2x2ZSBVUkxzIGZvciB0aGUgY29tcG9uZW50IHRlbXBsYXRlIG9yXG4gKiBvdGhlciByZXNvdXJjZXMsIGZvciBleGFtcGxlKS4gSW4gdGhlIGV2ZW50IHRoYXQgY29tcGlsYXRpb24gaXMgbm90IGltbWVkaWF0ZSwgYGNvbXBpbGVDb21wb25lbnRgXG4gKiB3aWxsIGVucXVldWUgcmVzb3VyY2UgcmVzb2x1dGlvbiBpbnRvIGEgZ2xvYmFsIHF1ZXVlIGFuZCB3aWxsIGZhaWwgdG8gcmV0dXJuIHRoZSBgybVjbXBgXG4gKiB1bnRpbCB0aGUgZ2xvYmFsIHF1ZXVlIGhhcyBiZWVuIHJlc29sdmVkIHdpdGggYSBjYWxsIHRvIGByZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBtZXRhZGF0YTogQ29tcG9uZW50KTogdm9pZCB7XG4gIC8vIEluaXRpYWxpemUgbmdEZXZNb2RlLiBUaGlzIG11c3QgYmUgdGhlIGZpcnN0IHN0YXRlbWVudCBpbiBjb21waWxlQ29tcG9uZW50LlxuICAvLyBTZWUgdGhlIGBpbml0TmdEZXZNb2RlYCBkb2NzdHJpbmcgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpICYmIGluaXROZ0Rldk1vZGUoKTtcblxuICBsZXQgbmdDb21wb25lbnREZWY6IGFueSA9IG51bGw7XG5cbiAgLy8gTWV0YWRhdGEgbWF5IGhhdmUgcmVzb3VyY2VzIHdoaWNoIG5lZWQgdG8gYmUgcmVzb2x2ZWQuXG4gIG1heWJlUXVldWVSZXNvbHV0aW9uT2ZDb21wb25lbnRSZXNvdXJjZXModHlwZSwgbWV0YWRhdGEpO1xuXG4gIC8vIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc2FtZSBmdW5jdGlvbiBhcyBgRGlyZWN0aXZlYCwgYmVjYXVzZSB0aGF0J3Mgb25seSBzdWJzZXQgb2YgbWV0YWRhdGFcbiAgLy8gdGhhdCB3ZSBuZWVkIHRvIGNyZWF0ZSB0aGUgbmdGYWN0b3J5RGVmLiBXZSdyZSBhdm9pZGluZyB1c2luZyB0aGUgY29tcG9uZW50IG1ldGFkYXRhXG4gIC8vIGJlY2F1c2Ugd2UnZCBoYXZlIHRvIHJlc29sdmUgdGhlIGFzeW5jaHJvbm91cyB0ZW1wbGF0ZXMuXG4gIGFkZERpcmVjdGl2ZUZhY3RvcnlEZWYodHlwZSwgbWV0YWRhdGEpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBOR19DT01QX0RFRiwge1xuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKG5nQ29tcG9uZW50RGVmID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbXBpbGVyID0gZ2V0Q29tcGlsZXJGYWNhZGUoKTtcblxuICAgICAgICBpZiAoY29tcG9uZW50TmVlZHNSZXNvbHV0aW9uKG1ldGFkYXRhKSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gW2BDb21wb25lbnQgJyR7dHlwZS5uYW1lfScgaXMgbm90IHJlc29sdmVkOmBdO1xuICAgICAgICAgIGlmIChtZXRhZGF0YS50ZW1wbGF0ZVVybCkge1xuICAgICAgICAgICAgZXJyb3IucHVzaChgIC0gdGVtcGxhdGVVcmw6ICR7bWV0YWRhdGEudGVtcGxhdGVVcmx9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRhZGF0YS5zdHlsZVVybHMgJiYgbWV0YWRhdGEuc3R5bGVVcmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgZXJyb3IucHVzaChgIC0gc3R5bGVVcmxzOiAke0pTT04uc3RyaW5naWZ5KG1ldGFkYXRhLnN0eWxlVXJscyl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yLnB1c2goYERpZCB5b3UgcnVuIGFuZCB3YWl0IGZvciAncmVzb2x2ZUNvbXBvbmVudFJlc291cmNlcygpJz9gKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3Iuam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBjb25zdCB3YXMgY2FsbGVkIGBqaXRPcHRpb25zYCBwcmV2aW91c2x5IGJ1dCBoYWQgdG8gYmUgcmVuYW1lZCB0byBgb3B0aW9uc2AgYmVjYXVzZVxuICAgICAgICAvLyBvZiBhIGJ1ZyB3aXRoIFRlcnNlciB0aGF0IGNhdXNlZCBvcHRpbWl6ZWQgSklUIGJ1aWxkcyB0byB0aHJvdyBhIGBSZWZlcmVuY2VFcnJvcmAuXG4gICAgICAgIC8vIFRoaXMgYnVnIHdhcyBpbnZlc3RpZ2F0ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvaXNzdWVzLzE3MjY0LlxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHJlbmFtZSBpdCBiYWNrIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJzZXIvdGVyc2VyL2lzc3Vlcy82MTUgaXMgZml4ZWQuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBnZXRKaXRPcHRpb25zKCk7XG4gICAgICAgIGxldCBwcmVzZXJ2ZVdoaXRlc3BhY2VzID0gbWV0YWRhdGEucHJlc2VydmVXaGl0ZXNwYWNlcztcbiAgICAgICAgaWYgKHByZXNlcnZlV2hpdGVzcGFjZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzID0gb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlc3BhY2VzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBlbmNhcHN1bGF0aW9uID0gbWV0YWRhdGEuZW5jYXBzdWxhdGlvbjtcbiAgICAgICAgaWYgKGVuY2Fwc3VsYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5jYXBzdWxhdGlvbiA9IG9wdGlvbnMuZGVmYXVsdEVuY2Fwc3VsYXRpb247XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuY2Fwc3VsYXRpb24gPSBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZW1wbGF0ZVVybCA9IG1ldGFkYXRhLnRlbXBsYXRlVXJsIHx8IGBuZzovLy8ke3R5cGUubmFtZX0vdGVtcGxhdGUuaHRtbGA7XG4gICAgICAgIGNvbnN0IG1ldGE6IFIzQ29tcG9uZW50TWV0YWRhdGFGYWNhZGUgPSB7XG4gICAgICAgICAgLi4uZGlyZWN0aXZlTWV0YWRhdGEodHlwZSwgbWV0YWRhdGEpLFxuICAgICAgICAgIHR5cGVTb3VyY2VTcGFuOiBjb21waWxlci5jcmVhdGVQYXJzZVNvdXJjZVNwYW4oJ0NvbXBvbmVudCcsIHR5cGUubmFtZSwgdGVtcGxhdGVVcmwpLFxuICAgICAgICAgIHRlbXBsYXRlOiBtZXRhZGF0YS50ZW1wbGF0ZSB8fCAnJyxcbiAgICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzLFxuICAgICAgICAgIHN0eWxlczogbWV0YWRhdGEuc3R5bGVzIHx8IEVNUFRZX0FSUkFZLFxuICAgICAgICAgIGFuaW1hdGlvbnM6IG1ldGFkYXRhLmFuaW1hdGlvbnMsXG4gICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBtZXRhZGF0YS5jaGFuZ2VEZXRlY3Rpb24sXG4gICAgICAgICAgcGlwZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgICBlbmNhcHN1bGF0aW9uLFxuICAgICAgICAgIGludGVycG9sYXRpb246IG1ldGFkYXRhLmludGVycG9sYXRpb24sXG4gICAgICAgICAgdmlld1Byb3ZpZGVyczogbWV0YWRhdGEudmlld1Byb3ZpZGVycyB8fCBudWxsLFxuICAgICAgICB9O1xuICAgICAgICBpZiAobWV0YS51c2VzSW5oZXJpdGFuY2UpIHtcbiAgICAgICAgICBhZGREaXJlY3RpdmVEZWZUb1VuZGVjb3JhdGVkUGFyZW50cyh0eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nQ29tcG9uZW50RGVmID0gY29tcGlsZXIuY29tcGlsZUNvbXBvbmVudChhbmd1bGFyQ29yZUVudiwgdGVtcGxhdGVVcmwsIG1ldGEpO1xuXG4gICAgICAgIC8vIFdoZW4gTmdNb2R1bGUgZGVjb3JhdG9yIGV4ZWN1dGVkLCB3ZSBlbnF1ZXVlZCB0aGUgbW9kdWxlIGRlZmluaXRpb24gc3VjaCB0aGF0XG4gICAgICAgIC8vIGl0IHdvdWxkIG9ubHkgZGVxdWV1ZSBhbmQgYWRkIGl0c2VsZiBhcyBtb2R1bGUgc2NvcGUgdG8gYWxsIG9mIGl0cyBkZWNsYXJhdGlvbnMsXG4gICAgICAgIC8vIGJ1dCBvbmx5IGlmICBpZiBhbGwgb2YgaXRzIGRlY2xhcmF0aW9ucyBoYWQgcmVzb2x2ZWQuIFRoaXMgY2FsbCBydW5zIHRoZSBjaGVja1xuICAgICAgICAvLyB0byBzZWUgaWYgYW55IG1vZHVsZXMgdGhhdCBhcmUgaW4gdGhlIHF1ZXVlIGNhbiBiZSBkZXF1ZXVlZCBhbmQgYWRkIHNjb3BlIHRvXG4gICAgICAgIC8vIHRoZWlyIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgZmx1c2hNb2R1bGVTY29waW5nUXVldWVBc011Y2hBc1Bvc3NpYmxlKCk7XG5cbiAgICAgICAgLy8gSWYgY29tcG9uZW50IGNvbXBpbGF0aW9uIGlzIGFzeW5jLCB0aGVuIHRoZSBATmdNb2R1bGUgYW5ub3RhdGlvbiB3aGljaCBkZWNsYXJlcyB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50IG1heSBleGVjdXRlIGFuZCBzZXQgYW4gbmdTZWxlY3RvclNjb3BlIHByb3BlcnR5IG9uIHRoZSBjb21wb25lbnQgdHlwZS4gVGhpc1xuICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBwYXRjaCBpdHNlbGYgd2l0aCBkaXJlY3RpdmVEZWZzIGZyb20gdGhlIG1vZHVsZSBhZnRlciBpdFxuICAgICAgICAvLyBmaW5pc2hlcyBjb21waWxpbmcuXG4gICAgICAgIGlmIChoYXNTZWxlY3RvclNjb3BlKHR5cGUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NvcGVzID0gdHJhbnNpdGl2ZVNjb3Blc0Zvcih0eXBlLm5nU2VsZWN0b3JTY29wZSk7XG4gICAgICAgICAgcGF0Y2hDb21wb25lbnREZWZXaXRoU2NvcGUobmdDb21wb25lbnREZWYsIHNjb3Blcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZ0NvbXBvbmVudERlZjtcbiAgICB9LFxuICAgIC8vIE1ha2UgdGhlIHByb3BlcnR5IGNvbmZpZ3VyYWJsZSBpbiBkZXYgbW9kZSB0byBhbGxvdyBvdmVycmlkaW5nIGluIHRlc3RzXG4gICAgY29uZmlndXJhYmxlOiAhIW5nRGV2TW9kZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1NlbGVjdG9yU2NvcGU8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogY29tcG9uZW50IGlzIFR5cGU8VD4mXG4gICAge25nU2VsZWN0b3JTY29wZTogVHlwZTxhbnk+fSB7XG4gIHJldHVybiAoY29tcG9uZW50IGFzIHtuZ1NlbGVjdG9yU2NvcGU/OiBhbnl9KS5uZ1NlbGVjdG9yU2NvcGUgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDb21waWxlIGFuIEFuZ3VsYXIgZGlyZWN0aXZlIGFjY29yZGluZyB0byBpdHMgZGVjb3JhdG9yIG1ldGFkYXRhLCBhbmQgcGF0Y2ggdGhlIHJlc3VsdGluZ1xuICogZGlyZWN0aXZlIGRlZiBvbnRvIHRoZSBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBJbiB0aGUgZXZlbnQgdGhhdCBjb21waWxhdGlvbiBpcyBub3QgaW1tZWRpYXRlLCBgY29tcGlsZURpcmVjdGl2ZWAgd2lsbCByZXR1cm4gYSBgUHJvbWlzZWAgd2hpY2hcbiAqIHdpbGwgcmVzb2x2ZSB3aGVuIGNvbXBpbGF0aW9uIGNvbXBsZXRlcyBhbmQgdGhlIGRpcmVjdGl2ZSBiZWNvbWVzIHVzYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVEaXJlY3RpdmUodHlwZTogVHlwZTxhbnk+LCBkaXJlY3RpdmU6IERpcmVjdGl2ZXxudWxsKTogdm9pZCB7XG4gIGxldCBuZ0RpcmVjdGl2ZURlZjogYW55ID0gbnVsbDtcblxuICBhZGREaXJlY3RpdmVGYWN0b3J5RGVmKHR5cGUsIGRpcmVjdGl2ZSB8fCB7fSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIE5HX0RJUl9ERUYsIHtcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGlmIChuZ0RpcmVjdGl2ZURlZiA9PT0gbnVsbCkge1xuICAgICAgICAvLyBgZGlyZWN0aXZlYCBjYW4gYmUgbnVsbCBpbiB0aGUgY2FzZSBvZiBhYnN0cmFjdCBkaXJlY3RpdmVzIGFzIGEgYmFzZSBjbGFzc1xuICAgICAgICAvLyB0aGF0IHVzZSBgQERpcmVjdGl2ZSgpYCB3aXRoIG5vIHNlbGVjdG9yLiBJbiB0aGF0IGNhc2UsIHBhc3MgZW1wdHkgb2JqZWN0IHRvIHRoZVxuICAgICAgICAvLyBgZGlyZWN0aXZlTWV0YWRhdGFgIGZ1bmN0aW9uIGluc3RlYWQgb2YgbnVsbC5cbiAgICAgICAgY29uc3QgbWV0YSA9IGdldERpcmVjdGl2ZU1ldGFkYXRhKHR5cGUsIGRpcmVjdGl2ZSB8fCB7fSk7XG4gICAgICAgIG5nRGlyZWN0aXZlRGVmID1cbiAgICAgICAgICAgIGdldENvbXBpbGVyRmFjYWRlKCkuY29tcGlsZURpcmVjdGl2ZShhbmd1bGFyQ29yZUVudiwgbWV0YS5zb3VyY2VNYXBVcmwsIG1ldGEubWV0YWRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5nRGlyZWN0aXZlRGVmO1xuICAgIH0sXG4gICAgLy8gTWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlIGluIGRldiBtb2RlIHRvIGFsbG93IG92ZXJyaWRpbmcgaW4gdGVzdHNcbiAgICBjb25maWd1cmFibGU6ICEhbmdEZXZNb2RlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTWV0YWRhdGEodHlwZTogVHlwZTxhbnk+LCBtZXRhZGF0YTogRGlyZWN0aXZlKSB7XG4gIGNvbnN0IG5hbWUgPSB0eXBlICYmIHR5cGUubmFtZTtcbiAgY29uc3Qgc291cmNlTWFwVXJsID0gYG5nOi8vLyR7bmFtZX0vybVkaXIuanNgO1xuICBjb25zdCBjb21waWxlciA9IGdldENvbXBpbGVyRmFjYWRlKCk7XG4gIGNvbnN0IGZhY2FkZSA9IGRpcmVjdGl2ZU1ldGFkYXRhKHR5cGUgYXMgQ29tcG9uZW50VHlwZTxhbnk+LCBtZXRhZGF0YSk7XG4gIGZhY2FkZS50eXBlU291cmNlU3BhbiA9IGNvbXBpbGVyLmNyZWF0ZVBhcnNlU291cmNlU3BhbignRGlyZWN0aXZlJywgbmFtZSwgc291cmNlTWFwVXJsKTtcbiAgaWYgKGZhY2FkZS51c2VzSW5oZXJpdGFuY2UpIHtcbiAgICBhZGREaXJlY3RpdmVEZWZUb1VuZGVjb3JhdGVkUGFyZW50cyh0eXBlKTtcbiAgfVxuICByZXR1cm4ge21ldGFkYXRhOiBmYWNhZGUsIHNvdXJjZU1hcFVybH07XG59XG5cbmZ1bmN0aW9uIGFkZERpcmVjdGl2ZUZhY3RvcnlEZWYodHlwZTogVHlwZTxhbnk+LCBtZXRhZGF0YTogRGlyZWN0aXZlfENvbXBvbmVudCkge1xuICBsZXQgbmdGYWN0b3J5RGVmOiBhbnkgPSBudWxsO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBOR19GQUNUT1JZX0RFRiwge1xuICAgIGdldDogKCkgPT4ge1xuICAgICAgaWYgKG5nRmFjdG9yeURlZiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhID0gZ2V0RGlyZWN0aXZlTWV0YWRhdGEodHlwZSwgbWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBjb21waWxlciA9IGdldENvbXBpbGVyRmFjYWRlKCk7XG4gICAgICAgIG5nRmFjdG9yeURlZiA9IGNvbXBpbGVyLmNvbXBpbGVGYWN0b3J5KGFuZ3VsYXJDb3JlRW52LCBgbmc6Ly8vJHt0eXBlLm5hbWV9L8m1ZmFjLmpzYCwge1xuICAgICAgICAgIC4uLm1ldGEubWV0YWRhdGEsXG4gICAgICAgICAgaW5qZWN0Rm46ICdkaXJlY3RpdmVJbmplY3QnLFxuICAgICAgICAgIHRhcmdldDogY29tcGlsZXIuUjNGYWN0b3J5VGFyZ2V0LkRpcmVjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZ0ZhY3RvcnlEZWY7XG4gICAgfSxcbiAgICAvLyBNYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGUgaW4gZGV2IG1vZGUgdG8gYWxsb3cgb3ZlcnJpZGluZyBpbiB0ZXN0c1xuICAgIGNvbmZpZ3VyYWJsZTogISFuZ0Rldk1vZGUsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kc0RpcmVjdGx5RnJvbU9iamVjdCh0eXBlOiBUeXBlPGFueT4pOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih0eXBlLnByb3RvdHlwZSkgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgYFIzRGlyZWN0aXZlTWV0YWRhdGFgIGZvciBhIHBhcnRpY3VsYXIgZGlyZWN0aXZlIChlaXRoZXIgYSBgRGlyZWN0aXZlYCBvciBhXG4gKiBgQ29tcG9uZW50YCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVNZXRhZGF0YSh0eXBlOiBUeXBlPGFueT4sIG1ldGFkYXRhOiBEaXJlY3RpdmUpOiBSM0RpcmVjdGl2ZU1ldGFkYXRhRmFjYWRlIHtcbiAgLy8gUmVmbGVjdCBpbnB1dHMgYW5kIG91dHB1dHMuXG4gIGNvbnN0IHJlZmxlY3QgPSBnZXRSZWZsZWN0KCk7XG4gIGNvbnN0IHByb3BNZXRhZGF0YSA9IHJlZmxlY3Qub3duUHJvcE1ldGFkYXRhKHR5cGUpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogdHlwZS5uYW1lLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgdHlwZUFyZ3VtZW50Q291bnQ6IDAsXG4gICAgc2VsZWN0b3I6IG1ldGFkYXRhLnNlbGVjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhZGF0YS5zZWxlY3RvciA6IG51bGwsXG4gICAgZGVwczogcmVmbGVjdERlcGVuZGVuY2llcyh0eXBlKSxcbiAgICBob3N0OiBtZXRhZGF0YS5ob3N0IHx8IEVNUFRZX09CSixcbiAgICBwcm9wTWV0YWRhdGE6IHByb3BNZXRhZGF0YSxcbiAgICBpbnB1dHM6IG1ldGFkYXRhLmlucHV0cyB8fCBFTVBUWV9BUlJBWSxcbiAgICBvdXRwdXRzOiBtZXRhZGF0YS5vdXRwdXRzIHx8IEVNUFRZX0FSUkFZLFxuICAgIHF1ZXJpZXM6IGV4dHJhY3RRdWVyaWVzTWV0YWRhdGEodHlwZSwgcHJvcE1ldGFkYXRhLCBpc0NvbnRlbnRRdWVyeSksXG4gICAgbGlmZWN5Y2xlOiB7dXNlc09uQ2hhbmdlczogcmVmbGVjdC5oYXNMaWZlY3ljbGVIb29rKHR5cGUsICduZ09uQ2hhbmdlcycpfSxcbiAgICB0eXBlU291cmNlU3BhbjogbnVsbCEsXG4gICAgdXNlc0luaGVyaXRhbmNlOiAhZXh0ZW5kc0RpcmVjdGx5RnJvbU9iamVjdCh0eXBlKSxcbiAgICBleHBvcnRBczogZXh0cmFjdEV4cG9ydEFzKG1ldGFkYXRhLmV4cG9ydEFzKSxcbiAgICBwcm92aWRlcnM6IG1ldGFkYXRhLnByb3ZpZGVycyB8fCBudWxsLFxuICAgIHZpZXdRdWVyaWVzOiBleHRyYWN0UXVlcmllc01ldGFkYXRhKHR5cGUsIHByb3BNZXRhZGF0YSwgaXNWaWV3UXVlcnkpXG4gIH07XG59XG5cbi8qKlxuICogQWRkcyBhIGRpcmVjdGl2ZSBkZWZpbml0aW9uIHRvIGFsbCBwYXJlbnQgY2xhc3NlcyBvZiBhIHR5cGUgdGhhdCBkb24ndCBoYXZlIGFuIEFuZ3VsYXIgZGVjb3JhdG9yLlxuICovXG5mdW5jdGlvbiBhZGREaXJlY3RpdmVEZWZUb1VuZGVjb3JhdGVkUGFyZW50cyh0eXBlOiBUeXBlPGFueT4pIHtcbiAgY29uc3Qgb2JqUHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgbGV0IHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0eXBlLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG5cbiAgLy8gR28gdXAgdGhlIHByb3RvdHlwZSB1bnRpbCB3ZSBoaXQgYE9iamVjdGAuXG4gIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBvYmpQcm90b3R5cGUpIHtcbiAgICAvLyBTaW5jZSBpbmhlcml0YW5jZSB3b3JrcyBpZiB0aGUgY2xhc3Mgd2FzIGFubm90YXRlZCBhbHJlYWR5LCB3ZSBvbmx5IG5lZWQgdG8gYWRkXG4gICAgLy8gdGhlIGRlZiBpZiB0aGVyZSBhcmUgbm8gYW5ub3RhdGlvbnMgYW5kIHRoZSBkZWYgaGFzbid0IGJlZW4gY3JlYXRlZCBhbHJlYWR5LlxuICAgIGlmICghZ2V0RGlyZWN0aXZlRGVmKHBhcmVudCkgJiYgIWdldENvbXBvbmVudERlZihwYXJlbnQpICYmXG4gICAgICAgIHNob3VsZEFkZEFic3RyYWN0RGlyZWN0aXZlKHBhcmVudCkpIHtcbiAgICAgIGNvbXBpbGVEaXJlY3RpdmUocGFyZW50LCBudWxsKTtcbiAgICB9XG4gICAgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFRvUjNRdWVyeVByZWRpY2F0ZShzZWxlY3RvcjogYW55KTogYW55fHN0cmluZ1tdIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBzcGxpdEJ5Q29tbWEoc2VsZWN0b3IpIDogcmVzb2x2ZUZvcndhcmRSZWYoc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvUjNRdWVyeU1ldGFkYXRhKHByb3BlcnR5TmFtZTogc3RyaW5nLCBhbm46IFF1ZXJ5KTogUjNRdWVyeU1ldGFkYXRhRmFjYWRlIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICBwcmVkaWNhdGU6IGNvbnZlcnRUb1IzUXVlcnlQcmVkaWNhdGUoYW5uLnNlbGVjdG9yKSxcbiAgICBkZXNjZW5kYW50czogYW5uLmRlc2NlbmRhbnRzLFxuICAgIGZpcnN0OiBhbm4uZmlyc3QsXG4gICAgcmVhZDogYW5uLnJlYWQgPyBhbm4ucmVhZCA6IG51bGwsXG4gICAgc3RhdGljOiAhIWFubi5zdGF0aWNcbiAgfTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RRdWVyaWVzTWV0YWRhdGEoXG4gICAgdHlwZTogVHlwZTxhbnk+LCBwcm9wTWV0YWRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0sXG4gICAgaXNRdWVyeUFubjogKGFubjogYW55KSA9PiBhbm4gaXMgUXVlcnkpOiBSM1F1ZXJ5TWV0YWRhdGFGYWNhZGVbXSB7XG4gIGNvbnN0IHF1ZXJpZXNNZXRhOiBSM1F1ZXJ5TWV0YWRhdGFGYWNhZGVbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGZpZWxkIGluIHByb3BNZXRhZGF0YSkge1xuICAgIGlmIChwcm9wTWV0YWRhdGEuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHByb3BNZXRhZGF0YVtmaWVsZF07XG4gICAgICBhbm5vdGF0aW9ucy5mb3JFYWNoKGFubiA9PiB7XG4gICAgICAgIGlmIChpc1F1ZXJ5QW5uKGFubikpIHtcbiAgICAgICAgICBpZiAoIWFubi5zZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBDYW4ndCBjb25zdHJ1Y3QgYSBxdWVyeSBmb3IgdGhlIHByb3BlcnR5IFwiJHtmaWVsZH1cIiBvZiBgICtcbiAgICAgICAgICAgICAgICBgXCIke3N0cmluZ2lmeUZvckVycm9yKHR5cGUpfVwiIHNpbmNlIHRoZSBxdWVyeSBzZWxlY3RvciB3YXNuJ3QgZGVmaW5lZC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFubm90YXRpb25zLnNvbWUoaXNJbnB1dEFubm90YXRpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb21iaW5lIEBJbnB1dCBkZWNvcmF0b3JzIHdpdGggcXVlcnkgZGVjb3JhdG9yc2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxdWVyaWVzTWV0YS5wdXNoKGNvbnZlcnRUb1IzUXVlcnlNZXRhZGF0YShmaWVsZCwgYW5uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcmllc01ldGE7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFeHBvcnRBcyhleHBvcnRBczogc3RyaW5nfHVuZGVmaW5lZCk6IHN0cmluZ1tdfG51bGwge1xuICByZXR1cm4gZXhwb3J0QXMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBzcGxpdEJ5Q29tbWEoZXhwb3J0QXMpO1xufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRRdWVyeSh2YWx1ZTogYW55KTogdmFsdWUgaXMgUXVlcnkge1xuICBjb25zdCBuYW1lID0gdmFsdWUubmdNZXRhZGF0YU5hbWU7XG4gIHJldHVybiBuYW1lID09PSAnQ29udGVudENoaWxkJyB8fCBuYW1lID09PSAnQ29udGVudENoaWxkcmVuJztcbn1cblxuZnVuY3Rpb24gaXNWaWV3UXVlcnkodmFsdWU6IGFueSk6IHZhbHVlIGlzIFF1ZXJ5IHtcbiAgY29uc3QgbmFtZSA9IHZhbHVlLm5nTWV0YWRhdGFOYW1lO1xuICByZXR1cm4gbmFtZSA9PT0gJ1ZpZXdDaGlsZCcgfHwgbmFtZSA9PT0gJ1ZpZXdDaGlsZHJlbic7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXRBbm5vdGF0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBJbnB1dCB7XG4gIHJldHVybiB2YWx1ZS5uZ01ldGFkYXRhTmFtZSA9PT0gJ0lucHV0Jztcbn1cblxuZnVuY3Rpb24gc3BsaXRCeUNvbW1hKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgnLCcpLm1hcChwaWVjZSA9PiBwaWVjZS50cmltKCkpO1xufVxuXG5jb25zdCBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICduZ09uQ2hhbmdlcycsICduZ09uSW5pdCcsICduZ09uRGVzdHJveScsICduZ0RvQ2hlY2snLCAnbmdBZnRlclZpZXdJbml0JywgJ25nQWZ0ZXJWaWV3Q2hlY2tlZCcsXG4gICduZ0FmdGVyQ29udGVudEluaXQnLCAnbmdBZnRlckNvbnRlbnRDaGVja2VkJ1xuXTtcblxuZnVuY3Rpb24gc2hvdWxkQWRkQWJzdHJhY3REaXJlY3RpdmUodHlwZTogVHlwZTxhbnk+KTogYm9vbGVhbiB7XG4gIGNvbnN0IHJlZmxlY3QgPSBnZXRSZWZsZWN0KCk7XG5cbiAgaWYgKExJRkVDWUNMRV9IT09LUy5zb21lKGhvb2tOYW1lID0+IHJlZmxlY3QuaGFzTGlmZWN5Y2xlSG9vayh0eXBlLCBob29rTmFtZSkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBwcm9wTWV0YWRhdGEgPSByZWZsZWN0LnByb3BNZXRhZGF0YSh0eXBlKTtcblxuICBmb3IgKGNvbnN0IGZpZWxkIGluIHByb3BNZXRhZGF0YSkge1xuICAgIGNvbnN0IGFubm90YXRpb25zID0gcHJvcE1ldGFkYXRhW2ZpZWxkXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5ub3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhbm5vdGF0aW9uc1tpXTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhTmFtZSA9IGN1cnJlbnQubmdNZXRhZGF0YU5hbWU7XG5cbiAgICAgIGlmIChpc0lucHV0QW5ub3RhdGlvbihjdXJyZW50KSB8fCBpc0NvbnRlbnRRdWVyeShjdXJyZW50KSB8fCBpc1ZpZXdRdWVyeShjdXJyZW50KSB8fFxuICAgICAgICAgIG1ldGFkYXRhTmFtZSA9PT0gJ091dHB1dCcgfHwgbWV0YWRhdGFOYW1lID09PSAnSG9zdEJpbmRpbmcnIHx8XG4gICAgICAgICAgbWV0YWRhdGFOYW1lID09PSAnSG9zdExpc3RlbmVyJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=