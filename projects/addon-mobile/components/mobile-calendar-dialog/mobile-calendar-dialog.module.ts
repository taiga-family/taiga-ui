import {NgModule} from '@angular/core';
import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TUI_MOBILE_CALENDAR} from '@taiga-ui/kit';

import {TuiMobileCalendarDialogComponent} from './mobile-calendar-dialog.component';
import {TuiMobileCalendarDropdownComponent} from './mobile-calendar-dropdown.component';

@NgModule({
    imports: [TuiMobileCalendarModule, TuiActiveZoneModule],
    declarations: [TuiMobileCalendarDialogComponent, TuiMobileCalendarDropdownComponent],
    providers: [
        {
            provide: TUI_MOBILE_CALENDAR,
            useValue: TuiMobileCalendarDropdownComponent,
        },
    ],
    exports: [TuiMobileCalendarDialogComponent],
})
export class TuiMobileCalendarDialogModule {}
