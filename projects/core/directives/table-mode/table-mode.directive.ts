import {Directive} from '@angular/core';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';

/**
 * TODO: Remove in v.3
 * @deprecated use @taiga-ui/addon-table
 */
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
