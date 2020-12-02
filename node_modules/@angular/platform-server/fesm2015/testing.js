/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { createPlatformFactory, NgModule } from '@angular/core';
import { ɵplatformCoreDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ɵINTERNAL_SERVER_PLATFORM_PROVIDERS, ɵSERVER_RENDER_PROVIDERS } from '@angular/platform-server';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/testing/src/server.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Platform for testing
 *
 * \@publicApi
 * @type {?}
 */
const platformServerTesting = createPlatformFactory(ɵplatformCoreDynamicTesting, 'serverTesting', ɵINTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * \@publicApi
 */
class ServerTestingModule {
}
ServerTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserDynamicTestingModule],
                imports: [NoopAnimationsModule],
                providers: ɵSERVER_RENDER_PROVIDERS
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/testing/src/testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/testing/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/testing/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ServerTestingModule, platformServerTesting };
//# sourceMappingURL=testing.js.map
