import {inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {
    tuiCreateToken,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';

import {TUI_ANDROID_LOADER} from './loader-android/loader-android.component';
import {TUI_IOS_LOADER} from './loader-ios/loader-ios.component';

/**
 * Stream that emits when loading is over
 */
export const TUI_PULL_TO_REFRESH_LOADED = tuiCreateToken<Observable<unknown>>(EMPTY);

/**
 * Pull threshold in pixels until loading starts
 */
export const TUI_PULL_TO_REFRESH_THRESHOLD = tuiCreateToken(50);

/**
 * Loading indicator component that gets current pull distance in pixels as context
 */
export const TUI_PULL_TO_REFRESH_COMPONENT = tuiCreateTokenFromFactory<
    PolymorpheusContent<TuiContext<number>>
>(() => (inject(TUI_IS_IOS) ? TUI_IOS_LOADER : TUI_ANDROID_LOADER));
