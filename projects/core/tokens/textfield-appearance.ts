import {InjectionToken} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';

// TODO: drop in v4
/** @deprecated use {@link TUI_TEXTFIELD_APPEARANCE_DIRECTIVE} instead */
export const TUI_TEXTFIELD_APPEARANCE = new InjectionToken<string>(
    `[TUI_TEXTFIELD_APPEARANCE]: Appearance for inputs`,
    {
        factory: () => TuiAppearance.Textfield,
    },
);
