/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Analytics, EventOptions, PageviewOptions, ScreenviewOptions, TimingOptions } from './api';
/**
 * Analytics implementation that reports to multiple analytics backend.
 */
export declare class MultiAnalytics implements Analytics {
    protected _backends: Analytics[];
    constructor(_backends?: Analytics[]);
    push(...backend: Analytics[]): void;
    event(category: string, action: string, options?: EventOptions): void;
    screenview(screenName: string, appName: string, options?: ScreenviewOptions): void;
    pageview(path: string, options?: PageviewOptions): void;
    timing(category: string, variable: string, time: string | number, options?: TimingOptions): void;
    flush(): Promise<void>;
}
