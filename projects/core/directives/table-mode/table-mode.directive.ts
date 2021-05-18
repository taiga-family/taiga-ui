import {Directive} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';

// TODO: remove in ivy compilation
export const TABLE_MODE = TuiAppearance.Table;

@Directive({
    selector: '[tuiTableMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            useValue: TABLE_MODE,
        },
    ],
})
export class TuiTableModeDirective {}
