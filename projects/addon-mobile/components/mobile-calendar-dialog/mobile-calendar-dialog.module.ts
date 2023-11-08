import {NgModule} from '@angular/core';
import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TUI_MOBILE_CALENDAR} from '@taiga-ui/kit';

import {TuiMobileCalendarDialogComponent} from './mobile-calendar-dialog.component';

@NgModule({
    imports: [TuiMobileCalendarModule],
    declarations: [TuiMobileCalendarDialogComponent],
    providers: [
        {
            provide: TUI_MOBILE_CALENDAR,
            useValue: TuiMobileCalendarDialogComponent,
        },
    ],
    exports: [TuiMobileCalendarDialogComponent],
})
export class TuiMobileCalendarDialogModule {}
