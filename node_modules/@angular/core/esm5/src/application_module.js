/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata } from "tslib";
import { APP_INITIALIZER, ApplicationInitStatus } from './application_init';
import { ApplicationRef } from './application_ref';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { defaultIterableDiffers, defaultKeyValueDiffers, IterableDiffers, KeyValueDiffers } from './change_detection/change_detection';
import { Console } from './console';
import { Injector } from './di';
import { Inject, Optional, SkipSelf } from './di/metadata';
import { ErrorHandler } from './error_handler';
import { DEFAULT_LOCALE_ID, USD_CURRENCY_CODE } from './i18n/localization';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from './i18n/tokens';
import { ivyEnabled } from './ivy_switch';
import { ComponentFactoryResolver } from './linker';
import { Compiler } from './linker/compiler';
import { NgModule } from './metadata';
import { SCHEDULER } from './render3/component_ref';
import { setLocaleId } from './render3/i18n';
import { NgZone } from './zone';
export function _iterableDiffersFactory() {
    return defaultIterableDiffers;
}
export function _keyValueDiffersFactory() {
    return defaultKeyValueDiffers;
}
export function _localeFactory(locale) {
    locale = locale || getGlobalLocale();
    if (ivyEnabled) {
        setLocaleId(locale);
    }
    return locale;
}
/**
 * Work out the locale from the potential global properties.
 *
 * * Closure Compiler: use `goog.LOCALE`.
 * * Ivy enabled: use `$localize.locale`
 */
export function getGlobalLocale() {
    if (typeof ngI18nClosureMode !== 'undefined' && ngI18nClosureMode &&
        typeof goog !== 'undefined' && goog.LOCALE !== 'en') {
        // * The default `goog.LOCALE` value is `en`, while Angular used `en-US`.
        // * In order to preserve backwards compatibility, we use Angular default value over
        //   Closure Compiler's one.
        return goog.LOCALE;
    }
    else {
        // KEEP `typeof $localize !== 'undefined' && $localize.locale` IN SYNC WITH THE LOCALIZE
        // COMPILE-TIME INLINER.
        //
        // * During compile time inlining of translations the expression will be replaced
        //   with a string literal that is the current locale. Other forms of this expression are not
        //   guaranteed to be replaced.
        //
        // * During runtime translation evaluation, the developer is required to set `$localize.locale`
        //   if required, or just to provide their own `LOCALE_ID` provider.
        return (ivyEnabled && typeof $localize !== 'undefined' && $localize.locale) ||
            DEFAULT_LOCALE_ID;
    }
}
var ɵ0 = USD_CURRENCY_CODE;
/**
 * A built-in [dependency injection token](guide/glossary#di-token)
 * that is used to configure the root injector for bootstrapping.
 */
export var APPLICATION_MODULE_PROVIDERS = [
    {
        provide: ApplicationRef,
        useClass: ApplicationRef,
        deps: [NgZone, Console, Injector, ErrorHandler, ComponentFactoryResolver, ApplicationInitStatus]
    },
    { provide: SCHEDULER, deps: [NgZone], useFactory: zoneSchedulerFactory },
    {
        provide: ApplicationInitStatus,
        useClass: ApplicationInitStatus,
        deps: [[new Optional(), APP_INITIALIZER]]
    },
    { provide: Compiler, useClass: Compiler, deps: [] },
    APP_ID_RANDOM_PROVIDER,
    { provide: IterableDiffers, useFactory: _iterableDiffersFactory, deps: [] },
    { provide: KeyValueDiffers, useFactory: _keyValueDiffersFactory, deps: [] },
    {
        provide: LOCALE_ID,
        useFactory: _localeFactory,
        deps: [[new Inject(LOCALE_ID), new Optional(), new SkipSelf()]]
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: ɵ0 },
];
/**
 * Schedule work at next available slot.
 *
 * In Ivy this is just `requestAnimationFrame`. For compatibility reasons when bootstrapped
 * using `platformRef.bootstrap` we need to use `NgZone.onStable` as the scheduling mechanism.
 * This overrides the scheduling mechanism in Ivy to `NgZone.onStable`.
 *
 * @param ngZone NgZone to use for scheduling.
 */
export function zoneSchedulerFactory(ngZone) {
    var queue = [];
    ngZone.onStable.subscribe(function () {
        while (queue.length) {
            queue.pop()();
        }
    });
    return function (fn) {
        queue.push(fn);
    };
}
/**
 * Configures the root injector for an app with
 * providers of `@angular/core` dependencies that `ApplicationRef` needs
 * to bootstrap components.
 *
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command.
 *
 * @publicApi
 */
var ApplicationModule = /** @class */ (function () {
    // Inject ApplicationRef to make it eager...
    function ApplicationModule(appRef) {
    }
    ApplicationModule = __decorate([
        NgModule({ providers: APPLICATION_MODULE_PROVIDERS }),
        __metadata("design:paramtypes", [ApplicationRef])
    ], ApplicationModule);
    return ApplicationModule;
}());
export { ApplicationModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDckksT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUMsUUFBUSxFQUFpQixNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5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QUFDLEdBQUcsRUFBRyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sVUFBUyxFQUFjO1FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUVIO0lBQ0UsNENBQTRDO0lBQzVDLDJCQUFZLE1BQXNCO0lBQUcsQ0FBQztJQUYzQixpQkFBaUI7UUFEN0IsUUFBUSxDQUFDLEVBQUMsU0FBUyxFQUFFLDRCQUE0QixFQUFDLENBQUM7eUNBRzlCLGNBQWM7T0FGdkIsaUJBQWlCLENBRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBBcHBsaWNhdGlvbkluaXRTdGF0dXN9IGZyb20gJy4vYXBwbGljYXRpb25faW5pdCc7XG5pbXBvcnQge0FwcGxpY2F0aW9uUmVmfSBmcm9tICcuL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge0FQUF9JRF9SQU5ET01fUFJPVklERVJ9IGZyb20gJy4vYXBwbGljYXRpb25fdG9rZW5zJztcbmltcG9ydCB7ZGVmYXVsdEl0ZXJhYmxlRGlmZmVycywgZGVmYXVsdEtleVZhbHVlRGlmZmVycywgSXRlcmFibGVEaWZmZXJzLCBLZXlWYWx1ZURpZmZlcnN9IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi9jb25zb2xlJztcbmltcG9ydCB7SW5qZWN0b3IsIFN0YXRpY1Byb3ZpZGVyfSBmcm9tICcuL2RpJztcbmltcG9ydCB7SW5qZWN0LCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJy4vZGkvbWV0YWRhdGEnO1xuaW1wb3J0IHtFcnJvckhhbmRsZXJ9IGZyb20gJy4vZXJyb3JfaGFuZGxlcic7XG5pbXBvcnQge0RFRkFVTFRfTE9DQUxFX0lELCBVU0RfQ1VSUkVOQ1lfQ09ERX0gZnJvbSAnLi9pMThuL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0RFRkFVTFRfQ1VSUkVOQ1lfQ09ERSwgTE9DQUxFX0lEfSBmcm9tICcuL2kxOG4vdG9rZW5zJztcbmltcG9ydCB7aXZ5RW5hYmxlZH0gZnJvbSAnLi9pdnlfc3dpdGNoJztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyfSBmcm9tICcuL2xpbmtlcic7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICcuL2xpbmtlci9jb21waWxlcic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICcuL21ldGFkYXRhJztcbmltcG9ydCB7U0NIRURVTEVSfSBmcm9tICcuL3JlbmRlcjMvY29tcG9uZW50X3JlZic7XG5pbXBvcnQge3NldExvY2FsZUlkfSBmcm9tICcuL3JlbmRlcjMvaTE4bic7XG5pbXBvcnQge05nWm9uZX0gZnJvbSAnLi96b25lJztcblxuZGVjbGFyZSBjb25zdCAkbG9jYWxpemU6IHtsb2NhbGU/OiBzdHJpbmd9O1xuXG5leHBvcnQgZnVuY3Rpb24gX2l0ZXJhYmxlRGlmZmVyc0ZhY3RvcnkoKSB7XG4gIHJldHVybiBkZWZhdWx0SXRlcmFibGVEaWZmZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2tleVZhbHVlRGlmZmVyc0ZhY3RvcnkoKSB7XG4gIHJldHVybiBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2xvY2FsZUZhY3RvcnkobG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbG9jYWxlID0gbG9jYWxlIHx8IGdldEdsb2JhbExvY2FsZSgpO1xuICBpZiAoaXZ5RW5hYmxlZCkge1xuICAgIHNldExvY2FsZUlkKGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIGxvY2FsZTtcbn1cblxuLyoqXG4gKiBXb3JrIG91dCB0aGUgbG9jYWxlIGZyb20gdGhlIHBvdGVudGlhbCBnbG9iYWwgcHJvcGVydGllcy5cbiAqXG4gKiAqIENsb3N1cmUgQ29tcGlsZXI6IHVzZSBgZ29vZy5MT0NBTEVgLlxuICogKiBJdnkgZW5hYmxlZDogdXNlIGAkbG9jYWxpemUubG9jYWxlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsTG9jYWxlKCk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgbmdJMThuQ2xvc3VyZU1vZGUgIT09ICd1bmRlZmluZWQnICYmIG5nSTE4bkNsb3N1cmVNb2RlICYmXG4gICAgICB0eXBlb2YgZ29vZyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ29vZy5MT0NBTEUgIT09ICdlbicpIHtcbiAgICAvLyAqIFRoZSBkZWZhdWx0IGBnb29nLkxPQ0FMRWAgdmFsdWUgaXMgYGVuYCwgd2hpbGUgQW5ndWxhciB1c2VkIGBlbi1VU2AuXG4gICAgLy8gKiBJbiBvcmRlciB0byBwcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2UgdXNlIEFuZ3VsYXIgZGVmYXVsdCB2YWx1ZSBvdmVyXG4gICAgLy8gICBDbG9zdXJlIENvbXBpbGVyJ3Mgb25lLlxuICAgIHJldHVybiBnb29nLkxPQ0FMRTtcbiAgfSBlbHNlIHtcbiAgICAvLyBLRUVQIGB0eXBlb2YgJGxvY2FsaXplICE9PSAndW5kZWZpbmVkJyAmJiAkbG9jYWxpemUubG9jYWxlYCBJTiBTWU5DIFdJVEggVEhFIExPQ0FMSVpFXG4gICAgLy8gQ09NUElMRS1USU1FIElOTElORVIuXG4gICAgLy9cbiAgICAvLyAqIER1cmluZyBjb21waWxlIHRpbWUgaW5saW5pbmcgb2YgdHJhbnNsYXRpb25zIHRoZSBleHByZXNzaW9uIHdpbGwgYmUgcmVwbGFjZWRcbiAgICAvLyAgIHdpdGggYSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGlzIHRoZSBjdXJyZW50IGxvY2FsZS4gT3RoZXIgZm9ybXMgb2YgdGhpcyBleHByZXNzaW9uIGFyZSBub3RcbiAgICAvLyAgIGd1YXJhbnRlZWQgdG8gYmUgcmVwbGFjZWQuXG4gICAgLy9cbiAgICAvLyAqIER1cmluZyBydW50aW1lIHRyYW5zbGF0aW9uIGV2YWx1YXRpb24sIHRoZSBkZXZlbG9wZXIgaXMgcmVxdWlyZWQgdG8gc2V0IGAkbG9jYWxpemUubG9jYWxlYFxuICAgIC8vICAgaWYgcmVxdWlyZWQsIG9yIGp1c3QgdG8gcHJvdmlkZSB0aGVpciBvd24gYExPQ0FMRV9JRGAgcHJvdmlkZXIuXG4gICAgcmV0dXJuIChpdnlFbmFibGVkICYmIHR5cGVvZiAkbG9jYWxpemUgIT09ICd1bmRlZmluZWQnICYmICRsb2NhbGl6ZS5sb2NhbGUpIHx8XG4gICAgICAgIERFRkFVTFRfTE9DQUxFX0lEO1xuICB9XG59XG5cbi8qKlxuICogQSBidWlsdC1pbiBbZGVwZW5kZW5jeSBpbmplY3Rpb24gdG9rZW5dKGd1aWRlL2dsb3NzYXJ5I2RpLXRva2VuKVxuICogdGhhdCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgcm9vdCBpbmplY3RvciBmb3IgYm9vdHN0cmFwcGluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX01PRFVMRV9QUk9WSURFUlM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBBcHBsaWNhdGlvblJlZixcbiAgICB1c2VDbGFzczogQXBwbGljYXRpb25SZWYsXG4gICAgZGVwczogW05nWm9uZSwgQ29uc29sZSwgSW5qZWN0b3IsIEVycm9ySGFuZGxlciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBBcHBsaWNhdGlvbkluaXRTdGF0dXNdXG4gIH0sXG4gIHtwcm92aWRlOiBTQ0hFRFVMRVIsIGRlcHM6IFtOZ1pvbmVdLCB1c2VGYWN0b3J5OiB6b25lU2NoZWR1bGVyRmFjdG9yeX0sXG4gIHtcbiAgICBwcm92aWRlOiBBcHBsaWNhdGlvbkluaXRTdGF0dXMsXG4gICAgdXNlQ2xhc3M6IEFwcGxpY2F0aW9uSW5pdFN0YXR1cyxcbiAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBBUFBfSU5JVElBTElaRVJdXVxuICB9LFxuICB7cHJvdmlkZTogQ29tcGlsZXIsIHVzZUNsYXNzOiBDb21waWxlciwgZGVwczogW119LFxuICBBUFBfSURfUkFORE9NX1BST1ZJREVSLFxuICB7cHJvdmlkZTogSXRlcmFibGVEaWZmZXJzLCB1c2VGYWN0b3J5OiBfaXRlcmFibGVEaWZmZXJzRmFjdG9yeSwgZGVwczogW119LFxuICB7cHJvdmlkZTogS2V5VmFsdWVEaWZmZXJzLCB1c2VGYWN0b3J5OiBfa2V5VmFsdWVEaWZmZXJzRmFjdG9yeSwgZGVwczogW119LFxuICB7XG4gICAgcHJvdmlkZTogTE9DQUxFX0lELFxuICAgIHVzZUZhY3Rvcnk6IF9sb2NhbGVGYWN0b3J5LFxuICAgIGRlcHM6IFtbbmV3IEluamVjdChMT0NBTEVfSUQpLCBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCldXVxuICB9LFxuICB7cHJvdmlkZTogREVGQVVMVF9DVVJSRU5DWV9DT0RFLCB1c2VWYWx1ZTogVVNEX0NVUlJFTkNZX0NPREV9LFxuXTtcblxuLyoqXG4gKiBTY2hlZHVsZSB3b3JrIGF0IG5leHQgYXZhaWxhYmxlIHNsb3QuXG4gKlxuICogSW4gSXZ5IHRoaXMgaXMganVzdCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYC4gRm9yIGNvbXBhdGliaWxpdHkgcmVhc29ucyB3aGVuIGJvb3RzdHJhcHBlZFxuICogdXNpbmcgYHBsYXRmb3JtUmVmLmJvb3RzdHJhcGAgd2UgbmVlZCB0byB1c2UgYE5nWm9uZS5vblN0YWJsZWAgYXMgdGhlIHNjaGVkdWxpbmcgbWVjaGFuaXNtLlxuICogVGhpcyBvdmVycmlkZXMgdGhlIHNjaGVkdWxpbmcgbWVjaGFuaXNtIGluIEl2eSB0byBgTmdab25lLm9uU3RhYmxlYC5cbiAqXG4gKiBAcGFyYW0gbmdab25lIE5nWm9uZSB0byB1c2UgZm9yIHNjaGVkdWxpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6b25lU2NoZWR1bGVyRmFjdG9yeShuZ1pvbmU6IE5nWm9uZSk6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCB7XG4gIGxldCBxdWV1ZTogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgbmdab25lLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgcXVldWUucG9wKCkhKCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgcXVldWUucHVzaChmbik7XG4gIH07XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgcm9vdCBpbmplY3RvciBmb3IgYW4gYXBwIHdpdGhcbiAqIHByb3ZpZGVycyBvZiBgQGFuZ3VsYXIvY29yZWAgZGVwZW5kZW5jaWVzIHRoYXQgYEFwcGxpY2F0aW9uUmVmYCBuZWVkc1xuICogdG8gYm9vdHN0cmFwIGNvbXBvbmVudHMuXG4gKlxuICogUmUtZXhwb3J0ZWQgYnkgYEJyb3dzZXJNb2R1bGVgLCB3aGljaCBpcyBpbmNsdWRlZCBhdXRvbWF0aWNhbGx5IGluIHRoZSByb290XG4gKiBgQXBwTW9kdWxlYCB3aGVuIHlvdSBjcmVhdGUgYSBuZXcgYXBwIHdpdGggdGhlIENMSSBgbmV3YCBjb21tYW5kLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtwcm92aWRlcnM6IEFQUExJQ0FUSU9OX01PRFVMRV9QUk9WSURFUlN9KVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTW9kdWxlIHtcbiAgLy8gSW5qZWN0IEFwcGxpY2F0aW9uUmVmIHRvIG1ha2UgaXQgZWFnZXIuLi5cbiAgY29uc3RydWN0b3IoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbn1cbiJdfQ==