import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRippleModule} from '@taiga-ui/addon-mobile/directives/ripple';
import {TuiTouchableModule} from '@taiga-ui/addon-mobile/directives/touchable';
import {TuiPrimitiveCalendarMobileModule} from '@taiga-ui/addon-mobile/internal/primitive-calendar-mobile';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiMonthPipeModule} from '@taiga-ui/core';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiMobileCalendarComponent} from './mobile-calendar.component';

@NgModule({
    imports: [
        CommonModule,
        ScrollingModule,
        TuiTouchableModule,
        TuiRippleModule,
        TuiMapperPipeModule,
        TuiLinkModule,
        TuiPrimitiveCalendarMobileModule,
        TuiButtonModule,
        TuiMonthPipeModule,
    ],
    declarations: [TuiMobileCalendarComponent],
    exports: [TuiMobileCalendarComponent],
})
export class TuiMobileCalendarModule {}
