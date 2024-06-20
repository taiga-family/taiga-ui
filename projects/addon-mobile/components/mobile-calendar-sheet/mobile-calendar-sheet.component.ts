import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRipple} from '@taiga-ui/addon-mobile/directives';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {TuiCalendarSheet} from '@taiga-ui/core/components/calendar';
import {TuiCalendarSheetPipe} from '@taiga-ui/core/pipes/calendar-sheet';

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-sheet',
    imports: [TuiLet, TuiCalendarSheetPipe, TuiRepeatTimes, TuiRipple],
    templateUrl: './mobile-calendar-sheet.template.html',
    styleUrls: ['./mobile-calendar-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileCalendarSheet extends TuiCalendarSheet {
    protected readonly isIOS = inject(TUI_IS_IOS);
}
