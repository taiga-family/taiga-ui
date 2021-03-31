import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiAxesComponent} from './axes.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule, TuiModeModule],
    declarations: [TuiAxesComponent],
    exports: [TuiAxesComponent],
})
export class TuiAxesModule {}
