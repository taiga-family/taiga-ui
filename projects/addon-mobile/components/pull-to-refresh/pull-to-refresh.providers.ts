import {inject, InjectionToken} from '@angular/core';
import {TUI_IS_IOS, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, Observable} from 'rxjs';

import {TUI_ANDROID_LOADER} from './loader-android/loader-android.component';
import {TUI_IOS_LOADER} from './loader-ios/loader-ios.component';

/**
 * Stream that emits when loading is over
 */
export const TUI_PULL_TO_REFRESH_LOADED = new InjectionToken<Observable<unknown>>(
    `[TUI_PULL_TO_REFRESH_LOADED]`,
    {
        factory: () => EMPTY,
    },
);

/**
 * Loading indicator component that gets current pull distance in pixels as context
 */
export const TUI_PULL_TO_REFRESH_COMPONENT = new InjectionToken<
    PolymorpheusContent<TuiContextWithImplicit<number>>
>(`[TUI_PULL_TO_REFRESH_COMPONENT]`, {
    factory: () => (inject(TUI_IS_IOS) ? TUI_IOS_LOADER : TUI_ANDROID_LOADER),
});

/**
 * @deprecated renamed to {@link TUI_PULL_TO_REFRESH_LOADED}
 */
export const TUI_LOADED = TUI_PULL_TO_REFRESH_LOADED;
