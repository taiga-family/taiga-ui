/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '../di/injection_token';
/**
 * Provide this token to set the locale of your application.
 * It is used for i18n extraction, by i18n pipes (DatePipe, I18nPluralPipe, CurrencyPipe,
 * DecimalPipe and PercentPipe) and by ICU expressions.
 *
 * See the [i18n guide](guide/i18n#setting-up-locale) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import { LOCALE_ID } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
 * });
 * ```
 *
 * @publicApi
 */
export var LOCALE_ID = new InjectionToken('LocaleId');
/**
 * Provide this token to set the default currency code your application uses for
 * CurrencyPipe when there is no currency code passed into it. This is only used by
 * CurrencyPipe and has no relation to locale currency. Defaults to USD if not configured.
 *
 * See the [i18n guide](guide/i18n#setting-up-locale) for more information.
 *
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always `USD` but this is deprecated from v9.
 *
 * **In v10 the default currency code will be taken from the current locale.**
 *
 * If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
 * your application `NgModule`:
 *
 * ```ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * ```
 *
 * </div>
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
 * });
 * ```
 *
 * @publicApi
 */
export var DEFAULT_CURRENCY_CODE = new InjectionToken('DefaultCurrencyCode');
/**
 * Use this token at bootstrap to provide the content of your translation file (`xtb`,
 * `xlf` or `xlf2`) when you want to translate your application in another language.
 *
 * See the [i18n guide](guide/i18n#merge) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import { TRANSLATIONS } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * // content of your translation file
 * const translations = '....';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: TRANSLATIONS, useValue: translations }]
 * });
 * ```
 *
 * @publicApi
 */
export var TRANSLATIONS = new InjectionToken('Translations');
/**
 * Provide this token at bootstrap to set the format of your {@link TRANSLATIONS}: `xtb`,
 * `xlf` or `xlf2`.
 *
 * See the [i18n guide](guide/i18n#merge) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import { TRANSLATIONS_FORMAT } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }]
 * });
 * ```
 *
 * @publicApi
 */
export var TRANSLATIONS_FORMAT = new InjectionToken('TranslationsFormat');
/**
 * Use this enum at bootstrap as an option of `bootstrapModule` to define the strategy
 * that the compiler should use in case of missing translations:
 * - Error: throw if you have missing translations.
 * - Warning (default): show a warning in the console and/or shell.
 * - Ignore: do nothing.
 *
 * See the [i18n guide](guide/i18n#missing-translation) for more information.
 *
 * @usageNotes
 * ### Example
 * ```typescript
 * import { MissingTranslationStrategy } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   missingTranslation: MissingTranslationStrategy.Error
 * });
 * ```
 *
 * @publicApi
 */
export var MissingTranslationStrategy;
(function (MissingTranslationStrategy) {
    MissingTranslationStrategy[MissingTranslationStrategy["Error"] = 0] = "Error";
    MissingTranslationStrategy[MissingTranslationStrategy["Warning"] = 1] = "Warning";
    MissingTranslationStrategy[MissingTranslationStrategy["Ignore"] = 2] = "Ignore";
})(MissingTranslationStrategy || (MissingTranslationStrategy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvaTE4bi90b2tlbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQVMsVUFBVSxDQUFDLENBQUM7QUFFaEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQ0c7QUFDSCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBUyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNILE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBUyxjQUFjLENBQUMsQ0FBQztBQUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBUyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXBGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsTUFBTSxDQUFOLElBQVksMEJBSVg7QUFKRCxXQUFZLDBCQUEwQjtJQUNwQyw2RUFBUyxDQUFBO0lBQ1QsaUZBQVcsQ0FBQTtJQUNYLCtFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUlyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi4vZGkvaW5qZWN0aW9uX3Rva2VuJztcblxuLyoqXG4gKiBQcm92aWRlIHRoaXMgdG9rZW4gdG8gc2V0IHRoZSBsb2NhbGUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqIEl0IGlzIHVzZWQgZm9yIGkxOG4gZXh0cmFjdGlvbiwgYnkgaTE4biBwaXBlcyAoRGF0ZVBpcGUsIEkxOG5QbHVyYWxQaXBlLCBDdXJyZW5jeVBpcGUsXG4gKiBEZWNpbWFsUGlwZSBhbmQgUGVyY2VudFBpcGUpIGFuZCBieSBJQ1UgZXhwcmVzc2lvbnMuXG4gKlxuICogU2VlIHRoZSBbaTE4biBndWlkZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLWxvY2FsZSkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbiAqIGltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuICpcbiAqIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlLCB7XG4gKiAgIHByb3ZpZGVyczogW3twcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZW4tVVMnIH1dXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FMRV9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdMb2NhbGVJZCcpO1xuXG4vKipcbiAqIFByb3ZpZGUgdGhpcyB0b2tlbiB0byBzZXQgdGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSB5b3VyIGFwcGxpY2F0aW9uIHVzZXMgZm9yXG4gKiBDdXJyZW5jeVBpcGUgd2hlbiB0aGVyZSBpcyBubyBjdXJyZW5jeSBjb2RlIHBhc3NlZCBpbnRvIGl0LiBUaGlzIGlzIG9ubHkgdXNlZCBieVxuICogQ3VycmVuY3lQaXBlIGFuZCBoYXMgbm8gcmVsYXRpb24gdG8gbG9jYWxlIGN1cnJlbmN5LiBEZWZhdWx0cyB0byBVU0QgaWYgbm90IGNvbmZpZ3VyZWQuXG4gKlxuICogU2VlIHRoZSBbaTE4biBndWlkZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLWxvY2FsZSkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogPGRpdiBjbGFzcz1cImFsZXJ0IGlzLWhlbHBmdWxcIj5cbiAqXG4gKiAqKkRlcHJlY2F0aW9uIG5vdGljZToqKlxuICpcbiAqIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgaXMgY3VycmVudGx5IGFsd2F5cyBgVVNEYCBidXQgdGhpcyBpcyBkZXByZWNhdGVkIGZyb20gdjkuXG4gKlxuICogKipJbiB2MTAgdGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSB3aWxsIGJlIHRha2VuIGZyb20gdGhlIGN1cnJlbnQgbG9jYWxlLioqXG4gKlxuICogSWYgeW91IG5lZWQgdGhlIHByZXZpb3VzIGJlaGF2aW9yIHRoZW4gc2V0IGl0IGJ5IGNyZWF0aW5nIGEgYERFRkFVTFRfQ1VSUkVOQ1lfQ09ERWAgcHJvdmlkZXIgaW5cbiAqIHlvdXIgYXBwbGljYXRpb24gYE5nTW9kdWxlYDpcbiAqXG4gKiBgYGB0c1xuICoge3Byb3ZpZGU6IERFRkFVTFRfQ1VSUkVOQ1lfQ09ERSwgdXNlVmFsdWU6ICdVU0QnfVxuICogYGBgXG4gKlxuICogPC9kaXY+XG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG4gKiBpbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbiAqXG4gKiBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSwge1xuICogICBwcm92aWRlcnM6IFt7cHJvdmlkZTogREVGQVVMVF9DVVJSRU5DWV9DT0RFLCB1c2VWYWx1ZTogJ0VVUicgfV1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9DVVJSRU5DWV9DT0RFID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0RlZmF1bHRDdXJyZW5jeUNvZGUnKTtcblxuLyoqXG4gKiBVc2UgdGhpcyB0b2tlbiBhdCBib290c3RyYXAgdG8gcHJvdmlkZSB0aGUgY29udGVudCBvZiB5b3VyIHRyYW5zbGF0aW9uIGZpbGUgKGB4dGJgLFxuICogYHhsZmAgb3IgYHhsZjJgKSB3aGVuIHlvdSB3YW50IHRvIHRyYW5zbGF0ZSB5b3VyIGFwcGxpY2F0aW9uIGluIGFub3RoZXIgbGFuZ3VhZ2UuXG4gKlxuICogU2VlIHRoZSBbaTE4biBndWlkZV0oZ3VpZGUvaTE4biNtZXJnZSkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVFJBTlNMQVRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbiAqIGltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuICpcbiAqIC8vIGNvbnRlbnQgb2YgeW91ciB0cmFuc2xhdGlvbiBmaWxlXG4gKiBjb25zdCB0cmFuc2xhdGlvbnMgPSAnLi4uLic7XG4gKlxuICogcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUsIHtcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFRSQU5TTEFUSU9OUywgdXNlVmFsdWU6IHRyYW5zbGF0aW9ucyB9XVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBUUkFOU0xBVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignVHJhbnNsYXRpb25zJyk7XG5cbi8qKlxuICogUHJvdmlkZSB0aGlzIHRva2VuIGF0IGJvb3RzdHJhcCB0byBzZXQgdGhlIGZvcm1hdCBvZiB5b3VyIHtAbGluayBUUkFOU0xBVElPTlN9OiBgeHRiYCxcbiAqIGB4bGZgIG9yIGB4bGYyYC5cbiAqXG4gKiBTZWUgdGhlIFtpMThuIGd1aWRlXShndWlkZS9pMThuI21lcmdlKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUUkFOU0xBVElPTlNfRk9STUFUIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbiAqIGltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuICpcbiAqIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlLCB7XG4gKiAgIHByb3ZpZGVyczogW3twcm92aWRlOiBUUkFOU0xBVElPTlNfRk9STUFULCB1c2VWYWx1ZTogJ3hsZicgfV1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05TX0ZPUk1BVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdUcmFuc2xhdGlvbnNGb3JtYXQnKTtcblxuLyoqXG4gKiBVc2UgdGhpcyBlbnVtIGF0IGJvb3RzdHJhcCBhcyBhbiBvcHRpb24gb2YgYGJvb3RzdHJhcE1vZHVsZWAgdG8gZGVmaW5lIHRoZSBzdHJhdGVneVxuICogdGhhdCB0aGUgY29tcGlsZXIgc2hvdWxkIHVzZSBpbiBjYXNlIG9mIG1pc3NpbmcgdHJhbnNsYXRpb25zOlxuICogLSBFcnJvcjogdGhyb3cgaWYgeW91IGhhdmUgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gKiAtIFdhcm5pbmcgKGRlZmF1bHQpOiBzaG93IGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBhbmQvb3Igc2hlbGwuXG4gKiAtIElnbm9yZTogZG8gbm90aGluZy5cbiAqXG4gKiBTZWUgdGhlIFtpMThuIGd1aWRlXShndWlkZS9pMThuI21pc3NpbmctdHJhbnNsYXRpb24pIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuICogaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG4gKlxuICogcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUsIHtcbiAqICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5FcnJvclxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBlbnVtIE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5IHtcbiAgRXJyb3IgPSAwLFxuICBXYXJuaW5nID0gMSxcbiAgSWdub3JlID0gMixcbn1cbiJdfQ==