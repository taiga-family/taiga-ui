/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
import { createComponent, createContentChild, createContentChildren, createDirective, createHostBinding, createHostListener, createInput, createOutput, createViewChild, createViewChildren } from './core';
import { resolveForwardRef, splitAtColon, stringify } from './util';
var QUERY_METADATA_IDENTIFIERS = [
    createViewChild,
    createViewChildren,
    createContentChild,
    createContentChildren,
];
/*
 * Resolve a `Type` for {@link Directive}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
var DirectiveResolver = /** @class */ (function () {
    function DirectiveResolver(_reflector) {
        this._reflector = _reflector;
    }
    DirectiveResolver.prototype.isDirective = function (type) {
        var typeMetadata = this._reflector.annotations(resolveForwardRef(type));
        return typeMetadata && typeMetadata.some(isDirectiveMetadata);
    };
    DirectiveResolver.prototype.resolve = function (type, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        var typeMetadata = this._reflector.annotations(resolveForwardRef(type));
        if (typeMetadata) {
            var metadata = findLast(typeMetadata, isDirectiveMetadata);
            if (metadata) {
                var propertyMetadata = this._reflector.propMetadata(type);
                var guards = this._reflector.guards(type);
                return this._mergeWithPropertyMetadata(metadata, propertyMetadata, guards, type);
            }
        }
        if (throwIfNotFound) {
            throw new Error("No Directive annotation found on " + stringify(type));
        }
        return null;
    };
    DirectiveResolver.prototype._mergeWithPropertyMetadata = function (dm, propertyMetadata, guards, directiveType) {
        var inputs = [];
        var outputs = [];
        var host = {};
        var queries = {};
        Object.keys(propertyMetadata).forEach(function (propName) {
            var input = findLast(propertyMetadata[propName], function (a) { return createInput.isTypeOf(a); });
            if (input) {
                if (input.bindingPropertyName) {
                    inputs.push(propName + ": " + input.bindingPropertyName);
                }
                else {
                    inputs.push(propName);
                }
            }
            var output = findLast(propertyMetadata[propName], function (a) { return createOutput.isTypeOf(a); });
            if (output) {
                if (output.bindingPropertyName) {
                    outputs.push(propName + ": " + output.bindingPropertyName);
                }
                else {
                    outputs.push(propName);
                }
            }
            var hostBindings = propertyMetadata[propName].filter(function (a) { return createHostBinding.isTypeOf(a); });
            hostBindings.forEach(function (hostBinding) {
                if (hostBinding.hostPropertyName) {
                    var startWith = hostBinding.hostPropertyName[0];
                    if (startWith === '(') {
                        throw new Error("@HostBinding can not bind to events. Use @HostListener instead.");
                    }
                    else if (startWith === '[') {
                        throw new Error("@HostBinding parameter should be a property name, 'class.<name>', or 'attr.<name>'.");
                    }
                    host["[" + hostBinding.hostPropertyName + "]"] = propName;
                }
                else {
                    host["[" + propName + "]"] = propName;
                }
            });
            var hostListeners = propertyMetadata[propName].filter(function (a) { return createHostListener.isTypeOf(a); });
            hostListeners.forEach(function (hostListener) {
                var args = hostListener.args || [];
                host["(" + hostListener.eventName + ")"] = propName + "(" + args.join(',') + ")";
            });
            var query = findLast(propertyMetadata[propName], function (a) { return QUERY_METADATA_IDENTIFIERS.some(function (i) { return i.isTypeOf(a); }); });
            if (query) {
                queries[propName] = query;
            }
        });
        return this._merge(dm, inputs, outputs, host, queries, guards, directiveType);
    };
    DirectiveResolver.prototype._extractPublicName = function (def) {
        return splitAtColon(def, [null, def])[1].trim();
    };
    DirectiveResolver.prototype._dedupeBindings = function (bindings) {
        var names = new Set();
        var publicNames = new Set();
        var reversedResult = [];
        // go last to first to allow later entries to overwrite previous entries
        for (var i = bindings.length - 1; i >= 0; i--) {
            var binding = bindings[i];
            var name_1 = this._extractPublicName(binding);
            publicNames.add(name_1);
            if (!names.has(name_1)) {
                names.add(name_1);
                reversedResult.push(binding);
            }
        }
        return reversedResult.reverse();
    };
    DirectiveResolver.prototype._merge = function (directive, inputs, outputs, host, queries, guards, directiveType) {
        var mergedInputs = this._dedupeBindings(directive.inputs ? directive.inputs.concat(inputs) : inputs);
        var mergedOutputs = this._dedupeBindings(directive.outputs ? directive.outputs.concat(outputs) : outputs);
        var mergedHost = directive.host ? __assign(__assign({}, directive.host), host) : host;
        var mergedQueries = directive.queries ? __assign(__assign({}, directive.queries), queries) : queries;
        if (createComponent.isTypeOf(directive)) {
            var comp = directive;
            return createComponent({
                selector: comp.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: comp.exportAs,
                moduleId: comp.moduleId,
                queries: mergedQueries,
                changeDetection: comp.changeDetection,
                providers: comp.providers,
                viewProviders: comp.viewProviders,
                entryComponents: comp.entryComponents,
                template: comp.template,
                templateUrl: comp.templateUrl,
                styles: comp.styles,
                styleUrls: comp.styleUrls,
                encapsulation: comp.encapsulation,
                animations: comp.animations,
                interpolation: comp.interpolation,
                preserveWhitespaces: directive.preserveWhitespaces,
            });
        }
        else {
            return createDirective({
                selector: directive.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: directive.exportAs,
                queries: mergedQueries,
                providers: directive.providers,
                guards: guards
            });
        }
    };
    return DirectiveResolver;
}());
export { DirectiveResolver };
function isDirectiveMetadata(type) {
    return createDirective.isTypeOf(type) || createComponent.isTypeOf(type);
}
export function findLast(arr, condition) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (condition(arr[i])) {
            return arr[i];
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2RpcmVjdGl2ZV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBR0gsT0FBTyxFQUFZLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQWtCLE1BQU0sUUFBUSxDQUFDO0FBQ3RPLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWxFLElBQU0sMEJBQTBCLEdBQUc7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSDtJQUNFLDJCQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7SUFFcEQsdUNBQVcsR0FBWCxVQUFZLElBQVU7UUFDcEIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSxPQUFPLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQVFELG1DQUFPLEdBQVAsVUFBUSxJQUFVLEVBQUUsZUFBc0I7UUFBdEIsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDeEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFN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QUFDLFVBQVU7Z0JBQzNCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDakMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjthQUNuRCxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxlQUFlLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtnQkFDNUIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO2dCQUM1QixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO2dCQUM5QixNQUFNLFFBQUE7YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF2SkQsSUF1SkM7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxJQUFTO0lBQ3BDLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFJLEdBQVEsRUFBRSxTQUFnQztJQUNwRSxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtDb21wb25lbnQsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlQ29udGVudENoaWxkLCBjcmVhdGVDb250ZW50Q2hpbGRyZW4sIGNyZWF0ZURpcmVjdGl2ZSwgY3JlYXRlSG9zdEJpbmRpbmcsIGNyZWF0ZUhvc3RMaXN0ZW5lciwgY3JlYXRlSW5wdXQsIGNyZWF0ZU91dHB1dCwgY3JlYXRlVmlld0NoaWxkLCBjcmVhdGVWaWV3Q2hpbGRyZW4sIERpcmVjdGl2ZSwgVHlwZX0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWYsIHNwbGl0QXRDb2xvbiwgc3RyaW5naWZ5fSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBRVUVSWV9NRVRBREFUQV9JREVOVElGSUVSUyA9IFtcbiAgY3JlYXRlVmlld0NoaWxkLFxuICBjcmVhdGVWaWV3Q2hpbGRyZW4sXG4gIGNyZWF0ZUNvbnRlbnRDaGlsZCxcbiAgY3JlYXRlQ29udGVudENoaWxkcmVuLFxuXTtcblxuLypcbiAqIFJlc29sdmUgYSBgVHlwZWAgZm9yIHtAbGluayBEaXJlY3RpdmV9LlxuICpcbiAqIFRoaXMgaW50ZXJmYWNlIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBhcHBsaWNhdGlvbiBkZXZlbG9wZXIgdG8gY3JlYXRlIGN1c3RvbSBiZWhhdmlvci5cbiAqXG4gKiBTZWUge0BsaW5rIENvbXBpbGVyfVxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IpIHt9XG5cbiAgaXNEaXJlY3RpdmUodHlwZTogVHlwZSkge1xuICAgIGNvbnN0IHR5cGVNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3Rvci5hbm5vdGF0aW9ucyhyZXNvbHZlRm9yd2FyZFJlZih0eXBlKSk7XG4gICAgcmV0dXJuIHR5cGVNZXRhZGF0YSAmJiB0eXBlTWV0YWRhdGEuc29tZShpc0RpcmVjdGl2ZU1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4ge0BsaW5rIERpcmVjdGl2ZX0gZm9yIGEgZ2l2ZW4gYFR5cGVgLlxuICAgKi9cbiAgcmVzb2x2ZSh0eXBlOiBUeXBlKTogRGlyZWN0aXZlO1xuICByZXNvbHZlKHR5cGU6IFR5cGUsIHRocm93SWZOb3RGb3VuZDogdHJ1ZSk6IERpcmVjdGl2ZTtcbiAgcmVzb2x2ZSh0eXBlOiBUeXBlLCB0aHJvd0lmTm90Rm91bmQ6IGJvb2xlYW4pOiBEaXJlY3RpdmV8bnVsbDtcbiAgcmVzb2x2ZSh0eXBlOiBUeXBlLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTogRGlyZWN0aXZlfG51bGwge1xuICAgIGNvbnN0IHR5cGVNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3Rvci5hbm5vdGF0aW9ucyhyZXNvbHZlRm9yd2FyZFJlZih0eXBlKSk7XG4gICAgaWYgKHR5cGVNZXRhZGF0YSkge1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBmaW5kTGFzdCh0eXBlTWV0YWRhdGEsIGlzRGlyZWN0aXZlTWV0YWRhdGEpO1xuICAgICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TWV0YWRhdGEgPSB0aGlzLl9yZWZsZWN0b3IucHJvcE1ldGFkYXRhKHR5cGUpO1xuICAgICAgICBjb25zdCBndWFyZHMgPSB0aGlzLl9yZWZsZWN0b3IuZ3VhcmRzKHR5cGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVyZ2VXaXRoUHJvcGVydHlNZXRhZGF0YShtZXRhZGF0YSwgcHJvcGVydHlNZXRhZGF0YSwgZ3VhcmRzLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhyb3dJZk5vdEZvdW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIERpcmVjdGl2ZSBhbm5vdGF0aW9uIGZvdW5kIG9uICR7c3RyaW5naWZ5KHR5cGUpfWApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWVyZ2VXaXRoUHJvcGVydHlNZXRhZGF0YShcbiAgICAgIGRtOiBEaXJlY3RpdmUsIHByb3BlcnR5TWV0YWRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0sIGd1YXJkczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgICBkaXJlY3RpdmVUeXBlOiBUeXBlKTogRGlyZWN0aXZlIHtcbiAgICBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBob3N0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGNvbnN0IHF1ZXJpZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgT2JqZWN0LmtleXMocHJvcGVydHlNZXRhZGF0YSkuZm9yRWFjaCgocHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBmaW5kTGFzdChwcm9wZXJ0eU1ldGFkYXRhW3Byb3BOYW1lXSwgKGEpID0+IGNyZWF0ZUlucHV0LmlzVHlwZU9mKGEpKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQuYmluZGluZ1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgIGlucHV0cy5wdXNoKGAke3Byb3BOYW1lfTogJHtpbnB1dC5iaW5kaW5nUHJvcGVydHlOYW1lfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0cy5wdXNoKHByb3BOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgb3V0cHV0ID0gZmluZExhc3QocHJvcGVydHlNZXRhZGF0YVtwcm9wTmFtZV0sIChhKSA9PiBjcmVhdGVPdXRwdXQuaXNUeXBlT2YoYSkpO1xuICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0LmJpbmRpbmdQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBvdXRwdXRzLnB1c2goYCR7cHJvcE5hbWV9OiAke291dHB1dC5iaW5kaW5nUHJvcGVydHlOYW1lfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dHMucHVzaChwcm9wTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGhvc3RCaW5kaW5ncyA9IHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLmZpbHRlcihhID0+IGNyZWF0ZUhvc3RCaW5kaW5nLmlzVHlwZU9mKGEpKTtcbiAgICAgIGhvc3RCaW5kaW5ncy5mb3JFYWNoKGhvc3RCaW5kaW5nID0+IHtcbiAgICAgICAgaWYgKGhvc3RCaW5kaW5nLmhvc3RQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBzdGFydFdpdGggPSBob3N0QmluZGluZy5ob3N0UHJvcGVydHlOYW1lWzBdO1xuICAgICAgICAgIGlmIChzdGFydFdpdGggPT09ICcoJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBASG9zdEJpbmRpbmcgY2FuIG5vdCBiaW5kIHRvIGV2ZW50cy4gVXNlIEBIb3N0TGlzdGVuZXIgaW5zdGVhZC5gKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0V2l0aCA9PT0gJ1snKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYEBIb3N0QmluZGluZyBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgcHJvcGVydHkgbmFtZSwgJ2NsYXNzLjxuYW1lPicsIG9yICdhdHRyLjxuYW1lPicuYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhvc3RbYFske2hvc3RCaW5kaW5nLmhvc3RQcm9wZXJ0eU5hbWV9XWBdID0gcHJvcE5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaG9zdFtgWyR7cHJvcE5hbWV9XWBdID0gcHJvcE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgaG9zdExpc3RlbmVycyA9IHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLmZpbHRlcihhID0+IGNyZWF0ZUhvc3RMaXN0ZW5lci5pc1R5cGVPZihhKSk7XG4gICAgICBob3N0TGlzdGVuZXJzLmZvckVhY2goaG9zdExpc3RlbmVyID0+IHtcbiAgICAgICAgY29uc3QgYXJncyA9IGhvc3RMaXN0ZW5lci5hcmdzIHx8IFtdO1xuICAgICAgICBob3N0W2AoJHtob3N0TGlzdGVuZXIuZXZlbnROYW1lfSlgXSA9IGAke3Byb3BOYW1lfSgke2FyZ3Muam9pbignLCcpfSlgO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBxdWVyeSA9IGZpbmRMYXN0KFxuICAgICAgICAgIHByb3BlcnR5TWV0YWRhdGFbcHJvcE5hbWVdLCAoYSkgPT4gUVVFUllfTUVUQURBVEFfSURFTlRJRklFUlMuc29tZShpID0+IGkuaXNUeXBlT2YoYSkpKTtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBxdWVyaWVzW3Byb3BOYW1lXSA9IHF1ZXJ5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9tZXJnZShkbSwgaW5wdXRzLCBvdXRwdXRzLCBob3N0LCBxdWVyaWVzLCBndWFyZHMsIGRpcmVjdGl2ZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFjdFB1YmxpY05hbWUoZGVmOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3BsaXRBdENvbG9uKGRlZiwgW251bGwhLCBkZWZdKVsxXS50cmltKCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWR1cGVCaW5kaW5ncyhiaW5kaW5nczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBwdWJsaWNOYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IHJldmVyc2VkUmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIGdvIGxhc3QgdG8gZmlyc3QgdG8gYWxsb3cgbGF0ZXIgZW50cmllcyB0byBvdmVyd3JpdGUgcHJldmlvdXMgZW50cmllc1xuICAgIGZvciAobGV0IGkgPSBiaW5kaW5ncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2V4dHJhY3RQdWJsaWNOYW1lKGJpbmRpbmcpO1xuICAgICAgcHVibGljTmFtZXMuYWRkKG5hbWUpO1xuICAgICAgaWYgKCFuYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgICAgbmFtZXMuYWRkKG5hbWUpO1xuICAgICAgICByZXZlcnNlZFJlc3VsdC5wdXNoKGJpbmRpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV2ZXJzZWRSZXN1bHQucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWVyZ2UoXG4gICAgICBkaXJlY3RpdmU6IERpcmVjdGl2ZSwgaW5wdXRzOiBzdHJpbmdbXSwgb3V0cHV0czogc3RyaW5nW10sIGhvc3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgICAgcXVlcmllczoge1trZXk6IHN0cmluZ106IGFueX0sIGd1YXJkczoge1trZXk6IHN0cmluZ106IGFueX0sIGRpcmVjdGl2ZVR5cGU6IFR5cGUpOiBEaXJlY3RpdmUge1xuICAgIGNvbnN0IG1lcmdlZElucHV0cyA9XG4gICAgICAgIHRoaXMuX2RlZHVwZUJpbmRpbmdzKGRpcmVjdGl2ZS5pbnB1dHMgPyBkaXJlY3RpdmUuaW5wdXRzLmNvbmNhdChpbnB1dHMpIDogaW5wdXRzKTtcbiAgICBjb25zdCBtZXJnZWRPdXRwdXRzID1cbiAgICAgICAgdGhpcy5fZGVkdXBlQmluZGluZ3MoZGlyZWN0aXZlLm91dHB1dHMgPyBkaXJlY3RpdmUub3V0cHV0cy5jb25jYXQob3V0cHV0cykgOiBvdXRwdXRzKTtcbiAgICBjb25zdCBtZXJnZWRIb3N0ID0gZGlyZWN0aXZlLmhvc3QgPyB7Li4uZGlyZWN0aXZlLmhvc3QsIC4uLmhvc3R9IDogaG9zdDtcbiAgICBjb25zdCBtZXJnZWRRdWVyaWVzID0gZGlyZWN0aXZlLnF1ZXJpZXMgPyB7Li4uZGlyZWN0aXZlLnF1ZXJpZXMsIC4uLnF1ZXJpZXN9IDogcXVlcmllcztcbiAgICBpZiAoY3JlYXRlQ29tcG9uZW50LmlzVHlwZU9mKGRpcmVjdGl2ZSkpIHtcbiAgICAgIGNvbnN0IGNvbXAgPSBkaXJlY3RpdmUgYXMgQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiBjb21wLnNlbGVjdG9yLFxuICAgICAgICBpbnB1dHM6IG1lcmdlZElucHV0cyxcbiAgICAgICAgb3V0cHV0czogbWVyZ2VkT3V0cHV0cyxcbiAgICAgICAgaG9zdDogbWVyZ2VkSG9zdCxcbiAgICAgICAgZXhwb3J0QXM6IGNvbXAuZXhwb3J0QXMsXG4gICAgICAgIG1vZHVsZUlkOiBjb21wLm1vZHVsZUlkLFxuICAgICAgICBxdWVyaWVzOiBtZXJnZWRRdWVyaWVzLFxuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvbXAuY2hhbmdlRGV0ZWN0aW9uLFxuICAgICAgICBwcm92aWRlcnM6IGNvbXAucHJvdmlkZXJzLFxuICAgICAgICB2aWV3UHJvdmlkZXJzOiBjb21wLnZpZXdQcm92aWRlcnMsXG4gICAgICAgIGVudHJ5Q29tcG9uZW50czogY29tcC5lbnRyeUNvbXBvbmVudHMsXG4gICAgICAgIHRlbXBsYXRlOiBjb21wLnRlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZVVybDogY29tcC50ZW1wbGF0ZVVybCxcbiAgICAgICAgc3R5bGVzOiBjb21wLnN0eWxlcyxcbiAgICAgICAgc3R5bGVVcmxzOiBjb21wLnN0eWxlVXJscyxcbiAgICAgICAgZW5jYXBzdWxhdGlvbjogY29tcC5lbmNhcHN1bGF0aW9uLFxuICAgICAgICBhbmltYXRpb25zOiBjb21wLmFuaW1hdGlvbnMsXG4gICAgICAgIGludGVycG9sYXRpb246IGNvbXAuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZGlyZWN0aXZlLnByZXNlcnZlV2hpdGVzcGFjZXMsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyZWF0ZURpcmVjdGl2ZSh7XG4gICAgICAgIHNlbGVjdG9yOiBkaXJlY3RpdmUuc2VsZWN0b3IsXG4gICAgICAgIGlucHV0czogbWVyZ2VkSW5wdXRzLFxuICAgICAgICBvdXRwdXRzOiBtZXJnZWRPdXRwdXRzLFxuICAgICAgICBob3N0OiBtZXJnZWRIb3N0LFxuICAgICAgICBleHBvcnRBczogZGlyZWN0aXZlLmV4cG9ydEFzLFxuICAgICAgICBxdWVyaWVzOiBtZXJnZWRRdWVyaWVzLFxuICAgICAgICBwcm92aWRlcnM6IGRpcmVjdGl2ZS5wcm92aWRlcnMsXG4gICAgICAgIGd1YXJkc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlTWV0YWRhdGEodHlwZTogYW55KTogdHlwZSBpcyBEaXJlY3RpdmUge1xuICByZXR1cm4gY3JlYXRlRGlyZWN0aXZlLmlzVHlwZU9mKHR5cGUpIHx8IGNyZWF0ZUNvbXBvbmVudC5pc1R5cGVPZih0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0PFQ+KGFycjogVFtdLCBjb25kaXRpb246ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IFR8bnVsbCB7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoY29uZGl0aW9uKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBhcnJbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIl19