/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/jit/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectorRef } from '../../change_detection/change_detector_ref';
import { getCompilerFacade, R3ResolvedDependencyType } from '../../compiler/compiler_facade';
import { ReflectionCapabilities } from '../../reflection/reflection_capabilities';
import { Attribute, Host, Inject, Optional, Self, SkipSelf } from '../metadata';
/** @type {?} */
let _reflect = null;
/**
 * @return {?}
 */
export function getReflect() {
    return (_reflect = _reflect || new ReflectionCapabilities());
}
/**
 * @param {?} type
 * @return {?}
 */
export function reflectDependencies(type) {
    return convertDependencies(getReflect().parameters(type));
}
/**
 * @param {?} deps
 * @return {?}
 */
export function convertDependencies(deps) {
    /** @type {?} */
    const compiler = getCompilerFacade();
    return deps.map((/**
     * @param {?} dep
     * @return {?}
     */
    dep => reflectDependency(compiler, dep)));
}
/**
 * @param {?} compiler
 * @param {?} dep
 * @return {?}
 */
function reflectDependency(compiler, dep) {
    /** @type {?} */
    const meta = {
        token: null,
        host: false,
        optional: false,
        resolved: compiler.R3ResolvedDependencyType.Token,
        self: false,
        skipSelf: false,
    };
    /**
     * @param {?} token
     * @return {?}
     */
    function setTokenAndResolvedType(token) {
        meta.resolved = compiler.R3ResolvedDependencyType.Token;
        meta.token = token;
    }
    if (Array.isArray(dep) && dep.length > 0) {
        for (let j = 0; j < dep.length; j++) {
            /** @type {?} */
            const param = dep[j];
            if (param === undefined) {
                // param may be undefined if type of dep is not set by ngtsc
                continue;
            }
            /** @type {?} */
            const proto = Object.getPrototypeOf(param);
            if (param instanceof Optional || proto.ngMetadataName === 'Optional') {
                meta.optional = true;
            }
            else if (param instanceof SkipSelf || proto.ngMetadataName === 'SkipSelf') {
                meta.skipSelf = true;
            }
            else if (param instanceof Self || proto.ngMetadataName === 'Self') {
                meta.self = true;
            }
            else if (param instanceof Host || proto.ngMetadataName === 'Host') {
                meta.host = true;
            }
            else if (param instanceof Inject) {
                meta.token = param.token;
            }
            else if (param instanceof Attribute) {
                if (param.attributeName === undefined) {
                    throw new Error(`Attribute name must be defined.`);
                }
                meta.token = param.attributeName;
                meta.resolved = compiler.R3ResolvedDependencyType.Attribute;
            }
            else if (param === ChangeDetectorRef) {
                meta.token = param;
                meta.resolved = compiler.R3ResolvedDependencyType.ChangeDetectorRef;
            }
            else {
                setTokenAndResolvedType(param);
            }
        }
    }
    else if (dep === undefined || (Array.isArray(dep) && dep.length === 0)) {
        meta.token = undefined;
        meta.resolved = R3ResolvedDependencyType.Invalid;
    }
    else {
        setTokenAndResolvedType(dep);
    }
    return meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2ppdC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBaUIsaUJBQWlCLEVBQThCLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkksT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDOztJQUUxRSxRQUFRLEdBQWdDLElBQUk7Ozs7QUFFaEQsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBZTtJQUNqRCxPQUFPLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVc7O1VBQ3ZDLFFBQVEsR0FBRyxpQkFBaUIsRUFBRTtJQUNwQyxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUMsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFFBQXdCLEVBQUUsR0FBYzs7VUFDM0QsSUFBSSxHQUErQjtRQUN2QyxLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxLQUFL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ZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuLi8uLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnO1xuaW1wb3J0IHtDb21waWxlckZhY2FkZSwgZ2V0Q29tcGlsZXJGYWNhZGUsIFIzRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlLCBSM1Jlc29sdmVkRGVwZW5kZW5jeVR5cGV9IGZyb20gJy4uLy4uL2NvbXBpbGVyL2NvbXBpbGVyX2ZhY2FkZSc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcyc7XG5pbXBvcnQge0F0dHJpYnV0ZSwgSG9zdCwgSW5qZWN0LCBPcHRpb25hbCwgU2VsZiwgU2tpcFNlbGZ9IGZyb20gJy4uL21ldGFkYXRhJztcblxubGV0IF9yZWZsZWN0OiBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfG51bGwgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVmbGVjdCgpOiBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgcmV0dXJuIChfcmVmbGVjdCA9IF9yZWZsZWN0IHx8IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdERlcGVuZGVuY2llcyh0eXBlOiBUeXBlPGFueT4pOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZVtdIHtcbiAgcmV0dXJuIGNvbnZlcnREZXBlbmRlbmNpZXMoZ2V0UmVmbGVjdCgpLnBhcmFtZXRlcnModHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERlcGVuZGVuY2llcyhkZXBzOiBhbnlbXSk6IFIzRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlW10ge1xuICBjb25zdCBjb21waWxlciA9IGdldENvbXBpbGVyRmFjYWRlKCk7XG4gIHJldHVybiBkZXBzLm1hcChkZXAgPT4gcmVmbGVjdERlcGVuZGVuY3koY29tcGlsZXIsIGRlcCkpO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0RGVwZW5kZW5jeShjb21waWxlcjogQ29tcGlsZXJGYWNhZGUsIGRlcDogYW55fGFueVtdKTogUjNEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGUge1xuICBjb25zdCBtZXRhOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZSA9IHtcbiAgICB0b2tlbjogbnVsbCxcbiAgICBob3N0OiBmYWxzZSxcbiAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgcmVzb2x2ZWQ6IGNvbXBpbGVyLlIzUmVzb2x2ZWREZXBlbmRlbmN5VHlwZS5Ub2tlbixcbiAgICBzZWxmOiBmYWxzZSxcbiAgICBza2lwU2VsZjogZmFsc2UsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0VG9rZW5BbmRSZXNvbHZlZFR5cGUodG9rZW46IGFueSk6IHZvaWQge1xuICAgIG1ldGEucmVzb2x2ZWQgPSBjb21waWxlci5SM1Jlc29sdmVkRGVwZW5kZW5jeVR5cGUuVG9rZW47XG4gICAgbWV0YS50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXAubGVuZ3RoID4gMCkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGVwLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwYXJhbSA9IGRlcFtqXTtcbiAgICAgIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHBhcmFtIG1heSBiZSB1bmRlZmluZWQgaWYgdHlwZSBvZiBkZXAgaXMgbm90IHNldCBieSBuZ3RzY1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyYW0pO1xuXG4gICAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBPcHRpb25hbCB8fCBwcm90by5uZ01ldGFkYXRhTmFtZSA9PT0gJ09wdGlvbmFsJykge1xuICAgICAgICBtZXRhLm9wdGlvbmFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBTa2lwU2VsZiB8fCBwcm90by5uZ01ldGFkYXRhTmFtZSA9PT0gJ1NraXBTZWxmJykge1xuICAgICAgICBtZXRhLnNraXBTZWxmID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBTZWxmIHx8IHByb3RvLm5nTWV0YWRhdGFOYW1lID09PSAnU2VsZicpIHtcbiAgICAgICAgbWV0YS5zZWxmID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBIb3N0IHx8IHByb3RvLm5nTWV0YWRhdGFOYW1lID09PSAnSG9zdCcpIHtcbiAgICAgICAgbWV0YS5ob3N0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBJbmplY3QpIHtcbiAgICAgICAgbWV0YS50b2tlbiA9IHBhcmFtLnRva2VuO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbSBpbnN0YW5jZW9mIEF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAocGFyYW0uYXR0cmlidXRlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbmFtZSBtdXN0IGJlIGRlZmluZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YS50b2tlbiA9IHBhcmFtLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIG1ldGEucmVzb2x2ZWQgPSBjb21waWxlci5SM1Jlc29sdmVkRGVwZW5kZW5jeVR5cGUuQXR0cmlidXRlO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgbWV0YS50b2tlbiA9IHBhcmFtO1xuICAgICAgICBtZXRhLnJlc29sdmVkID0gY29tcGlsZXIuUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlLkNoYW5nZURldGVjdG9yUmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VG9rZW5BbmRSZXNvbHZlZFR5cGUocGFyYW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChkZXAgPT09IHVuZGVmaW5lZCB8fCAoQXJyYXkuaXNBcnJheShkZXApICYmIGRlcC5sZW5ndGggPT09IDApKSB7XG4gICAgbWV0YS50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICBtZXRhLnJlc29sdmVkID0gUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlLkludmFsaWQ7XG4gIH0gZWxzZSB7XG4gICAgc2V0VG9rZW5BbmRSZXNvbHZlZFR5cGUoZGVwKTtcbiAgfVxuICByZXR1cm4gbWV0YTtcbn1cbiJdfQ==