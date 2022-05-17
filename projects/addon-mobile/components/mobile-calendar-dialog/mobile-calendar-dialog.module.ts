import {NgModule} from '@angular/core';
import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TUI_MOBILE_CALENDAR} from '@taiga-ui/kit';

import {TuiMobileCalendarDialogComponent} from './mobile-calendar-dialog.component';

// TODO: 3.0 remove in ivy compilation
export const MOBILE_CALENDAR_COMPONENT = TuiMobileCalendarDialogComponent;

@NgModule({
    imports: [TuiMobileCalendarModule],
    declarations: [TuiMobileCalendarDialogComponent],
    exports: [TuiMobileCalendarDialogComponent],
    entryComponents: [TuiMobileCalendarDialogComponent],
    providers: [
        {
            provide: TUI_MOBILE_CALENDAR,
            useValue: MOBILE_CALENDAR_COMPONENT,
        },
    ],
})
export class TuiMobileCalendarDialogModule {}
