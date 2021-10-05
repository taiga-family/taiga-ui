import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';

export const TUI_TEXTFIELD_APPEARANCE = new InjectionToken<string>(
    'Appearance for inputs',
    {
        factory: () => TuiAppearance.Textfield,
    },
);
