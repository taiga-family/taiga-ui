import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiRipple} from '@taiga-ui/addon-mobile/directives/ripple';
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
    protected readonly isIOS = inject(WA_IS_IOS);
}
