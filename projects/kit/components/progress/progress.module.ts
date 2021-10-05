import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiProgressColorSegmentsPipe} from './pipes/progress-color-segments.pipe';
import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';
import {TuiProgressCircleComponent} from './progress-circle/progress-circle.component';
import {TuiProgressLabelComponent} from './progress-label/progress-label.component';
import {TuiProgressSegmentedComponent} from './progress-segmented/progress-segmented.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule],
    declarations: [
        TuiProgressBarComponent,
        TuiProgressColorSegmentsPipe,
        TuiProgressCircleComponent,
        TuiProgressLabelComponent,
        TuiProgressSegmentedComponent,
    ],
    exports: [
        TuiProgressBarComponent,
        TuiProgressCircleComponent,
        TuiProgressColorSegmentsPipe,
        TuiProgressLabelComponent,
        TuiProgressSegmentedComponent,
    ],
})
export class TuiProgressModule {}
