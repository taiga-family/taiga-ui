/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ApplicationRef, InjectionToken, Optional } from '@angular/core';
import { EventReplayer } from './api/event.replayer';
import { PrebootOptions } from './common/preboot.interfaces';
export declare const PREBOOT_OPTIONS: InjectionToken<PrebootOptions>;
export declare function PREBOOT_FACTORY(doc: Document, prebootOpts: PrebootOptions, nonce: string | null, platformId: Object, appRef: ApplicationRef, eventReplayer: EventReplayer): () => void;
export declare const PREBOOT_PROVIDER: {
    provide: InjectionToken<() => void>;
    useFactory: typeof PREBOOT_FACTORY;
    deps: (typeof EventReplayer | InjectionToken<PrebootOptions> | Optional[] | typeof ApplicationRef)[];
    multi: boolean;
};
