import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiProgressBarComponent} from './progress-bar/progress-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiProgressBarComponent],
    exports: [TuiProgressBarComponent],
})
export class TuiProgressModule {}
