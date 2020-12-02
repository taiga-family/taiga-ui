/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/testing/src/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpTestingController } from './api';
import { HttpClientTestingBackend } from './backend';
/**
 * Configures `HttpClientTestingBackend` as the `HttpBackend` used by `HttpClient`.
 *
 * Inject `HttpTestingController` to expect and flush requests in your tests.
 *
 * \@publicApi
 */
export class HttpClientTestingModule {
}
HttpClientTestingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                ],
                providers: [
                    HttpClientTestingBackend,
                    { provide: HttpBackend, useExisting: HttpClientTestingBackend },
                    { provide: HttpTestingController, useExisting: HttpClientTestingBackend },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvdGVzdGluZy9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7O0FBb0JuRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFWbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCx3QkFBd0I7b0JBQ3hCLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUM7b0JBQzdELEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBQztpQkFDeEU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIdHRwQmFja2VuZCwgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7SHR0cFRlc3RpbmdDb250cm9sbGVyfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge0h0dHBDbGllbnRUZXN0aW5nQmFja2VuZH0gZnJvbSAnLi9iYWNrZW5kJztcblxuXG4vKipcbiAqIENvbmZpZ3VyZXMgYEh0dHBDbGllbnRUZXN0aW5nQmFja2VuZGAgYXMgdGhlIGBIdHRwQmFja2VuZGAgdXNlZCBieSBgSHR0cENsaWVudGAuXG4gKlxuICogSW5qZWN0IGBIdHRwVGVzdGluZ0NvbnRyb2xsZXJgIHRvIGV4cGVjdCBhbmQgZmx1c2ggcmVxdWVzdHMgaW4geW91ciB0ZXN0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIdHRwQ2xpZW50VGVzdGluZ0JhY2tlbmQsXG4gICAge3Byb3ZpZGU6IEh0dHBCYWNrZW5kLCB1c2VFeGlzdGluZzogSHR0cENsaWVudFRlc3RpbmdCYWNrZW5kfSxcbiAgICB7cHJvdmlkZTogSHR0cFRlc3RpbmdDb250cm9sbGVyLCB1c2VFeGlzdGluZzogSHR0cENsaWVudFRlc3RpbmdCYWNrZW5kfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFRlc3RpbmdNb2R1bGUge1xufVxuIl19