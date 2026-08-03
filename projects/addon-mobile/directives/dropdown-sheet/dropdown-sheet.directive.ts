import {Directive, inject, input} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATA_LIST_SIZE} from '@taiga-ui/core/components/data-list';
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
        {
            provide: TUI_DATA_LIST_SIZE,
            useFactory: () => (inject(WA_IS_MOBILE) ? 'l' : ''),
        },
    ],
})
export class TuiDropdownSheet {
    public readonly tuiDropdownSheet = input(
        {},
        {
            transform: (
                options: Partial<TuiSheetDialogOptions> | string,
            ): Partial<TuiSheetDialogOptions> =>
                tuiIsString(options) ? {label: options} : options,
        },
    );
}
