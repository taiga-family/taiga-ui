import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';

import {TuiAxesComponent} from './axes.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesDirective],
    declarations: [TuiAxesComponent],
    exports: [TuiAxesComponent],
})
export class TuiAxesModule {}
