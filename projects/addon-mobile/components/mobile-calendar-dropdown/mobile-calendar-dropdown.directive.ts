import {ContentChild, Directive, inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';
import {TuiInputDateDirective} from '@taiga-ui/kit/components/input-date';

import {TuiMobileCalendarDropdown} from './mobile-calendar-dropdown.component';

// TODO: Rename to TuiMobileCalendarDropdown in v5
@Directive({
    standalone: true,
    selector: '[tuiMobileCalendar]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? TuiMobileCalendarDropdown
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
})
export class TuiMobileCalendarDropdownNew {
    @ContentChild(TuiInputDateDirective)
    public readonly date?: TuiInputDateDirective;

    public readonly handlers = inject(TuiItemsHandlersDirective);
}
