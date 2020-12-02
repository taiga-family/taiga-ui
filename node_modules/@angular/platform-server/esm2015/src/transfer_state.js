/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/transfer_state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { APP_ID, NgModule } from '@angular/core';
import { TransferState, ɵescapeHtml as escapeHtml } from '@angular/platform-browser';
import { BEFORE_APP_SERIALIZED } from './tokens';
/**
 * @param {?} doc
 * @param {?} appId
 * @param {?} transferStore
 * @return {?}
 */
export function serializeTransferStateFactory(doc, appId, transferStore) {
    return (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const script = doc.createElement('script');
        script.id = appId + '-state';
        script.setAttribute('type', 'application/json');
        script.textContent = escapeHtml(transferStore.toJson());
        doc.body.appendChild(script);
    });
}
/**
 * NgModule to install on the server side while using the `TransferState` to transfer state from
 * server to client.
 *
 * \@publicApi
 */
export class ServerTransferStateModule {
}
ServerTransferStateModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    TransferState, {
                        provide: BEFORE_APP_SERIALIZED,
                        useFactory: serializeTransferStateFactory,
                        deps: [DOCUMENT, APP_ID, TransferState],
                        multi: true,
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJfc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL3RyYW5zZmVyX3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFFLFdBQVcsSUFBSSxVQUFVLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7QUFFL0MsTUFBTSxVQUFVLDZCQUE2QixDQUN6QyxHQUFhLEVBQUUsS0FBYSxFQUFFLGFBQTRCO0lBQzVEOzs7SUFBTyxHQUFHLEVBQUU7O2NBQ0osTUFBTSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM3QixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7QUFrQkQsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBVnJDLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsYUFBYSxFQUFFO3dCQUNiLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFVBQVUsRUFBRSw2QkFBNkI7d0JBQ3pDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO3dCQUN2QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtBUFBfSUQsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNmZXJTdGF0ZSwgybVlc2NhcGVIdG1sIGFzIGVzY2FwZUh0bWx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0JFRk9SRV9BUFBfU0VSSUFMSVpFRH0gZnJvbSAnLi90b2tlbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplVHJhbnNmZXJTdGF0ZUZhY3RvcnkoXG4gICAgZG9jOiBEb2N1bWVudCwgYXBwSWQ6IHN0cmluZywgdHJhbnNmZXJTdG9yZTogVHJhbnNmZXJTdGF0ZSkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaWQgPSBhcHBJZCArICctc3RhdGUnO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHNjcmlwdC50ZXh0Q29udGVudCA9IGVzY2FwZUh0bWwodHJhbnNmZXJTdG9yZS50b0pzb24oKSk7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBOZ01vZHVsZSB0byBpbnN0YWxsIG9uIHRoZSBzZXJ2ZXIgc2lkZSB3aGlsZSB1c2luZyB0aGUgYFRyYW5zZmVyU3RhdGVgIHRvIHRyYW5zZmVyIHN0YXRlIGZyb21cbiAqIHNlcnZlciB0byBjbGllbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBUcmFuc2ZlclN0YXRlLCB7XG4gICAgICBwcm92aWRlOiBCRUZPUkVfQVBQX1NFUklBTElaRUQsXG4gICAgICB1c2VGYWN0b3J5OiBzZXJpYWxpemVUcmFuc2ZlclN0YXRlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtET0NVTUVOVCwgQVBQX0lELCBUcmFuc2ZlclN0YXRlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJUcmFuc2ZlclN0YXRlTW9kdWxlIHtcbn1cbiJdfQ==