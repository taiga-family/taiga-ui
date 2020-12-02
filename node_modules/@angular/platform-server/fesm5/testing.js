/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { __decorate } from 'tslib';
import { createPlatformFactory, NgModule } from '@angular/core';
import { ɵplatformCoreDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ɵINTERNAL_SERVER_PLATFORM_PROVIDERS, ɵSERVER_RENDER_PROVIDERS } from '@angular/platform-server';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Platform for testing
 *
 * @publicApi
 */
var platformServerTesting = createPlatformFactory(ɵplatformCoreDynamicTesting, 'serverTesting', ɵINTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
var ServerTestingModule = /** @class */ (function () {
    function ServerTestingModule() {
    }
    ServerTestingModule = __decorate([
        NgModule({
            exports: [BrowserDynamicTestingModule],
            imports: [NoopAnimationsModule],
            providers: ɵSERVER_RENDER_PROVIDERS
        })
    ], ServerTestingModule);
    return ServerTestingModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ServerTestingModule, platformServerTesting };
//# sourceMappingURL=testing.js.map
