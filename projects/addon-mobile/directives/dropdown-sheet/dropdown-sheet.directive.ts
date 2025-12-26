import {Directive, inject, input} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/portals/dropdown';

import {TuiDropdownSheetComponent} from './dropdown-sheet.component';

@Directive({
    selector: '[tuiDropdownSheet]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(WA_IS_MOBILE)
                    ? TuiDropdownSheetComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
})
export class TuiDropdownSheet {
    public readonly tuiDropdownSheet = input('');
}
