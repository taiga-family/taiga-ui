import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRipple} from '@taiga-ui/addon-mobile/directives/ripple';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {TuiCalendarSheet, TuiCalendarSheetPipe} from '@taiga-ui/core/components/calendar';

@Component({
    selector: 'tui-mobile-calendar-sheet',
    imports: [TuiCalendarSheetPipe, TuiRipple],
    templateUrl: './mobile-calendar-sheet.template.html',
    styleUrl: './mobile-calendar-sheet.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileCalendarSheet extends TuiCalendarSheet {
    protected readonly isIOS = inject(TUI_IS_IOS);
}
