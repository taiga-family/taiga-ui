import {Directive} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiTableMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            useValue: TuiAppearance.Table,
        },
    ],
})
export class TuiTableModeDirective {}
