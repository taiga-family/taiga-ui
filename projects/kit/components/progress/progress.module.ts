import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';

import {TuiProgressBar} from './progress-bar/progress-bar.component';
import {TuiProgressColorSegments} from './progress-bar/progress-color-segments.directive';
import {TuiProgressCircle} from './progress-circle/progress-circle.component';
import {TuiProgressLabel} from './progress-label/progress-label.component';
import {TuiProgressSegmented} from './progress-segmented/progress-segmented.directive';

@NgModule({
    imports: [CommonModule, TuiRepeatTimes, TuiProgressSegmented],
    declarations: [
        TuiProgressBar,
        TuiProgressColorSegments,
        TuiProgressCircle,
        TuiProgressLabel,
    ],
    exports: [
        TuiProgressBar,
        TuiProgressCircle,
        TuiProgressColorSegments,
        TuiProgressLabel,
        TuiProgressSegmented,
    ],
})
export class TuiProgressModule {}
