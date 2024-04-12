import {Directive, inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {
    TUI_DROPDOWN_COMPONENT,
    TuiDropdownComponent,
} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Directive({
    selector: '[tuiDropdownMobile]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE) ? TuiDropdownMobileComponent : TuiDropdownComponent,
        },
    ],
    host: {
        '[style.visibility]': '"visible"',
    },
})
export class TuiDropdownMobileDirective {}
