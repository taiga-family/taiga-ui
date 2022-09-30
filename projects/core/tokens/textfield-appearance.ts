import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';

export const TUI_TEXTFIELD_APPEARANCE = new InjectionToken<string>(
    `[TUI_TEXTFIELD_APPEARANCE]: Appearance for inputs`,
    {
        factory: () => TuiAppearance.Textfield,
    },
);
