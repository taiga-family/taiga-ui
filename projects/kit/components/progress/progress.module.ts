import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';

import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';
import {TuiProgressColorSegmentsDirective} from './progress-bar/progress-color-segments.directive';
import {TuiProgressCircleComponent} from './progress-circle/progress-circle.component';
import {TuiProgressLabelComponent} from './progress-label/progress-label.component';
import {TuiProgressSegmentedDirective} from './progress-segmented/progress-segmented.directive';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesDirective, TuiProgressSegmentedDirective],
    declarations: [
        TuiProgressBarComponent,
        TuiProgressColorSegmentsDirective,
        TuiProgressCircleComponent,
        TuiProgressLabelComponent,
    ],
    exports: [
        TuiProgressBarComponent,
        TuiProgressCircleComponent,
        TuiProgressColorSegmentsDirective,
        TuiProgressLabelComponent,
        TuiProgressSegmentedDirective,
    ],
})
export class TuiProgressModule {}
