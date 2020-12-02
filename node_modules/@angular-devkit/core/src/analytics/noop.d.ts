/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Analytics } from './api';
/**
 * Analytics implementation that does nothing.
 */
export declare class NoopAnalytics implements Analytics {
    event(): void;
    screenview(): void;
    pageview(): void;
    timing(): void;
    flush(): Promise<void>;
}
