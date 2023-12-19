import {inject} from '@angular/core';
import {TuiPlatform} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils';

import {TUI_IS_ANDROID} from './is-android';
import {TUI_IS_IOS} from './is-ios';

// TODO: Switch to factory in 4.0
export const TUI_PLATFORM = tuiCreateToken<TuiPlatform>('web');

export function tuiPlatformFactory(): TuiPlatform {
    if (inject(TUI_IS_IOS)) {
        return 'ios';
    }

    if (inject(TUI_IS_ANDROID)) {
        return 'android';
    }

    return 'web';
}
