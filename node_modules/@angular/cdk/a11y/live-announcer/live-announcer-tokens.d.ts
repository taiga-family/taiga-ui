/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/** Possible politeness levels. */
export declare type AriaLivePoliteness = 'off' | 'polite' | 'assertive';
export declare const LIVE_ANNOUNCER_ELEMENT_TOKEN: InjectionToken<HTMLElement | null>;
/** @docs-private */
export declare function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY(): null;
/** Object that can be used to configure the default options for the LiveAnnouncer. */
export interface LiveAnnouncerDefaultOptions {
    /** Default politeness for the announcements. */
    politeness?: AriaLivePoliteness;
    /** Default duration for the announcement messages. */
    duration?: number;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
export declare const LIVE_ANNOUNCER_DEFAULT_OPTIONS: InjectionToken<LiveAnnouncerDefaultOptions>;
