import {inject} from '@angular/core';
import {type TuiPlatform} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

import {TUI_IS_ANDROID} from './is-android';
import {TUI_IS_IOS} from './is-ios';

export const TUI_PLATFORM = tuiCreateTokenFromFactory<TuiPlatform>(() => {
    if (inject(TUI_IS_IOS)) {
        return 'ios';
    }

    if (inject(TUI_IS_ANDROID)) {
        return 'android';
    }

    return 'web';
});
