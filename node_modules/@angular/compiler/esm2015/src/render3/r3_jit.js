/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Implementation of `CompileReflector` which resolves references to @angular/core
 * symbols at runtime, according to a consumer-provided mapping.
 *
 * Only supports `resolveExternalReference`, all other methods throw.
 */
export class R3JitReflector {
    constructor(context) {
        this.context = context;
    }
    resolveExternalReference(ref) {
        // This reflector only handles @angular/core imports.
        if (ref.moduleName !== '@angular/core') {
            throw new Error(`Cannot resolve external reference to ${ref.moduleName}, only references to @angular/core are supported.`);
        }
        if (!this.context.hasOwnProperty(ref.name)) {
            throw new Error(`No value provided for @angular/core symbol '${ref.name}'.`);
        }
        return this.context[ref.name];
    }
    parameters(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    annotations(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    shallowAnnotations(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    tryAnnotations(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    propMetadata(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    hasLifecycleHook(type, lcProperty) {
        throw new Error('Not implemented.');
    }
    guards(typeOrFunc) {
        throw new Error('Not implemented.');
    }
    componentModuleUrl(type, cmpMetadata) {
        throw new Error('Not implemented.');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfaml0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfaml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUtIOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRXJELHdCQUF3QixDQUFDLEdBQXdCO1FBQy9DLHFEQUFxRDtRQUNyRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssZUFBZSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQ1osR0FBRyxDQUFDLFVBQVUsbURBQW1ELENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsR0FBRyxDQUFDLElBQUssSUFBSSxDQUFDLENBQUM7U0FDL0U7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUFlO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsVUFBZTtRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFlO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFDLFVBQWU7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTLEVBQUUsVUFBa0I7UUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBZTtRQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVMsRUFBRSxXQUFnQjtRQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4uL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGBDb21waWxlUmVmbGVjdG9yYCB3aGljaCByZXNvbHZlcyByZWZlcmVuY2VzIHRvIEBhbmd1bGFyL2NvcmVcbiAqIHN5bWJvbHMgYXQgcnVudGltZSwgYWNjb3JkaW5nIHRvIGEgY29uc3VtZXItcHJvdmlkZWQgbWFwcGluZy5cbiAqXG4gKiBPbmx5IHN1cHBvcnRzIGByZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2VgLCBhbGwgb3RoZXIgbWV0aG9kcyB0aHJvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIFIzSml0UmVmbGVjdG9yIGltcGxlbWVudHMgQ29tcGlsZVJlZmxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGV4dDoge1trZXk6IHN0cmluZ106IGFueX0pIHt9XG5cbiAgcmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSk6IGFueSB7XG4gICAgLy8gVGhpcyByZWZsZWN0b3Igb25seSBoYW5kbGVzIEBhbmd1bGFyL2NvcmUgaW1wb3J0cy5cbiAgICBpZiAocmVmLm1vZHVsZU5hbWUgIT09ICdAYW5ndWxhci9jb3JlJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVzb2x2ZSBleHRlcm5hbCByZWZlcmVuY2UgdG8gJHtcbiAgICAgICAgICByZWYubW9kdWxlTmFtZX0sIG9ubHkgcmVmZXJlbmNlcyB0byBAYW5ndWxhci9jb3JlIGFyZSBzdXBwb3J0ZWQuYCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250ZXh0Lmhhc093blByb3BlcnR5KHJlZi5uYW1lISkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gdmFsdWUgcHJvdmlkZWQgZm9yIEBhbmd1bGFyL2NvcmUgc3ltYm9sICcke3JlZi5uYW1lIX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZXh0W3JlZi5uYW1lIV07XG4gIH1cblxuICBwYXJhbWV0ZXJzKHR5cGVPckZ1bmM6IGFueSk6IGFueVtdW10ge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgYW5ub3RhdGlvbnModHlwZU9yRnVuYzogYW55KTogYW55W10ge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2hhbGxvd0Fubm90YXRpb25zKHR5cGVPckZ1bmM6IGFueSk6IGFueVtdIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHRyeUFubm90YXRpb25zKHR5cGVPckZ1bmM6IGFueSk6IGFueVtdIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W107fSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBoYXNMaWZlY3ljbGVIb29rKHR5cGU6IGFueSwgbGNQcm9wZXJ0eTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBndWFyZHModHlwZU9yRnVuYzogYW55KToge1trZXk6IHN0cmluZ106IGFueTt9IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIGNvbXBvbmVudE1vZHVsZVVybCh0eXBlOiBhbnksIGNtcE1ldGFkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpO1xuICB9XG59XG4iXX0=