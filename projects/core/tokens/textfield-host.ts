import {InjectionToken} from '@angular/core';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

export const TUI_TEXTFIELD_HOST = new InjectionToken<TuiTextfieldHost>(
    `An interface to communicate with textfield based controls`,
);
