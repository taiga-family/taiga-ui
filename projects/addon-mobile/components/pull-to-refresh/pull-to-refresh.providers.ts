import {inject, InjectionToken} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {EMPTY, type Observable} from 'rxjs';

import {TUI_ANDROID_LOADER} from './loader-android/loader-android.component';
import {TUI_IOS_LOADER} from './loader-ios/loader-ios.component';

/**
 * Stream that emits when loading is over
 */
export const TUI_PULL_TO_REFRESH_LOADED = new InjectionToken<Observable<unknown>>(
    ngDevMode ? 'TUI_PULL_TO_REFRESH_LOADED' : '',
    {
        factory: () => EMPTY,
    },
);

/**
 * Pull threshold in pixels until loading starts
 */
export const TUI_PULL_TO_REFRESH_THRESHOLD = new InjectionToken(
    ngDevMode ? 'TUI_PULL_TO_REFRESH_THRESHOLD' : '',
    {
        factory: () => 50,
    },
);

/**
 * Loading indicator component that gets current pull distance in pixels as context
 */
export const TUI_PULL_TO_REFRESH_COMPONENT = new InjectionToken<
    PolymorpheusContent<TuiContext<number>>
>(ngDevMode ? 'TUI_PULL_TO_REFRESH_COMPONENT' : '', {
    factory: () => (inject(WA_IS_IOS) ? TUI_IOS_LOADER : TUI_ANDROID_LOADER),
});
