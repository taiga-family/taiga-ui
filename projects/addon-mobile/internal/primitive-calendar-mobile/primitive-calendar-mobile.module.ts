import {NgModule} from '@angular/core';
import {TuiRippleModule} from '@taiga-ui/addon-mobile/directives/ripple';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';

import {TuiPrimitiveCalendarMobileComponent} from './primitive-calendar-mobile.component';

/**
 * @internal
 */
@NgModule({
    imports: [TuiRepeatTimesModule, TuiRippleModule],
    declarations: [TuiPrimitiveCalendarMobileComponent],
    exports: [TuiPrimitiveCalendarMobileComponent],
})
export class TuiPrimitiveCalendarMobileModule {}
