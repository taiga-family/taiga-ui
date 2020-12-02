/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir-document-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
export const DIR_DOCUMENT = new InjectionToken('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
export function DIR_DOCUMENT_FACTORY() {
    return inject(DOCUMENT);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLWRvY3VtZW50LXRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9iaWRpL2Rpci1kb2N1bWVudC10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JyRCxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFXLGFBQWEsRUFBRTtJQUN0RSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsb0JBQW9CO0NBQzlCLENBQUM7Ozs7O0FBR0YsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge2luamVjdCwgSW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gaW5qZWN0IHRoZSBkb2N1bWVudCBpbnRvIERpcmVjdGlvbmFsaXR5LlxuICogVGhpcyBpcyB1c2VkIHNvIHRoYXQgdGhlIHZhbHVlIGNhbiBiZSBmYWtlZCBpbiB0ZXN0cy5cbiAqXG4gKiBXZSBjYW4ndCB1c2UgdGhlIHJlYWwgZG9jdW1lbnQgaW4gdGVzdHMgYmVjYXVzZSBjaGFuZ2luZyB0aGUgcmVhbCBgZGlyYCBjYXVzZXMgZ2VvbWV0cnktYmFzZWRcbiAqIHRlc3RzIGluIFNhZmFyaSB0byBmYWlsLlxuICpcbiAqIFdlIGFsc28gY2FuJ3QgcmUtcHJvdmlkZSB0aGUgRE9DVU1FTlQgdG9rZW4gZnJvbSBwbGF0Zm9ybS1icm93ZXIgYmVjYXVzZSB0aGUgdW5pdCB0ZXN0c1xuICogdGhlbXNlbHZlcyB1c2UgdGhpbmdzIGxpa2UgYHF1ZXJ5U2VsZWN0b3JgIGluIHRlc3QgY29kZS5cbiAqXG4gKiBUaGlzIHRva2VuIGlzIGRlZmluZWQgaW4gYSBzZXBhcmF0ZSBmaWxlIGZyb20gRGlyZWN0aW9uYWxpdHkgYXMgYSB3b3JrYXJvdW5kIGZvclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjI1NTlcbiAqXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBESVJfRE9DVU1FTlQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+KCdjZGstZGlyLWRvYycsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBESVJfRE9DVU1FTlRfRkFDVE9SWSxcbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIERJUl9ET0NVTUVOVF9GQUNUT1JZKCk6IERvY3VtZW50IHtcbiAgcmV0dXJuIGluamVjdChET0NVTUVOVCk7XG59XG4iXX0=