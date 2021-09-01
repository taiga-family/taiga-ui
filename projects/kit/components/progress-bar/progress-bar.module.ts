import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiProgressBarComponent} from './progress-bar.component';

@NgModule({
    declarations: [TuiProgressBarComponent],
    imports: [CommonModule],
    exports: [TuiProgressBarComponent],
})
export class TuiProgressBarModule {}
