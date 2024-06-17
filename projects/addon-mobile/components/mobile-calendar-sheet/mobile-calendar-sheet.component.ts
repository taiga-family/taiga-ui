import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRippleDirective} from '@taiga-ui/addon-mobile/directives';
import {TUI_IS_IOS, TuiLet, TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiCalendarSheetComponent, TuiCalendarSheetPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-sheet',
    imports: [TuiLet, TuiCalendarSheetPipe, TuiRepeatTimesDirective, TuiRippleDirective],
    templateUrl: './mobile-calendar-sheet.template.html',
    styleUrls: ['./mobile-calendar-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileCalendarSheetComponent extends TuiCalendarSheetComponent {
    protected readonly isIOS = inject(TUI_IS_IOS);
}
