import {Directive, inject, input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownSheetComponent} from './dropdown-sheet.component';

@Directive({
    selector: '[tuiDropdownSheet]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? TuiDropdownSheetComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
})
export class TuiDropdownSheet {
    public readonly tuiDropdownSheet = input('');
}
