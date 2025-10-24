import {computed, contentChild, Directive, inject} from '@angular/core';
import {type TuiDay, type TuiDayRange, type TuiTime} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';
import {
    type TuiInputDateBase,
    TuiInputDateDirective,
} from '@taiga-ui/kit/components/input-date';
import {TuiInputDateRangeDirective} from '@taiga-ui/kit/components/input-date-range';
import {TuiInputDateTimeDirective} from '@taiga-ui/kit/components/input-date-time';

import {TuiMobileCalendarDropdown} from './mobile-calendar-dropdown.component';

// TODO: Rename to TuiMobileCalendarDropdown in v5
@Directive({
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
    public readonly single = contentChild(TuiInputDateDirective);

    public readonly range = contentChild(TuiInputDateRangeDirective);

    public readonly dateTime = contentChild(TuiInputDateTimeDirective);

    public readonly handlers = inject(TuiItemsHandlersDirective);

    public readonly date = computed<
        | TuiInputDateBase<readonly [TuiDay, TuiTime | null]>
        | TuiInputDateBase<TuiDay>
        | TuiInputDateBase<TuiDayRange>
        | undefined
    >(() => this.single() || this.range() || this.dateTime());
}
