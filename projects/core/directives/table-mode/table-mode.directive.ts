import {Directive} from '@angular/core';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiTableMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            // TODO: remove in ivy compilation
            useValue: 'table', // TuiAppearance.Table
        },
    ],
})
export class TuiTableModeDirective {}
