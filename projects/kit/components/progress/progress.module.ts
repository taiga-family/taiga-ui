import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';

import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';
import {TuiProgressColorSegmentsDirective} from './progress-bar/progress-color-segments.directive';
import {TuiProgressCircleComponent} from './progress-circle/progress-circle.component';
import {TuiProgressLabelComponent} from './progress-label/progress-label.component';
import {TuiProgressSegmentedComponent} from './progress-segmented/progress-segmented.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule],
    declarations: [
        TuiProgressBarComponent,
        TuiProgressColorSegmentsDirective,
        TuiProgressCircleComponent,
        TuiProgressLabelComponent,
        TuiProgressSegmentedComponent,
    ],
    exports: [
        TuiProgressBarComponent,
        TuiProgressCircleComponent,
        TuiProgressColorSegmentsDirective,
        TuiProgressLabelComponent,
        TuiProgressSegmentedComponent,
    ],
})
export class TuiProgressModule {}
