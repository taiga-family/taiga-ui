import {contentChild, Directive, inject} from '@angular/core';
import {type TuiDay, type TuiDayRange, type TuiTime} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/portals/dropdown';
import {
    type TuiInputDateBase,
    TuiInputDateDirective,
} from '@taiga-ui/kit/components/input-date';
import {TuiInputDateRangeDirective} from '@taiga-ui/kit/components/input-date-range';
import {TuiInputDateTimeDirective} from '@taiga-ui/kit/components/input-date-time';

import {TuiMobileCalendarDropdownComponent} from './mobile-calendar-dropdown.component';

@Directive({
    selector: '[tuiMobileCalendar]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? TuiMobileCalendarDropdownComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
})
export class TuiMobileCalendarDropdown {
    public readonly single = contentChild(TuiInputDateDirective);
    public readonly range = contentChild(TuiInputDateRangeDirective);
    public readonly dateTime = contentChild(TuiInputDateTimeDirective);
    public readonly handlers = inject(TuiItemsHandlersDirective);

    public get date():
        | TuiInputDateBase<readonly [TuiDay, TuiTime | null]>
        | TuiInputDateBase<TuiDay>
        | TuiInputDateBase<TuiDayRange>
        | undefined {
        return this.single() || this.range() || this.dateTime();
    }
}
