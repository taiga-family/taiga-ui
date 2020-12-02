/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger } from '../logger';
import { Analytics, EventOptions, PageviewOptions, ScreenviewOptions, TimingOptions } from './api';
/**
 * Analytics implementation that logs analytics events to a logger. This should be used for
 * debugging mainly.
 */
export declare class LoggingAnalytics implements Analytics {
    protected _logger: Logger;
    constructor(_logger: Logger);
    event(category: string, action: string, options?: EventOptions): void;
    screenview(screenName: string, appName: string, options?: ScreenviewOptions): void;
    pageview(path: string, options?: PageviewOptions): void;
    timing(category: string, variable: string, time: string | number, options?: TimingOptions): void;
    flush(): Promise<void>;
}
