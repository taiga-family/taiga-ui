import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRippleDirective} from '@taiga-ui/addon-mobile/directives';
import {TUI_IS_IOS, TuiLetDirective, TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiCalendarSheetComponent, TuiCalendarSheetPipe} from '@taiga-ui/core';

/**
 * @internal
 */
@Component({
    standalone: true,
    selector: 'tui-primitive-calendar-mobile',
    imports: [
        TuiLetDirective,
        TuiCalendarSheetPipe,
        TuiRepeatTimesDirective,
        TuiRippleDirective,
    ],
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
