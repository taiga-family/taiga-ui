import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiAxesComponent} from './axes.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule],
    declarations: [TuiAxesComponent],
    exports: [TuiAxesComponent],
})
export class TuiAxesModule {}
