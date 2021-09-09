import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiProgressColorSegmentsPipe} from './pipes/progress-color-segments.pipe';
import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';
import {TuiProgressLabelComponent} from './progress-label/progress-label.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TuiProgressBarComponent,
        TuiProgressLabelComponent,
        TuiProgressColorSegmentsPipe,
    ],
    exports: [
        TuiProgressBarComponent,
        TuiProgressLabelComponent,
        TuiProgressColorSegmentsPipe,
    ],
})
export class TuiProgressModule {}
