import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TUI_ORDERED_SHORT_WEEK_DAYS, TuiPrimitiveCalendarComponent} from '@taiga-ui/core';
import {Observable} from 'rxjs';

/**
 * @internal
 * @dynamic
 */
@Component({
    selector: `tui-primitive-calendar-mobile`,
    templateUrl: `./primitive-calendar-mobile.template.html`,
    styleUrls: [`./primitive-calendar-mobile.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': `isIOS`,
    },
})
export class TuiPrimitiveCalendarMobileComponent extends TuiPrimitiveCalendarComponent {
    constructor(
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_ORDERED_SHORT_WEEK_DAYS)
        weekDays$: Observable<[string, string, string, string, string, string, string]>,
    ) {
        super(weekDays$);
    }
}
