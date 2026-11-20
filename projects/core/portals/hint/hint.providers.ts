import {inject, InjectionToken, type Type} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';

import {TuiHintComponent} from './hint.component';

/**
 * A component to display a hint
 */
export const TUI_HINT_COMPONENT = new InjectionToken<Type<unknown>>(
    ngDevMode ? 'TUI_HINT_COMPONENT' : '',
    {factory: () => TuiHintComponent},
);

export const TUI_HINT_OFFSET = new InjectionToken<{bubble: number; arrow: number}>(
    ngDevMode ? 'TUI_HINT_OFFSET' : '',
    {factory: () => ({bubble: inject(WA_IS_MOBILE) ? 16 : 8, arrow: 22})},
);
