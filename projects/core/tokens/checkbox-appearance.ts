import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';

export const TUI_CHECKBOX_APPEARANCE = new InjectionToken<readonly [string, string]>(
    'Unchecked and checked appearances for Checkbox',
    {
        factory: () => [TuiAppearance.Outline, TuiAppearance.Primary],
    },
);
