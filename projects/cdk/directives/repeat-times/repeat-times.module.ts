import {NgModule} from '@angular/core';

import {TuiRepeatTimesDirective} from './repeat-times.directive';

@NgModule({
    declarations: [TuiRepeatTimesDirective],
    exports: [TuiRepeatTimesDirective],
})
export class TuiRepeatTimesModule {}
