import {Directive} from '@angular/core';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';

/**
 * @deprecated use @taiga-ui/addon-table
 */
@Directive({
    selector: '[tuiTableMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            useValue: 'table', // TuiAppearance.Table
        },
    ],
})
export class TuiTableModeDirective {}
