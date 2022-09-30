import {NgModule} from '@angular/core';
import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TUI_MOBILE_CALENDAR} from '@taiga-ui/kit';

import {TuiMobileCalendarDialogComponent} from './mobile-calendar-dialog.component';

@NgModule({
    imports: [TuiMobileCalendarModule],
    declarations: [TuiMobileCalendarDialogComponent],
    exports: [TuiMobileCalendarDialogComponent],
    entryComponents: [TuiMobileCalendarDialogComponent],
    providers: [
        {
            provide: TUI_MOBILE_CALENDAR,
            useValue: TuiMobileCalendarDialogComponent,
        },
    ],
})
export class TuiMobileCalendarDialogModule {}
