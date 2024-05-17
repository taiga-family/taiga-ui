import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiCalendarSheetComponent} from '@taiga-ui/core';

/**
 * @internal
 */
@Component({
    selector: 'tui-primitive-calendar-mobile',
    templateUrl: './primitive-calendar-mobile.template.html',
    styleUrls: ['./primitive-calendar-mobile.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiPrimitiveCalendarMobileComponent extends TuiCalendarSheetComponent {
    protected readonly isIOS = inject(TUI_IS_IOS);
}
